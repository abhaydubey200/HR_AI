import { RouterProvider } from "react-router";
import { ThemeProvider } from "next-themes";
import { Toaster } from "./components/ui/sonner";
import { router } from "./routes";

import { AuthProvider } from "../contexts/AuthContext";
import { NotificationsProvider } from "../contexts/NotificationsContext";

export default function App() {
  return (
    <AuthProvider>
      <NotificationsProvider>
        <ThemeProvider attribute="class" defaultTheme="light">
          <RouterProvider router={router} />
          <Toaster />
        </ThemeProvider>
      </NotificationsProvider>
    </AuthProvider>
  );
}
