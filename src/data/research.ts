import type { Publication, ActiveResearch } from "./types";

export const publications: Publication[] = [
  {
    slug: "autism-ensemble-detection",
    title: "Autism Spectrum Disorder Detection Using Ensemble Transfer Learning",
    venue: "IEEE WCONF 2024",
    status: "Published",
    result: "Approximately 90% accuracy",
    models: ["EfficientNet-B5", "MobileNet", "InceptionV3"],
    relatedProjectSlug: "autism-ensemble-detection",
    paperUrl: null,
  },
  {
    slug: "clinical-disease-ensemble",
    title: "Clinical Disease Prediction Using Ensemble Learning",
    venue: "IEEE NMITCON 2024",
    status: "Published",
    result: "89.63% accuracy",
    models: ["Decision Tree", "Neural network", "Random Forest", "SVM", "Logistic-regression meta-learner"],
    relatedProjectSlug: "clinical-disease-ensemble",
    paperUrl: null,
  },
  {
    slug: "hybrid-pnorm-boolean-retrieval",
    title: "Hybrid p-Norm Extended Boolean Retrieval with BERT",
    venue: "Procedia Computer Science, 2025",
    status: "Published",
    result: "92% accuracy and AUC 0.92",
    paperUrl: null,
  },
  {
    slug: "multimodal-biometrics",
    title: "Multimodal Biometric Authentication",
    venue: "IEEE Access",
    status: "Minor revision",
    result: "94.65% accuracy, 0.09% FAR/FRR, AUC 0.85",
    relatedProjectSlug: "multimodal-biometrics",
    paperUrl: null,
  },
  {
    slug: "federated-digital-twin-6g",
    title: "Federated Learning and Digital Twin for 6G Autonomous Transportation",
    venue: "IEEE Transactions on Intelligent Transportation Systems",
    status: "Under review",
    result: "65% reduction in convergence error",
    technologies: ["Federated learning", "Digital twins", "6G", "Autonomous transportation"],
    paperUrl: null,
  },
  {
    slug: "smart-city-ntn-qkd",
    title: "Smart-City Non-Terrestrial Networks with Quantum Key Distribution",
    venue: "IEEE Communications",
    status: "Under review",
    technologies: ["Smart-city networks", "NTN", "QKD"],
    paperUrl: null,
  },
];

export const activeResearch: ActiveResearch[] = [
  {
    slug: "physics-informed-weather",
    name: "Physics-Informed Extreme-Weather Forecasting",
    tagline: "Fine-tuning a 1.26B-parameter weather foundation model for rare tropical-cyclone events",
    status: "In progress",
    stack: ["PyTorch", "Aurora", "LoRA", "AWQ", "Physics-informed learning"],
    relatedProjectSlug: "physics-informed-weather",
  },
  {
    slug: "physics-latent-adapter",
    name: "Physics-Constrained Latent Adapter",
    tagline: "Learning smooth, physically consistent latent manifolds for weather foundation models",
    status: "Research proposal / in progress",
    stack: ["PyTorch", "Representation learning", "Autoencoders", "PDE discovery", "Physics-informed learning", "Manifold learning"],
    summary:
      "The proposed encoder-adapter-decoder structure takes atmospheric and surface variables from the current and previous time steps. The adapter transforms the encoder's latent output into a lower-dimensional representation that better respects physical laws, forms a smooth manifold, and preserves meaningful event trajectories.",
    criteria: [
      "Reconstructed inputs should preserve the physical behavior of the original inputs.",
      "Adapted latent points should follow relevant physical constraints.",
      "Latent representations should form a smooth manifold.",
      "The latent space should preserve event progression.",
      "Normal and extreme events should become distinguishable.",
      "PDE structure may be recovered from noisy latent trajectories and used to tune the adapted representation.",
    ],
  },
  {
    slug: "llm-hallucination-detection",
    name: "LLM Hallucination Detection",
    tagline: "Ongoing research into detecting unreliable generations from large language models",
    status: "In progress",
  },
  {
    slug: "llm-task-planning",
    name: "LLM Task Planning",
    tagline: "Ongoing research into task decomposition and planning with large language models",
    status: "In progress",
  },
  {
    slug: "agentic-ai-geoscience",
    name: "Agentic AI for Geoscience",
    tagline: "Ongoing research into agentic AI systems applied to geoscience problems",
    status: "In progress",
  },
];

export function getPublicationBySlug(slug: string): Publication | undefined {
  return publications.find((p) => p.slug === slug);
}
