"use client";

import { Translations } from "@/lib/translations";
import { EMAIL, LINKEDIN, WHATSAPP } from "@/lib/constants";

interface FooterProps {
  t: Translations;
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.56 20.45h3.56V9H3.56v11.45z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="#ffffff" aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.44 9.9-9.9s-4.45-9.94-9.91-9.94zm5.8 14.1c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.11.11-1.8-.11-.41-.14-.94-.31-1.62-.6-2.86-1.24-4.72-4.13-4.86-4.32-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.08 1-2.36.24-.26.55-.35.73-.35.19 0 .34 0 .49.01.16.01.37-.06.58.44.24.55.79 1.94.86 2.08.07.14.11.31.02.5-.09.19-.14.31-.28.47-.14.16-.29.36-.42.48-.14.13-.28.28-.12.55.16.28.72 1.19 1.56 1.93 1.08.95 2 1.24 2.28 1.38.28.14.44.12.6-.05.17-.17.7-.81.89-1.08.19-.28.38-.23.63-.14.26.09 1.63.77 1.91.91.28.14.47.21.53.33.07.12.07.68-.17 1.36z" />
    </svg>
  );
}

export function Footer({ t }: FooterProps) {
  return (
    <>
      <footer className="footer">
        <span>{t.footer.copy}</span>
        <div className="footer__links">
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link footer__link--li"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
          <a href={`mailto:${EMAIL}`} className="footer__link footer__link--mail">
            <MailIcon />
            Email
          </a>
        </div>
      </footer>

      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="fab-wa"
        aria-label={t.a11y.whatsapp}
      >
        <WhatsAppIcon />
      </a>
    </>
  );
}
