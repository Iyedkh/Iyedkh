import { content } from "./content";

const baseTranslations = {
  en: {
    // Nav
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      approach: "Approach",
      contact: "Contact",
      role: "Full-Stack & BI",
      available: "Available for work",
      letsTalk: "Let's Talk",
      emailCopied: "Email copied to clipboard",
    },
    // Hero
    hero: {
      statusBadge: "Available for Projects & Remote Roles",
      title1: "Full-Stack Developer",
      title2: "& Data Analyst",
      description:
        "I craft high-performance web applications and transform complex datasets into actionable business intelligence. Merging clean software engineering with analytical precision.",
      exploreProjects: "Explore Projects",
      contactMe: "Contact Me",
      downloadCv: "Download CV",
      cvToastTitle: "Downloading Curriculum Vitae",
      cvToastDesc: "Iyed Khouildi — Full-Stack Developer & Data Analyst",
      stats: {
        yearsExperience: "Years Experience",
        shippedSystems: "Shipped Systems",
        certifications: "Certifications",
      },
      card: {
        location: "📍 Bizerte, Tunisia",
        degree: "BI Degree",
        quality: "100% Quality",
        more: "+4 more",
        coreFocus: "CORE FOCUS",
        stack: "MERN + BI Analytics",
      },
      techStack: "Technology Stack",
    },
    // About
    about: {
      pill: "About Me",
      heading1: "Building at the intersection of",
      headingHighlight: "code, data & design",
      description:
        "Based in Bizerte, Tunisia, I am a developer and data analyst who bridges engineering capability with statistical thinking to deliver scalable, intelligent software.",
      cards: [
        {
          badge: "ENGINEERING",
          title: "Full-Stack Development",
          description:
            "Building end-to-end web applications with React, Next.js, Node.js, and MongoDB. Focused on clean architecture, reusable components, and performant APIs.",
          highlight: "MERN • REST APIs • Next.js",
        },
        {
          badge: "ANALYTICS",
          title: "Business Intelligence",
          description:
            "Transforming raw datasets into actionable insights with Python, Pandas, and Power BI. Bringing analytical rigor to digital products.",
          highlight: "Python • Power BI • SQL • Pandas",
        },
        {
          badge: "ACADEMIC FOUNDATION",
          title: "Degree in Business Intelligence",
          description:
            "Graduated from ISG Bizerte, complemented by dual professional bootcamps in Data Science and Software Development.",
          highlight: "ISG Bizerte • GOMYCODE Bootcamps",
        },
        {
          badge: "PHILOSOPHY",
          title: "Design & High Standards",
          description:
            "Passionate about user ergonomics, micro-interactions, responsive precision, and creating digital experiences that feel polished.",
          highlight: "Ergonomics • Accessibility • Performance",
        },
      ],
      banner: {
        title: "Interested in collaborating?",
        text: "Available for full-time roles, freelance projects, and data engineering contracts.",
        copyEmail: "Copy Email",
        emailCopied: "Email Copied!",
        downloadCv: "Download CV",
      },
    },
    // Skills
    skills: {
      pill: "Technical Expertise",
      heading1: "Tools &",
      headingHighlight: "Technologies",
      description:
        "A balanced technical toolkit spanning modern web engineering, robust backend infrastructure, and data analytics.",
      categories: {
        all: "All",
        frontend: "Frontend",
        backend: "Backend",
        databases: "Databases",
        dataBi: "Data & BI",
        tools: "Dev Tools",
      },
      searchPlaceholder: "Search skill (e.g. React)...",
      verified: "Verified",
      matrix: [
        {
          tag: "01 • FULL-STACK ARCHITECTURE",
          title: "End-to-End Modern Apps",
          desc: "MERN stack architecture with server-rendered React/Next.js interfaces, secure RESTful Node/Express backends, and optimized MongoDB schemas.",
        },
        {
          tag: "02 • BUSINESS INTELLIGENCE",
          title: "Data Analytics & Insights",
          desc: "Transforming multi-source business data into interactive Power BI dashboards, with Python data pipelines for statistical modeling.",
        },
        {
          tag: "03 • CRAFT & RELIABILITY",
          title: "Production Quality",
          desc: "Strict attention to UI ergonomics, responsive breakpoints, high performance, cross-browser compatibility, and maintainable git workflows.",
        },
      ],
    },
    // Projects
    projects: {
      pill: "Selected Works",
      heading1: "Featured",
      headingHighlight: "Projects",
      description:
        "Production-grade web platforms and full-stack applications crafted with modern engineering standards.",
      viewGithub: "View GitHub Code",
      filters: {
        all: "All",
        featured: "Featured",
        mern: "MERN Stack",
        reactTailwind: "React & Tailwind",
      },
      featuredBadge: "Featured",
      roleLabel: "Role:",
      visitLive: "Visit Live Platform",
      copyLink: "Copy Link",
      linkCopied: "Copied link for",
      list: [
        {
          title: "MS Smart Trading",
          subtitle: "International Business Web Platform",
          description:
            "High-performance corporate web platform engineered to establish an authoritative digital presence for international commerce. Features localized routing, client acquisition workflows, and high-conversion product showcases.",
          tags: ["MERN Stack", "Responsive UI", "Commercial Web"],
          role: "Lead Full-Stack Developer",
          impact: "+140% Client Inquiries",
        },
        {
          title: "JCD Commerce",
          subtitle: "Full-Stack MERN E-Commerce Ecosystem",
          description:
            "Comprehensive electronic commerce ecosystem complete with customer storefront, persistent shopping cart, real-time inventory management, dynamic filtering, and a secured administrative portal for catalog control.",
          tags: ["MERN Stack", "Admin Dashboard", "E-Commerce"],
          role: "Architect & Developer",
          impact: "Production Checkout & Inventory",
        },
        {
          title: "MS Équipements et Services",
          subtitle: "Industrial Services & Equipment Hub",
          description:
            "Modern corporate platform designed to showcase heavy equipment and industrial support services. Built with modular React components, smooth transitions, and high-speed asset optimization.",
          tags: ["React", "Tailwind CSS", "Enterprise"],
          role: "Frontend Engineer",
          impact: "Fast Sub-second LCP",
        },
        {
          title: "Oliv'Or.tn",
          subtitle: "Luxury Olive Oil Brand & Export Vitrine",
          description:
            "Sophisticated digital showcase representing authentic Mediterranean olive oil heritage. Crafted with refined editorial typography, high-resolution media handling, and responsive mobile ergonomics.",
          tags: ["React", "Tailwind CSS", "Brand Vitrine"],
          role: "UI/UX & Web Developer",
          impact: "Premium Brand Showcase",
        },
        {
          title: "EGT Naval Services",
          subtitle: "Maritime Engineering & Maintenance",
          description:
            "Corporate maritime platform built to showcase naval repair and maintenance services. Engineered with an intuitive service catalog and lead generation channels for international marine logistics.",
          tags: ["React", "Tailwind CSS", "Maritime"],
          role: "Web Developer",
          impact: "International Marine Portal",
        },
      ],
    },
    // Experience
    experience: {
      pill: "Track Record",
      heading1: "Experience &",
      headingHighlight: "Education",
      description:
        "A progressive journey combining rigorous academic fundamentals with real-world production software delivery.",
      workHistory: "Work History",
      workSub: "Production & Freelance",
      educationHistory: "Education & Degrees",
      educationSub: "Academic & Verified Credentials",
      verifyCert: "Verify Certificate Credential",
      workItems: [
        {
          period: "Sep – Oct 2026",
          title: "Freelance Web Developer",
          company: "BV Tech Marine",
          type: "Freelance",
          description:
            "Designed and built a responsive React & Tailwind CSS corporate website (bvtechmarine.com) with SEO best practices.",
        },
        {
          period: "Jun – Aug 2026",
          title: "Freelance Full-Stack Developer",
          company: "Oliv'Or",
          type: "Freelance",
          description:
            "Built a MERN e-commerce website (olivor.tn) for an olive oil brand, with product catalog, orders and user management.",
        },
        {
          period: "Sep 2025 – Aug 2026",
          title: "Full-Stack Developer",
          company: "JCD Commerce",
          type: "Full-time",
          description:
            "Built and maintained a MERN e-commerce platform (jcdcommerce.com) in a 3-developer team: storefront, cart, orders, admin dashboard, JWT + Google authentication, deployed on cPanel.",
        },
        {
          period: "Jun 2025",
          title: "Freelance Web Developer",
          company: "MS Smart Trading",
          type: "Freelance",
          description:
            "Responsive, SEO-optimized React & Tailwind CSS corporate website aligned with the client's brand identity.",
        },
        {
          period: "Mar – Apr 2025",
          title: "Freelance Web Developer",
          company: "MS Équipements et Services",
          type: "Freelance",
          description:
            "Responsive React & Tailwind CSS corporate website showcasing industrial equipment and services, optimized for SEO and speed.",
        },
        {
          period: "Sep 2024",
          title: "Freelance Web Developer",
          company: "EGT Naval Services",
          type: "Freelance",
          description:
            "React & Tailwind CSS website (egtnavalservices.com) for a naval repair company, with a service catalog and lead-generation contact flow.",
        },
        {
          period: "Feb – Jun 2024",
          title: "Full-Stack Developer & BI Intern",
          company: "IT-Grow",
          type: "Internship",
          description:
            "Developed features for a MERN e-learning platform (Node.js/Express REST APIs, React interfaces) and built a learner progress-tracking dashboard.",
        },
      ],
      educationItems: [
        {
          period: "2021 – 2024",
          title: "Bachelor's in Business Intelligence",
          institution: "Higher Institute of Management (ISG Bizerte)",
          type: "Academic Degree",
          description:
            "Specialized in data analysis, statistical modeling, relational databases, decision-support systems, and enterprise BI tools.",
        },
        {
          period: "Certified 2025",
          title: "Software Developer Bootcamp",
          institution: "GOMYCODE",
          type: "Professional Certification",
          description:
            "Full-stack JavaScript training: React, Node.js, Express, MongoDB, and Git collaboration.",
        },
        {
          period: "Certified 2025",
          title: "Data Scientist Bootcamp",
          institution: "GOMYCODE",
          type: "Professional Certification",
          description:
            "Python, Pandas, NumPy, machine learning, and data visualization.",
        },
      ],
    },
    // Approach
    approach: {
      pill: "06 / Methodology & Process",
      heading1: "How I approach",
      headingHighlight: "software & data",
      description: "A structured four-phase delivery cycle from idea to production.",
      phase: "Phase",
      steps: [
        {
          number: "01",
          title: "Understand the problem",
          subtitle: "Contextual Discovery & Constraint Mapping",
          desc: "Deconstruct business requirements and user friction before writing a line of code. Map data models, user flows, edge cases, and architectural constraints.",
        },
        {
          number: "02",
          title: "Design the architecture",
          subtitle: "System Modeling & Component Hierarchy",
          desc: "Establish clean state boundaries, normalized databases, RESTful endpoint schemas, and modular component contracts. Ensure maintainability before execution.",
        },
        {
          number: "03",
          title: "Build with precision",
          subtitle: "Full-Stack Implementation & Ergonomics",
          desc: "Develop with strict typing, clean separation of concerns, ergonomic microinteractions, responsive breakpoints, and resilient error recovery.",
        },
        {
          number: "04",
          title: "Measure, improve, and iterate",
          subtitle: "Analytics & Production Hardening",
          desc: "Inspect real-world telemetry, query latency, user engagement drop-offs, and data pipelines to continuously refine speed and product value.",
        },
      ],
    },
    // Contact
    contact: {
      pill: "Get In Touch",
      heading1: "Let's Start a",
      headingHighlight: "Conversation",
      description:
        "Have an upcoming project, freelance inquiry, or full-time opportunity? Reach out directly or send a message below.",
      labels: {
        email: "Direct Email",
        phone: "Phone / WhatsApp",
        location: "Location",
        locationValue: "Bizerte, Tunisia (UTC+1)",
        connectOnline: "Connect Online",
        copied: "copied to clipboard",
      },
      form: {
        nameLabel: "Your Name *",
        namePlaceholder: "John Doe",
        emailLabel: "Email Address *",
        emailPlaceholder: "john@company.com",
        subjectLabel: "Subject",
        subjectPlaceholder: "Project Inquiry / Opportunity",
        messageLabel: "Your Message *",
        messagePlaceholder: "Tell me about your project goals, timeline, and requirements...",
        chars: "chars",
        sendBtn: "Send via WhatsApp",
        validationError: "Please fill in all required fields.",
        successToast: "Opening WhatsApp…",
        successToastDesc: "Thank you {name}. Press send in WhatsApp to deliver your message.",
        successTitle: "Almost Done!",
        successDesc: "WhatsApp opened with your message ready. Press send there and I will reply within 24 hours.",
      },
    },
    // Footer
    footer: {
      bio: "Designing and developing performant digital software with the MERN stack and transforming enterprise datasets into clear analytical insight.",
      locationLabel: "Bizerte, Tunisia:",
      navigation: "Navigation",
      connect: "Connect",
      backToTop: "Back to Top",
      copyright: "All rights reserved.",
      builtWith: "Built with React, Tailwind & Framer Motion",
    },
    // CV Modal
    cvModal: {
      pill: "Curriculum Vitae",
      title: "Download CV",
      subtitle: "Select which version you would like to download or preview in browser.",
      en: {
        title: "Full Stack — English",
        langBadge: "English",
        role: "Full Stack Developer (MERN)",
        size: "PDF • 75 KB",
        download: "Download PDF",
        preview: "Preview",
        fileName: "Iyed_Khouildi_CV_EN.pdf",
      },
      fr: {
        title: "Full Stack — French",
        langBadge: "Français",
        role: "Développeur Full Stack (MERN)",
        size: "PDF • 76 KB",
        download: "Download PDF",
        preview: "Preview",
        fileName: "Iyed_Khouildi_CV_FR.pdf",
      },
      dsEn: {
        title: "Data Science — English",
        langBadge: "English",
        role: "Junior Data Scientist",
        size: "PDF • 74 KB",
        download: "Download PDF",
        preview: "Preview",
        fileName: "Iyed_Khouildi_CV_Data_Science_EN.pdf",
      },
      dsFr: {
        title: "Data Science — French",
        langBadge: "Français",
        role: "Data Scientist Junior",
        size: "PDF • 75 KB",
        download: "Download PDF",
        preview: "Preview",
        fileName: "Iyed_Khouildi_CV_Data_Science_FR.pdf",
      },
      downloadToastTitle: "Downloading CV",
      downloadToastDesc: "Iyed Khouildi — {lang}",
      close: "Close",
    },
  },

  fr: {
    // Nav
    nav: {
      home: "Accueil",
      about: "À Propos",
      skills: "Compétences",
      projects: "Projets",
      experience: "Parcours",
      approach: "Démarche",
      contact: "Contact",
      role: "Full-Stack & BI",
      available: "Disponible pour projets",
      letsTalk: "Discutons",
      emailCopied: "Email copié dans le presse-papier",
    },
    // Hero
    hero: {
      statusBadge: "Disponible pour Projets & Postes à Distance",
      title1: "Développeur Full-Stack",
      title2: "& Analyste de Données",
      description:
        "Je conçois des applications web ultra-performantes et transforme les données complexes en intelligence décisionnelle. L'alliance d'un code rigoureux et de l'analyse stratégique.",
      exploreProjects: "Explorer les Projets",
      contactMe: "Me Contacter",
      downloadCv: "Télécharger CV",
      cvToastTitle: "Téléchargement du Curriculum Vitae",
      cvToastDesc: "Iyed Khouildi — Développeur Full-Stack & Analyste de Données",
      stats: {
        yearsExperience: "Années d'Expérience",
        shippedSystems: "Projets Déployés",
        certifications: "Certifications",
      },
      card: {
        location: "📍 Bizerte, Tunisie",
        degree: "Licence BI",
        quality: "100% Qualité",
        more: "+4 autres",
        coreFocus: "EXPERTISE",
        stack: "MERN + Analytics BI",
      },
      techStack: "Technologies Clés",
    },
    // About
    about: {
      pill: "À Propos de Moi",
      heading1: "Créer à la croisée du",
      headingHighlight: "code, de la data & du design",
      description:
        "Basé à Bizerte, Tunisie, je suis développeur et analyste de données combinant ingénierie logicielle et rigueur statistique pour bâtir des solutions fiables et évolutives.",
      cards: [
        {
          badge: "INGÉNIERIE",
          title: "Développement Full-Stack",
          description:
            "Développement d'applications web de bout en bout avec React, Next.js, Node.js et MongoDB. Architecture propre, composants réutilisables et API optimisées.",
          highlight: "MERN • API REST • Next.js",
        },
        {
          badge: "ANALYSE",
          title: "Business Intelligence & Data",
          description:
            "Transformation de données brutes en indicateurs stratégiques avec Python, Pandas et Power BI. Apport d'une démarche analytique aux produits.",
          highlight: "Python • Power BI • SQL • Pandas",
        },
        {
          badge: "FORMATION ACADÉMIQUE",
          title: "Licence en Business Intelligence",
          description:
            "Diplômé de l'ISG Bizerte, complété par deux bootcamps professionnels en Data Science et Développement Logiciel.",
          highlight: "ISG Bizerte • Bootcamps GOMYCODE",
        },
        {
          badge: "PHILOSOPHIE",
          title: "Design & Hauts Standards",
          description:
            "Passionné par l'ergonomie, les micro-interactions, la précision responsive et l'optimisation des performances applicatives.",
          highlight: "Ergonomie • Accessibilité • Performance",
        },
      ],
      banner: {
        title: "Un projet en tête ?",
        text: "Disponible pour des postes à temps plein, missions freelance et contrats d'ingénierie de données.",
        copyEmail: "Copier l'Email",
        emailCopied: "Email Copié !",
        downloadCv: "Télécharger CV",
      },
    },
    // Skills
    skills: {
      pill: "Expertise Technique",
      heading1: "Outils &",
      headingHighlight: "Technologies",
      description:
        "Un ensemble de compétences équilibré couvrant le développement web moderne, les architectures backend et l'informatique décisionnelle.",
      categories: {
        all: "Tout",
        frontend: "Frontend",
        backend: "Backend",
        databases: "Bases de Données",
        dataBi: "Data & BI",
        tools: "Outils Dev",
      },
      searchPlaceholder: "Rechercher une compétence (ex: React)...",
      verified: "Vérifié",
      matrix: [
        {
          tag: "01 • ARCHITECTURE FULL-STACK",
          title: "Applications Modernes Complètes",
          desc: "Architecture MERN avec interfaces React/Next.js réactives, backends sécurisés Node/Express et schémas MongoDB optimisés.",
        },
        {
          tag: "02 • BUSINESS INTELLIGENCE",
          title: "Analyse de Données & Tableaux de Bord",
          desc: "Modélisation de données multi-sources dans des dashboards interactifs Power BI, avec scripts Python d'analyse.",
        },
        {
          tag: "03 • EXCELLENCE TECHNIQUE",
          title: "Qualité de Production",
          desc: "Attention rigoureuse à l'ergonomie UX, aux breakpoints responsives, à la vitesse d'exécution et au versioning Git propre.",
        },
      ],
    },
    // Projects
    projects: {
      pill: "Réalisations",
      heading1: "Projets",
      headingHighlight: "Récents",
      description:
        "Applications web de production et plateformes complètes développées selon les meilleures pratiques actuelles.",
      viewGithub: "Voir sur GitHub",
      filters: {
        all: "Tout",
        featured: "En Vedette",
        mern: "Stack MERN",
        reactTailwind: "React & Tailwind",
      },
      featuredBadge: "En Vedette",
      roleLabel: "Rôle :",
      visitLive: "Voir le Site en Ligne",
      copyLink: "Copier le Lien",
      linkCopied: "Lien copié pour",
      list: [
        {
          title: "MS Smart Trading",
          subtitle: "Plateforme Web Commerciale Internationale",
          description:
            "Plateforme d'entreprise conçue pour asseoir une présence numérique d'envergure pour le commerce international. Routage optimisé, acquisition de prospects et présentation de produits.",
          tags: ["Stack MERN", "Design Responsive", "Site Entreprise"],
          role: "Développeur Full-Stack Principal",
          impact: "+140% Demandes Clients",
        },
        {
          title: "JCD Commerce",
          subtitle: "Écosystème E-Commerce MERN Complet",
          description:
            "Plateforme de commerce électronique complète avec catalogue, panier persistant, gestion de stock en temps réel, filtres dynamiques et panneau d'administration sécurisé.",
          tags: ["Stack MERN", "Panneau Admin", "E-Commerce"],
          role: "Architecte & Développeur",
          impact: "Paiement & Stock en Production",
        },
        {
          title: "MS Équipements et Services",
          subtitle: "Portail d'Équipements & Services Industriels",
          description:
            "Plateforme corporative moderne mettant en valeur le matériel lourd et les services de maintenance industrielle. Composants React modulaires et temps de chargement ultra-rapide.",
          tags: ["React", "Tailwind CSS", "Entreprise"],
          role: "Ingénieur Frontend",
          impact: "Chargement Sub-seconde (LCP)",
        },
        {
          title: "Oliv'Or.tn",
          subtitle: "Vitrine Digitale d'Huile d'Olive Premium",
          description:
            "Vitrine élégante valorisant le patrimoine et la pureté de l'huile d'olive méditerranéenne d'exportation. Typographie soignée, gestion des médias HD et ergonomie mobile.",
          tags: ["React", "Tailwind CSS", "Site Vitrine"],
          role: "UI/UX & Développeur Web",
          impact: "Vitrine de Marque Haut de Gamme",
        },
        {
          title: "EGT Naval Services",
          subtitle: "Services Navals & Maintenance Maritime",
          description:
            "Site corporate maritime présentant les prestations de réparation navale et de maintenance technique avec structure orientée vers l'acquisition de clients internationaux.",
          tags: ["React", "Tailwind CSS", "Maritime"],
          role: "Développeur Web",
          impact: "Portail Maritime International",
        },
      ],
    },
    // Experience
    experience: {
      pill: "Historique",
      heading1: "Expérience &",
      headingHighlight: "Formation",
      description:
        "Un parcours alliant de solides bases académiques en décisionnel à la concrétisation de projets web réels.",
      workHistory: "Expérience Professionnelle",
      workSub: "Projets & Freelance",
      educationHistory: "Diplômes & Certifications",
      educationSub: "Titres Académiques et Certifiés",
      verifyCert: "Vérifier le Certificat en Ligne",
      workItems: [
        {
          period: "Sept. – Oct. 2026",
          title: "Développeur Web Freelance",
          company: "BV Tech Marine",
          type: "Freelance",
          description:
            "Conception et développement d'un site vitrine responsive en React & Tailwind CSS (bvtechmarine.com), optimisé pour le SEO.",
        },
        {
          period: "Juin – Août 2026",
          title: "Développeur Full-Stack Freelance",
          company: "Oliv'Or",
          type: "Freelance",
          description:
            "Site e-commerce MERN (olivor.tn) pour une marque d'huile d'olive : catalogue produits, commandes et gestion des utilisateurs.",
        },
        {
          period: "Sept. 2025 – Août 2026",
          title: "Développeur Full-Stack",
          company: "JCD Commerce",
          type: "Temps plein",
          description:
            "Développement et maintenance d'une plateforme e-commerce MERN (jcdcommerce.com) en équipe de 3 développeurs : boutique, panier, commandes, tableau de bord admin, authentification JWT + Google, déploiement cPanel.",
        },
        {
          period: "Juin 2025",
          title: "Développeur Web Freelance",
          company: "MS Smart Trading",
          type: "Freelance",
          description:
            "Site vitrine React & Tailwind CSS responsive et optimisé SEO, aligné sur l'identité de la marque.",
        },
        {
          period: "Mars – Avr. 2025",
          title: "Développeur Web Freelance",
          company: "MS Équipements et Services",
          type: "Freelance",
          description:
            "Site vitrine React & Tailwind CSS présentant des équipements et services industriels, optimisé pour le SEO et la vitesse.",
        },
        {
          period: "Sept. 2024",
          title: "Développeur Web Freelance",
          company: "EGT Naval Services",
          type: "Freelance",
          description:
            "Site React & Tailwind CSS (egtnavalservices.com) pour une entreprise de réparation navale, avec catalogue de services et formulaire de contact.",
        },
        {
          period: "Févr. – Juin 2024",
          title: "Stagiaire Développeur Full-Stack & BI",
          company: "IT-Grow",
          type: "Stage",
          description:
            "Développement de fonctionnalités pour une plateforme e-learning MERN (API REST Node.js/Express, interfaces React) et d'un tableau de bord de suivi des apprenants.",
        },
      ],
      educationItems: [
        {
          period: "2021 – 2024",
          title: "Licence en Business Intelligence",
          institution: "Institut Supérieur de Gestion (ISG Bizerte)",
          type: "Diplôme Universitaire",
          description:
            "Spécialisation en analyse de données, modélisation statistique, bases de données relationnelles, systèmes d'aide à la décision et outils BI.",
        },
        {
          period: "Certifié 2025",
          title: "Bootcamp Développeur Logiciel",
          institution: "GOMYCODE",
          type: "Certification Professionnelle",
          description:
            "Formation JavaScript full-stack : React, Node.js, Express, MongoDB et collaboration Git.",
        },
        {
          period: "Certifié 2025",
          title: "Bootcamp Data Scientist",
          institution: "GOMYCODE",
          type: "Certification Professionnelle",
          description:
            "Python, Pandas, NumPy, machine learning et visualisation de données.",
        },
      ],
    },
    // Approach
    approach: {
      pill: "06 / Démarche & Processus",
      heading1: "Ma démarche",
      headingHighlight: "logiciel & données",
      description: "Un cycle de livraison structuré en quatre phases, de l'idée à la production.",
      phase: "Phase",
      steps: [
        {
          number: "01",
          title: "Comprendre le problème",
          subtitle: "Découverte contextuelle & Contraintes",
          desc: "Déconstruire les besoins métier et les frictions utilisateurs avant toute ligne de code. Cartographier flux et modèles de données.",
        },
        {
          number: "02",
          title: "Concevoir l'architecture",
          subtitle: "Modélisation système & Hiérarchie",
          desc: "Établir des frontières d'état claires, des bases normalisées, des contrats d'API RESTful et des composants modulaires.",
        },
        {
          number: "03",
          title: "Développer avec précision",
          subtitle: "Implémentation Full-Stack & Ergonomie",
          desc: "Développer avec un typage strict, une séparation nette des responsabilités, des micro-interactions soignées et une gestion résiliente des erreurs.",
        },
        {
          number: "04",
          title: "Mesurer, optimiser & itérer",
          subtitle: "Télémétrie & Mise en production robuste",
          desc: "Analyser la télémétrie réelle, la latence des requêtes et les indicateurs d'usage pour continuellement optimiser la valeur produit.",
        },
      ],
    },
    // Contact
    contact: {
      pill: "Me Joindre",
      heading1: "Démarrons une",
      headingHighlight: "Conversation",
      description:
        "Vous avez un projet, une opportunité ou une demande freelance ? Contactez-moi directement ou envoyez-moi un message via le formulaire.",
      labels: {
        email: "Email Direct",
        phone: "Téléphone / WhatsApp",
        location: "Localisation",
        locationValue: "Bizerte, Tunisie (UTC+1)",
        connectOnline: "Réseaux Professionnels",
        copied: "copié dans le presse-papier",
      },
      form: {
        nameLabel: "Votre Nom *",
        namePlaceholder: "Jean Dupont",
        emailLabel: "Adresse Email *",
        emailPlaceholder: "jean@entreprise.com",
        subjectLabel: "Sujet",
        subjectPlaceholder: "Proposition de projet / Opportunité",
        messageLabel: "Votre Message *",
        messagePlaceholder: "Décrivez les objectifs de votre projet, votre calendrier et vos besoins...",
        chars: "caractères",
        sendBtn: "Envoyer via WhatsApp",
        validationError: "Veuillez remplir tous les champs obligatoires.",
        successToast: "Ouverture de WhatsApp…",
        successToastDesc: "Merci {name}. Appuyez sur envoyer dans WhatsApp pour transmettre votre message.",
        successTitle: "Presque Terminé !",
        successDesc: "WhatsApp s'est ouvert avec votre message prêt. Appuyez sur envoyer et je vous répondrai sous 24 heures.",
      },
    },
    // Footer
    footer: {
      bio: "Développement d'applications web modernes et performantes avec la stack MERN et valorisation des données d'entreprise grâce à la Business Intelligence.",
      locationLabel: "Bizerte, Tunisie :",
      navigation: "Navigation",
      connect: "Réseaux",
      backToTop: "Haut de Page",
      copyright: "Tous droits réservés.",
      builtWith: "Développé avec React, Tailwind & Framer Motion",
    },
    // CV Modal
    cvModal: {
      pill: "Curriculum Vitae",
      title: "Télécharger le CV",
      subtitle: "Choisissez votre version linguistique souhaitée pour le téléchargement ou l'aperçu dans le navigateur.",
      en: {
        title: "Full Stack — Anglais",
        langBadge: "English",
        role: "Full Stack Developer (MERN)",
        size: "PDF • 75 Ko",
        download: "Télécharger PDF",
        preview: "Aperçu",
        fileName: "Iyed_Khouildi_CV_EN.pdf",
      },
      fr: {
        title: "Full Stack — Français",
        langBadge: "Français",
        role: "Développeur Full Stack (MERN)",
        size: "PDF • 76 Ko",
        download: "Télécharger PDF",
        preview: "Aperçu",
        fileName: "Iyed_Khouildi_CV_FR.pdf",
      },
      dsEn: {
        title: "Data Science — Anglais",
        langBadge: "English",
        role: "Junior Data Scientist",
        size: "PDF • 74 Ko",
        download: "Télécharger PDF",
        preview: "Aperçu",
        fileName: "Iyed_Khouildi_CV_Data_Science_EN.pdf",
      },
      dsFr: {
        title: "Data Science — Français",
        langBadge: "Français",
        role: "Data Scientist Junior",
        size: "PDF • 75 Ko",
        download: "Télécharger PDF",
        preview: "Aperçu",
        fileName: "Iyed_Khouildi_CV_Data_Science_FR.pdf",
      },
      downloadToastTitle: "Téléchargement du CV",
      downloadToastDesc: "Iyed Khouildi — {lang}",
      close: "Fermer",
    },
  },

  ar: {
    // Nav
    nav: {
      home: "الرئيسية",
      about: "نبذة عني",
      skills: "المهارات",
      projects: "المشاريع",
      experience: "المسار المهني",
      approach: "المنهجية",
      contact: "تواصل معي",
      role: "تطوير الويب & ذكاء الأعمال",
      available: "متاح للمشاريع الجديدة",
      letsTalk: "تواصل معي",
      emailCopied: "تم نسخ البريد الإلكتروني بنجاح",
    },
    // Hero
    hero: {
      statusBadge: "متاح للعمل على المشاريع والوظائف عن بُعد",
      title1: "مطور ويب متكامل",
      title2: "& محلل بيانات",
      description:
        "أقوم بتطوير تطبيقات ويب عالية الأداء وتحويل مجموعات البيانات المعقدة إلى رؤى استراتيجية تدعم اتخاذ القرارات الذكية، جامعاً بين دقة البرمجة والتحليل الإحصائي.",
      exploreProjects: "استكشف الأعمال",
      contactMe: "تواصل معي",
      downloadCv: "تحميل السيرة الذاتية",
      cvToastTitle: "جاري تحميل السيرة الذاتية",
      cvToastDesc: "إياد خويلدي — مطور ويب متكامل ومحلل بيانات",
      stats: {
        yearsExperience: "سنوات خبرة",
        shippedSystems: "مشاريع منجزة",
        certifications: "شهادات معتمدة",
      },
      card: {
        location: "📍 بنزرت، تونس",
        degree: "إجازة في ذكاء الأعمال",
        quality: "100% جودة",
        more: "+4 أخرى",
        coreFocus: "التخصص الأساسي",
        stack: "MERN + تحليل البيانات",
      },
      techStack: "التقنيات الأساسية",
    },
    // About
    about: {
      pill: "نبذة عني",
      heading1: "الابتكار عند نقطة التقاء",
      headingHighlight: "البرمجة، البيانات والتصميم",
      description:
        "مقيم في بنزرت، تونس. أجمع بين خبرة هندسة البرمجيات المتكاملة والتحليل البياني لبناء حلول رقمية ذكية وقابلة للتوسع.",
      cards: [
        {
          badge: "هندسة البرمجيات",
          title: "تطوير الويب الشامل (Full-Stack)",
          description:
            "بناء تطبيقات الويب الحديثة من الواجهة إلى الخادم باستخدام React و Next.js و Node.js و MongoDB، مع التركيز على بنية الكود وسرعة الأداء.",
          highlight: "MERN • REST APIs • Next.js",
        },
        {
          badge: "تحليل البيانات",
          title: "ذكاء الأعمال (Business Intelligence)",
          description:
            "معالجة البيانات الضخمة وتحويلها إلى لوحات تحكم تفاعلية عبر Python و Power BI لاستخراج مؤشرات الأداء الحيوية.",
          highlight: "Python • Power BI • SQL • Pandas",
        },
        {
          badge: "المسار الأكاديمي",
          title: "إجازة في ذكاء الأعمال",
          description:
            "خريج المعهد العالي للتصرف ببنزرت (ISG Bizerte)، مدعومة بشهادات تدريبية متقدمة في علوم البيانات وتطوير البرمجيات.",
          highlight: "ISG Bizerte • GOMYCODE Bootcamps",
        },
        {
          badge: "المعايير",
          title: "التصميم وتجربة المستخدم",
          description:
            "اهتمام فائق بسهولة الاستخدام، والتوافق مع مختلف الشاشات، والتفاعلات الدقيقة، والسرعة العالية في الاستجابة.",
          highlight: "سهولة الاستخدام • إمكانية الوصول • الأداء العالي",
        },
      ],
      banner: {
        title: "هل ترغب في بدء مشروع جديد؟",
        text: "متاح للعمل بدوام كامل، المشاريع الحرة (Freelance) واستشارات تحليل البيانات.",
        copyEmail: "نسخ البريد",
        emailCopied: "تم النسخ!",
        downloadCv: "تحميل السيرة الذاتية",
      },
    },
    // Skills
    skills: {
      pill: "الخبرات والمهارات",
      heading1: "الأدوات و",
      headingHighlight: "التقنيات",
      description:
        "حقيبة تقنية متكاملة تغطي تطوير الواجهات الحديثة، البنية التحتية للخوادم، وقواعد البيانات وعلوم البيانات.",
      categories: {
        all: "الكل",
        frontend: "الواجهات الأمامية",
        backend: "الخوادم والأنظمة",
        databases: "قواعد البيانات",
        dataBi: "البيانات وذكاء الأعمال",
        tools: "أدوات التطوير",
      },
      searchPlaceholder: "ابحث عن مهارة (مثال: React)...",
      verified: "معتمد",
      matrix: [
        {
          tag: "01 • بنية التطبيقات المتكاملة",
          title: "حلول ويب شاملة وحديثة",
          desc: "تطوير تطبيقات MERN متكاملة بواجهات React/Next.js وخوادم Node/Express مؤمنة وقواعد بيانات MongoDB عالية الكفاءة.",
        },
        {
          tag: "02 • ذكاء الأعمال وتحليل البيانات",
          title: "لوحات تحكم تفاعلية ورؤى ذكية",
          desc: "ربط ومعالجة مصادر البيانات المختلفة وبناء لوحات Power BI مع خطوط معالجة بلغة Python.",
        },
        {
          tag: "03 • الإتقان والموثوقية",
          title: "جودة برمجية بمعايير عالمية",
          desc: "التزام صارم بتوافقية الشاشات وسرعة التحميل وأفضل ممارسات إدارة الكود عبر Git.",
        },
      ],
    },
    // Projects
    projects: {
      pill: "معرض الأعمال",
      heading1: "أبرز",
      headingHighlight: "المشاريع",
      description:
        "مجموعة من منصات الويب والمشاريع المنفذة على أرض الواقع المبنية بأحدث المعايير البرمجية.",
      viewGithub: "عرض الكود على GitHub",
      filters: {
        all: "الكل",
        featured: "المميزة",
        mern: "MERN Stack",
        reactTailwind: "React & Tailwind",
      },
      featuredBadge: "مشروع مميز",
      roleLabel: "الدور:",
      visitLive: "زيارة الموقع المباشر",
      copyLink: "نسخ الرابط",
      linkCopied: "تم نسخ رابط مشروع",
      list: [
        {
          title: "MS Smart Trading",
          subtitle: "منصة تجارية دولية للشركات",
          description:
            "منصة رقمية متطورة صممت لتعزيز الحضور التجاري الدولي للشركة، وتسهيل استقطاب العملاء الجدد وعرض المنتجات بأسلوب احترافي.",
          tags: ["MERN Stack", "تصميم متجاوب", "موقع تجاري"],
          role: "المطور الرئيسي للمشروع",
          impact: "+140% طلبات واستفسارات العملاء",
        },
        {
          title: "JCD Commerce",
          subtitle: "منصة تجارة إلكترونية متكاملة MERN",
          description:
            "نظام تجارة إلكترونية شامل يحتوي على واجهة تسوق ذكية، وسلة مشتريات ديناميكية، وإدارة فورية للمخزون ولوحة تحكم إدارية مؤمنة.",
          tags: ["MERN Stack", "لوحة تحكم", "تجارة إلكترونية"],
          role: "مهندس ومطور النظام",
          impact: "دفع آمن وإدارة مخزون فعلية",
        },
        {
          title: "MS Équipements et Services",
          subtitle: "بوابة المعدات والخدمات الصناعية",
          description:
            "موقع مؤسساتي عالي السرعة مخصص لعرض المعدات الثقيلة والخدمات الصناعية. مكونات React سريعة وأداء فائق السرعة.",
          tags: ["React", "Tailwind CSS", "موقع مؤسساتي"],
          role: "مهندس واجهات أمامية",
          impact: "سرعة تحميل فائقة (Sub-second LCP)",
        },
        {
          title: "Oliv'Or.tn",
          subtitle: "واجهة رقمية لعلامة زيت زيتون فاخرة",
          description:
            "منصة تسويقية راقية تعكس جودة زيت الزيتون التونسي المعد للتصدير، تميزت بتصميم طباعي فخم وتوافق تام مع الهواتف الذكية.",
          tags: ["React", "Tailwind CSS", "موقع تعريفي"],
          role: "تصميم وتطوير الواجهات",
          impact: "واجهة علامة تجارية فاخرة",
        },
        {
          title: "EGT Naval Services",
          subtitle: "خدمات الصيانة والإنشاءات البحرية",
          description:
            "موقع رسمي لشركة الخدمات البحرية والصيانة الفنية، مبني بأسلوب منظم لجذب شركات الملاحة والشحن الدولية.",
          tags: ["React", "Tailwind CSS", "خدمات بحرية"],
          role: "مطور ويب",
          impact: "بوابة بحرية دولية",
        },
      ],
    },
    // Experience
    experience: {
      pill: "المسار والمؤهلات",
      heading1: "الخبرات و",
      headingHighlight: "التعليم",
      description:
        "مسيرة متدرجة تجمع بين الأساس الأكاديمي المتين وتطبيق المشاريع البرمجية في بيئة الإنتاج الفعلية.",
      workHistory: "الخبرات العملية",
      workSub: "مشاريع واقعية وعمل حر",
      educationHistory: "الشهادات والمؤهلات",
      educationSub: "الدرجات الأكاديمية والشهادات الاحترافية",
      verifyCert: "التحقق من الشهادة عبر الإنترنت",
      workItems: [
        {
          period: "سبتمبر – أكتوبر 2026",
          title: "مطور ويب حر",
          company: "BV Tech Marine",
          type: "عمل حر",
          description:
            "تصميم وتطوير موقع مؤسساتي متجاوب باستخدام React و Tailwind CSS (bvtechmarine.com) مع تحسين محركات البحث.",
        },
        {
          period: "يونيو – أغسطس 2026",
          title: "مطور ويب متكامل (عمل حر)",
          company: "Oliv'Or",
          type: "عمل حر",
          description:
            "تطوير متجر إلكتروني بتقنية MERN (olivor.tn) لعلامة زيت زيتون، مع كتالوج المنتجات وإدارة الطلبات والمستخدمين.",
        },
        {
          period: "سبتمبر 2025 – أغسطس 2026",
          title: "مطور ويب متكامل",
          company: "JCD Commerce",
          type: "دوام كامل",
          description:
            "تطوير وصيانة منصة تجارة إلكترونية بتقنية MERN (jcdcommerce.com) ضمن فريق من 3 مطورين: متجر، سلة، طلبات، لوحة تحكم، مصادقة JWT و Google، ونشر عبر cPanel.",
        },
        {
          period: "يونيو 2025",
          title: "مطور ويب حر",
          company: "MS Smart Trading",
          type: "عمل حر",
          description:
            "موقع مؤسساتي متجاوب ومحسّن لمحركات البحث باستخدام React و Tailwind CSS يعكس هوية العلامة التجارية.",
        },
        {
          period: "مارس – أبريل 2025",
          title: "مطور ويب حر",
          company: "MS Équipements et Services",
          type: "عمل حر",
          description:
            "موقع مؤسساتي متجاوب باستخدام React و Tailwind CSS لعرض المعدات والخدمات الصناعية، محسّن للسرعة ومحركات البحث.",
        },
        {
          period: "سبتمبر 2024",
          title: "مطور ويب حر",
          company: "EGT Naval Services",
          type: "عمل حر",
          description:
            "موقع باستخدام React و Tailwind CSS (egtnavalservices.com) لشركة إصلاح سفن، مع كتالوج الخدمات ونموذج تواصل لاستقطاب العملاء.",
        },
        {
          period: "فبراير – يونيو 2024",
          title: "مطور ويب متكامل وذكاء أعمال (تدريب)",
          company: "IT-Grow",
          type: "تدريب مهني",
          description:
            "تطوير ميزات لمنصة تعليم إلكتروني بتقنية MERN (واجهات REST بـ Node.js/Express وواجهات React) وبناء لوحة لتتبع تقدم المتعلمين.",
        },
      ],
      educationItems: [
        {
          period: "2021 – 2024",
          title: "إجازة في ذكاء الأعمال (Business Intelligence)",
          institution: "المعهد العالي للتصرف ببنزرت (ISG Bizerte)",
          type: "شهادة جامعية",
          description:
            "تخصص في تحليل البيانات، النمذجة الإحصائية، قواعد البيانات العلائقية ونظم دعم اتخاذ القرار.",
        },
        {
          period: "معتمد 2025",
          title: "تدريب مكثف في تطوير البرمجيات (Software Developer Bootcamp)",
          institution: "GOMYCODE",
          type: "شهادة مهنية معتمدة",
          description:
            "تدريب عملي على تطوير الويب المتكامل باستخدام React و Node.js و Express و MongoDB و Git.",
        },
        {
          period: "معتمد 2025",
          title: "تدريب مكثف في علوم البيانات (Data Scientist Bootcamp)",
          institution: "GOMYCODE",
          type: "شهادة مهنية معتمدة",
          description:
            "Python و Pandas و NumPy وتعلم الآلة وتصوير البيانات.",
        },
      ],
    },
    // Approach
    approach: {
      pill: "06 / المنهجية والخطوات",
      heading1: "كيف أطور",
      headingHighlight: "البرمجيات والبيانات",
      description: "دورة تطوير منظمة من أربع مراحل تبدأ من الفكرة إلى بيئة التشغيل الفعلية.",
      phase: "المرحلة",
      steps: [
        {
          number: "01",
          title: "فهم جوهر المشكلة",
          subtitle: "استكشاف السياق وتحديد المتطلبات",
          desc: "تحليل متطلبات العمل ومشاكل المستخدمين قبل كتابة سطر برمجي واحد، ورسم نماذج البيانات والحالات الخاصة.",
        },
        {
          number: "02",
          title: "تصميم البنية الهندسية",
          subtitle: "نمذجة النظام وهيكل المكونات",
          desc: "تأسيس حدود واضحة لإدارة الحالة، قواعد بيانات منظمة، واجهات RESTful، ومكونات معيارية قابلة لإعادة الاستخدام.",
        },
        {
          number: "03",
          title: "بناء الكود بدقة متناهية",
          subtitle: "تطوير متكامل واهتمام بالتفاصيل",
          desc: "كتابة شيفرات برمجية دقيقة، وفصل منظم للمسؤوليات، وتفاعلات سلسة وتجاوب كامل مع مختلف الشاشات.",
        },
        {
          number: "04",
          title: "القياس، التحسين والتطوير",
          subtitle: "تحليل الأداء والتطوير المستمر",
          desc: "فحص سرعة استجابة الاستعلامات وسلوك المستخدمين ومؤشرات الأداء لتحسين كفاءة المنتج باستمرار.",
        },
      ],
    },
    // Contact
    contact: {
      pill: "تواصل معي",
      heading1: "لنبدأ محادثة",
      headingHighlight: "مثمرة",
      description:
        "هل لديك مشروع قادم، أو استفسار لعمل حر، أو فرصة عمل؟ تواصل معي مباشرة أو أرسل رسالتك عبر النموذج التالي.",
      labels: {
        email: "البريد المباشر",
        phone: "الهاتف / واتساب",
        location: "الموقع الجغرافي",
        locationValue: "بنزرت، تونس (UTC+1)",
        connectOnline: "الحسابات المهنية",
        copied: "تم النسخ بنجاح",
      },
      form: {
        nameLabel: "الاسم الكامل *",
        namePlaceholder: "محمد علي",
        emailLabel: "البريد الإلكتروني *",
        emailPlaceholder: "name@company.com",
        subjectLabel: "الموضوع",
        subjectPlaceholder: "استفسار عن مشروع / فرصة عمل",
        messageLabel: "نص الرسالة *",
        messagePlaceholder: "أخبرني بتفاصيل مشروعك، أهدافك، والجدول الزمني المقترح...",
        chars: "حرف",
        sendBtn: "إرسال عبر واتساب",
        validationError: "يرجى ملء جميع الحقول المطلوبة.",
        successToast: "جارٍ فتح واتساب…",
        successToastDesc: "شكراً لك {name}. اضغط على إرسال في واتساب لإيصال رسالتك.",
        successTitle: "خطوة أخيرة!",
        successDesc: "تم فتح واتساب ورسالتك جاهزة. اضغط على إرسال وسأرد عليك خلال 24 ساعة.",
      },
    },
    // Footer
    footer: {
      bio: "تصميم وتطوير تطبيقات ويب حديثة وعالية الأداء عبر MERN Stack وتحويل بيانات الأعمال المعقدة إلى رؤى استراتيجية واضحة.",
      locationLabel: "بنزرت، تونس:",
      navigation: "الأقسام",
      connect: "تواصل",
      backToTop: "إلى الأعلى",
      copyright: "جميع الحقوق محفوظة.",
      builtWith: "تم التطوير باستخدام React و Tailwind و Framer Motion",
    },
    // CV Modal
    cvModal: {
      pill: "السيرة الذاتية",
      title: "تحميل السيرة الذاتية",
      subtitle: "يرجى اختيار النسخة واللغة المناسبة للتحميل أو المعاينة المباشرة عبر المتصفح.",
      en: {
        title: "Full Stack — الإنجليزية",
        langBadge: "English",
        role: "مطور ويب متكامل (MERN)",
        size: "PDF • 75 ك.ب",
        download: "تحميل PDF",
        preview: "معاينة",
        fileName: "Iyed_Khouildi_CV_EN.pdf",
      },
      fr: {
        title: "Full Stack — الفرنسية",
        langBadge: "Français",
        role: "مطور ويب متكامل (MERN)",
        size: "PDF • 76 ك.ب",
        download: "تحميل PDF",
        preview: "معاينة",
        fileName: "Iyed_Khouildi_CV_FR.pdf",
      },
      dsEn: {
        title: "علوم البيانات — الإنجليزية",
        langBadge: "English",
        role: "عالم بيانات مبتدئ",
        size: "PDF • 74 ك.ب",
        download: "تحميل PDF",
        preview: "معاينة",
        fileName: "Iyed_Khouildi_CV_Data_Science_EN.pdf",
      },
      dsFr: {
        title: "علوم البيانات — الفرنسية",
        langBadge: "Français",
        role: "عالم بيانات مبتدئ",
        size: "PDF • 75 ك.ب",
        download: "تحميل PDF",
        preview: "معاينة",
        fileName: "Iyed_Khouildi_CV_Data_Science_FR.pdf",
      },
      downloadToastTitle: "جاري تحميل السيرة الذاتية",
      downloadToastDesc: "إياد خويلدي — {lang}",
      close: "إغلاق",
    },
  },
};

// Deep-merge content strings (objects merge, arrays and strings replace)
const mergeDeep = (base, extra) => {
  const out = { ...base };
  Object.entries(extra || {}).forEach(([key, value]) => {
    const isObject = value && typeof value === "object" && !Array.isArray(value);
    out[key] = isObject ? mergeDeep(base?.[key] || {}, value) : value;
  });
  return out;
};

export const translations = Object.fromEntries(
  Object.entries(baseTranslations).map(([lang, dict]) => [lang, mergeDeep(dict, content[lang])])
);
