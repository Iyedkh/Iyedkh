import React from "react";
import {
  Code2, Settings, Terminal, Server, Database, Calculator,
  BarChart3, Sheet, Brain, GitBranch,
} from "lucide-react";

const SkillIcon = ({ name }) => {
  const map = {
    html5: Code2, css3: Code2, javascript: Code2, typescript: Code2,
    react: Code2, nextjs: Code2, "next.js": Code2,
    tailwindcss: Settings, "tailwind css": Settings, bootstrap: Settings,
    nodejs: Terminal, "node.js": Terminal,
    express: Server, "express.js": Server, springboot: Server, "spring boot": Server,
    api: Server, "rest apis": Server, "next.js api routes": Server,
    mongodb: Database, postgresql: Database,
    sql: Database,
    python: Terminal,
    pandas: Calculator, numpy: Calculator,
    "machine learning": Brain,
    powerbi: BarChart3, "power bi": BarChart3, tableau: BarChart3,
    "data visualization": BarChart3, datavis: BarChart3,
    excel: Sheet,
    git: GitBranch, github: GitBranch,
  };
  const Icon = map[name.toLowerCase()] || Code2;
  return <Icon className="w-5 h-5" />;
};

export default SkillIcon;