"""
Mock data store for WorkSphere AI development.
Simulates Snowflake database with in-memory Python data.
Designed for easy swap to real DB connectors.
"""
import uuid
from datetime import datetime, date, timedelta
import random

def _id():
    return str(uuid.uuid4())

def _date_str(d):
    return d.strftime("%Y-%m-%d")

def _datetime_str(d):
    return d.strftime("%Y-%m-%dT%H:%M:%SZ")

# ═══════════════════════════════════════════════════════════════
# COMPANY & DEPARTMENTS
# ═══════════════════════════════════════════════════════════════
COMPANY = {
    "id": "comp-001",
    "name": "TechNova Global Inc.",
    "industry": "Technology",
    "founded": "2015",
    "headquarters": "San Francisco, CA",
    "employee_count": 12500,
    "logo": None,
    "modules_enabled": ["employees", "recruitment", "payroll", "performance", "intelligence", "ai"]
}

DEPARTMENTS = [
    {"id": "dept-001", "name": "Engineering", "head_id": "emp-002", "head_name": "Sarah Chen", "employee_count": 3200, "budget": 45000000, "color": "#6366f1"},
    {"id": "dept-002", "name": "Product", "head_id": "emp-008", "head_name": "Michael Park", "employee_count": 850, "budget": 12000000, "color": "#8b5cf6"},
    {"id": "dept-003", "name": "Sales", "head_id": "emp-009", "head_name": "Emily Rodriguez", "employee_count": 2100, "budget": 28000000, "color": "#06b6d4"},
    {"id": "dept-004", "name": "Marketing", "head_id": "emp-010", "head_name": "David Kim", "employee_count": 1200, "budget": 18000000, "color": "#f59e0b"},
    {"id": "dept-005", "name": "Human Resources", "head_id": "emp-003", "head_name": "James Wilson", "employee_count": 450, "budget": 8000000, "color": "#10b981"},
    {"id": "dept-006", "name": "Finance", "head_id": "emp-011", "head_name": "Lisa Thompson", "employee_count": 380, "budget": 6500000, "color": "#ef4444"},
    {"id": "dept-007", "name": "Operations", "head_id": "emp-012", "head_name": "Robert Martinez", "employee_count": 1800, "budget": 22000000, "color": "#f97316"},
    {"id": "dept-008", "name": "Legal", "head_id": "emp-013", "head_name": "Amanda Foster", "employee_count": 120, "budget": 4000000, "color": "#64748b"},
    {"id": "dept-009", "name": "Customer Success", "head_id": "emp-014", "head_name": "Chris Baker", "employee_count": 950, "budget": 14000000, "color": "#ec4899"},
    {"id": "dept-010", "name": "Data Science", "head_id": "emp-015", "head_name": "Nina Patel", "employee_count": 450, "budget": 9000000, "color": "#a855f7"},
]

# ═══════════════════════════════════════════════════════════════
# USERS (Login accounts mapped to employees)
# ═══════════════════════════════════════════════════════════════
USERS = [
    {"id": "usr-001", "employee_id": "emp-001", "email": "admin@technova.com", "password_hash": "$2b$12$LJ3m4ys3Lz0DZ5Xq5K5K5eYbGqKpZp5K5K5K5K5K5K5K5K5K5K", "role": "super_admin", "name": "Alex Morgan", "department_id": None, "company_id": "comp-001", "avatar": None, "mfa_enabled": True, "status": "active"},
    {"id": "usr-002", "employee_id": "emp-002", "email": "sarah.chen@technova.com", "password_hash": "", "role": "manager", "name": "Sarah Chen", "department_id": "dept-001", "company_id": "comp-001", "avatar": None, "mfa_enabled": False, "status": "active"},
    {"id": "usr-003", "employee_id": "emp-003", "email": "james.wilson@technova.com", "password_hash": "", "role": "hr", "name": "James Wilson", "department_id": "dept-005", "company_id": "comp-001", "avatar": None, "mfa_enabled": False, "status": "active"},
    {"id": "usr-004", "employee_id": "emp-004", "email": "priya.sharma@technova.com", "password_hash": "", "role": "employee", "name": "Priya Sharma", "department_id": "dept-001", "company_id": "comp-001", "avatar": None, "mfa_enabled": False, "status": "active"},
    {"id": "usr-005", "employee_id": "emp-005", "email": "recruiter@technova.com", "password_hash": "", "role": "recruiter", "name": "Tom Andrews", "department_id": "dept-005", "company_id": "comp-001", "avatar": None, "mfa_enabled": False, "status": "active"},
    {"id": "usr-006", "employee_id": "emp-006", "email": "payroll@technova.com", "password_hash": "", "role": "payroll_officer", "name": "Maria Garcia", "department_id": "dept-006", "company_id": "comp-001", "avatar": None, "mfa_enabled": False, "status": "active"},
    {"id": "usr-007", "employee_id": "emp-007", "email": "ceo@technova.com", "password_hash": "", "role": "executive", "name": "Richard Hayes", "department_id": None, "company_id": "comp-001", "avatar": None, "mfa_enabled": True, "status": "active"},
]

