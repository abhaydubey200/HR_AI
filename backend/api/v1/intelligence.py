from fastapi import APIRouter, Depends
from middleware.auth_middleware import get_current_user
from db.mock_data import DEPARTMENT_METRICS, HEADCOUNT_TRENDS, EMPLOYEES, COMPANY

router = APIRouter(prefix="/intelligence", tags=["Intelligence"])

@router.get("/dashboard")
async def get_dashboard(current_user: dict = Depends(get_current_user)):
    total_employees = COMPANY["employee_count"]
    active = sum(1 for e in EMPLOYEES if e["status"] == "active")
    avg_engagement = round(sum(m["engagement"] for m in DEPARTMENT_METRICS) / len(DEPARTMENT_METRICS), 2)
    avg_attrition = round(sum(m["attrition_risk"] for m in DEPARTMENT_METRICS) / len(DEPARTMENT_METRICS), 2)
    total_open = sum(m["open_positions"] for m in DEPARTMENT_METRICS)
    total_cost = sum(m["cost_per_employee"] * m["headcount"] for m in DEPARTMENT_METRICS)
    
    return {
        "kpis": {
            "total_employees": total_employees,
            "active_employees": active,
            "avg_engagement_score": avg_engagement,
            "avg_attrition_risk": avg_attrition,
            "open_positions": total_open,
            "total_workforce_cost": total_cost,
            "avg_cost_per_employee": round(total_cost / total_employees),
            "departments": len(DEPARTMENT_METRICS)
        },
        "department_metrics": DEPARTMENT_METRICS,
        "headcount_trends": HEADCOUNT_TRENDS
    }

@router.get("/attrition")
async def get_attrition(current_user: dict = Depends(get_current_user)):
    high_risk = [e for e in EMPLOYEES if e.get("attrition_risk", 0) > 0.4]
    return {
        "department_risks": [{"department": m["department"], "risk": m["attrition_risk"], "turnover_rate": m["turnover_rate"]} for m in DEPARTMENT_METRICS],
        "high_risk_employees": len(high_risk),
        "highest_risk_department": max(DEPARTMENT_METRICS, key=lambda m: m["attrition_risk"])["department"],
        "trend": "increasing"
    }

@router.get("/headcount")
async def get_headcount(current_user: dict = Depends(get_current_user)):
    return {
        "current": COMPANY["employee_count"],
        "trends": HEADCOUNT_TRENDS,
        "by_department": [{"department": m["department"], "count": m["headcount"], "growth_rate": m["growth_rate"]} for m in DEPARTMENT_METRICS]
    }
