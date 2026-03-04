import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { DSGroupDashboard } from "./pages/DSGroupDashboard";
import { TenantManagement } from "./pages/TenantManagement";
import { BusinessUnits } from "./pages/BusinessUnits";
import { PlantManagement } from "./pages/PlantManagement";
import { ShiftManagement } from "./pages/ShiftManagement";
import { ContractLabor } from "./pages/ContractLabor";
import { FieldSales } from "./pages/FieldSales";
import { Employees } from "./pages/Employees";
import { EmployeeProfile } from "./pages/EmployeeProfile";
import { Employee360Profile } from "./pages/Employee360Profile";
import { Recruitment } from "./pages/Recruitment";
import { Attendance } from "./pages/Attendance";
import { Payroll } from "./pages/Payroll";
import { IndianPayrollCompliance } from "./pages/IndianPayrollCompliance";
import { Performance } from "./pages/Performance";
import { Learning } from "./pages/Learning";
import { Compliance } from "./pages/Compliance";
import { Analytics } from "./pages/Analytics";
import { RBAC } from "./pages/RBAC";
import { Workflows } from "./pages/Workflows";
import { AIControlEnhanced } from "./pages/AIControlEnhanced";
import { AuditLogs } from "./pages/AuditLogs";
import { Departments } from "./pages/Departments";
import { Settings } from "./pages/Settings";
import { CompanyRegistration } from "./pages/CompanyRegistration";
import Login from "./pages/Login";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { DEI } from "./pages/DEI";
import { IndustrialRelations } from "./pages/IndustrialRelations";
import { HRIS } from "./pages/HRIS";
import { TalentManagement } from "./pages/TalentManagement";
import { HROperations } from "./pages/HROperations";
import { Incentives } from "./pages/Incentives";
import { ZonalSales } from "./pages/ZonalSales";
import { Notifications } from "./pages/Notifications";

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: CompanyRegistration,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <RootLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, Component: DSGroupDashboard },
      { path: "tenants", Component: TenantManagement },
      { path: "business-units", Component: BusinessUnits },
      { path: "plant-management", Component: PlantManagement },
      { path: "shift-management", Component: ShiftManagement },
      { path: "contract-labor", Component: ContractLabor },
      { path: "field-sales", Component: FieldSales },
      { path: "employees", Component: Employees },
      { path: "employees/:id", Component: EmployeeProfile },
      { path: "employees/:id/360", Component: Employee360Profile },
      { path: "recruitment", Component: Recruitment },
      { path: "attendance", Component: Attendance },
      { path: "payroll", Component: Payroll },
      { path: "payroll/compliance", Component: IndianPayrollCompliance },
      { path: "performance", Component: Performance },
      { path: "learning", Component: Learning },
      { path: "compliance", Component: Compliance },
      { path: "analytics", Component: Analytics },
      { path: "rbac", Component: RBAC },
      { path: "workflows", Component: Workflows },
      { path: "ai-control", Component: AIControlEnhanced },
      { path: "audit", Component: AuditLogs },
      { path: "departments", Component: Departments },
      { path: "settings", Component: Settings },
      { path: "notifications", Component: Notifications },
      { path: "dei", Component: DEI },
      { path: "ir", Component: IndustrialRelations },
      { path: "hris", Component: HRIS },
      { path: "talent-management", Component: TalentManagement },
      { path: "hr-ops", Component: HROperations },
      { path: "incentives", Component: Incentives },
      { path: "zonal-sales", Component: ZonalSales },
    ],
  },
]);