# ═══════════════════════════════════════════════════════════════
# EMPLOYEES (Detailed profiles)
# ═══════════════════════════════════════════════════════════════
_designations = ["Software Engineer", "Senior Software Engineer", "Staff Engineer", "Principal Engineer", "Engineering Manager",
                 "Product Manager", "Senior Product Manager", "Director of Product",
                 "Sales Executive", "Senior Sales Executive", "Sales Manager", "VP of Sales",
                 "Marketing Specialist", "Marketing Manager", "Brand Director",
                 "HR Coordinator", "HR Manager", "HR Director",
                 "Financial Analyst", "Senior Analyst", "Finance Manager",
                 "Operations Coordinator", "Operations Manager",
                 "Data Scientist", "Senior Data Scientist", "ML Engineer",
                 "Customer Success Manager", "Account Manager", "Legal Counsel"]

_first_names = ["Priya", "Sarah", "James", "Michael", "Emily", "David", "Lisa", "Robert", "Amanda", "Chris",
                "Nina", "Tom", "Maria", "Richard", "Alex", "Wei", "Yuki", "Carlos", "Fatima", "Olga",
                "Raj", "Sophie", "Aiden", "Mei", "Hassan", "Elena", "Kwame", "Ingrid", "Diego", "Anya",
                "Liam", "Zara", "Omar", "Sakura", "Viktor", "Isla", "Mateo", "Freya", "Arjun", "Chloe",
                "Noah", "Luna", "Ethan", "Maya", "Lucas", "Emma", "Jack", "Aria", "Leo", "Ivy"]

_last_names = ["Sharma", "Chen", "Wilson", "Park", "Rodriguez", "Kim", "Thompson", "Martinez", "Foster", "Baker",
               "Patel", "Andrews", "Garcia", "Hayes", "Morgan", "Zhang", "Tanaka", "Fernandez", "Al-Hassan", "Petrova",
               "Gupta", "Laurent", "O'Brien", "Wang", "Ibrahim", "Volkov", "Osei", "Johansson", "Reyes", "Kowalski",
               "Robinson", "Nakamura", "Santos", "Wright", "Anderson", "Taylor", "Brown", "Johnson", "Williams", "Jones"]

