import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";

export function OverOns() {
  return (
    <div>
      <PageHeader title="Over ons" subtitle="Het verhaal van het bedrijf, in een paar zinnen." />
      <section className="mx-auto max-w-3xl px-4 py-16 md:px-6">
        <p className="text-muted-foreground">
          Vul hier de achtergrond, ervaring en waarden van het bedrijf in. Klanten willen weten
          wie er achter het bedrijf staat.
        </p>
      </section>
      <CtaBand title="Maak kennis met ons team" />
    </div>
  );
}
