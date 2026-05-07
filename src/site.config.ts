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
  businessName:   "PLACEHOLDER Business Name",       // e.g. "Vallejo Pest Pros"
  tagline:        "PLACEHOLDER one-line value prop",  // e.g. "Same-day pest control in Vallejo"
  niche:          "PLACEHOLDER-niche-slug",           // e.g. "pest-control" (URL-safe)
  primaryCity:    "PLACEHOLDER City",                 // e.g. "Vallejo"
  state:          "XX",                               // 2-letter state code
  phone:          "+1-555-000-0000",                  // Twilio tracking number
  email:          "leads@example.com",

  // ── Geography ──────────────────────────────────────────────────────────────
  serviceArea:    ["PLACEHOLDER City", "Area 2", "Area 3"],
  addressStreet:  "PLACEHOLDER Street Address",
  addressZip:     "00000",

  // ── Services ───────────────────────────────────────────────────────────────
  services: [
    "PLACEHOLDER Primary Service",
    "PLACEHOLDER Service Two",
    "PLACEHOLDER Service Three",
  ],

  // ── Trust proof points ─────────────────────────────────────────────────────
  trust: {
    responseTime:   "PLACEHOLDER (e.g. Same-day service)",
    yearsInBusiness: 0,          // update to real number if known
    certifications:  "PLACEHOLDER (e.g. Licensed & insured)",
    guarantee:       "PLACEHOLDER (e.g. Satisfaction guaranteed)",
  },

  // ── Call tracking (Twilio) ─────────────────────────────────────────────────
  // Pre-revenue: buy a Twilio number (~$1.15/mo), paste it above as `phone`,
  // and fill these in so the Worker can forward calls.
  twilio: {
    accountSid:     "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    forwardToPhone: "+1-555-000-0001",  // tenant's real number
  },

  // ── Analytics ─────────────────────────────────────────────────────────────
  ga4MeasurementId: "G-XXXXXXXXXX",    // leave as-is until GA4 property is set up

  // ── Design ────────────────────────────────────────────────────────────────
  accentColor: "#1e40af",              // hex; swap per niche (blue=trust, green=eco, etc.)

  // ── Schema.org ────────────────────────────────────────────────────────────
  schema: {
    businessType: "LocalBusiness",     // or "Plumber", "Pest Control Service", etc.
    priceRange:   "$$",
    areaServed:   "PLACEHOLDER City metro area",
    openingHours: "Mo-Su 00:00-24:00",
  },

  // ── Portfolio agent metadata ───────────────────────────────────────────────
  portfolioId:      "placeholder-site-01",   // kebab-case unique ID
  semrushProjectId: "",                      // fill after SEMrush project created
  gbpLocationId:    "",                      // fill after GBP listing claimed
} as const;

export type SiteConfig = typeof siteConfig;
