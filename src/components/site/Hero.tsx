import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/content";

interface HeroProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCtaLabel?: string;
  primaryCtaTo?: string;
  secondaryCtaLabel?: string;
}

/**
 * Standaard homepage-hero: eyebrow + titel + subtitel + twee CTA's.
 * Vervang titel/subtitel per klant; de rest blijft hetzelfde patroon.
 */
export function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCtaLabel = "Offerte aanvragen",
  primaryCtaTo = "/contact",
  secondaryCtaLabel = "Bel ons",
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary">
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">{subtitle}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <Link to={primaryCtaTo}>{primaryCtaLabel}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={`tel:${company.phone}`}>{secondaryCtaLabel}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
