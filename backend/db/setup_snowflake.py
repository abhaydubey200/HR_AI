import snowflake.connector
import os
import sys

# Add parent directory to path to import config
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from config import settings

def setup_database():
    print(f"Connecting to Snowflake account: {settings.SNOWFLAKE_ACCOUNT}...")
    
    try:
        # Establish connection
        conn = snowflake.connector.connect(
            user=settings.SNOWFLAKE_USER,
            password=settings.SNOWFLAKE_PASSWORD,
            account=settings.SNOWFLAKE_ACCOUNT,
            warehouse=settings.SNOWFLAKE_WAREHOUSE,
            role=settings.SNOWFLAKE_ROLE
        )
        
        cursor = conn.cursor()
        
        # Read the SQL file
        sql_file_path = os.path.join(os.path.dirname(__file__), 'init.sql')
        with open(sql_file_path, 'r') as f:
            sql_commands = f.read().split(';')
            
        print("Executing initialization commands...")
        for command in sql_commands:
            command = command.strip()
            if command:
                try:
                    cursor.execute(command)
                    print(f"Executed: {command[:50]}...")
                except Exception as e:
                    print(f"Error executing command: {e}")
                    
        print("\n✅ Database setup completed successfully!")
        
        # Verify connection to the new database
        cursor.execute(f"USE DATABASE {settings.SNOWFLAKE_DATABASE}")
        cursor.execute("SHOW TABLES")
        tables = cursor.fetchall()
        print(f"Tables in {settings.SNOWFLAKE_DATABASE}:")
        for table in tables:
            print(f"- {table[1]}")
            
        cursor.close()
        conn.close()
        
    except Exception as e:
        print(f"❌ Failed to connect to Snowflake: {e}")

if __name__ == "__main__":
    setup_database()
