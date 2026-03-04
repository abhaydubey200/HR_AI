from fastapi import APIRouter, Depends, HTTPException, status
from models.auth import LoginRequest, TokenResponse, UserResponse
from core.security import create_access_token, create_refresh_token, decode_token
from core.permissions import get_role_permissions, get_role_label
from middleware.auth_middleware import get_current_user
from db.mock_data import USERS

router = APIRouter(prefix="/auth", tags=["Authentication"])

@router.post("/login", response_model=TokenResponse)
async def login(request: LoginRequest):
    """Authenticate user and return JWT tokens."""
    user = next((u for u in USERS if u["email"] == request.email), None)
    
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")
    
    # In dev mode, accept any password for demo users
    token_data = {
        "sub": user["id"],
        "email": user["email"],
        "name": user["name"],
        "role": user["role"],
        "department_id": user["department_id"],
        "company_id": user["company_id"]
    }
    
    access_token = create_access_token(token_data)
    refresh_token = create_refresh_token(token_data)
    
    return TokenResponse(
        access_token=access_token,
        refresh_token=refresh_token,
        user={
            "id": user["id"],
            "email": user["email"],
            "name": user["name"],
            "role": user["role"],
            "role_label": get_role_label(user["role"]),
            "department_id": user["department_id"],
            "company_id": user["company_id"],
            "avatar": user["avatar"],
            "permissions": get_role_permissions(user["role"])
        }
    )

@router.post("/logout")
async def logout():
    return {"message": "Logged out successfully"}

@router.post("/refresh")
async def refresh_token(current_user: dict = Depends(get_current_user)):
    token_data = {
        "sub": current_user["user_id"],
        "email": current_user["email"],
        "name": current_user["name"],
        "role": current_user["role"],
        "department_id": current_user["department_id"],
        "company_id": current_user["company_id"]
    }
    new_access = create_access_token(token_data)
    new_refresh = create_refresh_token(token_data)
    
    user = next((u for u in USERS if u["id"] == current_user["user_id"]), None)
    
    return TokenResponse(
        access_token=new_access,
        refresh_token=new_refresh,
        user={
            "id": current_user["user_id"],
            "email": current_user["email"],
            "name": current_user["name"],
            "role": current_user["role"],
            "role_label": get_role_label(current_user["role"]),
            "department_id": current_user["department_id"],
            "company_id": current_user["company_id"],
            "avatar": user["avatar"] if user else None,
            "permissions": get_role_permissions(current_user["role"])
        }
    )

@router.get("/me", response_model=UserResponse)
async def get_me(current_user: dict = Depends(get_current_user)):
    user = next((u for u in USERS if u["id"] == current_user["user_id"]), None)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    from db.mock_data import DEPARTMENTS
    dept = next((d for d in DEPARTMENTS if d["id"] == user["department_id"]), None)
    
    return UserResponse(
        id=user["id"],
        email=user["email"],
        name=user["name"],
        role=user["role"],
        role_label=get_role_label(user["role"]),
        department_id=user["department_id"],
        department_name=dept["name"] if dept else None,
        company_id=user["company_id"],
        avatar=user["avatar"],
        permissions=get_role_permissions(user["role"])
    )

@router.post("/mfa/verify")
async def verify_mfa(request: dict):
    """Simulate MFA verification — always succeeds in dev."""
    return {"verified": True, "message": "MFA code verified"}