def _generate_employees():
    employees = []
    dept_map = {d["id"]: d["name"] for d in DEPARTMENTS}
    
    # Fixed key employees
    key_employees = [
        {"id": "emp-001", "eid": "TN-0001", "fn": "Alex", "ln": "Morgan", "email": "admin@technova.com", "dept": "dept-005", "desig": "Chief People Officer", "sal": 280000, "joined": "2015-03-15", "mgr": None, "status": "active"},
        {"id": "emp-002", "eid": "TN-0002", "fn": "Sarah", "ln": "Chen", "email": "sarah.chen@technova.com", "dept": "dept-001", "desig": "VP of Engineering", "sal": 320000, "joined": "2016-01-10", "mgr": None, "status": "active"},
        {"id": "emp-003", "eid": "TN-0003", "fn": "James", "ln": "Wilson", "email": "james.wilson@technova.com", "dept": "dept-005", "desig": "HR Director", "sal": 185000, "joined": "2016-06-20", "mgr": "emp-001", "status": "active"},
        {"id": "emp-004", "eid": "TN-0004", "fn": "Priya", "ln": "Sharma", "email": "priya.sharma@technova.com", "dept": "dept-001", "desig": "Senior Software Engineer", "sal": 165000, "joined": "2019-09-01", "mgr": "emp-002", "status": "active"},
        {"id": "emp-005", "eid": "TN-0005", "fn": "Tom", "ln": "Andrews", "email": "recruiter@technova.com", "dept": "dept-005", "desig": "Senior Recruiter", "sal": 95000, "joined": "2020-03-15", "mgr": "emp-003", "status": "active"},
        {"id": "emp-006", "eid": "TN-0006", "fn": "Maria", "ln": "Garcia", "email": "payroll@technova.com", "dept": "dept-006", "desig": "Payroll Manager", "sal": 110000, "joined": "2018-07-01", "mgr": "emp-011", "status": "active"},
        {"id": "emp-007", "eid": "TN-0007", "fn": "Richard", "ln": "Hayes", "email": "ceo@technova.com", "dept": None, "desig": "Chief Executive Officer", "sal": 450000, "joined": "2015-01-01", "mgr": None, "status": "active"},
    ]
    
    for ke in key_employees:
        employees.append({
            "id": ke["id"],
            "employee_id": ke["eid"],
            "first_name": ke["fn"],
            "last_name": ke["ln"],
            "email": ke["email"],
            "phone": f"+1-555-{random.randint(100,999)}-{random.randint(1000,9999)}",
            "department_id": ke["dept"],
            "department_name": dept_map.get(ke["dept"], "Executive"),
            "designation": ke["desig"],
            "manager_id": ke["mgr"],
            "manager_name": None,
            "date_of_birth": f"{random.randint(1970,1995)}-{random.randint(1,12):02d}-{random.randint(1,28):02d}",
            "date_of_joining": ke["joined"],
            "employment_type": "full_time",
            "status": ke["status"],
            "avatar": None,
            "base_salary": ke["sal"],
            "currency": "USD",
            "attrition_risk": round(random.uniform(0.05, 0.35), 2),
            "engagement_score": round(random.uniform(0.6, 0.95), 2),
            "promotion_probability": round(random.uniform(0.1, 0.8), 2),
            "skills": random.sample(["Leadership", "Python", "Strategy", "Communication", "Analytics", "Management", "Design", "Architecture", "Mentoring", "Innovation"], k=random.randint(3, 6)),
            "created_at": ke["joined"] + "T00:00:00Z",
            "updated_at": "2026-02-01T00:00:00Z"
        })
    
    # Generate additional employees
    dept_ids = [d["id"] for d in DEPARTMENTS]
    for i in range(8, 55):
        dept = random.choice(dept_ids)
        fn = random.choice(_first_names)
        ln = random.choice(_last_names)
        join_year = random.randint(2017, 2025)
        join_month = random.randint(1, 12)
        sal = random.randint(55000, 250000)
        employees.append({
            "id": f"emp-{i:03d}",
            "employee_id": f"TN-{i:04d}",
            "first_name": fn,
            "last_name": ln,
            "email": f"{fn.lower()}.{ln.lower()}@technova.com",
            "phone": f"+1-555-{random.randint(100,999)}-{random.randint(1000,9999)}",
            "department_id": dept,
            "department_name": dept_map.get(dept, ""),
            "designation": random.choice(_designations),
            "manager_id": random.choice(["emp-002", "emp-003", "emp-008", "emp-009", "emp-010"]),
            "manager_name": None,
            "date_of_birth": f"{random.randint(1975,2000)}-{random.randint(1,12):02d}-{random.randint(1,28):02d}",
            "date_of_joining": f"{join_year}-{join_month:02d}-{random.randint(1,28):02d}",
            "employment_type": random.choice(["full_time", "full_time", "full_time", "contract", "part_time"]),
            "status": random.choice(["active", "active", "active", "active", "on_leave", "probation"]),
            "avatar": None,
            "base_salary": sal,
            "currency": random.choice(["USD", "USD", "USD", "EUR", "GBP", "INR"]),
            "attrition_risk": round(random.uniform(0.05, 0.65), 2),
            "engagement_score": round(random.uniform(0.35, 0.98), 2),
            "promotion_probability": round(random.uniform(0.05, 0.85), 2),
            "skills": random.sample(["Python", "JavaScript", "React", "SQL", "AWS", "Leadership", "Communication",
                                     "Analytics", "Design", "Management", "Machine Learning", "DevOps",
                                     "Marketing", "Sales", "Finance", "Strategy", "Agile", "Scrum"], k=random.randint(3, 7)),
            "created_at": f"{join_year}-{join_month:02d}-01T00:00:00Z",
            "updated_at": "2026-02-15T00:00:00Z"
        })
    
    # Resolve manager names
    emp_map = {e["id"]: f"{e['first_name']} {e['last_name']}" for e in employees}
    for e in employees:
        if e["manager_id"] and e["manager_id"] in emp_map:
            e["manager_name"] = emp_map[e["manager_id"]]
    
    return employees

