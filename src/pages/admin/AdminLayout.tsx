import { useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard, FileText, Newspaper, CalendarDays, BookOpen, Image, Users, LogOut, Menu, X, ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const sidebarLinks = [
  { label: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { label: "Pages", path: "/admin/pages", icon: FileText },
  { label: "News", path: "/admin/news", icon: Newspaper },
  { label: "Events", path: "/admin/events", icon: CalendarDays },
  { label: "Publications", path: "/admin/publications", icon: BookOpen },
  { label: "Media", path: "/admin/media", icon: Image },
  { label: "Commemorations", path: "/admin/commemorations", icon: Image },
  
  { label: "Users", path: "/admin/users", icon: Users },
];

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    navigate("/admin/login");
  };

  const NavContent = () => (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-2 p-4 border-b border-sidebar-border">
        <div className="flex h-8 w-8 items-center justify-center rounded bg-sidebar-primary text-sidebar-primary-foreground text-xs font-bold flex-shrink-0">UN</div>
        {!collapsed && <span className="text-sm font-bold text-sidebar-foreground">ZNCU Admin</span>}
      </div>

      <nav className="flex-1 p-2 space-y-1">
        {sidebarLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setMobileOpen(false)}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              isActive(link.path)
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
            }`}
          >
            <link.icon className="h-4 w-4 flex-shrink-0" />
            {!collapsed && <span>{link.label}</span>}
          </Link>
        ))}
      </nav>

      <div className="p-2 border-t border-sidebar-border">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground transition-colors"
        >
          <LogOut className="h-4 w-4 flex-shrink-0" />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen">
      {/* Desktop sidebar */}
      <aside
        className={`hidden lg:flex flex-col bg-sidebar border-r border-sidebar-border transition-all duration-200 ${
          collapsed ? "w-16" : "w-56"
        }`}
      >
        <NavContent />
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute bottom-4 left-full -ml-3 z-10 hidden lg:flex h-6 w-6 items-center justify-center rounded-full bg-sidebar border border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent"
          aria-label="Toggle sidebar"
        >
          <ChevronLeft className={`h-3 w-3 transition-transform ${collapsed ? "rotate-180" : ""}`} />
        </button>
      </aside>

      {/* Mobile sidebar overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-foreground/50" onClick={() => setMobileOpen(false)} />
          <aside className="relative w-56 h-full bg-sidebar animate-slide-in">
            <NavContent />
          </aside>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-40 flex h-14 items-center gap-4 border-b border-border bg-card px-4">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex-1" />
          <Link to="/" className="text-sm text-muted-foreground hover:text-primary">View Site →</Link>
        </header>
        <main className="flex-1 p-4 md:p-6 bg-background">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
