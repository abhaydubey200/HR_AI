from pydantic import BaseModel
from typing import Optional, List
from datetime import date, datetime

class EmployeeCreate(BaseModel):
    first_name: str
    last_name: str
    email: str
    phone: Optional[str] = None
    department_id: str
    designation: str
    manager_id: Optional[str] = None
    date_of_birth: Optional[date] = None
    date_of_joining: date
    employment_type: str = "full_time"
    base_salary: float = 0
    currency: str = "USD"

class EmployeeUpdate(BaseModel):
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    phone: Optional[str] = None
    designation: Optional[str] = None
    department_id: Optional[str] = None
    manager_id: Optional[str] = None
    status: Optional[str] = None

class EmployeeResponse(BaseModel):
    id: str
    employee_id: str
    first_name: str
    last_name: str
    email: str
    phone: Optional[str] = None
    department_id: str
    department_name: str
    designation: str
    manager_id: Optional[str] = None
    manager_name: Optional[str] = None
    date_of_birth: Optional[str] = None
    date_of_joining: str
    employment_type: str
    status: str
    avatar: Optional[str] = None
    base_salary: float
    currency: str
    attrition_risk: Optional[float] = None
    engagement_score: Optional[float] = None
    promotion_probability: Optional[float] = None
    created_at: str
    updated_at: str

class RoleChangeRequest(BaseModel):
    new_role: str
    reason: str
    effective_date: date

class ManagerChangeRequest(BaseModel):
    new_manager_id: str
    reason: str
    effective_date: date

class OffboardRequest(BaseModel):
    reason: str
    last_working_date: date
    exit_type: str = "resignation"
