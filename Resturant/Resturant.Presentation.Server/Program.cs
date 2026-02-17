var builder = WebApplication.CreateBuilder(args);

// Add services
builder.Services.AddControllers();

// Add CORS policy
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalhost", policy =>
    {
        policy.WithOrigins(
                "http://localhost:8080",                         // React dev server
                "https://ai-powered-resturant-ordering-system.onrender.com" // Render frontend
            )
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

builder.Services.AddOpenApi();

var app = builder.Build();

// Middleware order is important!
app.UseHttpsRedirection();

// **CORS must come before MapControllers**
app.UseCors("AllowLocalhost");

app.UseAuthorization();

app.MapControllers();

app.UseDefaultFiles();
app.UseStaticFiles();

// OpenAPI in dev
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

// Fallback for SPA
app.MapFallbackToFile("index.html");

app.Run();
