from fastapi import APIRouter, Depends, Query
from typing import Optional
from middleware.auth_middleware import get_current_user
from db.mock_data import EMPLOYEES, DEPARTMENTS

router = APIRouter(prefix="/employees", tags=["Employees"])

@router.get("")
async def list_employees(
    department_id: Optional[str] = None,
    status: Optional[str] = None,
    search: Optional[str] = None,
    page: int = Query(1, ge=1),
    limit: int = Query(20, ge=1, le=100),
    current_user: dict = Depends(get_current_user)
):
    results = EMPLOYEES.copy()
    
    if department_id:
        results = [e for e in results if e["department_id"] == department_id]
    if status:
        results = [e for e in results if e["status"] == status]
    if search:
        q = search.lower()
        results = [e for e in results if q in e["first_name"].lower() or q in e["last_name"].lower() or q in e["email"].lower() or q in e.get("employee_id", "").lower()]
    
    total = len(results)
    start = (page - 1) * limit
    paginated = results[start:start + limit]
    
    return {"data": paginated, "total": total, "page": page, "limit": limit, "pages": (total + limit - 1) // limit}

@router.get("/{employee_id}")
async def get_employee(employee_id: str, current_user: dict = Depends(get_current_user)):
    emp = next((e for e in EMPLOYEES if e["id"] == employee_id), None)
    if not emp:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Employee not found")
    return emp

@router.post("")
async def create_employee(data: dict, current_user: dict = Depends(get_current_user)):
    import uuid
    new_emp = {
        "id": f"emp-{len(EMPLOYEES)+1:03d}",
        "employee_id": f"TN-{len(EMPLOYEES)+1:04d}",
        **data,
        "status": "active",
        "attrition_risk": 0.10,
        "engagement_score": 0.75,
        "promotion_probability": 0.20,
        "created_at": "2026-03-02T00:00:00Z",
        "updated_at": "2026-03-02T00:00:00Z"
    }
    EMPLOYEES.append(new_emp)
    return new_emp

@router.put("/{employee_id}")
async def update_employee(employee_id: str, data: dict, current_user: dict = Depends(get_current_user)):
    emp = next((e for e in EMPLOYEES if e["id"] == employee_id), None)
    if not emp:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Employee not found")
    emp.update(data)
    return emp

@router.post("/{employee_id}/role-change")
async def change_role(employee_id: str, data: dict, current_user: dict = Depends(get_current_user)):
    emp = next((e for e in EMPLOYEES if e["id"] == employee_id), None)
    if not emp:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Employee not found")
    emp["designation"] = data.get("new_role", emp["designation"])
    return {"message": "Role changed successfully", "employee": emp}

@router.post("/{employee_id}/manager-change")
async def change_manager(employee_id: str, data: dict, current_user: dict = Depends(get_current_user)):
    emp = next((e for e in EMPLOYEES if e["id"] == employee_id), None)
    if not emp:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Employee not found")
    emp["manager_id"] = data.get("new_manager_id")
    return {"message": "Manager changed successfully", "employee": emp}

@router.post("/{employee_id}/offboard")
async def offboard_employee(employee_id: str, data: dict, current_user: dict = Depends(get_current_user)):
    emp = next((e for e in EMPLOYEES if e["id"] == employee_id), None)
    if not emp:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Employee not found")
    emp["status"] = "offboarded"
    return {"message": "Employee offboarded successfully", "employee": emp}
