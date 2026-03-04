import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Badge } from "../components/ui/badge";
import { Building2, Mail, MapPin, Briefcase, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router";

const industries = [
  "Manufacturing",
  "FMCG",
  "Hospitality",
  "Retail",
  "Technology",
  "Healthcare",
  "Finance",
  "Education",
  "Real Estate",
  "Logistics",
];

const countries = [
  "India",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Singapore",
  "UAE",
];

export function CompanyRegistration() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    headquarters: "",
    country: "",
    adminEmail: "",
    adminName: "",
    phoneNumber: "",
    employeeCount: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Simulate company registration
      console.log("Registering company:", formData);
      // In production: Create tenant schema in Snowflake, assign roles
      navigate("/");
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <div>
              <CardTitle className="text-2xl">Company Registration</CardTitle>
              <p className="text-muted-foreground mt-2">
                Create your enterprise HR AI platform instance
              </p>
            </div>
            <Badge variant="outline">Step {step} of 3</Badge>
          </div>
          <div className="flex gap-2 mt-4">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-2 flex-1 rounded-full ${
                  s <= step ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="companyName">Company Name *</Label>
                    <div className="relative mt-2">
                      <Building2 className="absolute left-3 top-3 size-4 text-muted-foreground" />
                      <Input
                        id="companyName"
                        placeholder="DS Group"
                        className="pl-10"
                        value={formData.companyName}
                        onChange={(e) => updateFormData("companyName", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="industry">Industry *</Label>
                    <Select
                      value={formData.industry}
                      onValueChange={(value) => updateFormData("industry", value)}
                      required
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        {industries.map((industry) => (
                          <SelectItem key={industry} value={industry}>
                            {industry}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="country">Country *</Label>
                    <Select
                      value={formData.country}
                      onValueChange={(value) => updateFormData("country", value)}
                      required
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="headquarters">Headquarters Location *</Label>
                    <div className="relative mt-2">
                      <MapPin className="absolute left-3 top-3 size-4 text-muted-foreground" />
                      <Input
                        id="headquarters"
                        placeholder="Noida, India"
                        className="pl-10"
                        value={formData.headquarters}
                        onChange={(e) => updateFormData("headquarters", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="employeeCount">Expected Employee Count *</Label>
                    <div className="relative mt-2">
                      <Briefcase className="absolute left-3 top-3 size-4 text-muted-foreground" />
                      <Input
                        id="employeeCount"
                        type="number"
                        placeholder="10000"
                        className="pl-10"
                        value={formData.employeeCount}
                        onChange={(e) => updateFormData("employeeCount", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="adminName">Admin Full Name *</Label>
                    <Input
                      id="adminName"
                      placeholder="Sarah Anderson"
                      className="mt-2"
                      value={formData.adminName}
                      onChange={(e) => updateFormData("adminName", e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="adminEmail">Admin Email *</Label>
                    <div className="relative mt-2">
                      <Mail className="absolute left-3 top-3 size-4 text-muted-foreground" />
                      <Input
                        id="adminEmail"
                        type="email"
                        placeholder="admin@dsgroup.com"
                        className="pl-10"
                        value={formData.adminEmail}
                        onChange={(e) => updateFormData("adminEmail", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phoneNumber">Phone Number *</Label>
                    <Input
                      id="phoneNumber"
                      type="tel"
                      placeholder="+91 9876543210"
                      className="mt-2"
                      value={formData.phoneNumber}
                      onChange={(e) => updateFormData("phoneNumber", e.target.value)}
                      required
                    />
                  </div>

                  <div className="p-4 border rounded-lg bg-muted/50 mt-6">
                    <h3 className="font-semibold mb-2">What happens next?</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="size-4 text-success" />
                        Email verification link sent to your email
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="size-4 text-success" />
                        Dedicated Snowflake tenant schema created
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="size-4 text-success" />
                        Default roles and permissions assigned
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="size-4 text-success" />
                        Admin access credentials sent
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <div className="space-y-4">
                  <div className="text-center py-8">
                    <div className="size-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="size-10 text-success" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Registration Complete!</h2>
                    <p className="text-muted-foreground mb-6">
                      Your enterprise HR AI platform is being set up
                    </p>
                  </div>

                  <div className="space-y-3 p-6 border rounded-lg">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Company Name</span>
                      <span className="font-medium">{formData.companyName}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Industry</span>
                      <span className="font-medium">{formData.industry}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Location</span>
                      <span className="font-medium">{formData.headquarters}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Admin Email</span>
                      <span className="font-medium">{formData.adminEmail}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-muted-foreground">Employee Count</span>
                      <span className="font-medium">{formData.employeeCount}</span>
                    </div>
                  </div>

                  <div className="p-4 border border-primary/20 rounded-lg bg-primary/5">
                    <p className="text-sm">
                      <strong>Next Steps:</strong> Check your email ({formData.adminEmail}) for
                      verification link and login credentials. You'll receive access within 24
                      hours.
                    </p>
                  </div>
                </div>
              </>
            )}

            <div className="flex gap-4 mt-8">
              {step > 1 && step < 3 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(step - 1)}
                  className="flex-1"
                >
                  Previous
                </Button>
              )}
              {step < 3 ? (
                <Button type="submit" className="flex-1">
                  Continue
                </Button>
              ) : (
                <Button type="button" onClick={() => navigate("/")} className="flex-1">
                  Go to Dashboard
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
