import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, Facebook, Instagram, Linkedin, Youtube, Twitter, Mail, Phone } from "lucide-react";
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

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "X (Twitter)", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path || (path !== "/" && location.pathname.startsWith(path));

  return (
    <header className="sticky top-0 z-50">
      {/* Premium top bar — brushed metal */}
      <div className="brushed-metal relative">
        <div className="container flex items-center justify-between py-2.5 relative z-10">
          {/* Full branded name */}
          <Link to="/" className="flex items-center gap-3 group" aria-label="Home">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 border border-white/20 text-sm font-extrabold text-primary-foreground shadow-lg backdrop-blur-sm">
              UN
            </div>
            <div className="hidden md:block">
              <span className="font-humanist text-sm md:text-base font-semibold text-primary-foreground tracking-wide leading-tight block">
                Zimbabwe National Commission for UNESCO
              </span>
              <span className="font-humanist text-[11px] text-primary-foreground/60 tracking-widest uppercase">
                Official Secretariat
              </span>
            </div>
          </Link>

          {/* Contact + Social */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Contact */}
            <div className="flex items-center gap-4 text-xs text-primary-foreground/80">
              <a href="mailto:info@unesco.org.zw" className="flex items-center gap-1.5 hover:text-primary-foreground transition-colors">
                <Mail className="h-3.5 w-3.5" />
                info@unesco.org.zw
              </a>
              <span className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5" />
                +263 242 790 741
              </span>
            </div>

            {/* Divider */}
            <div className="h-5 w-px bg-white/20" />

            {/* Social icons — glass & gold */}
            <div className="flex items-center gap-1.5">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="social-glow flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 border border-white/15 text-primary-foreground/80 hover:text-accent hover:border-accent/40 backdrop-blur-sm"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile: minimal branding */}
          <div className="md:hidden">
            <span className="font-humanist text-xs text-primary-foreground/80 tracking-wide">UNESCO Zimbabwe</span>
          </div>
        </div>
      </div>

      {/* Main navigation bar — frosted glass */}
      <div className="glass-panel-light border-b border-border/50 shadow-sm">
        <div className="container flex h-12 items-center justify-between gap-4">
          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5 flex-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-300 ${
                  isActive(link.path)
                    ? "text-primary bg-primary/8"
                    : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-6 rounded-full bg-accent" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setSearchOpen(!searchOpen)} aria-label="Search" className="text-foreground/60 hover:text-primary">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden text-foreground/60" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Search bar */}
      {searchOpen && (
        <div className="glass-panel-light border-b border-border/50 animate-fade-in">
          <div className="container py-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search news, events, publications..."
                className="w-full rounded-lg border border-input bg-background/80 py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring backdrop-blur-sm"
                autoFocus
              />
            </div>
          </div>
        </div>
      )}

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="glass-panel-light border-b border-border/50 lg:hidden animate-fade-in" aria-label="Mobile navigation">
          <div className="container py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive(link.path) ? "text-primary bg-primary/8" : "text-foreground/70 hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {/* Mobile social */}
            <div className="flex items-center gap-2 pt-3 border-t border-border/50">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
