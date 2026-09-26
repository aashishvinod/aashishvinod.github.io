import type { ExperienceEntry } from "./types";

export const experience: ExperienceEntry[] = [
  {
    id: "umd-gra",
    organization: "University of Maryland, College Park",
    role: "Graduate Research Assistant",
    dates: "September 2026 – Present",
    location: "College Park, Maryland",
    summary:
      "Researching physics-informed adaptation, quantization, and evaluation of weather foundation models for rare tropical-cyclone events.",
    technologies: ["Python", "PyTorch", "Aurora", "LoRA", "AWQ", "ERA5", "IBTrACS", "Linux", "HPC"],
    relatedProjects: ["physics-informed-weather"],
    highlights: [
      "Evaluated a 1.26B-parameter forecasting model across 7+ configurations, 10 adapter depths, and 5 seeds.",
      "Improved held-out wind RMSE by approximately 15–21%.",
      "Reduced inference latency by approximately 18%.",
      "Evaluated Navier-Stokes, continuity, and ocean heat-flux constraints.",
    ],
  },
  {
    id: "geoprospex",
    organization: "GeoProspex.ai",
    role: "Data Science Intern",
    dates: "May 2026 – August 2026",
    summary:
      "Developed national-scale geospatial ingestion, validation, site-comparison, and decision-support workflows.",
    technologies: ["Python", "SQL", "GCP Data Fusion", "BigQuery", "REST APIs"],
    relatedProjects: ["geoprospex"],
    highlights: [
      "Processed 84,400+ census tracts and 7,423+ facilities.",
      "Achieved 99.7% validated data accuracy.",
      "Reduced failures by 29% and increased throughput by 2.3×.",
    ],
  },
  {
    id: "heatmap",
    organization: "HeatMap",
    role: "Forward Deployed Engineer and Co-Founder",
    dates: "December 2025 – March 2026",
    summary:
      "Built an agentic multimodal AI platform for competitive intelligence and marketing-video generation.",
    technologies: ["Python", "FastAPI", "LLMs", "ReAct", "Vision models", "Docker", "GCP"],
    relatedProjects: ["heatmap-ai"],
    highlights: [
      "Supported 30 active users.",
      "Saved approximately 50 hours per business.",
      "Kept generation cost under $0.30 per video.",
    ],
  },
  {
    id: "cognizant",
    organization: "Cognizant Technology Solutions",
    role: "Cloud and Data Intern",
    dates: "April 2025 – July 2025",
    summary:
      "Built and optimized AWS financial-data pipelines, validation workflows, and KPI reporting.",
    technologies: ["Python", "SQL", "PySpark", "S3", "Glue", "Redshift", "QuickSight"],
    relatedProjects: ["financial-data-platform"],
    highlights: [
      "Processed 5M+ financial records and 250GB+ of data.",
      "Improved query performance by approximately 26–30%.",
      "Built a 12-KPI reporting layer for 150+ users.",
    ],
  },
  {
    id: "vit",
    organization: "Vellore Institute of Technology",
    role: "Research Assistant, Data Analytics and Machine Learning",
    dates: "May 2024 – May 2025",
    summary: "Led healthcare, machine-learning, and analytics research across 50,000+ records.",
    technologies: ["Python", "SQL", "Airflow", "Git", "Tableau", "Machine learning"],
    relatedProjects: ["autism-ensemble-detection", "clinical-disease-ensemble", "multimodal-biometrics"],
    highlights: [
      "Built five Tableau dashboards for three faculty teams.",
      "Reduced manual reporting by 53%.",
      "Standardized Python/SQL workflows and Git-based handoffs.",
      "Led five researchers across concurrent research deliverables.",
    ],
  },
  {
    id: "suiyas",
    organization: "Suiyas",
    role: "Python Developer Intern, FinTech",
    dates: "September 2023 – December 2023",
    summary: "Developed Python-based market-data, algorithmic-trading, and Forex automation.",
    technologies: ["Python", "Nuvama API", "Market data", "Risk rules"],
    relatedProjects: ["algorithmic-trading"],
    highlights: ["Improved operational efficiency by approximately 20%."],
  },
  {
    id: "ladwa",
    organization: "LADWA Solutions",
    role: "Data Extraction and Software Development Intern",
    dates: "October 2023 – December 2023",
    summary: "Built mobile finance and browser-automation workflows.",
    technologies: ["React Native", "Java", "Python", "Selenium", "REST APIs"],
    relatedProjects: ["selenium-data-extraction", "finance-management-app"],
    highlights: ["Reduced manual verification by approximately 40–45%."],
  },
  {
    id: "ongc",
    organization: "ONGC, Karaikal",
    role: "Associate Developer Intern",
    dates: "August 2023 – September 2023",
    summary: "Developed a CNN-based mobile facial-recognition attendance workflow.",
    technologies: ["CNNs", "Facial recognition", "Android Studio"],
    relatedProjects: ["face-attendance"],
    highlights: [],
  },
  {
    id: "umd-promise",
    organization: "UMD PROMISE",
    role: "Technology Staff Lead",
    dates: "August 2026 – Present",
    summary:
      "Supports event technology, equipment setup, recording, photography, file handling, and technical operations.",
    technologies: [],
    relatedProjects: [],
    highlights: [],
  },
];

export function getExperienceById(id: string): ExperienceEntry | undefined {
  return experience.find((e) => e.id === id);
}
