from fastapi import APIRouter, Depends
from middleware.auth_middleware import get_current_user
from db.mock_data import JOBS, CANDIDATES

router = APIRouter(tags=["Recruitment"])

@router.get("/jobs")
async def list_jobs(current_user: dict = Depends(get_current_user)):
    return {"data": JOBS, "total": len(JOBS)}

@router.post("/jobs")
async def create_job(data: dict, current_user: dict = Depends(get_current_user)):
    new_job = {"id": f"job-{len(JOBS)+1:03d}", **data, "status": "draft", "applicants": 0}
    JOBS.append(new_job)
    return new_job

@router.get("/candidates")
async def list_candidates(job_id: str = None, current_user: dict = Depends(get_current_user)):
    results = CANDIDATES
    if job_id:
        results = [c for c in results if c["job_id"] == job_id]
    return {"data": results, "total": len(results)}

@router.post("/candidates")
async def create_candidate(data: dict, current_user: dict = Depends(get_current_user)):
    new_cand = {"id": f"cand-{len(CANDIDATES)+1:03d}", **data, "ai_score": 0, "status": "screening"}
    CANDIDATES.append(new_cand)
    return new_cand

@router.post("/candidates/{candidate_id}/rank")
async def rank_candidate(candidate_id: str, current_user: dict = Depends(get_current_user)):
    cand = next((c for c in CANDIDATES if c["id"] == candidate_id), None)
    if not cand:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Candidate not found")
    import random
    cand["ai_score"] = random.randint(40, 98)
    return {"message": "Candidate ranked by AI", "candidate": cand}

@router.post("/offers")
async def create_offer(data: dict, current_user: dict = Depends(get_current_user)):
    return {"message": "Offer created successfully", "offer": data}

@router.post("/candidates/{candidate_id}/convert")
async def convert_to_employee(candidate_id: str, current_user: dict = Depends(get_current_user)):
    cand = next((c for c in CANDIDATES if c["id"] == candidate_id), None)
    if not cand:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Candidate not found")
    cand["status"] = "converted"
    return {"message": "Candidate converted to employee", "candidate": cand}
