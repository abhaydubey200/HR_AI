from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from config import settings
from api.v1.router import api_router

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.VERSION,
    description="AI-powered Enterprise Workforce Operations Platform"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# API Routes
app.include_router(api_router, prefix=settings.API_PREFIX)

@app.get("/health")
async def health_check():
    return {"status": "healthy", "version": settings.VERSION}
