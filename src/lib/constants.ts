// Site-wide constants
export const SITE_URL = "https://cristianmateos.es";
export const CALENDLY = "https://cal.com/cristian-mateos-jimenez-mgukds";
export const CAL_EMBED = `${CALENDLY}?embed=true&layout=week_view&hideEventTypeDetails=true`;
export const FORMSPREE = "https://formspree.io/f/xdaybdbz";
export const EMAIL = "c.mateos.jimenez@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/cmateosjimenez88/";
export const PHONE = "+34635071241";
export const WHATSAPP = `https://wa.me/${PHONE.replace("+", "")}`;

/** Section ids in document order — drives the sidebar scroll-spy. */
export const SECTION_IDS = [
  "hero",
  "services",
  "work",
  "stack",
  "about",
  "contact",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];
