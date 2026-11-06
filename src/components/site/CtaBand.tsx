import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CtaBandProps {
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaTo?: string;
}

/** Afsluitende call-to-action band, te gebruiken onderaan vrijwel elke pagina. */
export function CtaBand({
  title,
  subtitle,
  ctaLabel = "Offerte aanvragen",
  ctaTo = "/contact",
}: CtaBandProps) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center md:px-6">
        <h2 className="font-display text-2xl font-semibold md:text-4xl">{title}</h2>
        {subtitle && <p className="max-w-xl text-primary-foreground/80">{subtitle}</p>}
        <Button asChild size="lg" variant="secondary">
          <Link to={ctaTo}>{ctaLabel}</Link>
        </Button>
      </div>
    </section>
  );
}
