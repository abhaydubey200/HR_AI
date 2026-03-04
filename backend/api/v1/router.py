from fastapi import APIRouter
from api.v1.auth import router as auth_router
from api.v1.employees import router as employees_router
from api.v1.recruitment import router as recruitment_router
from api.v1.payroll import router as payroll_router
from api.v1.performance import router as performance_router
from api.v1.intelligence import router as intelligence_router
from api.v1.ai import router as ai_router

api_router = APIRouter()

api_router.include_router(auth_router)
api_router.include_router(employees_router)
api_router.include_router(recruitment_router)
api_router.include_router(payroll_router)
api_router.include_router(performance_router)
api_router.include_router(intelligence_router)
api_router.include_router(ai_router)
