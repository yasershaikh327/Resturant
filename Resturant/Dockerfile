# ---------- Build React ----------
FROM node:20 AS client-build
WORKDIR /client

COPY resturant.presentation.client/package*.json ./
RUN npm install

COPY resturant.presentation.client/ .
RUN npm run build


# ---------- Build .NET (WITH NODE INSTALLED) ----------
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
ARG BUILD_CONFIGURATION=Release

# Install Node in .NET build image (IMPORTANT FIX)
RUN apt-get update && apt-get install -y curl
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get install -y nodejs

WORKDIR /src
COPY . .
WORKDIR /src/Resturant.Presentation.Server

RUN dotnet publish Resturant.Presentation.Server.csproj \
    -c $BUILD_CONFIGURATION \
    -o /app/publish \
    /p:UseAppHost=false


# ---------- Final Runtime ----------
FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS final
WORKDIR /app

COPY --from=build /app/publish .
COPY --from=client-build /client/dist ./wwwroot


EXPOSE 8080
ENTRYPOINT ["dotnet", "Resturant.Presentation.Server.dll"]
