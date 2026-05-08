/**
 * ─────────────────────────────────────────────────────────────────────────────
 * site.config.ts — THE ONLY FILE THAT CHANGES PER SITE
 *
 * Clone site-template, update every PLACEHOLDER below, delete unused fields.
 * Everything else (components, pages, schema, layout) reads from this file.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const siteConfig = {
  // ── Identity ───────────────────────────────────────────────────────────────
  businessName:   "Amarillo Foundation",
  tagline:        "Foundation repair in Amarillo, caliche soil specialists, free inspection, lifetime warranty",
  niche:          "foundation-repair",
  primaryCity:    "Amarillo",
  state:          "TX",
  phone:          "+1-PLACEHOLDER-TWILIO",   // replace with Twilio tracking number
  email:          "leads@amarillofoundation.com",

  // ── Geography ──────────────────────────────────────────────────────────────
  serviceArea:    ["Amarillo", "Canyon", "West Amarillo", "South Amarillo", "East Amarillo", "Pampa", "Borger"],
  addressStreet:  "Amarillo, TX",
  addressZip:     "79106",

  // ── Services ───────────────────────────────────────────────────────────────
  services: [
    "Free Foundation Inspection",
    "Pier Installation (Caliche Drilling)",
    "Slab Lifting & Leveling",
    "Foundation Crack Repair",
    "Drainage Correction",
  ],

  // ── Trust proof points ─────────────────────────────────────────────────────
  trust: {
    responseTime:    "Free inspection within 48 hours",
    yearsInBusiness: 0,
    certifications:  "TDLR Licensed — TX Structural Repair Contractor",
    guarantee:       "Lifetime transferable warranty on pier installations",
  },

  // ── Call tracking (Twilio) ─────────────────────────────────────────────────
  twilio: {
    accountSid:     "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    forwardToPhone: "+1-PLACEHOLDER-FORWARD",
  },

  // ── Analytics ─────────────────────────────────────────────────────────────
  ga4MeasurementId: "G-XXXXXXXXXX",

  // ── Design ────────────────────────────────────────────────────────────────
  accentColor: "#92400e",   // warm amber/sienna for Panhandle earth tones

  // ── Schema.org ────────────────────────────────────────────────────────────
  schema: {
    businessType: "HomeAndConstructionBusiness",
    priceRange:   "$$",
    areaServed:   "Amarillo, TX and the Texas Panhandle",
    openingHours: "Mo-Fr 07:00-18:00",
  },

  // ── Portfolio agent metadata ───────────────────────────────────────────────
  portfolioId:      "amarillo-foundation",
  semrushProjectId: "",
  gbpLocationId:    "",
} as const;

export type SiteConfig = typeof siteConfig;
