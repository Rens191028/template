import { PageHeader } from "@/components/site/PageHeader";

export function Privacybeleid() {
  return (
    <div>
      <PageHeader title="Privacybeleid" />
      <section className="mx-auto max-w-3xl px-4 py-16 md:px-6 prose">
        <p className="text-muted-foreground">
          Vul hier het privacybeleid in. Beschrijf welke gegevens er verzameld worden (bv. via het
          contactformulier) en hoe daarmee wordt omgegaan.
        </p>
      </section>
    </div>
  );
}
