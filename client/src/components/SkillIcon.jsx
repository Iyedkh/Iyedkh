import React from "react";
import {
   Code2,
   Layers,
   Terminal,
   Server,
   Database,
   Calculator,
   BarChart3,
   FileSpreadsheet,
   Brain,
   GitBranch,
   Cpu,
   Globe,
   Boxes,
   Workflow,
   Flame,
   Sparkles,
   FolderGit2,
 } from "lucide-react";

const SkillIcon = ({ name, className = "w-5 h-5" }) => {
  const normalized = name.toLowerCase().trim();

  const iconMap = {
    // Frontend
    html5: Globe,
    css3: Layers,
    javascript: Code2,
    typescript: Code2,
    react: Flame,
    "next.js": Boxes,
    nextjs: Boxes,
    "tailwind css": Sparkles,
    tailwindcss: Sparkles,
    bootstrap: Layers,
    "responsive ui": Globe,
    "responsive design": Globe,

    // Backend & APIs
    "node.js": Terminal,
    nodejs: Terminal,
    "express.js": Server,
    express: Server,
    "spring boot": Cpu,
    springboot: Cpu,
    "rest apis": Workflow,
    "rest api": Workflow,
    api: Workflow,
    "next.js api routes": Boxes,

    // Databases
    mongodb: Database,
    postgresql: Database,
    sql: Database,
    "database design": Database,

    // Data & BI
    python: Terminal,
    pandas: Calculator,
    numpy: Calculator,
    "machine learning": Brain,
    "power bi": BarChart3,
    powerbi: BarChart3,
    tableau: BarChart3,
    "data visualization": BarChart3,
    datavis: BarChart3,
    excel: FileSpreadsheet,

    // Tools
    git: GitBranch,
    github: FolderGit2,
    vite: Flame,
    postman: Workflow,
  };

  const IconComponent = iconMap[normalized] || Code2;
  return <IconComponent className={className} />;
};

export default SkillIcon;