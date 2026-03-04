from fastapi import APIRouter, Depends
from middleware.auth_middleware import get_current_user
from db.mock_data import PAYROLL_BATCHES, PAYSLIPS, PAYROLL_ANOMALIES

router = APIRouter(prefix="/payroll", tags=["Payroll"])

@router.get("/batches")
async def list_batches(current_user: dict = Depends(get_current_user)):
    return {"data": PAYROLL_BATCHES, "total": len(PAYROLL_BATCHES)}

@router.post("/batch")
async def create_batch(data: dict, current_user: dict = Depends(get_current_user)):
    new_batch = {"id": f"batch-{len(PAYROLL_BATCHES)+1:03d}", **data, "status": "draft"}
    PAYROLL_BATCHES.append(new_batch)
    return new_batch

@router.get("/batch/{batch_id}")
async def get_batch(batch_id: str, current_user: dict = Depends(get_current_user)):
    batch = next((b for b in PAYROLL_BATCHES if b["id"] == batch_id), None)
    if not batch:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Batch not found")
    anomalies = [a for a in PAYROLL_ANOMALIES if a["batch_id"] == batch_id]
    return {**batch, "anomalies": anomalies}

@router.post("/batch/{batch_id}/approve")
async def approve_batch(batch_id: str, current_user: dict = Depends(get_current_user)):
    batch = next((b for b in PAYROLL_BATCHES if b["id"] == batch_id), None)
    if not batch:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Batch not found")
    batch["status"] = "completed"
    batch["approved_by"] = current_user["user_id"]
    return {"message": "Payroll batch approved", "batch": batch}

@router.get("/payslips/{employee_id}")
async def get_payslips(employee_id: str, current_user: dict = Depends(get_current_user)):
    slips = [p for p in PAYSLIPS if p["employee_id"] == employee_id]
    return {"data": slips, "total": len(slips)}

@router.get("/anomalies")
async def list_anomalies(batch_id: str = None, current_user: dict = Depends(get_current_user)):
    results = PAYROLL_ANOMALIES
    if batch_id:
        results = [a for a in results if a["batch_id"] == batch_id]
    return {"data": results, "total": len(results)}

@router.post("/revision")
async def create_revision(data: dict, current_user: dict = Depends(get_current_user)):
    return {"message": "Payroll revision created", "revision": data}
