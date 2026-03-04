from fastapi import APIRouter, Depends
from middleware.auth_middleware import get_current_user
from db.mock_data import AI_LOGS, EMPLOYEES, DEPARTMENT_METRICS

router = APIRouter(prefix="/ai", tags=["AI"])

# Simulated AI responses for different query types
AI_RESPONSES = {
    "attrition": "Based on workforce analysis, the {dept} department shows an attrition risk of {risk}%. Key factors include: engagement score ({engagement}%), compensation competitiveness, and career growth opportunities. Recommended actions: 1) Conduct stay interviews with high-risk employees, 2) Review compensation against market benchmarks, 3) Implement mentorship programs.",
    "engagement": "The overall engagement score is {score}%. Departments with highest engagement: Legal (90%), HR (88%). Departments needing attention: Sales (62%), Operations (68%). Key drivers: career development opportunities, management quality, and work-life balance.",
    "general": "Based on available workforce data and HR policies, here is my analysis: The organization shows strong overall health with 12,500 employees across 10 departments. Key focus areas include Sales department retention and Operations engagement improvement.",
    "career": "Based on your skill profile and career trajectory, here are growth recommendations: 1) Develop {skill1} competency, 2) Seek cross-functional project leadership, 3) Build expertise in {skill2}. Estimated timeline to next promotion: 12-18 months with focused development.",
    "policy": "According to the company HR policy: {topic}. This policy applies to all full-time employees and is reviewed annually. For specific exceptions, please contact your HR Business Partner.",
}

@router.post("/query")
async def ai_query(data: dict, current_user: dict = Depends(get_current_user)):
    query = data.get("query", "").lower()
    context = data.get("context", {})
    
    # Simple intent detection
    if "attrition" in query or "risk" in query or "leaving" in query:
        dept = context.get("department", "Sales")
        dept_data = next((m for m in DEPARTMENT_METRICS if m["department"].lower() == dept.lower()), DEPARTMENT_METRICS[0])
        response = AI_RESPONSES["attrition"].format(
            dept=dept_data["department"],
            risk=int(dept_data["attrition_risk"] * 100),
            engagement=int(dept_data["engagement"] * 100)
        )
        confidence = 0.89
    elif "engagement" in query or "satisfaction" in query:
        avg = round(sum(m["engagement"] for m in DEPARTMENT_METRICS) / len(DEPARTMENT_METRICS) * 100)
        response = AI_RESPONSES["engagement"].format(score=avg)
        confidence = 0.85
    elif "career" in query or "promotion" in query or "skill" in query:
        response = AI_RESPONSES["career"].format(skill1="System Design", skill2="Technical Leadership")
        confidence = 0.82
    elif "policy" in query or "leave" in query or "benefit" in query:
        response = AI_RESPONSES["policy"].format(topic="Leave policy allows 18 days annual leave, 10 days sick leave, and 3 personal days per calendar year. Unused annual leave can be carried forward up to 5 days.")
        confidence = 0.78
    else:
        response = AI_RESPONSES["general"]
        confidence = 0.75
    
    # Log the interaction
    new_log = {
        "id": f"ai-{len(AI_LOGS)+1:03d}",
        "user_id": current_user["user_id"],
        "query": data.get("query", ""),
        "response": response,
        "module": context.get("module", "general"),
        "confidence": confidence,
        "timestamp": "2026-03-02T23:00:00Z"
    }
    AI_LOGS.append(new_log)
    
    return {
        "response": response,
        "confidence": confidence,
        "sources": ["Workforce Analytics", "HR Policy Database", "Employee Records"],
        "log_id": new_log["id"]
    }

@router.post("/recommendation/approve")
async def approve_recommendation(data: dict, current_user: dict = Depends(get_current_user)):
    return {"message": "AI recommendation approved", "data": data}

@router.get("/logs")
async def get_ai_logs(current_user: dict = Depends(get_current_user)):
    return {"data": AI_LOGS, "total": len(AI_LOGS)}