EMPLOYEES = _generate_employees()

# ═══════════════════════════════════════════════════════════════
# RECRUITMENT
# ═══════════════════════════════════════════════════════════════
JOBS = [
    {"id": "job-001", "title": "Senior Frontend Engineer", "department_id": "dept-001", "department_name": "Engineering", "location": "San Francisco, CA", "type": "full_time", "salary_range": "$150,000 - $200,000", "status": "open", "applicants": 47, "posted_date": "2026-01-15", "closing_date": "2026-03-15", "description": "We are looking for a Senior Frontend Engineer to lead our React-based platform development.", "requirements": ["5+ years React", "TypeScript", "System Design", "Team Leadership"], "created_by": "emp-002"},
    {"id": "job-002", "title": "Product Manager - AI Platform", "department_id": "dept-002", "department_name": "Product", "location": "Remote", "type": "full_time", "salary_range": "$140,000 - $180,000", "status": "open", "applicants": 32, "posted_date": "2026-01-20", "closing_date": "2026-03-20", "description": "Drive the roadmap for our AI-powered workforce platform.", "requirements": ["3+ years PM", "AI/ML knowledge", "Enterprise SaaS", "Data-driven"], "created_by": "emp-008"},
    {"id": "job-003", "title": "Sales Director - Enterprise", "department_id": "dept-003", "department_name": "Sales", "location": "New York, NY", "type": "full_time", "salary_range": "$180,000 - $250,000", "status": "in_review", "applicants": 18, "posted_date": "2026-02-01", "closing_date": "2026-04-01", "description": "Lead our enterprise sales team and drive revenue growth.", "requirements": ["10+ years enterprise sales", "SaaS experience", "Team management"], "created_by": "emp-009"},
    {"id": "job-004", "title": "Data Scientist", "department_id": "dept-010", "department_name": "Data Science", "location": "Remote", "type": "full_time", "salary_range": "$130,000 - $170,000", "status": "open", "applicants": 63, "posted_date": "2026-02-05", "closing_date": "2026-04-05", "description": "Build predictive models for workforce analytics.", "requirements": ["Python", "ML/DL", "Statistics", "SQL"], "created_by": "emp-015"},
    {"id": "job-005", "title": "HR Coordinator", "department_id": "dept-005", "department_name": "Human Resources", "location": "San Francisco, CA", "type": "full_time", "salary_range": "$60,000 - $80,000", "status": "closed", "applicants": 89, "posted_date": "2025-12-01", "closing_date": "2026-01-31", "description": "Support daily HR operations and employee relations.", "requirements": ["2+ years HR", "HRIS experience", "Communication"], "created_by": "emp-003"},
]

