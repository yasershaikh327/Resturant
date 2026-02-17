# ---------- Base Runtime Image ----------
FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS base
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

# ---------- Build Image ----------
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src

# Copy csproj and restore first (better caching)
COPY Resturant.Presentation.Server.csproj ./
RUN dotnet restore Resturant.Presentation.Server.csproj

# Copy everything else
COPY . .

# Build
RUN dotnet build Resturant.Presentation.Server.csproj -c $BUILD_CONFIGURATION -o /app/build

# ---------- Publish ----------
FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish Resturant.Presentation.Server.csproj \
    -c $BUILD_CONFIGURATION \
    -o /app/publish \
    /p:UseAppHost=false

# ---------- Final Runtime ----------
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Resturant.Presentation.Server.dll"]
