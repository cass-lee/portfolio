import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  skills: string[];
}

const SKILL_GROUPS: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Python", "TypeScript", "JavaScript", "R", "SQL", "HTML", "CSS"],
  },
  {
    title: "Libraries & Frameworks",
    skills: [
      "React",
      "Vue.js",
      "Next.js",
      "Tailwind CSS",
      "Webpack",
      "Vite",
      "Node.js",
      "Flask",
      "PySpark",
      "D3.js",
      "XGBoost",
      "LightGBM",
      "Scikit-learn",
      "NumPy",
      "Pandas",
    ],
  },
  {
    title: "Database & Caches",
    skills: ["Postgres", "Redis/Valkey", "CockroachDB", "Milvus"],
  },
  {
    title: "AWS",
    skills: [
      "IAM",
      "S3",
      "Lambda",
      "EC2",
      "Fargate (ECS)",
      "KMS",
      "VPC",
      "Route 53",
      "RDS",
      "DynamoDB",
    ],
  },
  {
    title: "Other Tools",
    skills: [
      "Git",
      "Docker",
      "SSH",
      "Linux",
      "Bash",
      "GitHub Dependabot",
      "GitHub Actions",
      "Terraform",
      "Grafana",
      "Prometheus (PromQL)",
      "Looker",
      "GraphQL",
      "Apache Spark",
      "ChaosSearch",
    ],
  },
];

export function TechStackContent() {
  return (
    <div className="w-full max-w-2xl pr-2">
      {/* Inner scrolling viewport container */}
      <div className="max-h-[75vh] overflow-y-auto space-y-8 pb-2 pr-2 custom-scrollbar">
        {SKILL_GROUPS.map((group, groupIndex) => (
          <div key={group.title} className="space-y-3">
            {/* Category Title label */}
            <h3 className="text-[11px] font-mono uppercase tracking-widest opacity-60 text-[#a67c52] dark:text-slate-400">
              // {group.title}
            </h3>

            {/* Container for the pills */}
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  // Initial position is shifted up off-screen
                  initial={{ opacity: 0, y: -40 }}
                  // Animate falls down into place
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 140,
                    damping: 14,
                    // Delay calculation so groups fall row by row
                    delay: groupIndex * 0.12 + skillIndex * 0.04,
                  }}
                  // Premium editorial style pill layout
                  className="px-4 py-2 text-xs font-medium rounded-full border border-[#a67c52]/15 dark:border-slate-800 bg-white/40 dark:bg-slate-900/30 text-[#a67c52] dark:text-slate-200 shadow-sm backdrop-blur-[2px] transition-colors duration-300 hover:border-[#a67c52]/40 dark:hover:border-slate-600"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
