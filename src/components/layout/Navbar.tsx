import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Areas of Competence", path: "/areas" },
  { label: "Programmes", path: "/programmes" },
  { label: "News", path: "/news" },
  { label: "Events", path: "/events" },
  { label: "Publications", path: "/publications" },
  { label: "Media", path: "/media" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path || (path !== "/" && location.pathname.startsWith(path));

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      {/* Top bar */}
      <div className="bg-primary">
        <div className="container flex h-8 items-center justify-between text-xs text-primary-foreground">
          <span>Zimbabwe National Commission for UNESCO</span>
          <div className="hidden sm:flex items-center gap-4">
            <a href="mailto:info@unesco.org.zw" className="hover:underline">info@unesco.org.zw</a>
            <span>+263 242 790 741</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container flex h-14 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-foreground" aria-label="Home">
          <div className="flex h-9 w-9 items-center justify-center rounded bg-primary text-primary-foreground text-sm font-extrabold">UN</div>
          <div className="hidden sm:block leading-tight">
            <span className="text-sm font-bold">ZNCU</span>
            <span className="block text-[10px] font-normal text-muted-foreground">UNESCO Zimbabwe</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-2.5 py-1.5 text-sm font-medium rounded transition-colors ${
                isActive(link.path)
                  ? "text-primary bg-primary/10"
                  : "text-foreground/80 hover:text-primary hover:bg-primary/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Search toggle */}
          <Button variant="ghost" size="icon" onClick={() => setSearchOpen(!searchOpen)} aria-label="Search">
            <Search className="h-4 w-4" />
          </Button>

          {/* Mobile menu toggle */}
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Search bar */}
      {searchOpen && (
        <div className="border-t border-border bg-card animate-fade-in">
          <div className="container py-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search news, events, publications..."
                className="w-full rounded-lg border border-input bg-background py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                autoFocus
              />
            </div>
          </div>
        </div>
      )}

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-t border-border bg-card lg:hidden animate-fade-in" aria-label="Mobile navigation">
          <div className="container py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block rounded px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(link.path) ? "text-primary bg-primary/10" : "text-foreground/80 hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