CANDIDATES = [
    {"id": "cand-001", "name": "Jennifer Liu", "email": "jennifer.liu@email.com", "phone": "+1-555-101-2020", "job_id": "job-001", "status": "shortlisted", "ai_score": 92, "experience_years": 7, "current_company": "Meta", "skills": ["React", "TypeScript", "GraphQL", "System Design"], "applied_date": "2026-01-18", "resume_url": None},
    {"id": "cand-002", "name": "Marcus Johnson", "email": "marcus.j@email.com", "phone": "+1-555-202-3030", "job_id": "job-001", "status": "interview", "ai_score": 87, "experience_years": 6, "current_company": "Google", "skills": ["React", "Vue", "TypeScript", "Testing"], "applied_date": "2026-01-20", "resume_url": None},
    {"id": "cand-003", "name": "Aisha Patel", "email": "aisha.p@email.com", "phone": "+1-555-303-4040", "job_id": "job-002", "status": "screening", "ai_score": 78, "experience_years": 4, "current_company": "Salesforce", "skills": ["Product Strategy", "AI/ML", "Analytics", "Agile"], "applied_date": "2026-01-25", "resume_url": None},
    {"id": "cand-004", "name": "Dmitri Volkov", "email": "dmitri.v@email.com", "phone": "+1-555-404-5050", "job_id": "job-004", "status": "offer", "ai_score": 95, "experience_years": 5, "current_company": "OpenAI", "skills": ["Python", "ML", "Deep Learning", "NLP", "Statistics"], "applied_date": "2026-02-08", "resume_url": None},
    {"id": "cand-005", "name": "Rachel Green", "email": "rachel.g@email.com", "phone": "+1-555-505-6060", "job_id": "job-001", "status": "rejected", "ai_score": 45, "experience_years": 2, "current_company": "Startup Inc", "skills": ["HTML", "CSS", "jQuery"], "applied_date": "2026-01-22", "resume_url": None},
    {"id": "cand-006", "name": "Kenji Watanabe", "email": "kenji.w@email.com", "phone": "+1-555-606-7070", "job_id": "job-004", "status": "interview", "ai_score": 88, "experience_years": 4, "current_company": "Netflix", "skills": ["Python", "TensorFlow", "SQL", "A/B Testing"], "applied_date": "2026-02-10", "resume_url": None},
]

# ═══════════════════════════════════════════════════════════════
# PAYROLL
# ═══════════════════════════════════════════════════════════════
PAYROLL_BATCHES = [
    {"id": "batch-001", "month": "January 2026", "status": "completed", "total_amount": 18500000, "employee_count": 12450, "processed_date": "2026-01-28", "approved_by": "emp-006", "anomalies_flagged": 3, "anomalies_resolved": 3},
    {"id": "batch-002", "month": "February 2026", "status": "completed", "total_amount": 18720000, "employee_count": 12480, "processed_date": "2026-02-26", "approved_by": "emp-006", "anomalies_flagged": 5, "anomalies_resolved": 5},
    {"id": "batch-003", "month": "March 2026", "status": "pending_review", "total_amount": 18950000, "employee_count": 12500, "processed_date": None, "approved_by": None, "anomalies_flagged": 7, "anomalies_resolved": 2},
]

def _generate_payslips():
    payslips = []
    for emp in EMPLOYEES[:20]:
        for month_idx, month in enumerate(["January 2026", "February 2026"]):
            base = emp["base_salary"] / 12
            hra = base * 0.15
            transport = 500
            tax = base * 0.22
            insurance = 450
            retirement = base * 0.06
            net = base + hra + transport - tax - insurance - retirement
            payslips.append({
                "id": f"ps-{emp['id']}-{month_idx+1}",
                "employee_id": emp["id"],
                "employee_name": f"{emp['first_name']} {emp['last_name']}",
                "month": month,
                "base_salary": round(base, 2),
                "hra": round(hra, 2),
                "transport_allowance": transport,
                "gross": round(base + hra + transport, 2),
                "tax": round(tax, 2),
                "insurance": insurance,
                "retirement": round(retirement, 2),
                "total_deductions": round(tax + insurance + retirement, 2),
                "net_salary": round(net, 2),
                "currency": emp["currency"],
                "status": "paid"
            })
    return payslips

PAYSLIPS = _generate_payslips()

