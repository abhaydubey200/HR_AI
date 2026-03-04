-- DS Group Enterprise HR AI System - Snowflake Initialization Script
-- Role: ACCOUNTADMIN (as provided)

-- 1. Setup Infrastructure
USE ROLE ACCOUNTADMIN;
CREATE DATABASE IF NOT EXISTS DS_GROUP_HR_DB;
CREATE WAREHOUSE IF NOT EXISTS COMPUTE_WH WITH WAREHOUSE_SIZE = 'XSMALL' AUTO_SUSPEND = 60 AUTO_RESUME = TRUE;
USE DATABASE DS_GROUP_HR_DB;
USE SCHEMA PUBLIC;
USE WAREHOUSE COMPUTE_WH;

-- 2. CORE: Employees
CREATE TABLE IF NOT EXISTS employees (
    employee_id STRING PRIMARY KEY,
    full_name STRING NOT NULL,
    email STRING UNIQUE,
    password_hash STRING, -- Added for Auth
    role STRING DEFAULT 'employee', -- Added for Auth (super_admin, hr, recruiter, etc)
    company_id STRING DEFAULT 'DS_GROUP',
    department_id STRING,
    department STRING,
    designation STRING,
    location STRING,
    joining_date DATE,
    status STRING DEFAULT 'Active',
    manager_id STRING,
    retention_risk_score FLOAT, -- AI feature
    performance_alpha_score FLOAT -- AI feature
);

-- 3. ATTENDANCE & LEAVE
CREATE TABLE IF NOT EXISTS attendance_logs (
    log_id INT AUTOINCREMENT PRIMARY KEY,
    employee_id STRING REFERENCES employees(employee_id),
    date DATE,
    check_in TIMESTAMP,
    check_out TIMESTAMP,
    status STRING, -- Present, Absent, Half-Day
    gps_lat FLOAT,
    gps_long FLOAT,
    geofence_verified BOOLEAN
);

-- 4. PAYROLL
CREATE TABLE IF NOT EXISTS payroll_batches (
    batch_id STRING PRIMARY KEY,
    month_year STRING,
    total_disbursement FLOAT,
    status STRING, -- Draft, Processing, Paid
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP()
);

CREATE TABLE IF NOT EXISTS payslips (
    payslip_id INT AUTOINCREMENT PRIMARY KEY,
    employee_id STRING REFERENCES employees(employee_id),
    batch_id STRING REFERENCES payroll_batches(batch_id),
    basic FLOAT,
    hra FLOAT,
    allowances FLOAT,
    deductions FLOAT,
    net_pay FLOAT,
    is_anomaly BOOLEAN DEFAULT FALSE,
    ai_audit_note STRING
);

-- 5. RECRUITMENT
CREATE TABLE IF NOT EXISTS jobs (
    job_id STRING PRIMARY KEY,
    title STRING,
    department STRING,
    location STRING,
    status STRING, -- Open, Closed
    salary_range_min FLOAT,
    salary_range_max FLOAT
);

CREATE TABLE IF NOT EXISTS candidates (
    candidate_id STRING PRIMARY KEY,
    full_name STRING,
    email STRING,
    applied_job_id STRING REFERENCES jobs(job_id),
    ai_match_score FLOAT,
    pipeline_stage STRING, -- Screening, Interview, Offered
    status STRING
);

-- 6. PERFORMANCE & CALIBRATION
CREATE TABLE IF NOT EXISTS performance_goals (
    goal_id INT AUTOINCREMENT PRIMARY KEY,
    employee_id STRING REFERENCES employees(employee_id),
    goal_text STRING,
    target_date DATE,
    progress FLOAT,
    alignment_score FLOAT -- AI Driven
);

-- 7. LEARNING & DEVELOPMENT
CREATE TABLE IF NOT EXISTS courses (
    course_id STRING PRIMARY KEY,
    title STRING,
    category STRING,
    total_hours FLOAT,
    difficulty STRING
);

CREATE TABLE IF NOT EXISTS enrollments (
    enrollment_id INT AUTOINCREMENT PRIMARY KEY,
    employee_id STRING REFERENCES employees(employee_id),
    course_id STRING REFERENCES courses(course_id),
    progress FLOAT,
    completion_date DATE,
    skill_alpha_gain FLOAT -- AI calculation
);

-- 8. COMPLIANCE & GOVERNANCE
CREATE TABLE IF NOT EXISTS policies (
    policy_id STRING PRIMARY KEY,
    title STRING,
    version STRING,
    effective_date DATE,
    status STRING
);

CREATE TABLE IF NOT EXISTS policy_acknowledgments (
    ack_id INT AUTOINCREMENT PRIMARY KEY,
    employee_id STRING REFERENCES employees(employee_id),
    policy_id STRING REFERENCES policies(policy_id),
    ack_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP()
);

-- 9. CONTRACT LABOR MANAGEMENT
CREATE TABLE IF NOT EXISTS vendors (
    vendor_id STRING PRIMARY KEY,
    name STRING,
    category STRING,
    compliance_score FLOAT
);

CREATE TABLE IF NOT EXISTS contract_laborers (
    laborer_id STRING PRIMARY KEY,
    name STRING,
    vendor_id STRING REFERENCES vendors(vendor_id),
    location STRING,
    work_type STRING,
    valid_id_verified BOOLEAN
);

-- Note for Snowflake: dropping the table in development to ensure schema updates
-- In production, use migrations!
-- Adding Seed data for demonstration & Role-Based Authentication

-- To ensure the table contains our auth columns, we re-create it by replacing it (in a dev script)
CREATE OR REPLACE TABLE employees (
    employee_id STRING PRIMARY KEY,
    full_name STRING NOT NULL,
    email STRING UNIQUE,
    password_hash STRING, -- Storing raw for demo, hash in prod
    role STRING DEFAULT 'employee',
    company_id STRING DEFAULT 'DS_GROUP',
    department_id STRING,
    department STRING,
    designation STRING,
    location STRING,
    joining_date DATE,
    status STRING DEFAULT 'Active',
    manager_id STRING,
    retention_risk_score FLOAT, 
    performance_alpha_score FLOAT 
);

INSERT INTO employees (employee_id, full_name, email, password_hash, role, department, designation, location, joining_date, status) VALUES
('DS-001', 'Alex Morgan', 'admin@technova.com', 'demo', 'super_admin', 'Leadership', 'Super Admin', 'Corporate HQ', '2023-01-01', 'Active'),
('DS-002', 'James Wilson', 'james.wilson@technova.com', 'demo', 'hr', 'Human Resources', 'HR Director', 'Mumbai', '2022-03-15', 'Active'),
('DS-003', 'Sarah Chen', 'sarah.chen@technova.com', 'demo', 'manager', 'Engineering', 'Engineering Manager', 'Pune Plant', '2021-06-20', 'Active'),
('DS-004', 'Tom Andrews', 'recruiter@technova.com', 'demo', 'recruiter', 'Talent Acquisition', 'Lead Recruiter', 'Delhi', '2023-02-10', 'Active'),
('DS-005', 'Maria Garcia', 'payroll@technova.com', 'demo', 'payroll_officer', 'Finance', 'Payroll Specialist', 'Mumbai', '2020-11-05', 'Active'),
('DS-006', 'Priya Sharma', 'priya.sharma@technova.com', 'demo', 'employee', 'Sales', 'Sales Executive', 'Bangalore', '2024-01-10', 'Active');

