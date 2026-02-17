# ---------- Build React ----------
FROM node:20 AS client-build
WORKDIR /client

COPY resturant.presentation.client/package*.json ./
RUN npm install

COPY resturant.presentation.client/ .
RUN npm run build


# ---------- Build .NET ----------
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src

COPY Resturant.Presentation.Server/Resturant.Presentation.Server.csproj Resturant.Presentation.Server/
RUN dotnet restore Resturant.Presentation.Server/Resturant.Presentation.Server.csproj

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
COPY --from=client-build /client/build ./wwwroot

EXPOSE 8080
ENTRYPOINT ["dotnet", "Resturant.Presentation.Server.dll"]
