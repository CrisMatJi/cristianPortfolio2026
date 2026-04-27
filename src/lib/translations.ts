export type Lang = "es" | "en";

export interface Translations {
  nav: {
    work: string;
    services: string;
    about: string;
    stack: string;
    cta: string;
  };
  hero: {
    avail: string;
    hi: string;
    h1: string;
    h1Accent: string;
    sub: string;
    cta: string;
    cta2: string;
    pills: string[];
    strip: string[];
  };
  about: {
    tag: string;
    h: string;
    h2: string;
    p1: string;
    p2: string;
    cards: { label: string; val: string }[];
    badges: string[];
    workMode: { label: string; val: string };
  };
  projects: {
    tag: string;
    h: string;
    h2: string;
    sub: string;
    cta: string;
    items: {
      n: string;
      name: string;
      cat: string;
      year: string;
      desc: string;
      quote: string;
      url: string;
      tags: string[];
      hue: string;
    }[];
  };
  services: {
    h: string;
    items: { icon: string; title: string; desc: string; tags: string[] }[];
  };
  stack: {
    tag: string;
    h: string;
    h2: string;
    steps: { n: string; icon: string; title: string; desc: string }[];
    techStrip: string[];
  };
  achievements: {
    items: { v: string; l: string; sub: string }[];
  };
  contact: {
    tag: string;
    h: string;
    h2: string;
    sub: string;
    cta: string;
    avail: string;
    tabCal: string;
    tabForm: string;
    form: {
      name: string;
      email: string;
      project: string;
      send: string;
      sending: string;
      ok: string;
    };
  };
  footer: {
    copy: string;
  };
}

