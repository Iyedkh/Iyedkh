// Single source of truth for the CV. **text** = bold.
const contact = {
  email: "Iyedkhouildi12@gmail.com",
  phone: "+216 93 117 612",
  linkedin: "linkedin.com/in/iyed-khouildi-453787326",
  github: "github.com/Iyedkh",
  portfolio: "iyedkhouildi.netlify.app",
};

const en = {
  lang: "en",
  file: "Iyed_Khouildi_Full_Stack_Developer_CV_EN",
  name: "IYED KHOUILDI",
  title: "Full Stack Developer (MERN) | React.js · Node.js · Express.js · MongoDB",
  infoLine: "Bizerte, Tunisia  |  Nationality: Tunisian  |  Available immediately  |  Open to relocation: UAE · Saudi Arabia · Qatar",
  contact,
  labels: {
    summary: "Professional Summary",
    skills: "Technical Skills",
    experience: "Professional Experience",
    projects: "Projects",
    education: "Education & Certifications",
    languages: "Languages",
  },
  summary:
    "Full Stack Developer with 2+ years of experience building and shipping production web applications with the MERN stack. Spent one year full-time in a 3-developer team delivering a complete e-commerce platform with JWT and Google authentication and an admin dashboard, and delivered 5 client websites as a freelancer for companies in maritime, trading, industrial and food export. Currently building CARTHAGEOS, a multi-tenant SaaS ERP. Trilingual in Arabic, French and English. Available immediately and open to relocation to the UAE, Saudi Arabia or Qatar.",
  skills: [
    ["Frontend", "React.js, Redux, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap, Responsive Design"],
    ["Backend", "Node.js, Express.js, RESTful APIs, Socket.io (real-time), JWT, bcrypt, Google OAuth"],
    ["Database & Media", "MongoDB (schema design, aggregation pipelines), Cloudinary"],
    ["Tools & Delivery", "Git, GitHub, cPanel deployment, SEO & performance optimization, Agile/Scrum"],
    ["Familiar with", "TypeScript, Next.js, PostgreSQL, SQL, Python (Pandas), Power BI"],
  ],
  experience: [
    {
      role: "Full Stack Developer",
      org: "JCD Commerce",
      meta: "Full-time · Tunisia",
      dates: "Sep 2025 – Aug 2026",
      bullets: [
        "Built and maintained a full-stack MERN e-commerce platform (**jcdcommerce.com**) in a 3-developer team, covering storefront, product catalog, cart, orders and user management.",
        "Implemented authentication with **JWT in HTTP-only cookies**, **bcrypt** password hashing and **Google Sign-In**.",
        "Developed an admin dashboard for catalog, inventory and order management, backed by Node.js/Express REST APIs and MongoDB data models.",
        "Deployed and maintained the production application on cPanel hosting.",
      ],
    },
    {
      role: "Freelance Full Stack Developer",
      org: "Self-employed",
      meta: "Remote",
      dates: "Sep 2024 – Oct 2026",
      bullets: [
        "**Oliv'Or** (olivor.tn) · Jun – Aug 2026: built a MERN e-commerce website for an olive oil brand, with product catalog, orders and user management.",
        "**BV Tech Marine** (bvtechmarine.com) · Sep – Oct 2026: designed and built a responsive React/Tailwind corporate website with SEO best practices.",
        "**EGT Naval Services** (egtnavalservices.com) · Sep 2024: React/Tailwind website for a naval repair company, with a service catalog and lead-generation contact flow.",
        "**MS Smart Trading** · Jun 2025 and **MS Équipements et Services** · Mar – Apr 2025: responsive, SEO-optimized React/Tailwind corporate websites.",
        "Managed the full client cycle on every project: requirements, UI design, development, deployment and hosting setup.",
      ],
    },
    {
      role: "Full Stack Developer & BI Intern",
      org: "IT-Grow",
      meta: "Internship · Tunisia",
      dates: "Feb 2024 – Jun 2024",
      bullets: [
        "Developed features for a MERN e-learning platform: Node.js/Express REST APIs and React.js interfaces for courses and learning content.",
        "Built a learner progress-tracking dashboard, combining full-stack development with business intelligence.",
      ],
    },
  ],
  projects: [
    {
      role: "CARTHAGEOS — Multi-tenant SaaS ERP",
      org: "github.com/Iyedkh",
      meta: "Personal project · In development",
      dates: "2026",
      bullets: [
        "Designing and building a multi-tenant cloud ERP covering multi-warehouse inventory, automated invoicing, financial tracking and role-based access control.",
        "Stack: React 19, Node.js, Express, MongoDB aggregation pipelines, Tailwind CSS, REST APIs.",
      ],
    },
  ],
  education: [
    ["**Bachelor's Degree in Business Intelligence** — Higher Institute of Management (ISG Bizerte)", "2021 – 2024"],
    ["**Software Developer Bootcamp** — GOMYCODE (full-stack JavaScript, React, Node.js, MongoDB)", "2025"],
    ["**Data Scientist Bootcamp** — GOMYCODE (Python, machine learning, data visualization)", "2025"],
  ],
  languages: "Arabic (Native)  ·  French (Professional)  ·  English (Professional)",
};

