import { useState, useRef } from "react";

const roles = [
  {
    company: "Stile Education",
    role: "Software Engineering Intern",
    period: "Aug 2026 – Nov 2026",
    tech: [
      "Rust",
      "Ruby",
      "Machine Learning",
      "AWS",
      "Docker",
      "Terraform",
      "Git",
    ],
    description: [
      "Built a user-load forecasting model from scratch in Rust, to predict concurrent platform users and support proactive backend scaling. Engineered 11 time-series features from raw timestamps and user counts, achieving 1.02% MAPE on a held-out test set, then deployed it as an AWS Lambda feeding live predictions into the team’s Prometheus and Grafana dashboards. Diagnosed inflated user counts caused by idle browser tabs and shipped a frontend fix that cut unnecessary overnight traffic by 94%, improving data quality and reducing costs.",
    ],
  },
  {
    company: "FoodPanda",
    role: "Data Analyst Intern",
    period: "Dec 2025 – Feb 2026",
    tech: ["Python", "Machine Learning", "SQL", "Tableau", "Git"],
    description: [
      "Built an XGBoost fraud detection model that achieved an 81% F1 score by identifying high-risk customers from historical refund dispute data. Combined SQL-based data extraction, feature engineering and exploratory analysis to uncover behavioural patterns, while addressing severe class imbalance using SMOTE and class weighting techniques.",
    ],
  },
  // {
  //   company: "Women4STEM",
  //   role: "Data Analyst Volunteer",
  //   period: "Sep 2025 – Present",
  //   tech: ["Data Integration", "Power BI", "Python", "R"],
  //   description: [
  //     "Developed a data pipeline using Microsoft Fabric to automate the ingestion of Zoom, Humanitix and survey data, saving over 3 hours of manual work each week. Designed a Power BI engagement dashboard for tracking participant outcomes and conducted retrospective analysis to support planning for future programs.",
  //   ],
  // },
];

export function ExperienceContent() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);

    if (nextState) {
      // Scroll down in sync with the opening animation
      setTimeout(() => {
        containerRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }, 150);
    }
  };

  return (
    <div
      className="space-y-12 max-w-2xl pb-16 dark:text-indigo-300 text-[#a67c52]"
      ref={containerRef}
    >
      {roles.map((job, idx) => (
        <div key={idx}>
          <h3 className="text-xl font-bold dark:text-slate-100/90">
            {job.role} | {job.company}
          </h3>
          <p className="text-sm dark:text-[#949ba4] opacity-70 mb-3 italic">
            {job.period}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {job.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-[10px] uppercase tracking-wider bg-[#a67c52]/10 dark:bg-slate-600/50 rounded-full font-bold"
              >
                {t}
              </span>
            ))}
          </div>

          <p className="text-sm leading-relaxed opacity-90 dark:text-[#949ba4]">
            {job.description}
          </p>
        </div>
      ))}

      {/* Resume Section */}
      <div className="space-y-3">
        <button
          type="button"
          onClick={handleToggle}
          aria-expanded={isOpen}
          className="inline-flex items-center gap-3 px-8 py-3 rounded-2xl border border-[#a67c52] dark:border-slate-700 text-[#a67c52] dark:text-white/90 hover:bg-[#a67c52] dark:hover:bg-slate-900/50  hover:text-white dark:hover:text-indigo-300 dark:hover:border-indigo-300 transition-all duration-300 font-bold uppercase tracking-widest text-xs cursor-pointer"
        >
          <span>View Full Resume</span>
          <svg
            className={`w-3.5 h-3.5 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Expand & Fade Wrapper */}
        <div
          className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen
              ? "grid-rows-[1fr] opacity-100 pt-2"
              : "grid-rows-[0fr] opacity-0 pt-0"
          }`}
        >
          <div className="overflow-hidden flex flex-col sm:flex-row gap-6 pl-1">
            <a
              href="/Cassandra_LEE - Software Engineer Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold uppercase tracking-wider hover:opacity-75 transition-opacity inline-flex items-center gap-1.5"
            >
              Software Engineering ↗
            </a>

            <a
              href="/Cassandra_LEE - Data Analyst Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold uppercase tracking-wider hover:opacity-75 transition-opacity inline-flex items-center gap-1.5"
            >
              Data Science & Analytics ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
