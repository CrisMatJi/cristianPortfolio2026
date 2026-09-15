export type Lang = "es" | "en";

export interface Project {
  n: string;
  name: string;
  cat: string;
  year: string;
  desc: string;
  quote: string;
  url: string;
  tags: string[];
  img: string;
  imgW: number;
  imgH: number;
  imgAlt: string;
  showCta: boolean;
}

export interface Translations {
  htmlLang: string;
  nav: {
    services: string;
    work: string;
    stack: string;
    about: string;
    contact: string;
    cta: string;
  };
  sidebar: {
    role: string;
    openToWork: string;
    stats: { label: string; val: string }[];
    menuOpen: string;
    menuClose: string;
    navLabel: string;
    langLabel: string;
  };
  hero: {
    avail: string;
    hi: string;
    h1a: string;
    h1b: string;
    sub: string;
    cta: string;
    cta2: string;
    badge: string;
    photoAlt: string;
    pills: string[];
    strip: string[];
  };
  services: {
    tag: string;
    h: string;
    items: { icon: string; title: string; desc: string; tags: string[] }[];
  };
  projects: {
    tag: string;
    h: string;
    h2: string;
    sub: string;
    cta: string;
    items: Project[];
  };
  stack: {
    tag: string;
    h: string;
    h2: string;
    stackLabel: string;
    steps: { n: string; title: string; desc: string }[];
    techStrip: string[];
  };
  about: {
    tag: string;
    h: string;
    p1: string;
    p2: string;
    badges: string[];
    cards: { label: string; val: string }[];
    workMode: { label: string; val: string };
  };
  contact: {
    tag: string;
    h: string;
    h2: string;
    sub: string;
    avail: string;
    tabCal: string;
    tabForm: string;
    calTitle: string;
    calLoading: string;
    form: {
      name: string;
      email: string;
      project: string;
      send: string;
      sending: string;
      ok: string;
      error: string;
    };
  };
  footer: {
    copy: string;
  };
  a11y: {
    skip: string;
    main: string;
    whatsapp: string;
    whatsappBubble: string;
    whatsappBubbleClose: string;
    scrollHint: string;
  };
}

