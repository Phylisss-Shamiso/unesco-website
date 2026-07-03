import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="relative overflow-hidden">
    {/* Main footer */}
    <div className="bg-foreground relative">
      {/* Subtle top accent line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent" />
      
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center justify-center">
                <img 
                  src="https://www.unesco.org/sites/default/files/styles/paragraph_medium_desktop/public/2021-10/UNESCO_logo_hor_blue_transparent.png.webp?itok=j_ahsDi8" 
                  alt="UNESCO Logo" 
                  className="h-12 w-auto object-contain" 
                />
              </div>
              <div className="leading-tight">
                <span className="text-sm font-display font-bold text-primary-foreground">Zimbabwe</span>
                <span className="block text-[10px] text-primary-foreground/50 font-humanist tracking-wider uppercase">Official Secretariat</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              The Zimbabwe National Commission for UNESCO serves as the liaison between the Government of Zimbabwe and UNESCO, promoting education, science, culture, and communication.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-2 mt-5">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="social-glow flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/8 border border-primary-foreground/10 text-primary-foreground/60 hover:text-accent hover:border-accent/40 transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/40 font-sans">Quick Links</h3>
            <ul className="space-y-2.5 text-sm text-primary-foreground/60">
              {[
                { label: "About Us", path: "/about" },
                { label: "Programmes", path: "/programmes" },
                { label: "Publications", path: "/publications" },
                { label: "News & Updates", path: "/news" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-primary-foreground hover:translate-x-1 transition-all inline-block">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/40 font-sans">UNESCO Sectors</h3>
            <ul className="space-y-2.5 text-sm text-primary-foreground/60">
              {["Education", "Natural Sciences", "Social & Human Sciences", "Culture", "Communication & Information"].map((s) => (
                <li key={s}>
                  <Link to="/areas" className="hover:text-primary-foreground transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/40 font-sans">Contact</h3>
            <ul className="space-y-3.5 text-sm text-primary-foreground/60">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                <span className="leading-relaxed">
                  8 Kenilworth Road<br />
                  Newlands Highlands<br />
                  Harare<br />
                  {/* Replaced emoji with an inline image flag */}
                  <span className="inline-flex items-center gap-2 mt-1">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Zimbabwe.svg" 
                      alt="Flag of Zimbabwe" 
                      className="h-3 w-6 object-cover rounded-[2px]"
                    />
                    Zimbabwe
                  </span>
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
                <span>+263 242 790 741</span>
              </li>
              <li className="flex items-center gap-2.5 mb-4">
                <Mail className="h-4 w-4 flex-shrink-0 text-accent" />
                <a href="mailto:info@unesco.org.zw" className="hover:text-primary-foreground transition-colors">info@unesco.org.zw</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/8">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-2 py-5 text-xs text-primary-foreground/40">
          <span>© {new Date().getFullYear()} Zimbabwe National Commission for UNESCO. All rights reserved.</span>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;