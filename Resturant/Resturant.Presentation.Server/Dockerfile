# ---------- Build React ----------
FROM node:20 AS client-build
WORKDIR /client

# Copy only package files first (better caching)
COPY resturant.presentation.client/package*.json ./
RUN npm install

# Copy remaining client files
COPY resturant.presentation.client/ .
RUN npm run build


# ---------- Build .NET ----------
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
ARG BUILD_CONFIGURATION=Release

# Install Node (required because .esproj triggers node during publish)
RUN apt-get update && apt-get install -y curl \
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /src

# Copy everything
COPY . .

WORKDIR /src/Resturant.Presentation.Server

RUN dotnet publish Resturant.Presentation.Server.csproj \
    -c $BUILD_CONFIGURATION \
    -o /app/publish \
    /p:UseAppHost=false


# ---------- Final Runtime ----------
FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS final
WORKDIR /app

# Bind to correct port inside container
ENV ASPNETCORE_URLS=http://+:8080

COPY --from=build /app/publish .
COPY --from=client-build /client/dist ./wwwroot

EXPOSE 8080

ENTRYPOINT ["dotnet", "Resturant.Presentation.Server.dll"]
