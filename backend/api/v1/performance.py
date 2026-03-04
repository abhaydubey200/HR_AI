from fastapi import APIRouter, Depends
from middleware.auth_middleware import get_current_user
from db.mock_data import REVIEW_CYCLES, GOALS

router = APIRouter(tags=["Performance"])

@router.get("/review-cycles")
async def list_review_cycles(current_user: dict = Depends(get_current_user)):
    return {"data": REVIEW_CYCLES, "total": len(REVIEW_CYCLES)}

@router.post("/review-cycles")
async def create_review_cycle(data: dict, current_user: dict = Depends(get_current_user)):
    new_cycle = {"id": f"rc-{len(REVIEW_CYCLES)+1:03d}", **data, "status": "draft", "participation_rate": 0, "avg_rating": 0}
    REVIEW_CYCLES.append(new_cycle)
    return new_cycle

@router.get("/goals")
async def list_goals(employee_id: str = None, current_user: dict = Depends(get_current_user)):
    results = GOALS
    if employee_id:
        results = [g for g in results if g["employee_id"] == employee_id]
    return {"data": results, "total": len(results)}

@router.post("/goals")
async def create_goal(data: dict, current_user: dict = Depends(get_current_user)):
    new_goal = {"id": f"goal-{len(GOALS)+1:03d}", **data, "progress": 0, "status": "not_started"}
    GOALS.append(new_goal)
    return new_goal

@router.post("/feedback")
async def submit_feedback(data: dict, current_user: dict = Depends(get_current_user)):
    return {"message": "Feedback submitted successfully", "feedback": data}

@router.post("/ratings")
async def submit_rating(data: dict, current_user: dict = Depends(get_current_user)):
    return {"message": "Rating submitted successfully", "rating": data}

@router.post("/promotion")
async def submit_promotion(data: dict, current_user: dict = Depends(get_current_user)):
    return {"message": "Promotion recommendation submitted", "promotion": data}
