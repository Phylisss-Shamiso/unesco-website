import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path || (path !== "/" && location.pathname.startsWith(path));

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "shadow-lg" : ""}`}>
      {/* Top Bar: Official Branding & Contact */}
      <div className="bg-gradient-to-r from-[#003366] via-[#004080] to-[#003366] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]" />
        
        <div className="container flex items-center justify-between py-3 relative z-10">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3 bg-white/10 p-2 rounded-lg backdrop-blur-md border border-white/20 shadow-inner">
              {/* Zimbabwe Coat of Arms - External Link */}
              <a 
                href="https://mhtestd.gov.zw/?ova_dep=zimbabwe-national-commission-for-unesco" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105 shrink-0"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/0/01/Coat_of_arms_of_Zimbabwe.svg" 
                  alt="Zimbabwe Coat of Arms" 
                  className="h-9 w-auto drop-shadow-md sm:h-12" 
                />
              </a>

              {/* Single Vertical Divider */}
              <div className="h-8 w-px bg-white/30" />

              {/* UNESCO Logo - Internal Link to Home */}
              <Link to="/" className="flex items-center transition-opacity hover:opacity-80">
                <img 
                  src="https://www.unesco.org/sites/default/files/styles/paragraph_medium_desktop/public/2021-10/UNESCO_logo_hor_blue_transparent.png.webp?itok=j_ahsDi8" 
                  alt="UNESCO Logo" 
                  className="h-8 w-auto object-contain brightness-0 invert" 
                />
              </Link>
            </div>
            
            {/* Branding Text - Internal Link to Home */}
            <Link to="/" className="hidden md:block transition-colors hover:text-white/80">
              <span className="font-serif text-sm md:text-lg font-bold tracking-tight block leading-tight">
                Zimbabwe National Commission for UNESCO
              </span>
            </Link>
          </div>

          <div className="hidden lg:flex flex-col items-end gap-1">
            <div className="flex items-center gap-6 text-[11px] font-medium text-blue-100/90">
              <a href="mailto:info@unesco.org.zw" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Mail className="h-3 w-3" /> info@unesco.org.zw
              </a>
              <a href="tel:+263242790741" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Phone className="h-3 w-3" /> +263 242 790 741
              </a>
            </div>
            <div className="flex items-center gap-2 mt-1">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="p-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-accent hover:border-accent hover:text-white transition-all duration-300"
                >
                  <Icon className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav: Navigation Links */}
      <div className={`backdrop-blur-xl border-b border-white/20 transition-all duration-300 ${scrolled ? "bg-white/90 py-1" : "bg-white/70 py-2"}`}>
        <div className="container flex h-12 items-center justify-between">
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`group relative px-4 py-2 text-[13px] font-semibold transition-all duration-300 ${
                  isActive(link.path) ? "text-primary" : "text-slate-600 hover:text-primary"
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-accent transition-transform duration-300 origin-left ${
                  isActive(link.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`} />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center bg-slate-100 rounded-full px-3 py-1 border border-slate-200 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
              <Search className="h-3.5 w-3.5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-transparent border-none text-xs w-24 focus:w-40 transition-all duration-500 focus:outline-none ml-2 text-slate-700"
              />
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden text-slate-600" 
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;