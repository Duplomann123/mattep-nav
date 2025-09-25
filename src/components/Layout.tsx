import { ReactNode } from "react";
import { NavBar } from "@/components/base/NavBar";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="min-h-screen">
        {children}
      </main>
    </div>
  );
}