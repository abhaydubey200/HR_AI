import { RouterProvider } from "react-router";
import { ThemeProvider } from "next-themes";
import { Toaster } from "./components/ui/sonner";
import { router } from "./routes";

import { AuthProvider } from "../contexts/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider attribute="class" defaultTheme="light">
        <RouterProvider router={router} />
        <Toaster />
      </ThemeProvider>
    </AuthProvider>
  );
}
