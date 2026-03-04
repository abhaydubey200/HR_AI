import os
from dotenv import load_dotenv

load_dotenv()

class Settings:
    APP_NAME: str = "WorkSphere AI"
    VERSION: str = "1.0.0"
    API_PREFIX: str = "/api/v1"
    
    # JWT
    SECRET_KEY: str = os.getenv("SECRET_KEY", "worksphere-dev-secret-key-change-in-production")
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    REFRESH_TOKEN_EXPIRE_DAYS: int = 7
    
    # CORS
    ALLOWED_ORIGINS: list = ["http://localhost:5173", "http://localhost:5174", "http://localhost:3000"]
    
    # OpenAI (simulated in dev)
    OPENAI_API_KEY: str = os.getenv("OPENAI_API_KEY", "")
    
    # Database (Snowflake)
    SNOWFLAKE_ACCOUNT: str = os.getenv("SNOWFLAKE_ACCOUNT", "")
    SNOWFLAKE_USER: str = os.getenv("SNOWFLAKE_USER", "")
    SNOWFLAKE_PASSWORD: str = os.getenv("SNOWFLAKE_PASSWORD", "")
    SNOWFLAKE_DATABASE: str = os.getenv("SNOWFLAKE_DATABASE", "DS_GROUP_HR_DB")
    SNOWFLAKE_SCHEMA: str = os.getenv("SNOWFLAKE_SCHEMA", "PUBLIC")
    SNOWFLAKE_WAREHOUSE: str = os.getenv("SNOWFLAKE_WAREHOUSE", "COMPUTE_WH")
    SNOWFLAKE_ROLE: str = os.getenv("SNOWFLAKE_ROLE", "ACCOUNTADMIN")

    @property
    def database_url(self) -> str:
        return (
            f"snowflake://{self.SNOWFLAKE_USER}:{self.SNOWFLAKE_PASSWORD}@"
            f"{self.SNOWFLAKE_ACCOUNT}/{self.SNOWFLAKE_DATABASE}/{self.SNOWFLAKE_SCHEMA}?"
            f"warehouse={self.SNOWFLAKE_WAREHOUSE}&role={self.SNOWFLAKE_ROLE}"
        )

settings = Settings()
