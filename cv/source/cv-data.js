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
    "Full Stack Developer (MERN) with 2+ years of shipping production web applications: one year full-time in a 3-developer e-commerce team and 5 freelance client websites. Currently building CARTHAGEOS, a multi-tenant SaaS ERP with 840+ automated tests, Docker and a CI/CD pipeline. Trilingual in Arabic, French and English.",
  skills: [
    ["Frontend", "React.js, Redux, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap, Vite, Responsive Design"],
    ["Backend", "Node.js, Express.js, RESTful APIs, Socket.io (real-time), JWT, bcrypt, Google OAuth, RBAC"],
    ["Database & Media", "MongoDB (schema design, aggregation pipelines), Cloudinary"],
    ["Testing & DevOps", "Jest, Supertest, Vitest, Playwright (E2E), Docker / Docker Compose, GitHub Actions CI/CD"],
    ["Tools & Delivery", "Git, GitHub, cPanel hosting, SEO & performance optimization, Agile/Scrum"],
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
      meta: "Remote · Part-time",
      dates: "Sep 2024 – Oct 2026",
      bullets: [
        "Delivered 5 responsive, SEO-optimized production websites end to end (requirements, UI design, development, deployment, hosting) for maritime, trading, industrial and food-export clients.",
      ],
      clients: [
        { name: "BV Tech Marine", detail: "React.js / Tailwind CSS corporate website · bvtechmarine.com", dates: "Sep 2026 – Oct 2026", bullets: [] },
        { name: "Oliv'Or", detail: "MERN e-commerce website: catalog, orders, user accounts · olivor.tn", dates: "Jun 2026 – Aug 2026", bullets: [] },
        { name: "MS Smart Trading", detail: "React.js / Tailwind CSS corporate website", dates: "Jun 2025", bullets: [] },
        { name: "MS Équipements et Services", detail: "React.js / Tailwind CSS corporate website", dates: "Mar 2025 – Apr 2025", bullets: [] },
        { name: "EGT Naval Services", detail: "React.js / Tailwind CSS corporate website · egtnavalservices.com", dates: "Sep 2024", bullets: [] },
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
      org: "Personal project",
      meta: "In development · code on request",
      dates: "2026",
      bullets: [
        "Multi-tenant cloud ERP (inventory, invoicing, accounting, CRM, HR) with **tenant-isolation middleware**, **role-based access control**, rate limiting and subscription plans; 87 MongoDB data models and 68 REST route modules.",
        "**840+ automated backend tests** (Jest, Supertest, in-memory MongoDB), Vitest frontend tests and **Playwright** E2E tests, run on every push by a **GitHub Actions CI/CD** pipeline (lint, tests, production build).",
        "Containerized with **Docker Compose** (MongoDB, Redis, API, frontend). Stack: React 19, Vite, Node.js, Express, MongoDB aggregation pipelines, Tailwind CSS.",
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
    "Développeur Full Stack (MERN) avec plus de 2 ans d'expérience en mise en production d'applications web : un an à temps plein dans une équipe e-commerce de 3 développeurs et 5 sites clients livrés en freelance. Développe actuellement CARTHAGEOS, un ERP SaaS multi-tenant avec plus de 840 tests automatisés, Docker et un pipeline CI/CD. Trilingue arabe, français et anglais.",
  skills: [
    ["Frontend", "React.js, Redux, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap, Vite, Responsive Design"],
    ["Backend", "Node.js, Express.js, API REST, Socket.io (temps réel), JWT, bcrypt, Google OAuth, RBAC"],
    ["Base de données & médias", "MongoDB (modélisation, pipelines d'agrégation), Cloudinary"],
    ["Tests & DevOps", "Jest, Supertest, Vitest, Playwright (E2E), Docker / Docker Compose, CI/CD GitHub Actions"],
    ["Outils & livraison", "Git, GitHub, hébergement cPanel, optimisation SEO & performance, Agile/Scrum"],
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
      meta: "À distance · Temps partiel",
      dates: "Sept. 2024 – Oct. 2026",
      bullets: [
        "5 sites responsives et optimisés SEO livrés de bout en bout (besoin, UI, développement, déploiement, hébergement) : maritime, négoce, industrie, agroalimentaire.",
      ],
      clients: [
        { name: "BV Tech Marine", detail: "Site vitrine React.js / Tailwind CSS · bvtechmarine.com", dates: "Sept. 2026 – Oct. 2026", bullets: [] },
        { name: "Oliv'Or", detail: "Site e-commerce MERN : catalogue, commandes, comptes clients · olivor.tn", dates: "Juin 2026 – Août 2026", bullets: [] },
        { name: "MS Smart Trading", detail: "Site vitrine React.js / Tailwind CSS", dates: "Juin 2025", bullets: [] },
        { name: "MS Équipements et Services", detail: "Site vitrine React.js / Tailwind CSS", dates: "Mars 2025 – Avr. 2025", bullets: [] },
        { name: "EGT Naval Services", detail: "Site vitrine React.js / Tailwind CSS · egtnavalservices.com", dates: "Sept. 2024", bullets: [] },
      ],
    },
    {
      role: "Stagiaire Développeur Full Stack & BI",
      org: "IT-Grow",
      meta: "Stage · Tunisie",
      dates: "Févr. 2024 – Juin 2024",
      bullets: [
        "Développement de fonctionnalités pour une plateforme e-learning MERN : API REST Node.js/Express et interfaces React.js pour les cours et contenus pédagogiques.",
        "Tableau de bord de suivi de la progression des apprenants, alliant développement full stack et BI.",
      ],
    },
  ],
  projects: [
    {
      role: "CARTHAGEOS — ERP SaaS multi-tenant",
      org: "Projet personnel",
      meta: "En cours · code sur demande",
      dates: "2026",
      bullets: [
        "ERP cloud multi-tenant (stock, facturation, comptabilité, CRM, RH) avec **middleware d'isolation des tenants**, **contrôle d'accès par rôles**, limitation de débit et offres d'abonnement ; 87 modèles de données MongoDB et 68 modules de routes REST.",
        "**Plus de 840 tests backend automatisés** (Jest, Supertest, MongoDB en mémoire), tests frontend Vitest et tests E2E **Playwright**, exécutés à chaque push par un pipeline **CI/CD GitHub Actions** (lint, tests, build de production).",
        "Conteneurisé avec **Docker Compose** (MongoDB, Redis, API, frontend). Stack : React 19, Vite, Node.js, Express, pipelines d'agrégation MongoDB, Tailwind CSS.",
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
};

const frIntl = {
  ...fr,
  file: "Iyed_Khouildi_Developpeur_Full_Stack_CV_FR_International",
  infoLine: "Bizerte, Tunisie (UTC+1)  |  Disponible immédiatement  |  Ouvert au télétravail, à l'hybride, au présentiel et à la mobilité",
};

// Data science variants: same facts, data/ML positioning, with a training section
const dsEn = {
  ...enIntl,
  file: "Iyed_Khouildi_Data_Scientist_CV_EN",
  title: "Junior Data Scientist | Machine Learning · AI · Data Analysis",
  labels: { ...en.labels, training: "Machine Learning & AI Training" },
  summary:
    "Business Intelligence graduate and Full Stack Developer with 2+ years of experience building data-driven web applications, dashboards and REST APIs on MongoDB and SQL databases. Trained in data science through a BI degree and the GOMYCODE Data Scientist Bootcamp: Python data analysis, statistics and probability, machine learning, neural networks, NLP and generative AI. Combines analytical skills with the engineering ability to ship data products to production. Looking for entry-level or junior roles in Data Science, Machine Learning, AI Engineering or Data Analysis. Trilingual in Arabic, French and English.",
  skills: [
    ["Programming & Data", "Python, SQL, Pandas, NumPy, data cleaning"],
    ["Statistics & Visualization", "Statistics & probability, Matplotlib, Seaborn, data visualization"],
    ["Machine Learning & AI", "Scikit-learn, machine learning algorithms, deep learning & neural networks, NLP, LLMs, generative AI"],
    ["BI & Databases", "Power BI, Tableau, Excel, PostgreSQL, MongoDB (aggregation pipelines)"],
    ["Tools", "Jupyter Notebook, Git, GitHub"],
    ["Software & APIs", "JavaScript, Node.js, Express.js, React.js, RESTful APIs, Agile/Scrum"],
  ],
  training: [
    {
      role: "Data Scientist Bootcamp",
      org: "GOMYCODE",
      meta: "Certification",
      dates: "2025",
      bullets: [
        "Python data analysis with Pandas and NumPy, data cleaning and exploratory analysis in Jupyter Notebook.",
        "Statistics and probability; data visualization with Matplotlib and Seaborn.",
        "Machine learning with Scikit-learn, deep learning and neural networks, NLP, LLMs and generative AI.",
      ],
    },
  ],
  experience: [
    {
      role: "Full Stack Developer",
      org: "JCD Commerce",
      meta: "Full-time · Tunisia",
      dates: "Sep 2025 – Aug 2026",
      bullets: [
        "Designed and managed **MongoDB data models** for products, orders and users on a production e-commerce platform (jcdcommerce.com), in a 3-developer team.",
        "Built Node.js/Express **REST APIs** and an **admin dashboard** for catalog, inventory and order management.",
        "Implemented secure authentication with JWT, bcrypt and Google Sign-In.",
      ],
    },
    {
      role: "Freelance Full Stack Developer",
      org: "Self-employed",
      meta: "Remote · Part-time",
      dates: "Sep 2024 – Oct 2026",
      bullets: [
        "Delivered 5 responsive, SEO-optimized production websites end to end (requirements, UI design, development, deployment, hosting) for maritime, trading, industrial and food-export clients.",
      ],
      clients: [
        { name: "BV Tech Marine", detail: "React.js / Tailwind CSS corporate website · bvtechmarine.com", dates: "Sep 2026 – Oct 2026", bullets: [] },
        { name: "Oliv'Or", detail: "MERN e-commerce website: catalog, orders, user accounts · olivor.tn", dates: "Jun 2026 – Aug 2026", bullets: [] },
        { name: "MS Smart Trading", detail: "React.js / Tailwind CSS corporate website", dates: "Jun 2025", bullets: [] },
        { name: "MS Équipements et Services", detail: "React.js / Tailwind CSS corporate website", dates: "Mar 2025 – Apr 2025", bullets: [] },
        { name: "EGT Naval Services", detail: "React.js / Tailwind CSS corporate website · egtnavalservices.com", dates: "Sep 2024", bullets: [] },
      ],
    },
    {
      role: "Full Stack Developer & BI Intern",
      org: "IT-Grow",
      meta: "Internship · Tunisia",
      dates: "Feb 2024 – Jun 2024",
      bullets: [
        "Built an interactive **progress-tracking dashboard** visualizing learner activity and course progress for a MERN e-learning platform.",
        "Developed REST APIs and data models for user activity and learning progress.",
      ],
    },
  ],
  projects: [
    {
      role: "CARTHAGEOS — Multi-tenant SaaS ERP",
      org: "Personal project",
      meta: "In development · code on request",
      dates: "2026",
      bullets: [
        "Building a cloud ERP with **MongoDB aggregation pipelines** for multi-warehouse inventory, invoicing and financial tracking, with role-based access control.",
      ],
    },
  ],
};

const dsFr = {
  ...frIntl,
  file: "Iyed_Khouildi_Data_Scientist_CV_FR",
  title: "Data Scientist Junior | Machine Learning · IA · Analyse de données",
  labels: { ...fr.labels, training: "Formation en Machine Learning & IA" },
  summary:
    "Diplômé en Business Intelligence et Développeur Full Stack avec plus de 2 ans d'expérience dans la création d'applications web orientées données, de tableaux de bord et d'API REST sur des bases MongoDB et SQL. Formé à la data science par une licence en BI et le Bootcamp Data Scientist de GOMYCODE : analyse de données avec Python, statistiques et probabilités, machine learning, réseaux de neurones, NLP et IA générative. Allie compétences analytiques et capacité d'ingénierie pour mettre des produits data en production. Recherche un poste débutant ou junior en Data Science, Machine Learning, ingénierie IA ou analyse de données. Trilingue arabe, français et anglais.",
  skills: [
    ["Programmation & données", "Python, SQL, Pandas, NumPy, nettoyage de données"],
    ["Statistiques & visualisation", "Statistiques & probabilités, Matplotlib, Seaborn, visualisation de données"],
    ["Machine Learning & IA", "Scikit-learn, algorithmes de machine learning, deep learning & réseaux de neurones, NLP, LLM, IA générative"],
    ["BI & bases de données", "Power BI, Tableau, Excel, PostgreSQL, MongoDB (pipelines d'agrégation)"],
    ["Outils", "Jupyter Notebook, Git, GitHub"],
    ["Logiciel & API", "JavaScript, Node.js, Express.js, React.js, API REST, Agile/Scrum"],
  ],
  training: [
    {
      role: "Bootcamp Data Scientist",
      org: "GOMYCODE",
      meta: "Certification",
      dates: "2025",
      bullets: [
        "Analyse de données avec Python, Pandas et NumPy, nettoyage de données et analyse exploratoire sous Jupyter Notebook.",
        "Statistiques et probabilités ; visualisation de données avec Matplotlib et Seaborn.",
        "Machine learning avec Scikit-learn, deep learning et réseaux de neurones, NLP, LLM et IA générative.",
      ],
    },
  ],
  experience: [
    {
      role: "Développeur Full Stack",
      org: "JCD Commerce",
      meta: "Temps plein · Tunisie",
      dates: "Sept. 2025 – Août 2026",
      bullets: [
        "Conception et gestion des **modèles de données MongoDB** (produits, commandes, utilisateurs) d'une plateforme e-commerce en production (jcdcommerce.com), au sein d'une équipe de 3 développeurs.",
        "Développement d'**API REST** Node.js/Express et d'un **tableau de bord d'administration** pour le catalogue, le stock et les commandes.",
        "Mise en place d'une authentification sécurisée avec JWT, bcrypt et connexion Google.",
      ],
    },
    {
      role: "Développeur Full Stack Freelance",
      org: "Indépendant",
      meta: "À distance · Temps partiel",
      dates: "Sept. 2024 – Oct. 2026",
      bullets: [
        "5 sites responsives et optimisés SEO livrés de bout en bout (besoin, UI, développement, déploiement, hébergement) : maritime, négoce, industrie, agroalimentaire.",
      ],
      clients: [
        { name: "BV Tech Marine", detail: "Site vitrine React.js / Tailwind CSS · bvtechmarine.com", dates: "Sept. 2026 – Oct. 2026", bullets: [] },
        { name: "Oliv'Or", detail: "Site e-commerce MERN : catalogue, commandes, comptes clients · olivor.tn", dates: "Juin 2026 – Août 2026", bullets: [] },
        { name: "MS Smart Trading", detail: "Site vitrine React.js / Tailwind CSS", dates: "Juin 2025", bullets: [] },
        { name: "MS Équipements et Services", detail: "Site vitrine React.js / Tailwind CSS", dates: "Mars 2025 – Avr. 2025", bullets: [] },
        { name: "EGT Naval Services", detail: "Site vitrine React.js / Tailwind CSS · egtnavalservices.com", dates: "Sept. 2024", bullets: [] },
      ],
    },
    {
      role: "Stagiaire Développeur Full Stack & BI",
      org: "IT-Grow",
      meta: "Stage · Tunisie",
      dates: "Févr. 2024 – Juin 2024",
      bullets: [
        "Réalisation d'un **tableau de bord interactif** de suivi de l'activité et de la progression des apprenants pour une plateforme e-learning MERN.",
        "Développement d'API REST et de modèles de données pour l'activité des utilisateurs et la progression pédagogique.",
      ],
    },
  ],
  projects: [
    {
      role: "CARTHAGEOS — ERP SaaS multi-tenant",
      org: "Projet personnel",
      meta: "En cours · code sur demande",
      dates: "2026",
      bullets: [
        "Développement d'un ERP cloud reposant sur des **pipelines d'agrégation MongoDB** pour la gestion de stock multi-entrepôts, la facturation et le suivi financier, avec contrôle d'accès par rôles.",
      ],
    },
  ],
};

module.exports = { en, fr, enIntl, frIntl, dsEn, dsFr };
