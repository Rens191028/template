import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";

export function Diensten() {
  return (
    <div>
      <PageHeader
        title="Onze diensten"
        subtitle="Overzicht van wat het bedrijf allemaal aanbiedt."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["Dienst 1", "Dienst 2", "Dienst 3", "Dienst 4"].map((service) => (
            <div key={service} className="rounded-lg border bg-card p-6">
              <p className="font-semibold">{service}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Uitleg van deze dienst, prijsindicatie en wat de klant kan verwachten.
              </p>
            </div>
          ))}
        </div>
      </section>
      <CtaBand title="Benieuwd wat wij voor jou kunnen doen?" />
    </div>
  );
}