PAYROLL_ANOMALIES = [
    {"id": "anom-001", "batch_id": "batch-003", "employee_id": "emp-012", "employee_name": "Robert Martinez", "type": "salary_spike", "description": "Salary increased by 45% compared to previous month", "severity": "high", "status": "pending", "ai_confidence": 0.92},
    {"id": "anom-002", "batch_id": "batch-003", "employee_id": "emp-023", "employee_name": "Wei Zhang", "type": "duplicate_entry", "description": "Duplicate payroll entry detected for this employee", "severity": "critical", "status": "pending", "ai_confidence": 0.98},
    {"id": "anom-003", "batch_id": "batch-003", "employee_id": "emp-031", "employee_name": "Mateo Reyes", "type": "missing_deduction", "description": "Tax deduction missing for this pay period", "severity": "high", "status": "resolved", "ai_confidence": 0.85},
    {"id": "anom-004", "batch_id": "batch-003", "employee_id": "emp-019", "employee_name": "Fatima Al-Hassan", "type": "overtime_excess", "description": "Overtime hours exceed 60 hours — potential compliance issue", "severity": "medium", "status": "pending", "ai_confidence": 0.76},
]

# ═══════════════════════════════════════════════════════════════
# PERFORMANCE
# ═══════════════════════════════════════════════════════════════
REVIEW_CYCLES = [
    {"id": "rc-001", "name": "Q4 2025 Review", "start_date": "2025-12-01", "end_date": "2026-01-15", "status": "completed", "participation_rate": 0.94, "avg_rating": 3.8},
    {"id": "rc-002", "name": "H1 2026 Mid-Year Review", "start_date": "2026-06-01", "end_date": "2026-07-15", "status": "upcoming", "participation_rate": 0, "avg_rating": 0},
]

GOALS = [
    {"id": "goal-001", "employee_id": "emp-004", "title": "Migrate legacy API to microservices", "description": "Decompose monolith API into 5 microservices", "type": "okr", "key_results": ["Complete architecture design", "Migrate auth service", "Migrate user service", "Achieve 99.9% uptime", "Zero data loss"], "progress": 65, "status": "on_track", "due_date": "2026-06-30", "created_by": "emp-002"},
    {"id": "goal-002", "employee_id": "emp-004", "title": "Improve code review turnaround", "description": "Reduce average PR review time from 48hrs to 24hrs", "type": "okr", "key_results": ["Set up auto-assign reviewers", "Create review guidelines", "Track metrics weekly"], "progress": 40, "status": "on_track", "due_date": "2026-03-31", "created_by": "emp-002"},
    {"id": "goal-003", "employee_id": "emp-008", "title": "Launch AI Features V2", "description": "Ship next generation AI-powered analytics", "type": "okr", "key_results": ["User research complete", "Design approved", "Beta launch", "90% positive feedback"], "progress": 25, "status": "at_risk", "due_date": "2026-09-30", "created_by": "emp-007"},
]

# ═══════════════════════════════════════════════════════════════
# LEAVE MANAGEMENT
# ═══════════════════════════════════════════════════════════════
LEAVE_BALANCES = {
    "emp-004": {"annual": 18, "annual_used": 5, "sick": 10, "sick_used": 2, "personal": 3, "personal_used": 0, "wfh": 24, "wfh_used": 12},
}

LEAVE_REQUESTS = [
    {"id": "lv-001", "employee_id": "emp-004", "type": "annual", "start_date": "2026-03-10", "end_date": "2026-03-14", "days": 5, "status": "pending", "reason": "Family vacation", "applied_on": "2026-02-28"},
    {"id": "lv-002", "employee_id": "emp-004", "type": "sick", "start_date": "2026-02-10", "end_date": "2026-02-11", "days": 2, "status": "approved", "reason": "Flu", "applied_on": "2026-02-10", "approved_by": "emp-002"},
    {"id": "lv-003", "employee_id": "emp-012", "type": "annual", "start_date": "2026-03-20", "end_date": "2026-03-25", "days": 4, "status": "pending", "reason": "Personal travel", "applied_on": "2026-03-01"},
]

