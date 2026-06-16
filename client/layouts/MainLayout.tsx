import { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Map,
  BookOpen,
  Zap,
  FileText,
  Clock,
  MessageSquare,
  BarChart3,
  Activity,
  Settings,
  Menu,
  X,
  Brain,
} from "lucide-react";
import { useState } from "react";

interface MainLayoutProps {
  children: ReactNode;
  currentPath?: string;
}

const navigation = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/" },
  { name: "Learning Roadmap", icon: Map, path: "/roadmap" },
  { name: "Knowledge Vault", icon: BookOpen, path: "/vault" },
  { name: "Resource Manager", icon: Zap, path: "/resources" },
  { name: "Notes", icon: FileText, path: "/notes" },
  { name: "Reminders", icon: Clock, path: "/reminders" },
  { name: "AI Assistant", icon: MessageSquare, path: "/ai-assistant" },
  { name: "Analytics", icon: BarChart3, path: "/analytics" },
  { name: "Activity Timeline", icon: Activity, path: "/activity" },
];

export default function MainLayout({ children, currentPath = "/" }: MainLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-sidebar transform transition-transform duration-300 ease-in-out border-r border-border lg:static lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex items-center gap-3 border-b border-border p-6">
            <div className="rounded-lg bg-gradient-to-br from-primary to-primary/80 p-2">
              <Brain className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-sidebar-foreground">LifeOS</h1>
              <p className="text-xs text-muted-foreground">Knowledge Hub</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2 overflow-y-auto p-4">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = currentPath === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-lg shadow-primary/20"
                      : "text-sidebar-foreground hover:bg-sidebar-accent"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Settings */}
          <div className="border-t border-border p-4">
            <Link
              to="/settings"
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-sidebar-foreground transition-all duration-200 hover:bg-sidebar-accent"
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top bar */}
        <header className="border-b border-border bg-background/80 backdrop-blur-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="rounded-lg p-2 text-foreground transition-colors hover:bg-secondary/10 lg:hidden"
            >
              {sidebarOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/10 border border-border">
                <span className="text-sm text-muted-foreground">Welcome back!</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
