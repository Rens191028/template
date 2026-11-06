interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

/** Simpele kop boven elke onderliggende pagina (Diensten, Over ons, enz.) — consistent in heel de site. */
export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="border-b bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <h1 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-muted-foreground">{subtitle}</p>}
      </div>
    </section>
  );
}
