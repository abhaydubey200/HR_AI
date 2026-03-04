import { useState } from "react";
import { Link } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Label } from "../components/ui/label";
import {
  Search,
  Plus,
  Download,
  Filter,
  Mail,
  Phone,
  MoreVertical,
  Brain,
  TrendingDown,
  TrendingUp,
  Star,
  Users,
  ChevronRight,
  UserPlus,
  MapPin,
} from "lucide-react";

const employees = [
  {
    id: 1,
    name: "Sarah Anderson",
    email: "sarah.a@dsgroup.com",
    phone: "+91 98234 56789",
    department: "Plant Operations",
    position: "Sr. Production Lead",
    status: "Active",
    joinDate: "2022-03-15",
    retentionRisk: "Low",
    performance: 4.8,
    avatar: "SA",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "m.chen@dsgroup.com",
    phone: "+91 97234 89012",
    department: "Sales & Distribution",
    position: "Zonal Sales Manager",
    status: "Active",
    joinDate: "2021-07-22",
    retentionRisk: "Medium",
    performance: 4.5,
    avatar: "MC",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    email: "emily.r@dsgroup.com",
    phone: "+91 96234 12345",
    department: "Quality Control",
    position: "Chemical Analyst",
    status: "Active",
    joinDate: "2023-01-10",
    retentionRisk: "Low",
    performance: 4.2,
    avatar: "ER",
  },
  {
    id: 4,
    name: "David Kumar",
    email: "david.k@dsgroup.com",
    phone: "+91 95234 67890",
    department: "Logistics",
    position: "Fleet Supervisor",
    status: "On Leave",
    joinDate: "2022-09-05",
    retentionRisk: "High",
    performance: 3.9,
    avatar: "DK",
  },
];

