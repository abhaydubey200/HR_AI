# Role-based permission matrix
ROLES = {
    "super_admin": {
        "label": "Super Admin",
        "permissions": [
            "manage_company", "manage_departments", "manage_roles",
            "manage_employees", "manage_recruitment", "manage_payroll",
            "manage_performance", "view_intelligence", "manage_ai",
            "view_audit_logs", "manage_settings"
        ]
    },
    "hr": {
        "label": "HR Operations",
        "permissions": [
            "manage_employees", "manage_recruitment", "view_payroll",
            "manage_performance", "view_intelligence", "use_ai",
            "manage_onboarding", "manage_offboarding"
        ]
    },
    "manager": {
        "label": "Department Manager",
        "permissions": [
            "view_team_employees", "manage_team_performance",
            "approve_leave", "view_team_intelligence", "use_ai",
            "view_team_payroll"
        ]
    },
    "employee": {
        "label": "Employee",
        "permissions": [
            "view_self_profile", "apply_leave", "view_payslips",
            "view_goals", "use_ai_chat", "view_career_path"
        ]
    },
    "recruiter": {
        "label": "Recruiter",
        "permissions": [
            "manage_recruitment", "use_ai", "view_candidates"
        ]
    },
    "payroll_officer": {
        "label": "Payroll Officer",
        "permissions": [
            "manage_payroll", "view_employees", "use_ai",
            "manage_compliance"
        ]
    },
    "executive": {
        "label": "Executive",
        "permissions": [
            "view_intelligence", "view_all_dashboards", "use_ai",
            "view_audit_logs", "view_workforce_analytics"
        ]
    }
}

def has_permission(role: str, permission: str) -> bool:
    role_data = ROLES.get(role)
    if not role_data:
        return False
    return permission in role_data["permissions"]

def get_role_permissions(role: str) -> list:
    role_data = ROLES.get(role)
    return role_data["permissions"] if role_data else []

def get_role_label(role: str) -> str:
    role_data = ROLES.get(role)
    return role_data["label"] if role_data else "Unknown"