const T: Record<Lang, Translations> = {
  es: {
    htmlLang: "es",
    nav: {
      services: "Servicios",
      work: "Proyectos",
      stack: "Proceso",
      about: "Sobre mí",
      contact: "Contacto",
      cta: "Agendar llamada",
    },
    sidebar: {
      role: "Full-Stack Developer",
      openToWork: "Open to work",
      stats: [
        { label: "Experiencia", val: "12+ años" },
        { label: "Compromiso", val: "100%" },
        { label: "Respuesta", val: "<24h" },
      ],
      menuOpen: "Abrir menú",
      menuClose: "Cerrar menú",
      navLabel: "Navegación principal",
      langLabel: "Cambiar idioma",
    },
    hero: {
      avail: "Disponible para proyectos",
      hi: "Hola, soy Cristian.",
      h1a: "Desarrollo software",
      h1b: "que trabaja para ti.",
      sub: "Full-stack developer con más de 12 años convirtiendo ideas complejas en productos digitales sólidos, seguros y con resultados reales.",
      cta: "Agenda una llamada",
      cta2: "Ver proyectos",
      badge: "12+ años",
      photoAlt:
        "Cristian Mateos, desarrollador full-stack freelance en Cádiz, España",
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
        "12+ años de experiencia",
        "Full-Stack Developer",
        "Cádiz, España",
        "Software a medida",
        "Apps móviles",
        "Automatización IA",
        "Freelance disponible",
      ],
    },
    services: {
      tag: "Servicios",
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
    projects: {
      tag: "Proyectos",
      h: "Trabajo real,",
      h2: "resultados medibles.",
      sub: "Cada proyecto resuelve un problema de negocio concreto.",
      cta: "Visitar proyecto",
      items: [
        {
          n: "01",
          name: "ACF Fernando Terremoto",
          cat: "Full-Stack · Reservas · Dashboard",
          year: "2024",
          desc: "Sistema completo de reserva de asientos para espectáculos flamencos. Web pública con motor de reservas en tiempo real y dashboard de administración con control de aforo.",
          quote:
            "«Pasamos de gestionar reservas en papel a tener todo automatizado. La web se paga sola.»",
          url: "https://www.acffernandoterremoto.es",
          tags: ["Next.js", "Node.js", "PostgreSQL", "Dashboard admin"],
          img: "/images/acf-thumbnail.jpg",
          imgW: 952,
          imgH: 536,
          imgAlt:
            "Web de reservas de entradas de la peña flamenca ACF Fernando Terremoto",
          showCta: true,
        },
        {
          n: "02",
          name: "Suárez Studio",
          cat: "Landing Page · Portfolio · Diseño",
          year: "2024",
          desc: "Landing page minimalista para estudio de diseño de interiorismo arquitectónico. Enfocada en transmitir lujo, captar nuevos clientes de alto valor y mostrar proyectos de forma visual.",
          quote:
            "«Clientes me dicen que encuentran mi web más profesional que la de estudios grandes.»",
          url: "https://www.suarezstudio.es",
          tags: ["Next.js", "Framer Motion", "CRO", "SEO"],
          img: "/images/suarez-thumbnail-800.jpg",
          imgW: 800,
          imgH: 686,
          imgAlt:
            "Landing page de Suárez Studio, estudio de interiorismo arquitectónico",
          showCta: true,
        },
        {
          n: "03",
          name: "tuPachangaApp",
          cat: "Mobile · Android · Play Store",
          year: "2023",
          desc: "Aplicación Android para organizar partidos de fútbol amateur. Gestión de jugadores, algoritmo de equilibrio automático de equipos y notificaciones push en tiempo real.",
          quote:
            "«Empezamos a usarla en el grupo y ya no queremos volver a los grupos de WhatsApp.»",
          url: "https://play.google.com/store/apps/details?id=com.tupachanga",
          tags: ["React Native", "Android", "Algoritmos", "Push Notifications"],
          img: "/images/tupachanga-thumbnail-800.jpg",
          imgW: 800,
          imgH: 533,
          imgAlt:
            "tuPachangaApp, app móvil para organizar partidos de fútbol amateur",
          showCta: false,
        },
      ],
    },
    stack: {
      tag: "Proceso",
      h: "Fases del",
      h2: "proyecto.",
      stackLabel: "Stack",
      steps: [
        {
          n: "01",
          title: "Descubrimiento",
          desc: "Primera llamada gratuita. Entiendo tu negocio y el problema real a resolver antes de escribir una línea de código.",
        },
        {
          n: "02",
          title: "Propuesta clara",
          desc: "Alcance, fases y estimación sin letra pequeña. Sabes exactamente qué vas a recibir, cuándo y por cuánto.",
        },
        {
          n: "03",
          title: "Desarrollo iterativo",
          desc: "Construyo contigo, no para ti. Updates regulares, demos reales y capacidad de ajustar durante el proceso.",
        },
        {
          n: "04",
          title: "Lanzamiento",
          desc: "Deploy en producción, pruebas reales y métricas configuradas. Tu producto sale funcionando desde el primer día.",
        },
        {
          n: "05",
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
    about: {
      tag: "Sobre mí",
      h: "No soy una agencia. Soy Cristian.",
      p1: "Empecé en sistemas internos, aprendí que el software que falla cuesta dinero real. Hoy combino mi trabajo como desarrollador con proyectos freelance seleccionados — solo los que puedo hacer bien.",
      p2: "Me comprometo con el resultado, no con el presupuesto. Comunico directamente, sin intermediarios ni comerciales.",
      badges: [
        "Disponible ahora",
        "Responde en < 24h",
        "Sin agencia, código directo",
      ],
      cards: [
        { label: "Ubicación", val: "Cádiz, España" },
        { label: "Código desde", val: "2012" },
        { label: "Disponibilidad", val: "Freelance" },
        { label: "Idiomas", val: "ES · EN" },
      ],
      workMode: {
        label: "Modo de trabajo",
        val: "Proyecto a medida · Software seguro · Comunicación directa · Disponibilidad inmediata",
      },
    },
    contact: {
      tag: "Contacto",
      h: "¿Hablamos de",
      h2: "tu proyecto?",
      sub: "Primera llamada gratuita y sin compromiso. Cuéntame qué necesitas y vemos si encajamos.",
      avail: "2 plazas disponibles este mes",
      tabCal: "Agendar llamada",
      tabForm: "Enviar mensaje",
      calTitle: "Calendario para agendar una llamada con Cristian Mateos",
      calLoading: "Cargando calendario…",
      form: {
        name: "Tu nombre *",
        email: "Tu email *",
        project: "Cuéntame tu proyecto *",
        send: "Enviar mensaje",
        sending: "Enviando...",
        ok: "¡Enviado! Te respondo en menos de 24h.",
        error: "No se pudo enviar el formulario. Escríbeme directamente a",
      },
    },
    footer: {
      copy: "© 2026 Cristian Mateos · Full-Stack Developer",
    },
    a11y: {
      skip: "Saltar al contenido",
      main: "Contenido principal",
      whatsapp: "Escríbeme por WhatsApp",
      whatsappBubble: "¿Tienes un proyecto en mente? Hablemos por WhatsApp 👋",
      whatsappBubbleClose: "Cerrar mensaje",
      scrollHint: "Desplázate para ver más",
    },
  },

  en: {
    htmlLang: "en",
    nav: {
      services: "Services",
      work: "Projects",
      stack: "Process",
      about: "About",
      contact: "Contact",
      cta: "Book a call",
    },
    sidebar: {
      role: "Full-Stack Developer",
      openToWork: "Open to work",
      stats: [
        { label: "Experience", val: "12+ years" },
        { label: "Commitment", val: "100%" },
        { label: "Response", val: "<24h" },
      ],
      menuOpen: "Open menu",
      menuClose: "Close menu",
      navLabel: "Main navigation",
      langLabel: "Change language",
    },
    hero: {
      avail: "Available for projects",
      hi: "Hi, I'm Cristian.",
      h1a: "I build software",
      h1b: "that works for you.",
      sub: "Full-stack developer with 12+ years turning complex ideas into solid, secure digital products with real results.",
      cta: "Book a call",
      cta2: "See projects",
      badge: "12+ years",
      photoAlt:
        "Cristian Mateos, freelance full-stack developer based in Cádiz, Spain",
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
        "12+ years of experience",
        "Full-Stack Developer",
        "Cádiz, Spain",
        "Custom software",
        "Mobile apps",
        "AI automation",
        "Freelance available",
      ],
    },
    services: {
      tag: "Services",
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
    projects: {
      tag: "Projects",
      h: "Real work,",
      h2: "measurable results.",
      sub: "Every project solves a concrete business problem.",
      cta: "Visit project",
      items: [
        {
          n: "01",
          name: "ACF Fernando Terremoto",
          cat: "Full-Stack · Booking · Dashboard",
          year: "2024",
          desc: "Complete seat reservation system for flamenco shows. Public website with real-time booking engine and administration dashboard with capacity control.",
          quote:
            "“We went from paper reservations to everything automated. The website pays for itself.”",
          url: "https://www.acffernandoterremoto.es",
          tags: ["Next.js", "Node.js", "PostgreSQL", "Admin dashboard"],
          img: "/images/acf-thumbnail.jpg",
          imgW: 952,
          imgH: 536,
          imgAlt: "ACF Fernando Terremoto flamenco show booking website",
          showCta: true,
        },
        {
          n: "02",
          name: "Suárez Studio",
          cat: "Landing Page · Portfolio · Design",
          year: "2024",
          desc: "Minimalist landing page for an architectural interior design studio. Focused on conveying luxury, attracting high-value clients and showcasing projects visually.",
          quote:
            "“Clients tell me my website looks more professional than large studios.”",
          url: "https://www.suarezstudio.es",
          tags: ["Next.js", "Framer Motion", "CRO", "SEO"],
          img: "/images/suarez-thumbnail-800.jpg",
          imgW: 800,
          imgH: 686,
          imgAlt: "Suárez Studio interior architecture landing page",
          showCta: true,
        },
        {
          n: "03",
          name: "tuPachangaApp",
          cat: "Mobile · Android · Play Store",
          year: "2023",
          desc: "Android app to organize amateur football matches. Player management, automatic team balancing algorithm, and real-time push notifications.",
          quote:
            "“We started using it in the group and now we never want to go back to WhatsApp groups.”",
          url: "https://play.google.com/store/apps/details?id=com.tupachanga",
          tags: ["React Native", "Android", "Algorithms", "Push Notifications"],
          img: "/images/tupachanga-thumbnail-800.jpg",
          imgW: 800,
          imgH: 533,
          imgAlt: "tuPachangaApp mobile app for organizing amateur football matches",
          showCta: false,
        },
      ],
    },
    stack: {
      tag: "Process",
      h: "Project",
      h2: "phases.",
      stackLabel: "Stack",
      steps: [
        {
          n: "01",
          title: "Discovery",
          desc: "Free first call. I understand your business and the real problem to solve before writing a single line of code.",
        },
        {
          n: "02",
          title: "Clear proposal",
          desc: "Scope, phases and estimate with no fine print. You know exactly what you'll receive, when and for how much.",
        },
        {
          n: "03",
          title: "Iterative build",
          desc: "I build with you, not for you. Regular updates, real demos and the ability to adjust throughout the process.",
        },
        {
          n: "04",
          title: "Launch",
          desc: "Production deploy, real tests and metrics configured. Your product goes live and works from day one.",
        },
        {
          n: "05",
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
    about: {
      tag: "About me",
      h: "I'm not an agency. I'm Cristian.",
      p1: "I started in internal systems, learned that failing software costs real money. Today I combine my developer job with selected freelance projects — only the ones I can do well.",
      p2: "I commit to the outcome, not the budget. I communicate directly, no middlemen or account managers.",
      badges: ["Available now", "Replies in < 24h", "No agency, direct code"],
      cards: [
        { label: "Location", val: "Cádiz, Spain" },
        { label: "Coding since", val: "2012" },
        { label: "Availability", val: "Freelance" },
        { label: "Languages", val: "ES · EN" },
      ],
      workMode: {
        label: "Work style",
        val: "Tailored project · Secure software · Direct communication · Immediate availability",
      },
    },
    contact: {
      tag: "Contact",
      h: "Let's talk about",
      h2: "your project.",
      sub: "First call free and commitment-free. Tell me what you need and we see if we fit.",
      avail: "2 slots available this month",
      tabCal: "Book a call",
      tabForm: "Send a message",
      calTitle: "Calendar to book a call with Cristian Mateos",
      calLoading: "Loading calendar…",
      form: {
        name: "Your name *",
        email: "Your email *",
        project: "Tell me about your project *",
        send: "Send message",
        sending: "Sending...",
        ok: "Sent! I'll reply within 24h.",
        error: "Could not send the form. Email me directly at",
      },
    },
    footer: {
      copy: "© 2026 Cristian Mateos · Full-Stack Developer",
    },
    a11y: {
      skip: "Skip to content",
      main: "Main content",
      whatsapp: "Message me on WhatsApp",
      whatsappBubble: "Got a project in mind? Let's talk on WhatsApp 👋",
      whatsappBubbleClose: "Close message",
      scrollHint: "Scroll for more",
    },
  },
};

export default T;