const fr = {
  lang: "fr",
  file: "Iyed_Khouildi_Developpeur_Full_Stack_CV_FR",
  name: "IYED KHOUILDI",
  title: "Développeur Full Stack (MERN) | React.js · Node.js · Express.js · MongoDB",
  infoLine: "Bizerte, Tunisie  |  Nationalité : tunisienne  |  Disponible immédiatement  |  Mobilité : Émirats · Arabie saoudite · Qatar",
  contact,
  labels: {
    summary: "Profil",
    skills: "Compétences techniques",
    experience: "Expérience professionnelle",
    projects: "Projets",
    education: "Formation & Certifications",
    languages: "Langues",
  },
  summary:
    "Développeur Full Stack avec plus de 2 ans d'expérience dans la conception et la mise en production d'applications web avec la stack MERN. Un an à temps plein au sein d'une équipe de 3 développeurs sur une plateforme e-commerce complète (authentification JWT et Google, tableau de bord d'administration), et 5 sites web livrés en freelance pour des entreprises des secteurs maritime, commercial, industriel et agroalimentaire. Développe actuellement CARTHAGEOS, un ERP SaaS multi-tenant. Trilingue arabe, français et anglais. Disponible immédiatement et ouvert à une relocalisation aux Émirats, en Arabie saoudite ou au Qatar.",
  skills: [
    ["Frontend", "React.js, Redux, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap, Responsive Design"],
    ["Backend", "Node.js, Express.js, API REST, Socket.io (temps réel), JWT, bcrypt, Google OAuth"],
    ["Base de données & médias", "MongoDB (modélisation, pipelines d'agrégation), Cloudinary"],
    ["Outils & livraison", "Git, GitHub, déploiement cPanel, optimisation SEO & performance, Agile/Scrum"],
    ["Notions", "TypeScript, Next.js, PostgreSQL, SQL, Python (Pandas), Power BI"],
  ],
  experience: [
    {
      role: "Développeur Full Stack",
      org: "JCD Commerce",
      meta: "Temps plein · Tunisie",
      dates: "Sept. 2025 – Août 2026",
      bullets: [
        "Développement et maintenance d'une plateforme e-commerce MERN (**jcdcommerce.com**) au sein d'une équipe de 3 développeurs : vitrine, catalogue produits, panier, commandes et gestion des utilisateurs.",
        "Mise en place de l'authentification avec **JWT en cookies HTTP-only**, hachage des mots de passe avec **bcrypt** et **connexion Google**.",
        "Développement d'un tableau de bord d'administration (catalogue, stock, commandes) reposant sur des API REST Node.js/Express et des modèles MongoDB.",
        "Déploiement et maintenance de l'application en production sur un hébergement cPanel.",
      ],
    },
    {
      role: "Développeur Full Stack Freelance",
      org: "Indépendant",
      meta: "À distance",
      dates: "Sept. 2024 – Oct. 2026",
      bullets: [
        "**Oliv'Or** (olivor.tn) · Juin – Août 2026 : site e-commerce MERN pour une marque d'huile d'olive, avec catalogue produits, commandes et gestion des utilisateurs.",
        "**BV Tech Marine** (bvtechmarine.com) · Sept. – Oct. 2026 : conception et développement d'un site vitrine responsive en React/Tailwind, optimisé pour le SEO.",
        "**EGT Naval Services** (egtnavalservices.com) · Sept. 2024 : site React/Tailwind pour une entreprise de réparation navale, avec catalogue de services et formulaire de prise de contact.",
        "**MS Smart Trading** · Juin 2025 et **MS Équipements et Services** · Mars – Avr. 2025 : sites vitrines React/Tailwind responsives et optimisés pour le SEO.",
        "Gestion complète du cycle client sur chaque projet : recueil du besoin, design UI, développement, déploiement et hébergement.",
      ],
    },
    {
      role: "Stagiaire Développeur Full Stack & BI",
      org: "IT-Grow",
      meta: "Stage · Tunisie",
      dates: "Févr. 2024 – Juin 2024",
      bullets: [
        "Développement de fonctionnalités pour une plateforme e-learning MERN : API REST Node.js/Express et interfaces React.js pour les cours et contenus pédagogiques.",
        "Réalisation d'un tableau de bord de suivi de la progression des apprenants, alliant développement full stack et business intelligence.",
      ],
    },
  ],
  projects: [
    {
      role: "CARTHAGEOS — ERP SaaS multi-tenant",
      org: "github.com/Iyedkh",
      meta: "Projet personnel · En cours",
      dates: "2026",
      bullets: [
        "Conception et développement d'un ERP cloud multi-tenant : gestion de stock multi-entrepôts, facturation automatisée, suivi financier et contrôle d'accès par rôles.",
        "Stack : React 19, Node.js, Express, pipelines d'agrégation MongoDB, Tailwind CSS, API REST.",
      ],
    },
  ],
  education: [
    ["**Licence en Business Intelligence** — Institut Supérieur de Gestion de Bizerte (ISG Bizerte)", "2021 – 2024"],
    ["**Bootcamp Développeur Logiciel** — GOMYCODE (JavaScript full stack, React, Node.js, MongoDB)", "2025"],
    ["**Bootcamp Data Scientist** — GOMYCODE (Python, machine learning, visualisation de données)", "2025"],
  ],
  languages: "Arabe (langue maternelle)  ·  Français (professionnel)  ·  Anglais (professionnel)",
};

