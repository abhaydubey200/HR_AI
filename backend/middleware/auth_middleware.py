from fastapi import Request, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from core.security import decode_token
from core.permissions import has_permission

security = HTTPBearer()

async def get_current_user(request: Request):
    """Extract and validate user from JWT token."""
    auth = request.headers.get("Authorization")
    if not auth or not auth.startswith("Bearer "):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Not authenticated")
    
    token = auth.split(" ")[1]
    payload = decode_token(token)
    if not payload or payload.get("type") != "access":
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid or expired token")
    
    return {
        "user_id": payload.get("sub"),
        "role": payload.get("role"),
        "department_id": payload.get("department_id"),
        "company_id": payload.get("company_id"),
        "email": payload.get("email"),
        "name": payload.get("name")
    }

def require_permission(permission: str):
    """Dependency that checks if user has a specific permission."""
    async def check(request: Request):
        user = await get_current_user(request)
        if not has_permission(user["role"], permission):
            raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail=f"Permission denied: {permission}")
        return user
    return check
