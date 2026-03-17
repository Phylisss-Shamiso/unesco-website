import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-foreground text-primary-foreground">
    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded bg-primary text-primary-foreground text-sm font-extrabold">UN</div>
            <div className="leading-tight">
              <span className="text-sm font-bold">ZNCU</span>
              <span className="block text-[10px] text-primary-foreground/70">UNESCO Zimbabwe</span>
            </div>
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            The Zimbabwe National Commission for UNESCO serves as the liaison between the Government of Zimbabwe and UNESCO, promoting education, science, culture, and communication.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">Quick Links</h3>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            {[
              { label: "About Us", path: "/about" },
              { label: "Programmes", path: "/programmes" },
              { label: "Publications", path: "/publications" },
              { label: "News & Updates", path: "/news" },
              { label: "Contact Us", path: "/contact" },
            ].map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="hover:text-primary-foreground transition-colors">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Sectors */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">UNESCO Sectors</h3>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            {["Education", "Natural Sciences", "Social & Human Sciences", "Culture", "Communication & Information"].map((s) => (
              <li key={s}>
                <Link to="/areas" className="hover:text-primary-foreground transition-colors">{s}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">Contact</h3>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>16 Cork Road, Belgravia<br />Harare, Zimbabwe</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 flex-shrink-0" />
              <span>+263 242 790 741</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 flex-shrink-0" />
              <a href="mailto:info@unesco.org.zw" className="hover:text-primary-foreground">info@unesco.org.zw</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="border-t border-primary-foreground/10">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-2 py-4 text-xs text-primary-foreground/50">
        <span>© {new Date().getFullYear()} Zimbabwe National Commission for UNESCO. All rights reserved.</span>
        <div className="flex gap-4">
          <Link to="/privacy" className="hover:text-primary-foreground">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-primary-foreground">Terms of Use</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
