import type { Brand } from "@/types";

/**
 * Sample telehealth brand / provider data — illustrative only.
 * Affiliate URLs are placeholders pointing to example.com.
 */
export const brands: Brand[] = [
  {
    slug: "trimrx",
    goSlug: "trimrx",
    name: "TrimRx",
    tagline: "Personalized GLP-1 weight care",
    shortDescription:
      "Physician-supervised semaglutide and tirzepatide programs with monthly coaching and free shipping on every plan.",
    website: "https://example.com/trimrx",
    foundedYear: 2021,
    hqLocation: "Austin, TX",
    affiliateUrl: "https://example.com/partner/trimrx?aff=compare-treatments",
    affiliateOfferId: "off_trimrx_glp1",
    payoutModel: "cpa",
    trackingParams: { utm_source: "comparetreatments" },
    brandColor: "bg-brand-600",
  },
  {
    slug: "altrx",
    goSlug: "altrx",
    name: "AltRx",
    tagline: "Compounded GLP-1, simplified",
    shortDescription:
      "Lower-cost compounded semaglutide with at-home lab kits and a no-insurance-needed flat monthly price.",
    website: "https://example.com/altrx",
    foundedYear: 2022,
    hqLocation: "Denver, CO",
    affiliateUrl: "https://example.com/partner/altrx?aff=compare-treatments",
    affiliateOfferId: "off_altrx_glp1",
    payoutModel: "cpa",
    brandColor: "bg-accent-600",
  },
  {
    slug: "sunlightrx",
    goSlug: "sunlightrx",
    name: "SunlightRx",
    tagline: "Whole-person metabolic health",
    shortDescription:
      "GLP-1 treatment paired with registered-dietitian nutrition support and quarterly metabolic check-ins.",
    website: "https://example.com/sunlightrx",
    foundedYear: 2020,
    hqLocation: "San Diego, CA",
    affiliateUrl:
      "https://example.com/partner/sunlightrx?aff=compare-treatments",
    affiliateOfferId: "off_sunlightrx_glp1",
    payoutModel: "cpa",
    brandColor: "bg-rating-500",
  },
  {
    slug: "remedy-meds",
    goSlug: "remedy-meds",
    name: "Remedy Meds",
    tagline: "Doctor-led weight loss",
    shortDescription:
      "Board-certified clinicians, brand-name and compounded GLP-1 options, and insurance navigation assistance.",
    website: "https://example.com/remedy-meds",
    foundedYear: 2021,
    hqLocation: "Chicago, IL",
    affiliateUrl:
      "https://example.com/partner/remedy-meds?aff=compare-treatments",
    affiliateOfferId: "off_remedymeds_glp1",
    payoutModel: "ppl",
    brandColor: "bg-brand-700",
  },
  {
    slug: "betterme",
    goSlug: "betterme",
    name: "BetterMe",
    tagline: "Habit-first weight programs",
    shortDescription:
      "Behavioral weight-loss coaching with an optional clinician-prescribed GLP-1 add-on for eligible members.",
    website: "https://example.com/betterme",
    foundedYear: 2017,
    hqLocation: "New York, NY",
    affiliateUrl:
      "https://example.com/partner/betterme?aff=compare-treatments",
    affiliateOfferId: "off_betterme_glp1",
    payoutModel: "cpa",
    brandColor: "bg-brand-500",
  },
  {
    slug: "measured",
    goSlug: "measured",
    name: "Measured",
    tagline: "Data-driven metabolic care",
    shortDescription:
      "Connected scales, lab-based dosing decisions, and ongoing clinician oversight for GLP-1 treatment plans.",
    website: "https://example.com/measured",
    foundedYear: 2019,
    hqLocation: "Boston, MA",
    affiliateUrl:
      "https://example.com/partner/measured?aff=compare-treatments",
    affiliateOfferId: "off_measured_glp1",
    payoutModel: "ppl",
    brandColor: "bg-accent-700",
  },
  {
    slug: "noom",
    goSlug: "noom",
    name: "Noom",
    tagline: "Psychology-based weight loss",
    shortDescription:
      "Well-known behavior-change platform with a medication track that connects eligible users to GLP-1 prescribers.",
    website: "https://example.com/noom",
    foundedYear: 2008,
    hqLocation: "New York, NY",
    affiliateUrl: "https://example.com/partner/noom?aff=compare-treatments",
    affiliateOfferId: "off_noom_glp1",
    payoutModel: "cpa",
    brandColor: "bg-rating-500",
  },
  {
    slug: "ro",
    goSlug: "ro-weightloss",
    name: "Ro",
    tagline: "Full-service telehealth",
    shortDescription:
      "Established telehealth provider offering brand-name GLP-1s, pharmacy fulfillment and insurance support.",
    website: "https://example.com/ro",
    foundedYear: 2017,
    hqLocation: "New York, NY",
    affiliateUrl: "https://example.com/partner/ro?aff=compare-treatments",
    affiliateOfferId: "off_ro_glp1",
    payoutModel: "ppl",
    brandColor: "bg-brand-900",
  },
  {
    slug: "medvi",
    goSlug: "medvi",
    name: "MEDVi",
    tagline: "Affordable GLP-1 access",
    shortDescription:
      "Membership-style telehealth with compounded semaglutide and tirzepatide and transparent flat pricing.",
    website: "https://example.com/medvi",
    foundedYear: 2022,
    hqLocation: "Miami, FL",
    affiliateUrl: "https://example.com/partner/medvi?aff=compare-treatments",
    affiliateOfferId: "off_medvi_glp1",
    payoutModel: "cpa",
    brandColor: "bg-brand-600",
  },
  {
    slug: "fridays",
    goSlug: "fridays",
    name: "Fridays",
    tagline: "Streamlined weekly dosing",
    shortDescription:
      "Direct-to-door compounded GLP-1 plans with a simple onboarding quiz and weekly progress check-ins.",
    website: "https://example.com/fridays",
    foundedYear: 2023,
    hqLocation: "Seattle, WA",
    affiliateUrl:
      "https://example.com/partner/fridays?aff=compare-treatments",
    affiliateOfferId: "off_fridays_glp1",
    payoutModel: "ppc",
    brandColor: "bg-accent-600",
  },

  // ── Multi-category telehealth brands ─────────────────────────
  {
    slug: "hims",
    goSlug: "hims",
    name: "Hims",
    tagline: "All-in-one men's telehealth",
    shortDescription:
      "Established men's health platform offering clinician-prescribed care for ED, hair loss, skin and mental health in one membership.",
    website: "https://example.com/hims",
    foundedYear: 2017,
    hqLocation: "San Francisco, CA",
    affiliateUrl: "https://example.com/partner/hims?aff=compare-treatments",
    affiliateOfferId: "off_hims_multi",
    payoutModel: "cpa",
    trackingParams: { utm_source: "comparetreatments" },
    brandColor: "bg-ink-900",
  },
  {
    slug: "hers",
    goSlug: "hers",
    name: "Hers",
    tagline: "Women's telehealth, simplified",
    shortDescription:
      "Women's health platform with clinician-prescribed care for birth control, skin, mental health and menopause support.",
    website: "https://example.com/hers",
    foundedYear: 2018,
    hqLocation: "San Francisco, CA",
    affiliateUrl: "https://example.com/partner/hers?aff=compare-treatments",
    affiliateOfferId: "off_hers_multi",
    payoutModel: "cpa",
    trackingParams: { utm_source: "comparetreatments" },
    brandColor: "bg-accent-700",
  },

  // ── Men's Health ─────────────────────────────────────────────
  {
    slug: "manual",
    goSlug: "manual-mens",
    name: "Manual",
    tagline: "Proactive men's healthcare",
    shortDescription:
      "Subscription men's health service covering ED, hair loss and everyday wellbeing with licensed clinician oversight.",
    website: "https://example.com/manual",
    foundedYear: 2020,
    hqLocation: "Austin, TX",
    affiliateUrl: "https://example.com/partner/manual?aff=compare-treatments",
    affiliateOfferId: "off_manual_mens",
    payoutModel: "cpa",
    brandColor: "bg-brand-700",
  },
  {
    slug: "vault-health",
    goSlug: "vault-health",
    name: "Vault Health",
    tagline: "Men's hormone and vitality care",
    shortDescription:
      "Telehealth focused on men's hormonal health, energy and preventive care with lab testing and clinician supervision.",
    website: "https://example.com/vault-health",
    foundedYear: 2019,
    hqLocation: "New York, NY",
    affiliateUrl:
      "https://example.com/partner/vault-health?aff=compare-treatments",
    affiliateOfferId: "off_vault_mens",
    payoutModel: "ppl",
    brandColor: "bg-brand-900",
  },
  {
    slug: "stagwell-md",
    goSlug: "stagwell-md",
    name: "Stagwell MD",
    tagline: "Clinician-led men's primary care",
    shortDescription:
      "Online men's primary care covering everyday concerns, ED and preventive screening with board-certified clinicians.",
    website: "https://example.com/stagwell-md",
    foundedYear: 2021,
    hqLocation: "Denver, CO",
    affiliateUrl:
      "https://example.com/partner/stagwell-md?aff=compare-treatments",
    affiliateOfferId: "off_stagwell_mens",
    payoutModel: "ppl",
    brandColor: "bg-brand-600",
  },
  {
    slug: "northpeak-mens",
    goSlug: "northpeak-mens",
    name: "NorthPeak Men's",
    tagline: "Straightforward men's care",
    shortDescription:
      "No-frills men's telehealth with flat monthly pricing for ED, hair loss and general wellness consultations.",
    website: "https://example.com/northpeak-mens",
    foundedYear: 2022,
    hqLocation: "Minneapolis, MN",
    affiliateUrl:
      "https://example.com/partner/northpeak-mens?aff=compare-treatments",
    affiliateOfferId: "off_northpeak_mens",
    payoutModel: "cpa",
    brandColor: "bg-accent-600",
  },

  // ── Women's Health ───────────────────────────────────────────
  {
    slug: "lemonaid-womens",
    goSlug: "lemonaid-womens",
    name: "Lemonaid Women's",
    tagline: "Everyday women's telehealth",
    shortDescription:
      "Online women's health service for birth control, UTIs and primary care with licensed US clinicians.",
    website: "https://example.com/lemonaid-womens",
    foundedYear: 2014,
    hqLocation: "San Francisco, CA",
    affiliateUrl:
      "https://example.com/partner/lemonaid-womens?aff=compare-treatments",
    affiliateOfferId: "off_lemonaid_womens",
    payoutModel: "cpa",
    brandColor: "bg-accent-600",
  },
  {
    slug: "nurx",
    goSlug: "nurx",
    name: "Nurx",
    tagline: "Birth control delivered",
    shortDescription:
      "Telehealth service known for online birth control, plus testing and other women's health care with clinician review.",
    website: "https://example.com/nurx",
    foundedYear: 2015,
    hqLocation: "San Francisco, CA",
    affiliateUrl: "https://example.com/partner/nurx?aff=compare-treatments",
    affiliateOfferId: "off_nurx_womens",
    payoutModel: "cpa",
    brandColor: "bg-brand-600",
  },
  {
    slug: "evernow",
    goSlug: "evernow",
    name: "Evernow",
    tagline: "Menopause care, online",
    shortDescription:
      "Telehealth focused on menopause and perimenopause, with clinician-guided treatment plans including hormone therapy where appropriate.",
    website: "https://example.com/evernow",
    foundedYear: 2019,
    hqLocation: "San Francisco, CA",
    affiliateUrl: "https://example.com/partner/evernow?aff=compare-treatments",
    affiliateOfferId: "off_evernow_womens",
    payoutModel: "ppl",
    brandColor: "bg-rating-500",
  },
  {
    slug: "willow-womens",
    goSlug: "willow-womens",
    name: "Willow Women's",
    tagline: "Whole-life women's care",
    shortDescription:
      "Membership women's health platform spanning contraception, menopause support and mental health with licensed clinicians.",
    website: "https://example.com/willow-womens",
    foundedYear: 2021,
    hqLocation: "Portland, OR",
    affiliateUrl:
      "https://example.com/partner/willow-womens?aff=compare-treatments",
    affiliateOfferId: "off_willow_womens",
    payoutModel: "cpa",
    brandColor: "bg-brand-700",
  },
  {
    slug: "midday-health",
    goSlug: "midday-health",
    name: "Midday Health",
    tagline: "Midlife women's health",
    shortDescription:
      "Telehealth for midlife women covering menopause, metabolic and bone health with clinician oversight and lab testing.",
    website: "https://example.com/midday-health",
    foundedYear: 2022,
    hqLocation: "Boston, MA",
    affiliateUrl:
      "https://example.com/partner/midday-health?aff=compare-treatments",
    affiliateOfferId: "off_midday_womens",
    payoutModel: "ppl",
    brandColor: "bg-accent-700",
  },

  // ── ED ───────────────────────────────────────────────────────
  {
    slug: "bluechew",
    goSlug: "bluechew",
    name: "BlueChew",
    tagline: "Chewable ED treatment",
    shortDescription:
      "Telehealth ED service offering clinician-prescribed chewable sildenafil and tadalafil with discreet monthly delivery.",
    website: "https://example.com/bluechew",
    foundedYear: 2018,
    hqLocation: "Chicago, IL",
    affiliateUrl: "https://example.com/partner/bluechew?aff=compare-treatments",
    affiliateOfferId: "off_bluechew_ed",
    payoutModel: "cpa",
    brandColor: "bg-brand-600",
  },
  {
    slug: "rex-md",
    goSlug: "rex-md",
    name: "Rex MD",
    tagline: "Men's ED and wellness",
    shortDescription:
      "Men's telehealth with a strong ED focus, offering clinician-prescribed PDE5 inhibitors and ongoing support.",
    website: "https://example.com/rex-md",
    foundedYear: 2019,
    hqLocation: "New York, NY",
    affiliateUrl: "https://example.com/partner/rex-md?aff=compare-treatments",
    affiliateOfferId: "off_rexmd_ed",
    payoutModel: "cpa",
    brandColor: "bg-brand-900",
  },
  {
    slug: "upguys",
    goSlug: "upguys",
    name: "UpGuys",
    tagline: "Discreet ED care",
    shortDescription:
      "Online ED clinic offering generic sildenafil and tadalafil after a licensed clinician review, with plain-package shipping.",
    website: "https://example.com/upguys",
    foundedYear: 2021,
    hqLocation: "Seattle, WA",
    affiliateUrl: "https://example.com/partner/upguys?aff=compare-treatments",
    affiliateOfferId: "off_upguys_ed",
    payoutModel: "ppc",
    brandColor: "bg-accent-600",
  },
  {
    slug: "phoenix-ed",
    goSlug: "phoenix-ed",
    name: "Phoenix",
    tagline: "Men's ED treatment online",
    shortDescription:
      "Telehealth ED service connecting men with licensed clinicians for personalized PDE5 inhibitor plans.",
    website: "https://example.com/phoenix-ed",
    foundedYear: 2020,
    hqLocation: "Phoenix, AZ",
    affiliateUrl:
      "https://example.com/partner/phoenix-ed?aff=compare-treatments",
    affiliateOfferId: "off_phoenix_ed",
    payoutModel: "cpa",
    brandColor: "bg-rating-500",
  },

  // ── Hair Loss ────────────────────────────────────────────────
  {
    slug: "keeps",
    goSlug: "keeps",
    name: "Keeps",
    tagline: "Hair loss treatment for men",
    shortDescription:
      "Men's hair-loss telehealth offering clinician-prescribed finasteride and minoxidil with ongoing progress check-ins.",
    website: "https://example.com/keeps",
    foundedYear: 2018,
    hqLocation: "New York, NY",
    affiliateUrl: "https://example.com/partner/keeps?aff=compare-treatments",
    affiliateOfferId: "off_keeps_hair",
    payoutModel: "cpa",
    brandColor: "bg-brand-700",
  },
  {
    slug: "happy-head",
    goSlug: "happy-head",
    name: "Happy Head",
    tagline: "Custom hair-loss formulas",
    shortDescription:
      "Dermatologist-founded service offering customized prescription topical and oral hair-loss formulas after a clinical review.",
    website: "https://example.com/happy-head",
    foundedYear: 2020,
    hqLocation: "Los Angeles, CA",
    affiliateUrl:
      "https://example.com/partner/happy-head?aff=compare-treatments",
    affiliateOfferId: "off_happyhead_hair",
    payoutModel: "cpa",
    brandColor: "bg-accent-600",
  },
  {
    slug: "strut-health",
    goSlug: "strut-health",
    name: "Strut Health",
    tagline: "Compounded hair-loss care",
    shortDescription:
      "Telehealth offering clinician-prescribed combination hair-loss formulas, including topical finasteride and minoxidil blends.",
    website: "https://example.com/strut-health",
    foundedYear: 2018,
    hqLocation: "Austin, TX",
    affiliateUrl:
      "https://example.com/partner/strut-health?aff=compare-treatments",
    affiliateOfferId: "off_strut_hair",
    payoutModel: "ppl",
    brandColor: "bg-rating-500",
  },
  {
    slug: "crownworks",
    goSlug: "crownworks",
    name: "CrownWorks",
    tagline: "Simple hair regrowth plans",
    shortDescription:
      "Straightforward hair-loss telehealth with flat monthly pricing for clinician-prescribed finasteride and minoxidil.",
    website: "https://example.com/crownworks",
    foundedYear: 2022,
    hqLocation: "Nashville, TN",
    affiliateUrl:
      "https://example.com/partner/crownworks?aff=compare-treatments",
    affiliateOfferId: "off_crownworks_hair",
    payoutModel: "cpa",
    brandColor: "bg-brand-600",
  },

  // ── Skin & Dermatology ───────────────────────────────────────
  {
    slug: "curology",
    goSlug: "curology",
    name: "Curology",
    tagline: "Custom prescription skincare",
    shortDescription:
      "Online dermatology service offering personalized prescription formulas for acne and anti-aging after a clinician review.",
    website: "https://example.com/curology",
    foundedYear: 2014,
    hqLocation: "San Diego, CA",
    affiliateUrl: "https://example.com/partner/curology?aff=compare-treatments",
    affiliateOfferId: "off_curology_skin",
    payoutModel: "cpa",
    brandColor: "bg-accent-600",
  },
  {
    slug: "apostrophe",
    goSlug: "apostrophe",
    name: "Apostrophe",
    tagline: "Dermatologist-backed skincare",
    shortDescription:
      "Telehealth dermatology connecting patients with board-certified dermatology providers for prescription skin treatments.",
    website: "https://example.com/apostrophe",
    foundedYear: 2019,
    hqLocation: "Tempe, AZ",
    affiliateUrl:
      "https://example.com/partner/apostrophe?aff=compare-treatments",
    affiliateOfferId: "off_apostrophe_skin",
    payoutModel: "cpa",
    brandColor: "bg-brand-900",
  },
  {
    slug: "dermatica",
    goSlug: "dermatica",
    name: "Dermatica",
    tagline: "Personalized skin science",
    shortDescription:
      "Subscription dermatology service with clinician-adjusted prescription formulas for acne, anti-aging and pigmentation.",
    website: "https://example.com/dermatica",
    foundedYear: 2018,
    hqLocation: "Boston, MA",
    affiliateUrl:
      "https://example.com/partner/dermatica?aff=compare-treatments",
    affiliateOfferId: "off_dermatica_skin",
    payoutModel: "cpa",
    brandColor: "bg-brand-600",
  },
  {
    slug: "clearway-derm",
    goSlug: "clearway-derm",
    name: "Clearway Dermatology",
    tagline: "Online derm consultations",
    shortDescription:
      "Telehealth dermatology offering photo-based consultations and prescription treatment plans with licensed providers.",
    website: "https://example.com/clearway-derm",
    foundedYear: 2021,
    hqLocation: "Atlanta, GA",
    affiliateUrl:
      "https://example.com/partner/clearway-derm?aff=compare-treatments",
    affiliateOfferId: "off_clearway_skin",
    payoutModel: "ppl",
    brandColor: "bg-rating-500",
  },

  // ── Sexual Health ────────────────────────────────────────────
  {
    slug: "everlywell-sti",
    goSlug: "everlywell-sti",
    name: "Everlywell",
    tagline: "At-home health testing",
    shortDescription:
      "Well-known at-home testing brand offering STI panels processed by CLIA-certified labs with clinician-supported results.",
    website: "https://example.com/everlywell-sti",
    foundedYear: 2015,
    hqLocation: "Austin, TX",
    affiliateUrl:
      "https://example.com/partner/everlywell-sti?aff=compare-treatments",
    affiliateOfferId: "off_everlywell_sti",
    payoutModel: "cpa",
    brandColor: "bg-accent-600",
  },
  {
    slug: "mistr",
    goSlug: "mistr",
    name: "Mistr",
    tagline: "Free online PrEP care",
    shortDescription:
      "Telehealth service focused on HIV prevention, connecting patients with clinicians for PrEP and routine STI testing.",
    website: "https://example.com/mistr",
    foundedYear: 2020,
    hqLocation: "Los Angeles, CA",
    affiliateUrl: "https://example.com/partner/mistr?aff=compare-treatments",
    affiliateOfferId: "off_mistr_sexual",
    payoutModel: "ppl",
    brandColor: "bg-brand-900",
  },
  {
    slug: "stix",
    goSlug: "stix",
    name: "Stix",
    tagline: "Sexual and reproductive care",
    shortDescription:
      "Online service for at-home STI testing, UTI care and reproductive health with discreet shipping and clinician support.",
    website: "https://example.com/stix",
    foundedYear: 2019,
    hqLocation: "New York, NY",
    affiliateUrl: "https://example.com/partner/stix?aff=compare-treatments",
    affiliateOfferId: "off_stix_sexual",
    payoutModel: "cpa",
    brandColor: "bg-rating-500",
  },
  {
    slug: "tbd-health",
    goSlug: "tbd-health",
    name: "TBD Health",
    tagline: "Modern sexual healthcare",
    shortDescription:
      "Sexual-health telehealth pairing at-home and in-person STI testing with clinician consultations and follow-up treatment.",
    website: "https://example.com/tbd-health",
    foundedYear: 2021,
    hqLocation: "Las Vegas, NV",
    affiliateUrl:
      "https://example.com/partner/tbd-health?aff=compare-treatments",
    affiliateOfferId: "off_tbd_sexual",
    payoutModel: "ppl",
    brandColor: "bg-brand-600",
  },

  // ── Blood Testing ────────────────────────────────────────────
  {
    slug: "everlywell-labs",
    goSlug: "everlywell-labs",
    name: "Everlywell Labs",
    tagline: "At-home biomarker panels",
    shortDescription:
      "At-home blood testing across wellness, hormone and metabolic panels, processed by CLIA-certified, accredited labs.",
    website: "https://example.com/everlywell-labs",
    foundedYear: 2015,
    hqLocation: "Austin, TX",
    affiliateUrl:
      "https://example.com/partner/everlywell-labs?aff=compare-treatments",
    affiliateOfferId: "off_everlywell_labs",
    payoutModel: "cpa",
    brandColor: "bg-accent-600",
  },
  {
    slug: "letsgetchecked",
    goSlug: "letsgetchecked",
    name: "LetsGetChecked",
    tagline: "Home health testing",
    shortDescription:
      "At-home blood testing service with a broad panel range and nurse-supported results from accredited laboratories.",
    website: "https://example.com/letsgetchecked",
    foundedYear: 2015,
    hqLocation: "New York, NY",
    affiliateUrl:
      "https://example.com/partner/letsgetchecked?aff=compare-treatments",
    affiliateOfferId: "off_lgc_labs",
    payoutModel: "cpa",
    brandColor: "bg-brand-600",
  },
  {
    slug: "function-health",
    goSlug: "function-health",
    name: "Function Health",
    tagline: "Annual biomarker membership",
    shortDescription:
      "Membership service offering comprehensive annual lab panels with clinician review and a tracking dashboard.",
    website: "https://example.com/function-health",
    foundedYear: 2023,
    hqLocation: "Austin, TX",
    affiliateUrl:
      "https://example.com/partner/function-health?aff=compare-treatments",
    affiliateOfferId: "off_function_labs",
    payoutModel: "ppl",
    brandColor: "bg-brand-900",
  },
  {
    slug: "marek-labs",
    goSlug: "marek-labs",
    name: "Marek Diagnostics",
    tagline: "Targeted lab testing",
    shortDescription:
      "At-home and lab-draw blood testing focused on metabolic, hormone and cardiovascular panels with clinician guidance.",
    website: "https://example.com/marek-labs",
    foundedYear: 2021,
    hqLocation: "Houston, TX",
    affiliateUrl:
      "https://example.com/partner/marek-labs?aff=compare-treatments",
    affiliateOfferId: "off_marek_labs",
    payoutModel: "cpa",
    brandColor: "bg-rating-500",
  },

  // ── Advanced Wellness ────────────────────────────────────────
  {
    slug: "lifeforce",
    goSlug: "lifeforce",
    name: "Lifeforce",
    tagline: "Proactive health optimization",
    shortDescription:
      "Membership wellness program combining regular lab testing, clinician consultations and personalized health coaching.",
    website: "https://example.com/lifeforce",
    foundedYear: 2022,
    hqLocation: "Los Angeles, CA",
    affiliateUrl:
      "https://example.com/partner/lifeforce?aff=compare-treatments",
    affiliateOfferId: "off_lifeforce_wellness",
    payoutModel: "ppl",
    brandColor: "bg-brand-900",
  },
  {
    slug: "superpower",
    goSlug: "superpower",
    name: "Superpower",
    tagline: "Whole-body health membership",
    shortDescription:
      "Preventive health membership pairing comprehensive lab panels with clinician review and a guided wellness plan.",
    website: "https://example.com/superpower",
    foundedYear: 2023,
    hqLocation: "San Francisco, CA",
    affiliateUrl:
      "https://example.com/partner/superpower?aff=compare-treatments",
    affiliateOfferId: "off_superpower_wellness",
    payoutModel: "cpa",
    brandColor: "bg-brand-600",
  },
  {
    slug: "modern-age",
    goSlug: "modern-age",
    name: "Modern Age",
    tagline: "Healthy-aging programs",
    shortDescription:
      "Wellness service focused on healthy aging — energy, skin, bone and metabolic health — with clinician-guided plans.",
    website: "https://example.com/modern-age",
    foundedYear: 2021,
    hqLocation: "New York, NY",
    affiliateUrl:
      "https://example.com/partner/modern-age?aff=compare-treatments",
    affiliateOfferId: "off_modernage_wellness",
    payoutModel: "ppl",
    brandColor: "bg-accent-700",
  },
  {
    slug: "thrivelab",
    goSlug: "thrivelab",
    name: "ThriveLab",
    tagline: "Sleep and metabolic wellness",
    shortDescription:
      "Telehealth wellness program centered on sleep, stress and metabolic health, with clinician oversight and coaching.",
    website: "https://example.com/thrivelab",
    foundedYear: 2022,
    hqLocation: "Denver, CO",
    affiliateUrl:
      "https://example.com/partner/thrivelab?aff=compare-treatments",
    affiliateOfferId: "off_thrivelab_wellness",
    payoutModel: "cpa",
    brandColor: "bg-rating-500",
  },
];

/** Look up a brand by its public slug. */
export function getBrand(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}

/** Look up a brand by its `/go/[slug]` redirect slug. */
export function getBrandByGoSlug(goSlug: string): Brand | undefined {
  return brands.find((b) => b.goSlug === goSlug);
}
