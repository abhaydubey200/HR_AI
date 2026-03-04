import { useState } from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Globe, Check } from "lucide-react";

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "hi", name: "हिंदी (Hindi)", flag: "🇮🇳" },
  { code: "es", name: "Español (Spanish)", flag: "🇪🇸" },
  { code: "fr", name: "Français (French)", flag: "🇫🇷" },
  { code: "ar", name: "العربية (Arabic)", flag: "🇸🇦" },
];

export function LanguageSwitcher() {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const handleLanguageChange = (langCode: string) => {
    setCurrentLanguage(langCode);
    // In production: This would trigger i18n translation update
    console.log("Language changed to:", langCode);
  };

  const currentLang = languages.find((lang) => lang.code === currentLanguage);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" title="Change Language">
          <Globe className="size-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <div className="p-2 text-sm font-medium text-muted-foreground">Select Language</div>
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">{lang.flag}</span>
              <span>{lang.name}</span>
            </div>
            {currentLanguage === lang.code && <Check className="size-4 text-success" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
