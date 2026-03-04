import { useState } from "react";
import { MessageSquare, X, Send, Mic, MicOff } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Hello! I'm your HR AI Assistant. I can help you with policy questions, leave balance, payroll information, and more. How can I assist you today?",
      timestamp: new Date(),
    },
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: message,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: getAIResponse(message),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);

    setMessage("");
  };

  const getAIResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();

    // DS Group Manufacturing-specific queries
    if (lowerQuery.includes("shift") || lowerQuery.includes("शिफ्ट")) {
      return "You are currently assigned to Morning Shift (6:00 AM - 2:00 PM) at Gurgaon Plant - A. Your next shift rotation is scheduled for March 15, 2026. Shift efficiency is 94%. Would you like to request a shift change?";
    } else if (lowerQuery.includes("plant") || lowerQuery.includes("प्लांट") || lowerQuery.includes("factory")) {
      return "DS Group operates 4 manufacturing plants: Gurgaon (FMCG), Pune (Manufacturing), Chennai (Packaging), and Hyderabad (Processing). Your assigned plant is Gurgaon Plant - A. Current plant efficiency: 96%. Any specific plant information needed?";
    } else if (lowerQuery.includes("overtime") || lowerQuery.includes("ot")) {
      return "You have 12 hours of approved overtime this month. Overtime wage rate: 2x of hourly wage (as per Factory Rules). Pending overtime payment: ₹4,850. Overtime hours are capped at 12 hours/week.";
    } else if (lowerQuery.includes("pf") || lowerQuery.includes("provident fund") || lowerQuery.includes("पीएफ")) {
      return "Your PF details: Employee Contribution: 12% (₹3,600), Employer Contribution: 12% (₹3,600). Total monthly contribution: ₹7,200. PF Number: PF-283746. Last contribution filed: Feb 28, 2026. Status: Compliant ✓";
    } else if (lowerQuery.includes("esic") || lowerQuery.includes("ईएसआईसी")) {
      return "Your ESIC details: Employee Share: 0.75%, Employer Share: 3.25%. ESIC Number: ESIC-847362. Coverage: Medical benefits active. Last contribution: Feb 2026. Status: Compliant ✓";
    } else if (lowerQuery.includes("contractor") || lowerQuery.includes("contract") || lowerQuery.includes("ठेकेदार")) {
      return "Your employment type: Contract Labor. Contractor: ABC Manpower Solutions Pvt Ltd. Contract validity: Until Dec 31, 2024. All statutory compliances (PF, ESIC, Wage) are up to date. Any specific query?";
    } else if (lowerQuery.includes("safety") || lowerQuery.includes("incident") || lowerQuery.includes("सुरक्षा")) {
      return "Plant Safety Score: 94%. No safety incidents reported in your section this month. Last safety training completed: Jan 15, 2026. Next safety drill scheduled: March 10, 2026. Stay safe! 🛡️";
    } else if (lowerQuery.includes("attendance") || lowerQuery.includes("हाजिरी") || lowerQuery.includes("biometric")) {
      return "Your attendance this month: 96% (23 days present, 1 day leave). Last biometric punch: Today 6:02 AM. Biometric sync status: Active ✓. You can mark attendance using mobile app or plant terminal.";
    } else if (lowerQuery.includes("territory") || lowerQuery.includes("sales") || lowerQuery.includes("field")) {
      return "Your assigned territory: North Zone - Delhi NCR. Monthly target: ₹1.95Cr, Achieved: ₹2.12Cr (109% achievement). Incentive earned: ₹45,000. Last GPS check-in: 2 hours ago at Connaught Place. Great performance! 🎯";
    } else if (lowerQuery.includes("compliance") || lowerQuery.includes("statutory")) {
      return "DS Group Compliance Status: Overall 96.2%. PF: 100% ✓, ESIC: 98% ✓, TDS: 95% ✓, Wage Code: 97% ✓. All statutory filings up to date. Next filing due: Professional Tax (March 10, 2026).";
    } else if (lowerQuery.includes("business unit") || lowerQuery.includes("division") || lowerQuery.includes("bu")) {
      return "DS Group has 6 business units: FMCG Division (2,847 employees), Manufacturing Plants (4,523), Hospitality (1,234), Luxury Retail (876), Corporate HQ (456), Regional Sales (1,892). Total workforce: 11,828 employees.";
    } else if (lowerQuery.includes("leave") || lowerQuery.includes("vacation") || lowerQuery.includes("छुट्टी")) {
      return "Your leave balance: Casual Leave: 8 days, Sick Leave: 6 days, Earned Leave: 12 days. Last leave: Feb 10-12, 2026 (Approved). You can apply for leave through the mobile app or web portal. Need help applying?";
    } else if (lowerQuery.includes("payroll") || lowerQuery.includes("salary") || lowerQuery.includes("वेतन")) {
      return "Last payroll processed: Feb 25, 2026. Gross: ₹30,000, Deductions (PF+ESIC+TDS): ₹6,200, Net: ₹23,800. Payment transferred to account ****4567. Payslip available in Payroll section. Next salary: March 7, 2026.";
    } else if (lowerQuery.includes("policy") || lowerQuery.includes("policies") || lowerQuery.includes("नीति")) {
      return "DS Group HR Policies: Factory Rules, Shift Policy, Safety Guidelines, Leave Policy, Contract Labor Policy, Overtime Rules, Code of Conduct. Which policy would you like to know more about?";
    } else if (lowerQuery.includes("performance") || lowerQuery.includes("review") || lowerQuery.includes("प्रदर्शन")) {
      return "Your performance score: 4.2/5.0 (Excellent). Next review: March 15, 2026. Goals completed: 3/4. Top strength: Productivity & Safety compliance. Recommended training: Advanced Machine Operation. Keep up the good work! ⭐";
    } else if (lowerQuery.includes("training") || lowerQuery.includes("course") || lowerQuery.includes("प्रशिक्षण")) {
      return "Recommended trainings for you: 1) Safety & Quality Control (Mandatory), 2) Advanced Production Techniques, 3) Hindi Communication Skills. Next batch starts: March 20, 2026. Enroll now?";
    } else if (lowerQuery.includes("hindi") || lowerQuery.includes("हिंदी") || lowerQuery.includes("language")) {
      return "मैं हिंदी और अंग्रेजी दोनों भाषाओं में आपकी सहायता कर सकता हूं। आप मुझसे छुट्टी, वेतन, शिफ्ट, उपस्थिति और कंपनी नीतियों के बारे में पूछ सकते हैं। मैं आपकी कैसे मदद कर सकता हूं?";
    } else if (lowerQuery.includes("help") || lowerQuery.includes("मदद") || lowerQuery.includes("support")) {
      return "I can help you with: 🏭 Plant & Shift Info | 📋 PF/ESIC/TDS Queries | 📊 Attendance & Leave | 💰 Payroll & Salary | 🎯 Sales Territory & Incentives | 📜 Company Policies | 🛡️ Safety & Compliance | 🎓 Training Programs. Ask me anything in English or Hindi!";
    } else {
      return "I'm your DS Group HR AI Assistant. I can help with manufacturing operations, payroll compliance (PF/ESIC/TDS), shift management, field sales queries, attendance tracking, and company policies. I support both English and Hindi (हिंदी). How can I assist you today?";
    }
  };

  const toggleVoice = () => {
    setIsListening(!isListening);
    if (!isListening) {
      // Simulate voice input
      setTimeout(() => {
        setMessage("What is my leave balance?");
        setIsListening(false);
      }, 2000);
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        size="icon"
        className="fixed bottom-6 right-6 size-14 rounded-full shadow-lg"
      >
        <MessageSquare className="size-6" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-6 right-6 w-96 h-[600px] shadow-2xl flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-3">
          <div className="size-10 bg-primary rounded-full flex items-center justify-center">
            <MessageSquare className="size-5 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-semibold">HR AI Assistant</h3>
            <div className="flex items-center gap-1">
              <div className="size-2 bg-green-500 rounded-full" />
              <span className="text-xs text-muted-foreground">Online</span>
            </div>
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
          <X className="size-4" />
        </Button>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${
                msg.role === "user" ? "flex-row-reverse" : ""
              }`}
            >
              <Avatar className="size-8">
                <AvatarFallback>
                  {msg.role === "user" ? "U" : "AI"}
                </AvatarFallback>
              </Avatar>
              <div
                className={`flex-1 ${msg.role === "user" ? "text-right" : ""}`}
              >
                <div
                  className={`inline-block p-3 rounded-lg max-w-[80%] ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {msg.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Quick Actions */}
      <div className="p-3 border-t">
        <div className="flex flex-wrap gap-2 mb-3">
          <Badge
            variant="outline"
            className="cursor-pointer hover:bg-accent"
            onClick={() => setMessage("What is my shift schedule?")}
          >
            Shift Schedule
          </Badge>
          <Badge
            variant="outline"
            className="cursor-pointer hover:bg-accent"
            onClick={() => setMessage("Show my PF details")}
          >
            PF/ESIC
          </Badge>
          <Badge
            variant="outline"
            className="cursor-pointer hover:bg-accent"
            onClick={() => setMessage("Check my attendance")}
          >
            Attendance
          </Badge>
          <Badge
            variant="outline"
            className="cursor-pointer hover:bg-accent"
            onClick={() => setMessage("Safety compliance")}
          >
            Safety
          </Badge>
        </div>

        {/* Input */}
        <div className="flex gap-2">
          <Input
            placeholder="Type in English or Hindi..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSendMessage();
            }}
          />
          <Button
            variant={isListening ? "destructive" : "outline"}
            size="icon"
            onClick={toggleVoice}
            title="Voice Input (Hindi + English)"
          >
            {isListening ? (
              <MicOff className="size-4" />
            ) : (
              <Mic className="size-4" />
            )}
          </Button>
          <Button onClick={handleSendMessage}>
            <Send className="size-4" />
          </Button>
        </div>
        {isListening && (
          <p className="text-xs text-muted-foreground mt-2 text-center">
            🎤 Listening... Speak in Hindi or English
          </p>
        )}
      </div>
    </Card>
  );
}