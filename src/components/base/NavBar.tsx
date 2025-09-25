import { Link, useLocation } from "react-router-dom";
import { Home, BookOpen, GraduationCap, User, Settings, LogOut, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function NavBar() {
  const location = useLocation();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const navItems = [
    { path: "/", label: "Oversikt", icon: Home },
    { path: "/min-laering", label: "Min læring", icon: BookOpen },
    { path: "/eksamen", label: "Eksamen", icon: GraduationCap },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Desktop Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border shadow-custom-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo/Title */}
          <Link to="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
            Matematikk 2P
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2",
                    active
                      ? "bg-primary text-primary-foreground shadow-custom-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                >
                  <Icon size={16} />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Profile Menu */}
          <div className="relative">
            <button
              onClick={() => setShowProfileDropdown(!showProfileDropdown)}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-accent transition-colors"
            >
              <User size={20} />
              <ChevronDown size={16} className={cn(
                "transition-transform duration-200",
                showProfileDropdown && "rotate-180"
              )} />
            </button>

            {showProfileDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-custom-lg py-1 z-50">
                <button className="w-full px-4 py-2 text-left text-sm hover:bg-accent flex items-center gap-2">
                  <User size={16} />
                  Profil
                </button>
                <button className="w-full px-4 py-2 text-left text-sm hover:bg-accent flex items-center gap-2">
                  <Settings size={16} />
                  Innstillinger
                </button>
                <hr className="my-1 border-border" />
                <button className="w-full px-4 py-2 text-left text-sm text-destructive hover:bg-accent flex items-center gap-2">
                  <LogOut size={16} />
                  Logg ut
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
        <div className="flex">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex-1 py-3 px-2 flex flex-col items-center justify-center text-xs font-medium transition-colors",
                  active
                    ? "text-primary bg-primary-light"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon size={20} className="mb-1" />
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Click outside to close dropdown */}
      {showProfileDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowProfileDropdown(false)}
        />
      )}
    </>
  );
}