const T: Record<Lang, Translations> = {
  es: {
    nav: {
      work: "Proyectos",
      services: "Servicios",
      about: "Sobre mí",
      stack: "Proceso",
      cta: "Agendar llamada",
    },
    hero: {
      avail: "Disponible para proyectos",
      hi: "Hola, soy Cristian.",
      h1: "Software a medida para",
      h1Accent: "hacer crecer tu negocio.",
      sub: "Full-stack developer con más de 12 años construyendo productos digitales que generan resultados reales. Sin agencias, sin intermediarios.",
      cta: "Agenda una llamada →",
      cta2: "Ver proyectos",
      pills: [
        "Full-Stack Dev",
        "Mobile & Android",
        "IA & Automatización",
        "API Builder",
        "React Expert",
        "UX Focused",
        "Pixel Perfect",
      ],
      strip: [
        "12+ Años de experiencia",
        "Full-Stack Developer",
        "Mobile Apps",
        "Automatización IA",
        "Software a medida",
        "Landing Pages",
        "Freelance disponible",
      ],
    },
    about: {
      tag: "Sobre mí",
      h: "Código que resuelve.",
      h2: "Developer que responde.",
      p1: "Empecé en sistemas internos, aprendí que el software que falla cuesta dinero real. Hoy combino mi trabajo como desarrollador con proyectos freelance seleccionados — solo los que puedo hacer bien.",
      p2: "Me comprometo con el resultado, no con el presupuesto. Comunico directamente, sin intermediarios ni comerciales.",
      cards: [
        { label: "Ubicación", val: "España" },
        { label: "En el sector desde", val: "2012" },
        { label: "Disponibilidad", val: "Freelance" },
        { label: "Idiomas", val: "ES · EN" },
      ],
      badges: [
        "Disponible ahora",
        "Responde en < 24h",
        "Sin agencia, código directo",
      ],
      workMode: {
        label: "Modo de trabajo",
        val: "Proyecto a medida · Software seguro · Comunicación directa · Disponibilidad inmediata",
      },
    },
    projects: {
      tag: "Proyectos",
      h: "Software construido",
      h2: "de la mano del cliente.",
      sub: "Cada proyecto resuelve un problema de negocio concreto.",
      cta: "Visitar proyecto →",
      items: [
        {
          n: "01",
          name: "ACF Fernando Terremoto",
          cat: "Full-Stack · Reservas · Dashboard",
          year: "2024",
          desc: "Sistema completo de reserva de asientos para espectáculos flamencos. Web pública con motor de reservas en tiempo real y dashboard de administración con control de aforo.",
          quote:
            '"Pasamos de gestionar reservas en papel a tener todo automatizado. La web se paga sola."',
          url: "https://www.acffernandoterremoto.es",
          tags: ["Next.js", "Node.js", "PostgreSQL", "Dashboard admin"],
          hue: "#e74c3c",
        },
        {
          n: "02",
          name: "Suárez Studio",
          cat: "Landing Page · Portfolio · Diseño",
          year: "2024",
          desc: "Landing page minimalista para estudio de diseño de interiorismo arquitectónico. Enfocada en transmitir lujo, captar nuevos clientes de alto valor y mostrar proyectos de forma visual.",
          quote:
            '"Clientes me dicen que encuentran mi web más profesional que la de estudios grandes."',
          url: "https://www.suarezstudio.es",
          tags: ["Next.js", "Framer Motion", "CRO", "SEO"],
          hue: "#d4a547",
        },
        {
          n: "03",
          name: "tuPachangaApp",
          cat: "Mobile · Android · Play Store",
          year: "2023",
          desc: "Aplicación Android para organizar partidos de fútbol amateur. Gestión de jugadores, algoritmo de equilibrio automático de equipos y notificaciones push en tiempo real.",
          quote:
            '"Empezamos a usarla en el grupo y ya no queremos volver a los grupos de WhatsApp."',
          url: "https://play.google.com/store/apps/details?id=com.tupachanga",
          tags: [
            "React Native",
            "Android",
            "Algoritmos",
            "Push Notifications",
          ],
          hue: "#27ae60",
        },
      ],
    },
    services: {
      h: "De la idea al producto final.",
      items: [
        {
          icon: "◈",
          title: "Landing Pages",
          desc: "Páginas que convierten visitas en clientes. Diseño, desarrollo y optimización CRO incluidos desde el primer día.",
          tags: ["Next.js", "Framer", "SEO", "CRO"],
        },
        {
          icon: "⬡",
          title: "Software a medida",
          desc: "Plataformas web complejas, dashboards de gestión y herramientas internas que resuelven tu problema real.",
          tags: ["React", "Node.js", "PostgreSQL", "APIs"],
        },
        {
          icon: "⟳",
          title: "Automatizaciones IA",
          desc: "Flujos con n8n, Make u OpenAI que trabajan por ti 24/7. Menos trabajo manual, más resultado.",
          tags: ["n8n", "OpenAI", "Make", "Zapier"],
        },
        {
          icon: "📱",
          title: "Apps Móviles",
          desc: "Aplicaciones nativas para iOS y Android con React Native. Desde el prototipo hasta la publicación en tiendas.",
          tags: ["React Native", "Android", "iOS", "Expo"],
        },
        {
          icon: "⊛",
          title: "APIs & Integraciones",
          desc: "Conecta sistemas que no se hablan entre sí. Pasarelas de pago, CRMs, ERPs y cualquier tercero.",
          tags: ["REST", "GraphQL", "Webhooks", "OAuth"],
        },
        {
          icon: "◇",
          title: "Consultoría Técnica",
          desc: "Auditorías de código, decisiones de arquitectura y roadmaps. Soluciona el problema antes de que cueste caro.",
          tags: ["Auditoría", "Arquitectura", "Roadmap", "Code Review"],
        },
      ],
    },
    stack: {
      tag: "Proceso",
      h: "Fases del",
      h2: "proyecto.",
      steps: [
        {
          n: "01",
          icon: "◉",
          title: "Descubrimiento",
          desc: "Primera llamada gratuita. Entiendo tu negocio y el problema real a resolver antes de escribir una línea de código.",
        },
        {
          n: "02",
          icon: "◈",
          title: "Propuesta clara",
          desc: "Alcance, fases y estimación sin letra pequeña. Sabes exactamente qué vas a recibir, cuándo y por cuánto.",
        },
        {
          n: "03",
          icon: "⬡",
          title: "Desarrollo iterativo",
          desc: "Construyo contigo, no para ti. Updates regulares, demos reales y capacidad de ajustar durante el proceso.",
        },
        {
          n: "04",
          icon: "⟳",
          title: "Lanzamiento",
          desc: "Deploy en producción, pruebas reales y métricas configuradas. Tu producto sale funcionando desde el primer día.",
        },
        {
          n: "05",
          icon: "✦",
          title: "Soporte continuo",
          desc: "No desaparezco al entregar. Disponible para evolucionar el producto, corregir incidencias y seguir creciendo juntos.",
        },
      ],
      techStrip: [
        "React / Next.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "React Native",
        "n8n",
        "OpenAI API",
        "Tailwind CSS",
        "REST APIs",
        "Android",
      ],
    },
    achievements: {
      items: [
        { v: "12+", l: "Años de experiencia", sub: "Desde 2012 en producción" },
        { v: "100%", l: "Compromiso", sub: "Directo y sin intermediarios" },
        { v: "<24h", l: "Tiempo de respuesta", sub: "A cualquier consulta" },
        { v: "B2B", l: "Enfoque empresarial", sub: "Proyectos de negocio real" },
      ],
    },
    contact: {
      tag: "Contacto",
      h: "¿Hablamos de",
      h2: "tu proyecto?",
      sub: "Primera llamada gratuita y sin compromiso. Cuéntame qué necesitas y vemos si encajamos.",
      cta: "Agendar llamada gratis →",
      avail: "2 plazas disponibles este mes",
      tabCal: "Agendar llamada",
      tabForm: "Enviar mensaje",
      form: {
        name: "Tu nombre *",
        email: "Tu email *",
        project: "Cuéntame tu proyecto *",
        send: "Enviar mensaje",
        sending: "Enviando...",
        ok: "¡Enviado! Te respondo en menos de 24h.",
      },
    },
    footer: {
      copy: "© 2026 Cristian Mateos · Full-Stack Developer",
    },
  },

  en: {
    nav: {
      work: "Projects",
      services: "Services",
      about: "About",
      stack: "Process",
      cta: "Book a call",
    },
    hero: {
      avail: "Available for projects",
      hi: "Hi, I'm Cristian.",
      h1: "Custom software to",
      h1Accent: "grow your business.",
      sub: "Full-stack developer with 12+ years building digital products that generate real results. No agencies, no middlemen.",
      cta: "Book a call →",
      cta2: "See projects",
      pills: [
        "Full-Stack Dev",
        "Mobile & Android",
        "AI & Automation",
        "API Builder",
        "React Expert",
        "UX Focused",
        "Pixel Perfect",
      ],
      strip: [
        "12+ Years of experience",
        "Full-Stack Developer",
        "Mobile Apps",
        "AI Automation",
        "Custom Software",
        "Landing Pages",
        "Freelance available",
      ],
    },
    about: {
      tag: "About me",
      h: "Code that delivers.",
      h2: "Developer who responds.",
      p1: "I started in internal systems, learned that failing software costs real money. Today I combine my developer job with selected freelance projects — only the ones I can do well.",
      p2: "I commit to the outcome, not the budget. I communicate directly, no middlemen or account managers.",
      cards: [
        { label: "Location", val: "Spain" },
        { label: "In the industry since", val: "2012" },
        { label: "Availability", val: "Freelance" },
        { label: "Languages", val: "ES · EN" },
      ],
      badges: ["Available now", "Replies in < 24h", "No agency, direct code"],
      workMode: {
        label: "Work style",
        val: "Tailored project · Secure software · Direct communication · Immediate availability",
      },
    },
    projects: {
      tag: "Projects",
      h: "Software built",
      h2: "hand-in-hand with you.",
      sub: "Every project solves a concrete business problem.",
      cta: "Visit project →",
      items: [
        {
          n: "01",
          name: "ACF Fernando Terremoto",
          cat: "Full-Stack · Booking · Dashboard",
          year: "2024",
          desc: "Complete seat reservation system for flamenco shows. Public website with real-time booking engine and administration dashboard with capacity control.",
          quote:
            '"We went from paper reservations to everything automated. The website pays for itself."',
          url: "https://www.acffernandoterremoto.es",
          tags: ["Next.js", "Node.js", "PostgreSQL", "Admin dashboard"],
          hue: "#e74c3c",
        },
        {
          n: "02",
          name: "Suárez Studio",
          cat: "Landing Page · Portfolio · Design",
          year: "2024",
          desc: "Minimalist landing page for an architectural interior design studio. Focused on conveying luxury, attracting high-value clients and showcasing projects visually.",
          quote:
            '"Clients tell me my website looks more professional than large studios."',
          url: "https://www.suarezstudio.es",
          tags: ["Next.js", "Framer Motion", "CRO", "SEO"],
          hue: "#d4a547",
        },
        {
          n: "03",
          name: "tuPachangaApp",
          cat: "Mobile · Android · Play Store",
          year: "2023",
          desc: "Android app to organize amateur football matches. Player management, automatic team balancing algorithm, and real-time push notifications.",
          quote:
            '"We started using it in the group and now we never want to go back to WhatsApp groups."',
          url: "https://play.google.com/store/apps/details?id=com.tupachanga",
          tags: [
            "React Native",
            "Android",
            "Algorithms",
            "Push Notifications",
          ],
          hue: "#27ae60",
        },
      ],
    },
    services: {
      h: "From idea to final product.",
      items: [
        {
          icon: "◈",
          title: "Landing Pages",
          desc: "Pages that turn visitors into clients. Design, development and CRO optimization included from day one.",
          tags: ["Next.js", "Framer", "SEO", "CRO"],
        },
        {
          icon: "⬡",
          title: "Custom Software",
          desc: "Complex web platforms, management dashboards and internal tools that solve your real problem.",
          tags: ["React", "Node.js", "PostgreSQL", "APIs"],
        },
        {
          icon: "⟳",
          title: "AI Automations",
          desc: "Smart flows with n8n, Make or OpenAI that work for you 24/7. Less manual work, more results.",
          tags: ["n8n", "OpenAI", "Make", "Zapier"],
        },
        {
          icon: "📱",
          title: "Mobile Apps",
          desc: "Native iOS and Android apps with React Native. From prototype to store publication.",
          tags: ["React Native", "Android", "iOS", "Expo"],
        },
        {
          icon: "⊛",
          title: "APIs & Integrations",
          desc: "Connect systems that don't talk to each other. Payment gateways, CRMs, ERPs and any third party.",
          tags: ["REST", "GraphQL", "Webhooks", "OAuth"],
        },
        {
          icon: "◇",
          title: "Technical Consulting",
          desc: "Code audits, architecture decisions and roadmaps. Solve the problem before it gets expensive.",
          tags: ["Audit", "Architecture", "Roadmap", "Code Review"],
        },
      ],
    },
    stack: {
      tag: "Process",
      h: "Project",
      h2: "phases.",
      steps: [
        {
          n: "01",
          icon: "◉",
          title: "Discovery",
          desc: "Free first call. I understand your business and the real problem to solve before writing a single line of code.",
        },
        {
          n: "02",
          icon: "◈",
          title: "Clear proposal",
          desc: "Scope, phases and estimate with no fine print. You know exactly what you'll receive, when and for how much.",
        },
        {
          n: "03",
          icon: "⬡",
          title: "Iterative build",
          desc: "I build with you, not for you. Regular updates, real demos and the ability to adjust throughout the process.",
        },
        {
          n: "04",
          icon: "⟳",
          title: "Launch",
          desc: "Production deploy, real tests and metrics configured. Your product goes live and works from day one.",
        },
        {
          n: "05",
          icon: "✦",
          title: "Ongoing support",
          desc: "I don't disappear after delivery. Available to evolve the product, fix issues and keep growing together.",
        },
      ],
      techStrip: [
        "React / Next.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "React Native",
        "n8n",
        "OpenAI API",
        "Tailwind CSS",
        "REST APIs",
        "Android",
      ],
    },
    achievements: {
      items: [
        { v: "12+", l: "Years of experience", sub: "In production since 2012" },
        { v: "100%", l: "Committed", sub: "Direct, no middlemen" },
        { v: "<24h", l: "Response time", sub: "To any query" },
        { v: "B2B", l: "Business focus", sub: "Real business projects" },
      ],
    },
    contact: {
      tag: "Contact",
      h: "Let's talk about",
      h2: "your project.",
      sub: "First call free and commitment-free. Tell me what you need and we see if we fit.",
      cta: "Book a free call →",
      avail: "2 slots available this month",
      tabCal: "Book a call",
      tabForm: "Send a message",
      form: {
        name: "Your name *",
        email: "Your email *",
        project: "Tell me about your project *",
        send: "Send message",
        sending: "Sending...",
        ok: "Sent! I'll reply within 24h.",
      },
    },
    footer: {
      copy: "© 2026 Cristian Mateos · Full-Stack Developer",
    },
  },
};

export default T;