# ═══════════════════════════════════════════════════════════════
# INTELLIGENCE / ANALYTICS
# ═══════════════════════════════════════════════════════════════
DEPARTMENT_METRICS = [
    {"department": "Engineering", "dept_id": "dept-001", "headcount": 3200, "attrition_risk": 0.18, "engagement": 0.78, "avg_salary": 145000, "cost_per_employee": 185000, "turnover_rate": 0.12, "open_positions": 15, "growth_rate": 0.08},
    {"department": "Product", "dept_id": "dept-002", "headcount": 850, "attrition_risk": 0.12, "engagement": 0.85, "avg_salary": 135000, "cost_per_employee": 170000, "turnover_rate": 0.08, "open_positions": 4, "growth_rate": 0.05},
    {"department": "Sales", "dept_id": "dept-003", "headcount": 2100, "attrition_risk": 0.32, "engagement": 0.62, "avg_salary": 95000, "cost_per_employee": 130000, "turnover_rate": 0.22, "open_positions": 12, "growth_rate": 0.03},
    {"department": "Marketing", "dept_id": "dept-004", "headcount": 1200, "attrition_risk": 0.15, "engagement": 0.80, "avg_salary": 88000, "cost_per_employee": 115000, "turnover_rate": 0.10, "open_positions": 6, "growth_rate": 0.04},
    {"department": "Human Resources", "dept_id": "dept-005", "headcount": 450, "attrition_risk": 0.08, "engagement": 0.88, "avg_salary": 82000, "cost_per_employee": 105000, "turnover_rate": 0.06, "open_positions": 2, "growth_rate": 0.02},
    {"department": "Finance", "dept_id": "dept-006", "headcount": 380, "attrition_risk": 0.10, "engagement": 0.82, "avg_salary": 98000, "cost_per_employee": 128000, "turnover_rate": 0.07, "open_positions": 1, "growth_rate": 0.01},
    {"department": "Operations", "dept_id": "dept-007", "headcount": 1800, "attrition_risk": 0.25, "engagement": 0.68, "avg_salary": 72000, "cost_per_employee": 95000, "turnover_rate": 0.18, "open_positions": 8, "growth_rate": 0.06},
    {"department": "Legal", "dept_id": "dept-008", "headcount": 120, "attrition_risk": 0.05, "engagement": 0.90, "avg_salary": 140000, "cost_per_employee": 175000, "turnover_rate": 0.03, "open_positions": 1, "growth_rate": 0.01},
    {"department": "Customer Success", "dept_id": "dept-009", "headcount": 950, "attrition_risk": 0.22, "engagement": 0.72, "avg_salary": 78000, "cost_per_employee": 102000, "turnover_rate": 0.15, "open_positions": 5, "growth_rate": 0.04},
    {"department": "Data Science", "dept_id": "dept-010", "headcount": 450, "attrition_risk": 0.20, "engagement": 0.76, "avg_salary": 155000, "cost_per_employee": 195000, "turnover_rate": 0.14, "open_positions": 7, "growth_rate": 0.10},
]

HEADCOUNT_TRENDS = [
    {"month": "Oct 2025", "total": 11800, "hires": 150, "exits": 95},
    {"month": "Nov 2025", "total": 11955, "hires": 180, "exits": 125},
    {"month": "Dec 2025", "total": 12010, "hires": 120, "exits": 65},
    {"month": "Jan 2026", "total": 12250, "hires": 280, "exits": 40},
    {"month": "Feb 2026", "total": 12480, "hires": 260, "exits": 30},
    {"month": "Mar 2026", "total": 12500, "hires": 85, "exits": 65},
    {"month": "Apr 2026 (forecast)", "total": 12650, "hires": 200, "exits": 50},
    {"month": "May 2026 (forecast)", "total": 12800, "hires": 190, "exits": 40},
    {"month": "Jun 2026 (forecast)", "total": 12950, "hires": 180, "exits": 30},
]

