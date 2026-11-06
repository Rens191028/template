import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, footerLinks, nav } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <p className="font-display text-lg font-semibold">{company.name}</p>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">{company.tagline}</p>
        </div>

        <div>
          <p className="text-sm font-semibold">Navigatie</p>
          <ul className="mt-3 space-y-2">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-sm text-muted-foreground hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> {company.phoneDisplay}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> {company.email}
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              {company.address.street}, {company.address.postalCode} {company.address.city}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-muted-foreground md:flex-row md:px-6">
          <p>
            © {new Date().getFullYear()} {company.name}. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-4">
            {footerLinks.map((link) => (
              <Link key={link.to} to={link.to} className="hover:text-primary">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
