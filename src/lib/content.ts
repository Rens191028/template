/**
 * Centrale bedrijfsinfo voor de hele site.
 *
 * Dit is het EERSTE bestand dat je per nieuw klantproject invult.
 * Alle componenten (header, footer, contactformulier, enz.) lezen
 * hieruit — je past dus maar op één plek dingen aan.
 */

export const company = {
  name: "Bedrijfsnaam",
  tagline: "Korte, pakkende belofte in één zin",
  phone: "+31 6 00000000",
  phoneDisplay: "06 00000000",
  email: "info@bedrijfsnaam.nl",
  whatsapp: "https://wa.me/31600000000",
  address: {
    street: "Straatnaam 1",
    postalCode: "0000 AA",
    city: "Plaatsnaam",
  },
  // bv. "Ma–Vr 09:00–17:00"
  openingHours: "Ma–Vr 09:00–17:00",
  googleReviewUrl: "https://g.page/r/VUL-HIER-DE-GOOGLE-REVIEW-LINK-IN",
  socials: {
    instagram: "",
    facebook: "",
  },
};

export const nav = [
  { label: "Home", to: "/" },
  { label: "Diensten", to: "/diensten" },
  { label: "Over ons", to: "/over-ons" },
  { label: "Contact", to: "/contact" },
];

export const footerLinks = [
  { label: "Privacybeleid", to: "/privacybeleid" },
  { label: "Contact", to: "/contact" },
];