// International variants: same content, no Gulf-specific header or relocation targets
const enIntl = {
  ...en,
  file: "Iyed_Khouildi_Full_Stack_Developer_CV_EN_International",
  infoLine: "Bizerte, Tunisia (UTC+1)  |  Available immediately  |  Open to remote, hybrid or on-site roles and relocation",
  summary:
    "Full Stack Developer with 2+ years of experience building and shipping production web applications with the MERN stack. Spent one year full-time in a 3-developer team delivering a complete e-commerce platform with JWT and Google authentication and an admin dashboard, and delivered 5 client websites remotely as a freelancer for companies in maritime, trading, industrial and food export. Currently building CARTHAGEOS, a multi-tenant SaaS ERP. Trilingual in Arabic, French and English. Available immediately for remote, hybrid or on-site roles, and open to relocation.",
};

const frIntl = {
  ...fr,
  file: "Iyed_Khouildi_Developpeur_Full_Stack_CV_FR_International",
  infoLine: "Bizerte, Tunisie (UTC+1)  |  Disponible immédiatement  |  Ouvert au télétravail, à l'hybride, au présentiel et à la mobilité",
  summary:
    "Développeur Full Stack avec plus de 2 ans d'expérience dans la conception et la mise en production d'applications web avec la stack MERN. Un an à temps plein au sein d'une équipe de 3 développeurs sur une plateforme e-commerce complète (authentification JWT et Google, tableau de bord d'administration), et 5 sites web livrés à distance en freelance pour des entreprises des secteurs maritime, commercial, industriel et agroalimentaire. Développe actuellement CARTHAGEOS, un ERP SaaS multi-tenant. Trilingue arabe, français et anglais. Disponible immédiatement en télétravail, en hybride ou sur site, et ouvert à la mobilité internationale.",
};

module.exports = { en, fr, enIntl, frIntl };