export function Employees() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-10 pb-10 animate-in fade-in slide-in-from-bottom-2 duration-700">
      {/* Premium Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 py-4 border-b border-slate-100 dark:border-slate-800">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-10 bg-slate-900 rounded-full" />
            <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Talent Capital</p>
          </div>
          <h1 className="text-4xl font-black tracking-tighter italic">
            GLOBAL <span className="text-slate-400 NOT-italic opacity-50">•</span> DIRECTORY
          </h1>
          <p className="text-sm font-medium text-muted-foreground max-w-xl">
            Orchestrate your workforce with high-fidelity profiles and AI-driven retention intelligence.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="h-14 px-8 rounded-2xl border-2 font-black italic tracking-tight">
            <Download className="size-4 mr-3" />
            EXPORT DATA
          </Button>
          <Button className="h-14 px-8 rounded-2xl bg-slate-900 text-white shadow-2xl shadow-slate-900/10 border-none font-black italic tracking-tight hover:scale-105 transition-all">
            <UserPlus className="size-4 mr-3" />
            ONBOARD TALENT
          </Button>
        </div>
      </div>

      {/* Advanced Filters Card */}
      <div className="grid gap-6 md:grid-cols-4">
        <div className="md:col-span-2 relative">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
          <Input
            placeholder="Search by name, role, or ID..."
            className="h-16 pl-14 pr-6 bg-white border-2 border-slate-100 rounded-[2rem] shadow-sm focus:border-slate-900 focus:ring-0 font-medium italic transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select>
          <SelectTrigger className="h-16 rounded-[2rem] border-2 border-slate-100 bg-white font-black italic text-xs uppercase tracking-widest">
            <SelectValue placeholder="DEPARTMENTS" />
          </SelectTrigger>
          <SelectContent className="rounded-2xl border-2">
            <SelectItem value="all">ALL UNITS</SelectItem>
            <SelectItem value="ops">PLANT OPERATIONS</SelectItem>
            <SelectItem value="sales">SALES & DISTRIBUTION</SelectItem>
            <SelectItem value="quality">QUALITY CONTROL</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="h-16 rounded-[2rem] border-2 border-slate-100 bg-white font-black italic text-xs uppercase tracking-widest">
            <SelectValue placeholder="RETENTION RISK" />
          </SelectTrigger>
          <SelectContent className="rounded-2xl border-2">
            <SelectItem value="all">ALL LEVELS</SelectItem>
            <SelectItem value="high">HIGH RISK</SelectItem>
            <SelectItem value="low">STABLE</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Main Directory Area */}
      <div className="grid gap-8 lg:grid-cols-4">
        {/* Statistics Bench */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="border-none shadow-xl bg-slate-900 text-white rounded-[2.5rem] overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center gap-4">
                <div className="size-12 bg-white/10 rounded-2xl flex items-center justify-center">
                  <Users className="size-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Total Force</p>
                  <h3 className="text-3xl font-black italic tracking-tighter mt-1">11,482</h3>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex justify-between items-end border-b border-white/10 pb-3">
                  <p className="text-[10px] font-black uppercase opacity-60">Corporate</p>
                  <p className="text-sm font-black italic">842</p>
                </div>
                <div className="flex justify-between items-end border-b border-white/10 pb-3">
                  <p className="text-[10px] font-black uppercase opacity-60">Plant Force</p>
                  <p className="text-sm font-black italic">7,234</p>
                </div>
                <div className="flex justify-between items-end">
                  <p className="text-[10px] font-black uppercase opacity-60">Field Sales</p>
                  <p className="text-sm font-black italic">3,406</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl rounded-[2.5rem] bg-emerald-500 text-white overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center gap-4">
                <div className="size-12 bg-white/20 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="size-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest">Growth Index</p>
                  <h3 className="text-3xl font-black italic tracking-tighter mt-1">+14.2%</h3>
                </div>
              </div>
              <p className="text-xs mt-4 font-medium italic opacity-90 leading-relaxed">Quarterly expansion pace remains strong across North and East clusters.</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl rounded-[2.5rem] p-8 border-2 border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <Brain className="size-5 text-indigo-600" />
              <p className="text-[10px] font-black uppercase tracking-widest">AI Intelligence</p>
            </div>
            <p className="text-xs font-black italic leading-tight">Detected potential leadership gap in <span className="text-indigo-600">Western Cluster (Sales)</span>. 3 high-potential candidates identified.</p>
            <Button variant="link" className="px-0 h-auto mt-4 text-xs font-black uppercase text-indigo-600 underline">View Slate <ChevronRight className="size-3 ml-1" /></Button>
          </Card>
        </div>

        {/* Directory Table */}
        <Card className="lg:col-span-3 border-none shadow-2xl rounded-[2.5rem] overflow-hidden">
          <CardHeader className="p-10 pb-0">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl font-black italic tracking-tighter uppercase">Force Profiles</CardTitle>
                <p className="text-xs text-muted-foreground font-medium mt-1 italic">Click on any profile to view deep-dive 360 analytics.</p>
              </div>
              <Button variant="ghost" size="icon" className="rounded-full"><Filter className="size-5" /></Button>
            </div>
          </CardHeader>
          <CardContent className="p-10 pt-6">
            <Table>
              <TableHeader>
                <TableRow className="border-none hover:bg-transparent">
                  <TableHead className="text-[10px] font-black uppercase text-muted-foreground px-4">Talent Profile</TableHead>
                  <TableHead className="text-[10px] font-black uppercase text-muted-foreground">Unit / Role</TableHead>
                  <TableHead className="text-[10px] font-black uppercase text-muted-foreground text-center">Stability</TableHead>
                  <TableHead className="text-[10px] font-black uppercase text-muted-foreground text-right">Impact</TableHead>
                  <TableHead className="text-[10px] font-black uppercase text-muted-foreground text-right"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {employees.map((emp) => (
                  <TableRow key={emp.id} className="group border-b border-slate-50 dark:border-slate-800 hover:bg-slate-50/50 transition-all cursor-pointer">
                    <TableCell className="py-6 px-4">
                      <div className="flex items-center gap-4">
                        <Avatar className="size-14 shadow-xl border-4 border-white ring-1 ring-slate-100">
                          <AvatarFallback className="bg-slate-900 text-white font-black text-xs">{emp.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-base font-black italic tracking-tighter">{emp.name}</p>
                          <div className="flex items-center gap-2 mt-1 text-[10px] text-muted-foreground font-bold italic">
                            <Mail className="size-3" />
                            <span>{emp.email}</span>
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <p className="text-xs font-black uppercase tracking-tight">{emp.department}</p>
                      <p className="text-[10px] font-bold text-muted-foreground italic mt-0.5">{emp.position}</p>
                    </TableCell>
                    <TableCell className="text-center px-4">
                      <Badge variant="outline" className={`text-[9px] font-black uppercase px-3 py-1 rounded-full border-none ${emp.retentionRisk === 'Low' ? 'bg-emerald-50 text-emerald-600' :
                          emp.retentionRisk === 'Medium' ? 'bg-orange-50 text-orange-600' : 'bg-rose-50 text-rose-600'
                        }`}>
                        Risk: {emp.retentionRisk}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2 px-4">
                        <Star className="size-3 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-black">{emp.performance}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" className="rounded-full opacity-0 group-hover:opacity-100 transition-opacity"><ChevronRight className="size-5" /></Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Button variant="ghost" className="w-full mt-10 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground group">
              Access Full Directory <MoreVertical className="size-3 ml-2 group-hover:rotate-90 transition-transform" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
