import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router";
import { useTheme } from "next-themes";
import {
  LayoutDashboard,
  Users,
  UserPlus,
  Calendar,
  DollarSign,
  TrendingUp,
  GraduationCap,
  FileCheck,
  BarChart3,
  Shield,
  Workflow,
  Brain,
  FileText,
  Building2,
  Settings,
  Menu,
  X,
  Sun,
  Moon,
  Bell,
  MessageSquare,
  ChevronDown,
  Briefcase,
  Factory,
  Clock,
  UserCog,
  MapPin,
  Award,
} from "lucide-react";
import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { AIChatbot } from "../components/AIChatbot";
import { LanguageSwitcher } from "../components/LanguageSwitcher";

const roles = [
  "Super Admin",
  "Tenant Admin",
  "HR Executive",
  "Payroll Manager",
  "Department Manager",
  "Employee",
  "Auditor",
];

import { useAuth } from "../../contexts/AuthContext";

export function RootLayout() {
  const { user, logout, loginAsRole } = useAuth();
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const currentRole = user?.role_label || "Guest";
  const roles = [
    "Super Admin",
    "Tenant Admin",
    "HR Executive",
    "Payroll Manager",
    "Department Manager",
    "Employee",
    "Auditor",
  ];

  const navigation = [
    {
      name: "Executive View",
      items: [
        { name: "CHRO Dashboard", href: "/", icon: LayoutDashboard, roles: ["Super Admin", "Tenant Admin", "CHRO"] },
        { name: "Global Analytics", href: "/analytics", icon: BarChart3, roles: ["Super Admin", "Tenant Admin", "CHRO", "HR Executive"] },
        { name: "People Sustainability", href: "/dei", icon: TrendingUp, roles: ["Super Admin", "Tenant Admin", "HR Executive"] },
      ]
    },
    {
      name: "Talent Lifecycle",
      items: [
        { name: "Talent Acquisition", href: "/recruitment", icon: UserPlus, roles: ["Super Admin", "Tenant Admin", "HR Executive"] },
        { name: "L&D Academy", href: "/learning", icon: GraduationCap, roles: ["all"] },
        { name: "Performance & HiPo", href: "/performance", icon: Award, roles: ["Super Admin", "Tenant Admin", "HR Executive", "Department Manager"] },
        { name: "Succession Planning", href: "/talent-management", icon: Briefcase, roles: ["Super Admin", "Tenant Admin", "HR Executive"] },
      ]
    },
    {
      name: "Operational HR",
      items: [
        { name: "Employee 360", href: "/employees", icon: Users, roles: ["Super Admin", "Tenant Admin", "HR Executive", "Department Manager"] },
        { name: "HR Operations", href: "/hr-ops", icon: Workflow, roles: ["Super Admin", "Tenant Admin", "HR Executive"] },
        { name: "Attendance & Leave", href: "/attendance", icon: Calendar, roles: ["all"] },
      ]
    },
    {
      name: "Comp & Benefits",
      items: [
        { name: "Payroll Engine", href: "/payroll", icon: DollarSign, roles: ["Super Admin", "Tenant Admin", "Payroll Manager"] },
        { name: "Statutory Compliance", href: "/payroll/compliance", icon: Shield, roles: ["Super Admin", "Tenant Admin", "Payroll Manager"] },
        { name: "Incentive Simulation", href: "/incentives", icon: TrendingUp, roles: ["Super Admin", "Tenant Admin", "Payroll Manager", "Sales Manager"] },
      ]
    },
    {
      name: "Manufacturing & IR",
      items: [
        { name: "Plant Management", href: "/plant-management", icon: Factory, roles: ["Super Admin", "Tenant Admin", "HR Executive", "Plant Manager"] },
        { name: "Shift & Fatigue AI", href: "/shift-management", icon: Clock, roles: ["Super Admin", "Tenant Admin", "HR Executive", "Plant Manager"] },
        { name: "Industrial Relations", href: "/ir", icon: MessageSquare, roles: ["Super Admin", "Tenant Admin", "HR Executive", "Plant Manager"] },
        { name: "Contract Labor", href: "/contract-labor", icon: UserCog, roles: ["Super Admin", "Tenant Admin", "HR Executive", "Plant Manager"] },
      ]
    },
    {
      name: "Sales HR",
      items: [
        { name: "Field Workforce", href: "/field-sales", icon: MapPin, roles: ["Super Admin", "Tenant Admin", "HR Executive", "Sales Manager"] },
        { name: "Zonal Performance", href: "/zonal-sales", icon: TrendingUp, roles: ["Super Admin", "Tenant Admin", "Sales Manager"] },
      ]
    },
    {
      name: "AI & Technology",
      items: [
        { name: "AI Control Center", href: "/ai-control", icon: Brain, roles: ["Super Admin", "Tenant Admin"] },
        { name: "HRIS & Data (Snowflake)", href: "/hris", icon: Building2, roles: ["Super Admin", "Tenant Admin"] },
        { name: "Audit & Risk", href: "/audit", icon: FileText, roles: ["Super Admin", "Tenant Admin", "Auditor"] },
      ]
    },
    {
      name: "Organization",
      items: [
        { name: "Business Units", href: "/business-units", icon: Building2, roles: ["Super Admin", "Tenant Admin"] },
        { name: "Departments", href: "/departments", icon: Building2, roles: ["Super Admin", "Tenant Admin", "HR Executive"] },
        { name: "RBAC & Security", href: "/rbac", icon: Shield, roles: ["Super Admin", "Tenant Admin"] },
        { name: "Settings", href: "/settings", icon: Settings, roles: ["all"] },
      ]
    },
  ];

  const filteredNavigation = navigation.map(group => ({
    ...group,
    items: group.items.filter(item =>
      item.roles.includes("all") || item.roles.includes(currentRole)
    )
  })).filter(group => group.items.length > 0);

  return (
    <div className="h-screen flex overflow-hidden bg-background">
      {/* Sidebar */}
      <aside
        className={`${isSidebarOpen ? "w-64" : "w-0"
          } bg-sidebar border-r border-sidebar-border transition-all duration-300 overflow-hidden flex flex-col`}
      >
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center gap-2">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center">
              <Factory className="size-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-semibold text-sidebar-foreground">DS Group HR AI</h1>
              <p className="text-xs text-sidebar-foreground/70">Enterprise Platform</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-6">
          {filteredNavigation.map((group) => (
            <div key={group.name} className="space-y-1">
              <h3 className="px-3 text-xs font-semibold text-sidebar-foreground/50 uppercase tracking-wider mb-2">
                {group.name}
              </h3>
              {group.items.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${isActive
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      }`}
                  >
                    <item.icon className="size-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-sidebar-border">
          <div className="text-xs text-sidebar-foreground/70">
            <div className="flex justify-between mb-1">
              <span>Storage Used</span>
              <span>73%</span>
            </div>
            <div className="h-1.5 bg-sidebar-accent rounded-full overflow-hidden">
              <div className="h-full bg-sidebar-primary w-[73%]" />
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 border-b border-border bg-card px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </Button>
          </div>

          <div className="flex items-center gap-4">
            {/* Role Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Shield className="size-4" />
                  {currentRole}
                  <ChevronDown className="size-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Switch Role</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {roles.map((role) => (
                  <DropdownMenuItem
                    key={role}
                    onClick={() => loginAsRole(role.toLowerCase().replace(" ", "_"))}
                  >
                    {role}
                    {currentRole === role && (
                      <Badge variant="secondary" className="ml-auto">
                        Active
                      </Badge>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="size-5" />
              ) : (
                <Moon className="size-5" />
              )}
            </Button>

            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="size-5" />
              <span className="absolute top-2 right-2 size-2 bg-destructive rounded-full" />
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2">
                  <Avatar className="size-8">
                    <AvatarFallback>{user?.name?.[0] || "U"}</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <div className="text-sm font-medium">{user?.name || "User"}</div>
                    <div className="text-xs text-muted-foreground">
                      {currentRole}
                    </div>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-background p-6">
          <Outlet />
        </main>
      </div>

      {/* AI Chatbot */}
      <AIChatbot />
    </div>
  );
}