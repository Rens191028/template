import { Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { ContactForm } from "@/components/site/ContactForm";
import { company } from "@/lib/content";

export function Contact() {
  return (
    <div>
      <PageHeader title="Contact" subtitle="Stuur een bericht of neem direct contact op." />
      <section className="mx-auto max-w-5xl px-4 py-16 md:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-xl font-semibold">Stuur een bericht</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold">Contactgegevens</h2>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href={`tel:${company.phone}`}>{company.phoneDisplay}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                {company.address.street}, {company.address.postalCode} {company.address.city}
              </li>
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">{company.openingHours}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