# ═══════════════════════════════════════════════════════════════
# AI INTERACTION LOGS
# ═══════════════════════════════════════════════════════════════
AI_LOGS = [
    {"id": "ai-001", "user_id": "usr-007", "query": "What is the attrition risk in the Sales department?", "response": "The Sales department currently has the highest attrition risk at 32%. Key contributing factors include below-average engagement scores (62%), high turnover rate (22%), and compensation below market median. Recommended actions: 1) Conduct targeted retention interviews, 2) Review compensation benchmarks, 3) Implement career development programs.", "module": "intelligence", "confidence": 0.89, "timestamp": "2026-02-28T14:30:00Z"},
    {"id": "ai-002", "user_id": "usr-004", "query": "What skills should I develop for a promotion to Staff Engineer?", "response": "Based on your current skill profile and the Staff Engineer competency framework, focus on: 1) System Design (gap: you have limited distributed systems experience), 2) Technical Leadership (start mentoring 2-3 junior engineers), 3) Cross-team Collaboration (lead at least one cross-functional project). Your current promotion probability is 45% — completing these would increase it to ~75%.", "module": "career", "confidence": 0.82, "timestamp": "2026-03-01T10:15:00Z"},
    {"id": "ai-003", "user_id": "usr-003", "query": "Generate an executive summary of workforce health for Q1 2026", "response": "Q1 2026 Workforce Health Summary: Total headcount grew 5.9% to 12,500. Key concerns: Sales attrition risk elevated at 32% (up from 28% last quarter). Engineering engagement stable at 78%. Payroll processing accuracy at 99.7%. 3 critical anomalies flagged and resolved. Hiring pipeline strong with 249 active candidates across 5 open positions. Recommendation: Focus retention efforts on Sales and Operations departments.", "module": "intelligence", "confidence": 0.91, "timestamp": "2026-03-02T09:00:00Z"},
]

# ═══════════════════════════════════════════════════════════════
# AUDIT LOGS
# ═══════════════════════════════════════════════════════════════
AUDIT_LOGS = [
    {"id": "audit-001", "user_id": "usr-001", "user_name": "Alex Morgan", "role": "super_admin", "action": "create_employee", "module": "employees", "description": "Created employee profile for Wei Zhang (TN-0023)", "timestamp": "2026-02-28T10:30:00Z", "ip": "192.168.1.100"},
    {"id": "audit-002", "user_id": "usr-006", "user_name": "Maria Garcia", "role": "payroll_officer", "action": "approve_payroll", "module": "payroll", "description": "Approved February 2026 payroll batch (batch-002)", "timestamp": "2026-02-26T16:45:00Z", "ip": "192.168.1.105"},
    {"id": "audit-003", "user_id": "usr-003", "user_name": "James Wilson", "role": "hr", "action": "approve_leave", "module": "employees", "description": "Approved sick leave for Priya Sharma (Feb 10-11)", "timestamp": "2026-02-10T09:15:00Z", "ip": "192.168.1.102"},
    {"id": "audit-004", "user_id": "usr-007", "user_name": "Richard Hayes", "role": "executive", "action": "ai_query", "module": "intelligence", "description": "Queried AI: Attrition risk in Sales department", "timestamp": "2026-02-28T14:30:00Z", "ip": "10.0.0.50"},
    {"id": "audit-005", "user_id": "usr-005", "user_name": "Tom Andrews", "role": "recruiter", "action": "rank_candidates", "module": "recruitment", "description": "AI ranked 47 candidates for Senior Frontend Engineer position", "timestamp": "2026-02-20T11:00:00Z", "ip": "192.168.1.104"},
]

# ═══════════════════════════════════════════════════════════════
# HOLIDAYS
# ═══════════════════════════════════════════════════════════════
HOLIDAYS = [
    {"id": "hol-001", "name": "New Year's Day", "date": "2026-01-01", "type": "public", "country": "US"},
    {"id": "hol-002", "name": "Martin Luther King Jr. Day", "date": "2026-01-19", "type": "public", "country": "US"},
    {"id": "hol-003", "name": "Presidents' Day", "date": "2026-02-16", "type": "public", "country": "US"},
    {"id": "hol-004", "name": "Memorial Day", "date": "2026-05-25", "type": "public", "country": "US"},
    {"id": "hol-005", "name": "Independence Day", "date": "2026-07-04", "type": "public", "country": "US"},
    {"id": "hol-006", "name": "Labor Day", "date": "2026-09-07", "type": "public", "country": "US"},
    {"id": "hol-007", "name": "Thanksgiving", "date": "2026-11-26", "type": "public", "country": "US"},
    {"id": "hol-008", "name": "Christmas Day", "date": "2026-12-25", "type": "public", "country": "US"},
    {"id": "hol-009", "name": "Company Foundation Day", "date": "2026-03-15", "type": "company", "country": "ALL"},
    {"id": "hol-010", "name": "Diwali", "date": "2026-10-20", "type": "public", "country": "IN"},
]
