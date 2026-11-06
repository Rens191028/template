import { Hero } from "@/components/site/Hero";
import { CtaBand } from "@/components/site/CtaBand";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { GoogleReviewCta } from "@/components/site/GoogleReviewCta";

const faqItems = [
  {
    question: "Hoe snel kan ik een offerte verwachten?",
    answer: "Binnen 1 werkdag nemen we contact met je op na je aanvraag.",
  },
  {
    question: "In welke regio's zijn jullie actief?",
    answer: "Vul hier de werkgebieden van het bedrijf in.",
  },
];

export function Home() {
  return (
    <div>
      <Hero
        eyebrow="Vul hier een korte eyebrow in"
        title="Pakkende hoofdtitel van de homepage"
        subtitle="Eén of twee zinnen die uitleggen wat het bedrijf doet en voor wie."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <h2 className="font-display text-2xl font-semibold md:text-3xl">Onze diensten</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["Dienst 1", "Dienst 2", "Dienst 3"].map((service) => (
            <div key={service} className="rounded-lg border bg-card p-6">
              <p className="font-semibold">{service}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Korte omschrijving van deze dienst — wat levert het de klant op.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <GoogleReviewCta />
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 md:px-6">
        <h2 className="font-display text-2xl font-semibold md:text-3xl">Veelgestelde vragen</h2>
        <div className="mt-6">
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      <CtaBand
        title="Klaar om te starten?"
        subtitle="Vraag vrijblijvend een offerte aan, we reageren snel."
      />
    </div>
  );
}
