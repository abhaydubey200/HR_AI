from fastapi import HTTPException, status

class WorkSphereException(HTTPException):
    def __init__(self, detail: str, status_code: int = status.HTTP_400_BAD_REQUEST):
        super().__init__(status_code=status_code, detail=detail)

class UnauthorizedException(WorkSphereException):
    def __init__(self, detail: str = "Not authenticated"):
        super().__init__(detail=detail, status_code=status.HTTP_401_UNAUTHORIZED)

class ForbiddenException(WorkSphereException):
    def __init__(self, detail: str = "Insufficient permissions"):
        super().__init__(detail=detail, status_code=status.HTTP_403_FORBIDDEN)

class NotFoundException(WorkSphereException):
    def __init__(self, detail: str = "Resource not found"):
        super().__init__(detail=detail, status_code=status.HTTP_404_NOT_FOUND)

class ConflictException(WorkSphereException):
    def __init__(self, detail: str = "Resource already exists"):
        super().__init__(detail=detail, status_code=status.HTTP_409_CONFLICT)
