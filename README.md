# RT Studio — website-template

Standaard startpunt voor nieuwe klantwebsites. Vite + React + TypeScript +
Tailwind CSS + shadcn/ui-stijl componenten. Werkt direct lokaal (`npm run dev`)
en is zo gebouwd dat je 'm meteen in Lovable kunt openen/importeren.

## Nieuw project starten

1. **Gebruik dit als GitHub-template.** Op deze repo-pagina: **"Use this
   template" → "Create a new repository"**. Geef de nieuwe repo de naam van
   het klantproject (bv. `cafe-de-zwaon`).
2. Importeer die nieuwe repo in Lovable.
3. Loop de checklist hieronder door.

## Checklist per nieuw project

- [ ] `src/lib/content.ts` — bedrijfsnaam, tagline, telefoon, e-mail, adres,
      openingstijden, Google Review-link invullen
- [ ] `src/index.css` — kleuren (`--primary`, `--background`, enz.) aanpassen
      aan de huisstijl van de klant
- [ ] `index.html` — `<title>` en meta description aanpassen (SEO-basis)
- [ ] `public/favicon.svg` — vervangen door het eigen logo/icoon
- [ ] Teksten op Home, Diensten, Over ons, Contact vervangen door echte
      content (nu staan er placeholders)
- [ ] `src/components/site/ContactForm.tsx` — koppelen aan een echte
      verzend-backend (Formspree/Resend, of een eigen API-route als het
      project een database heeft)
- [ ] Afbeeldingen toevoegen (comprimeren/WebP voor snelheid)
- [ ] Domeinnaam + analytics instellen bij deploy

## Structuur

```
src/
  components/
    ui/        — basis UI-elementen (button, input, accordion, ...)
    site/      — herbruikbare secties (header, footer, hero, contactform, ...)
  pages/       — Home, Diensten, Over ons, Contact, Privacybeleid, 404
  lib/
    content.ts — alle bedrijfsinfo op één plek
    utils.ts   — classnames-helper
```

## Waarom dit zo is opgezet

- **Eén centraal content-bestand** (`src/lib/content.ts`) zodat je per klant
  maar op één plek naam/contactgegevens hoeft aan te passen.
- **CSS-variabelen voor kleuren** (`src/index.css`) zodat huisstijl wisselen
  geen gezoek in losse classes is.
- **Losse, herbruikbare componenten** per sectie, zodat je per project kunt
  mixen en matchen zonder van nul te beginnen.
