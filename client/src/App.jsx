import React, { useState, useEffect } from "react";
import {
  Terminal,
  Menu,
  X,
  Code2,
  Share2,
  Mail,
  User,
  Briefcase,
  GraduationCap,
  Cpu,
  Download,
  Server,
  GitBranch,
  Calculator,
  Sheet,
  Database,
  BarChart3,
  Settings,
  HardDrive,
  Brain,
  Coffee,
  ArrowRight,
  History,
  AtSign,
  MapPin,
  Globe,
  Users,
  MessageSquare,
  Phone,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import me from "./assets/Me.jpeg";
const SkillIcon = ({ name }) => {
  switch (name.toLowerCase()) {
    // Frontend
    case "html5":
    case "css3":
    case "javascript":
    case "typescript":
      return <Code2 className="w-8 h-8" />;

    case "react":
    case "nextjs":
    case "next.js":
      return <Cpu className="w-8 h-8" />;

    case "tailwindcss":
    case "tailwind css":
    case "bootstrap":
      return <Settings className="w-8 h-8" />;

    // Backend
    case "nodejs":
    case "node.js":
      return <Terminal className="w-8 h-8" />;

    case "express":
    case "express.js":
    case "springboot":
    case "spring boot":
      return <Server className="w-8 h-8" />;

    case "api":
    case "rest apis":
    case "next.js api routes":
      return <Globe className="w-8 h-8" />;

    // Databases
    case "mongodb":
    case "postgresql":
      return <Database className="w-8 h-8" />;

    case "sql":
      return <HardDrive className="w-8 h-8" />;

    // Data Science / BI
    case "python":
      return <Terminal className="w-8 h-8" />;

    case "pandas":
    case "numpy":
      return <Calculator className="w-8 h-8" />;

    case "machine learning":
      return <Brain className="w-8 h-8" />;

    case "powerbi":
    case "power bi":
    case "tableau":
    case "data visualization":
      return <BarChart3 className="w-8 h-8" />;

    case "excel":
      return <Sheet className="w-8 h-8" />;

    // Tools
    case "git":
    case "github":
      return <GitBranch className="w-8 h-8" />;

    default:
      return <Code2 className="w-8 h-8" />;
  }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
  ];

  const skills = [
    {
      category: "Frontend Development",
      items: [
        { name: "HTML5", icon: "html5" },
        { name: "CSS3", icon: "css3" },
        { name: "JavaScript", icon: "javascript" },
        { name: "TypeScript", icon: "typescript" },
        { name: "React", icon: "react" },
        { name: "Next.js", icon: "nextjs" },
        { name: "Tailwind CSS", icon: "tailwindcss" },
        { name: "Bootstrap", icon: "bootstrap" },
      ],
    },
    {
      category: "Backend Development",
      items: [
        { name: "Node.js", icon: "nodejs" },
        { name: "Express.js", icon: "express" },
        { name: "REST APIs", icon: "api" },
        { name: "Spring Boot", icon: "springboot" },
        { name: "Next.js API Routes", icon: "nextjs" },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "MongoDB", icon: "mongodb" },
        { name: "SQL", icon: "sql" },
        { name: "PostgreSQL", icon: "postgresql" },
      ],
    },
    {
      category: "Data Analysis & BI",
      items: [
        { name: "Python", icon: "python" },
        { name: "Pandas", icon: "pandas" },
        { name: "NumPy", icon: "numpy" },
        { name: "Machine Learning", icon: "machinelearning" },
        { name: "Power BI", icon: "powerbi" },
        { name: "Tableau", icon: "tableau" },
        { name: "Data Visualization", icon: "datavis" },
        { name: "Excel", icon: "excel" },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
      ],
    },
  ];

  const projects = [
    {
      title: "MS Smart Trading",
      description:
        "Developed a responsive and professional business website to strengthen online presence.Delivered a performance-optimized solution aligned with client branding and commercial goals.",
      tags: ["MERN Stack"],
      image: "https://mssmarttrading.com",
    },
    {
      title: "EGT Naval Services ",
      description:
        "Designed and developed a modern, responsive, and high-performance corporate website. Optimized structure and presentation to showcase services and attract new clients",
      tags: ["React js", "Tailwind CSS"],
      image: "https://egtnavalservices.com",
    },
    {
      title: "JCD commerce",
      description:
        "Designed and developed a modern, responsive, and high-performance corporate website. Optimized structure and presentation to showcase services and attract new clients.",
      tags: ["React js", "Tailwind CSS"],
      image: "https://jcdcommerce.com",
    },
    {
      title: "Oliv'wood",
      description:
        "My personal portfolio built with a focus on glassmorphism aesthetics, accessibility, and clean architecture.",
      tags: ["Mern Stack", "Tailwind CSS"],
      image: "https://olivwood.netlify.app",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 selection:bg-[#895bf5] selection:text-white font-sans scroll-smooth">
      {/* Navbar */}
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-300 border-b ${scrolled ? "bg-[#0f172a]/80 backdrop-blur-xl border-white/10 py-4" : "bg-transparent border-transparent py-6"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="bg-[#895bf5] p-1.5 rounded-lg flex items-center justify-center">
                <Terminal className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight">Iyed</span>
            </motion.div>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm font-medium text-slate-400 hover:text-[#895bf5] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-5 py-2.5 bg-[#895bf5] hover:bg-[#895bf5]/90 text-white rounded-lg text-sm font-bold transition-all shadow-lg shadow-[#895bf5]/20"
              >
                Contact
              </motion.a>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-slate-400"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0f172a] border-b border-white/10 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-medium text-slate-400 hover:text-[#895bf5]"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center px-5 py-3 bg-[#895bf5] text-white rounded-lg font-bold"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section
          id="home"
          className="pt-32 pb-20 lg:pt-48 lg:pb-32 flex flex-col lg:flex-row items-center gap-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                Hi, I'm Iyed — <br />
                <span className="text-[#895bf5]">
                  Web Developer & Data Analyst
                </span>
              </h1>

              <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                I design and develop modern, scalable web applications while
                transforming data into actionable insights. Passionate about
                building high-performance digital solutions using the MERN stack
                and applying data analysis to drive smarter decisions.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#895bf5] text-white rounded-xl font-bold text-lg shadow-xl shadow-[#895bf5]/25"
              >
                View Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-white/10 bg-white/5 backdrop-blur-md text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-colors"
              >
                Contact Me
              </motion.button>
            </div>
            <div className="flex items-center gap-6 pt-4">
              {[Code2, Share2, Mail].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -5, color: "#895bf5" }}
                  href="#"
                  className="p-3 bg-white/5 border border-white/10 rounded-full text-slate-400 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="absolute -inset-4 bg-[#895bf5]/20 blur-3xl rounded-full"></div>
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000"
                alt="Modern laptop"
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-8 left-8 p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <p className="text-sm font-medium">
                    Available for new projects
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 border-t border-white/5">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/3"
            >
              <div className="aspect-3/4 rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                <img
                  src={me}
                  alt="Iyed"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <User className="text-[#895bf5]" /> About Me
                </h2>

                <p className="text-lg text-slate-400 leading-relaxed">
                  I am a Web Developer and Data Analyst with a strong background
                  in Business Intelligence. I specialize in building modern,
                  scalable web applications while transforming complex data into
                  meaningful insights. By combining technical development skills
                  with analytical thinking, I create digital solutions that are
                  both functional and data-driven. Based in Tunisia, I am
                  passionate about developing efficient systems and helping
                  businesses make smarter decisions through technology and data.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Briefcase,
                    label: "Experience",
                    value: "3+ Years Building",
                  },
                  {
                    icon: GraduationCap,
                    label: "Education",
                    value: "BI Degree @ ISG Bizerte",
                  },
                  {
                    icon: Cpu,
                    label: "Tech Stack",
                    value: "MERN + AI/BI Tools",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#895bf5]/30 transition-all group"
                  >
                    <item.icon className="text-[#895bf5] mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-bold text-lg">{item.label}</h3>
                    <p className="text-slate-500 text-sm">{item.value}</p>
                  </div>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl font-semibold flex items-center gap-2 hover:bg-white/10 transition-colors w-fit"
              >
                <Download className="w-4 h-4" /> Download CV
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-black">
              My <span className="text-[#895bf5]">Toolbox</span>
            </h2>
            <p className="text-slate-500">
              Technologies and tools I use to build modern applications and
              analyze data
            </p>
          </div>

          <div className="space-y-14">
            {skills.map((group, gIndex) => (
              <div key={gIndex} className="space-y-6">
                {/* Category Title */}
                <h3 className="text-2xl font-semibold text-center text-[#895bf5]">
                  {group.category}
                </h3>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {group.items.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{
                        y: -6,
                        backgroundColor: "rgba(255,255,255,0.08)",
                        scale: 1.05,
                      }}
                      className="p-8 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center gap-4 group transition-all backdrop-blur-sm"
                    >
                      <div className="text-[#895bf5] group-hover:scale-110 transition-transform">
                        <SkillIcon name={skill.icon} />
                      </div>

                      <span className="font-medium text-sm text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="space-y-4">
              <h2 className="text-4xl font-black">
                Featured <span className="text-[#895bf5]">Projects</span>
              </h2>
              <p className="text-slate-500">A collection of my recent work</p>
            </div>
            <a
              href="#"
              className="text-[#895bf5] font-bold flex items-center gap-2 group"
            >
              View All Projects{" "}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-[#895bf5]/30 transition-all"
              >
                <div className="h-64 overflow-hidden relative">
                  {project.image.startsWith("http") &&
                  !project.image.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i) ? (
                    <iframe
                      src={project.image}
                      title={project.title}
                      className="w-full h-full border-0"
                      style={{ minHeight: "100%", minWidth: "100%" }}
                      loading="lazy"
                      allow="fullscreen"
                    />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div className="absolute inset-0 bg-linear-to-t from-[#0f172a] to-transparent opacity-80"></div>
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex gap-2">
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 bg-[#895bf5]/20 text-[#895bf5] text-xs font-bold rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-slate-500 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex gap-4 pt-4">
                    <button className="flex-1 py-3 bg-[#895bf5] text-white rounded-xl font-bold hover:bg-[#895bf5]/90 transition-all">
                      Live Demo
                    </button>
                    <button className="px-5 py-3 bg-white/5 border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all">
                      <Code2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience & Education Section */}
        <section id="experience" className="py-20 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Education */}
            <div className="space-y-12">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <GraduationCap className="text-[#895bf5]" /> Education
              </h2>

              <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-4 before:w-px before:bg-white/10">
                {/* University */}
                <div className="relative pl-12 group">
                  <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-[#895bf5] border-4 border-[#0f172a] group-hover:scale-125 transition-transform"></div>

                  <div className="bg-white/5 p-6 rounded-2xl space-y-2 border border-white/5 group-hover:border-[#895bf5]/30 transition-all">
                    <span className="text-xs font-bold text-[#895bf5] uppercase tracking-widest">
                      2021 – 2024
                    </span>

                    <h3 className="text-xl font-bold">
                      Bachelor's Degree in Business Intelligence
                    </h3>

                    <p className="text-slate-400 font-medium">
                      Higher Institute of Management of Bizerte (ISG Bizerte)
                    </p>

                    <p className="text-sm text-slate-500 leading-relaxed">
                      Specialized in data analysis, statistical methods, and
                      database management systems, with a strong focus on
                      transforming data into actionable insights for
                      decision-making.
                    </p>
                  </div>
                </div>

                {/* Data Scientist Bootcamp */}
                <div className="relative pl-12 group">
                  <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-[#895bf5] border-4 border-[#0f172a] group-hover:scale-125 transition-transform"></div>

                  <div className="bg-white/5 p-6 rounded-2xl space-y-2 border border-white/5 group-hover:border-[#895bf5]/30 transition-all">
                    <span className="text-xs font-bold text-[#895bf5] uppercase tracking-widest">
                      Certification
                    </span>

                    <h3 className="text-xl font-bold">
                      Data Scientist Bootcamp
                    </h3>

                    <p className="text-slate-400 font-medium">GOMYCODE</p>

                    <a
                      href="https://diploma.gomycode.app/?id=31752696036635526"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#895bf5] hover:underline"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>

                {/* Software Developer Bootcamp */}
                <div className="relative pl-12 group">
                  <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-[#895bf5] border-4 border-[#0f172a] group-hover:scale-125 transition-transform"></div>

                  <div className="bg-white/5 p-6 rounded-2xl space-y-2 border border-white/5 group-hover:border-[#895bf5]/30 transition-all">
                    <span className="text-xs font-bold text-[#895bf5] uppercase tracking-widest">
                      Certification
                    </span>

                    <h3 className="text-xl font-bold">
                      Software Developer Bootcamp
                    </h3>

                    <p className="text-slate-400 font-medium">GOMYCODE</p>

                    <a
                      href="https://diploma.gomycode.app/?id=31751302840902487"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#895bf5] hover:underline"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-12">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <History className="text-[#895bf5]" /> Experience
              </h2>
              <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-4 before:w-px before:bg-white/10">
                {[
                  {
                    period: "Feb 2024 – Jun 2024",
                    title:
                      "Web Developer & Data Analyst (Final Year Internship)",
                    company: "IT-Grow",
                    description:
                      "Designed and developed a complete e-learning platform from concept to deployment. Built a responsive UI, developed a robust backend, integrated interactive learning features, and implemented a dashboard to track user progress and platform performance.",
                  },
                  {
                    period: "Sep 2024 – Oct 2024",
                    title: "Freelance Web Developer",
                    company: "EGT Naval Services",
                    link: "https://egtnavalservices.com",
                    description:
                      "Designed and developed a modern, responsive corporate website showcasing naval maintenance and repair services. Optimized structure and presentation to attract new clients.",
                  },
                  {
                    period: "Jun 2025 – Aug 2025",
                    title: "Freelance Web Developer",
                    company: "MS Smart Trading",
                    link: "https://mssmarttrading.com",
                    description:
                      "Developed a professional and responsive business website to strengthen the company's online presence and align with its branding and commercial goals.",
                  },
                  {
                    period: "Dec 2025 – Jan 2026",
                    title: "Founder & Web Developer",
                    company: "Oliv'Wood",
                    link:"https://olivwood.netlify.app",
                    description:
                      "Built a custom e-commerce platform with an admin dashboard, including product management, order tracking, and a responsive UI to support a small online business.",
                  },
                  {
                    period: "Mar 2026 – Apr 2026",
                    title: "Freelance Web Developer",
                    company: "MS Equipements et Services",
                    link: "https://msequipementsetservices.com",
                    description:
                      "Developed a responsive and high-performance corporate website designed to improve the company's digital presence and client engagement.",
                  },
                ].map((exp, i) => (
                  <div key={i} className="relative pl-12 group">
                    <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-[#895bf5] border-4 border-[#0f172a] group-hover:scale-125 transition-transform"></div>
                    <div className="bg-white/5 p-6 rounded-2xl space-y-2 border border-white/5 group-hover:border-[#895bf5]/30 transition-all">
                      <span className="text-xs font-bold text-[#895bf5] uppercase tracking-widest">
                        {exp.period}
                      </span>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      {exp.link ? (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 font-medium hover:text-[#895bf5] underline"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        <p className="text-slate-400 font-medium">
                          {exp.company}
                        </p>
                      )}
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 border-t border-white/5">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-black">
                Let's <span className="text-[#895bf5]">Connect</span>
              </h2>
              <p className="text-slate-500 text-lg">
                Have a project in mind or just want to say hi?
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                {[
                  {
                    icon: AtSign,
                    label: "Email Me",
                    value: "iyedkhouildi12@gmail.com",
                  },
                  {
                    icon: Phone,
                    label: "Call Me",
                    value: "+216 93 117 612",
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "Bizerte, Tunisia",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-[#895bf5]">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.label}</h4>
                      <p className="text-slate-500">{item.value}</p>
                    </div>
                  </div>
                ))}
                <div className="pt-8 flex gap-4">
                  {[Globe, Users, MessageSquare].map((Icon, i) => (
                    <motion.a
                      key={i}
                      whileHover={{
                        y: -5,
                        backgroundColor: "rgba(137, 91, 245, 0.2)",
                      }}
                      href="#"
                      className="p-4 bg-white/5 border border-white/10 rounded-2xl text-slate-400 hover:text-[#895bf5] transition-all"
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
              <form className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-400 ml-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#895bf5]/50 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-400 ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#895bf5]/50 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-400 ml-1">
                    Message
                  </label>
                  <textarea
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#895bf5]/50 transition-colors"
                    placeholder="Tell me about your project..."
                    rows={4}
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-[#895bf5] text-white rounded-xl font-bold text-lg shadow-lg shadow-[#895bf5]/25"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <div className="bg-[#895bf5]/20 p-1.5 rounded-lg">
              <Terminal className="text-[#895bf5] w-5 h-5" />
            </div>
            <span className="text-xl font-bold">Iyed</span>
          </div>
          <p className="text-slate-500 text-sm">
            © 2024 Iyed. All rights reserved. Built with passion and clean code.
          </p>
          <div className="flex justify-center gap-6">
            {[
              { icon: Github, label: "GitHub" },
              { icon: Linkedin, label: "LinkedIn" },
              { icon: Twitter, label: "Twitter" },
            ].map((social, i) => (
              <a
                key={i}
                href="#"
                className="text-slate-500 hover:text-[#895bf5] transition-colors flex items-center gap-2 text-sm"
              >
                <social.icon className="w-4 h-4" /> {social.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
