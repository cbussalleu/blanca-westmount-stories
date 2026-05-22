// Centralized project data - single source of truth

export interface Project {
  number: number;
  title: string;
  description: string;
  client: string;
  slug: string;
  imageSrc: string;
  // Extended fields for detail pages
  challenge?: string;
  complexity?: string[];
  research?: string[];
  insights?: string[];
  process?: string[];
  impact?: string[];
  tools?: string[];
  icon?: string;
}

export const projects: Project[] = [
  {
    number: 1,
    title: "Connection Center Research & Design",
    description: "Designed a global omnichannel customer experience model capable of standardizing consumer and customer engagement while adapting to diverse market needs.",
    client: "Grupo Bimbo",
    slug: "connection-center",
    imageSrc: "https://images.unsplash.com/photo-1565767292670-bbc01d6ce4a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    challenge: "Design a global omnichannel customer experience model capable of standardizing consumer and customer engagement while adapting to diverse market needs across 17 countries in Latin America, Europe, and Asia.",
    complexity: [
      "Highly variable digital maturity levels between developed markets (Spain) and emerging markets (India)",
      "Multiple stakeholder groups with competing priorities",
      "Regulatory variations across regions",
      "Diverse cultural contexts affecting customer service expectations",
      "Need to balance global standardization with local adaptability"
    ],
    research: [
      "Process Audit across 9 initial markets",
      "65+ in-depth stakeholder interviews",
      "Journey mapping workshops documenting 24 key customer journeys",
      "Contextual inquiry in 5 key markets",
      "Competitive benchmarking with leading FMCG companies"
    ],
    insights: [
      "Fragmented structure with 3 different departments managing aspects of customer experience",
      "Absence of multichannel approach for consumer and B2B data management",
      "Average response times of 24 hours for inquiries, 11 days for complaint resolution",
      "Low usability level of reports intended for key stakeholders",
      "Disconnection between customer experience efforts and innovation cycle"
    ],
    process: [
      "Developed user personas for both external and internal users",
      "Created 43 documented processes in Blueprint format",
      "Designed service blueprints for key journeys",
      "Created usability-focused reporting model with 54 personalized reports",
      "Developed online playbook with version control"
    ],
    impact: [
      "Established baseline measurements for complaint handling time and response time",
      "Designed balanced scorecard approach for efficiency and effectiveness",
      "Created continuous measurement system with feedback loops"
    ],
    tools: ["Miro", "Optimal Workshop", "Figma", "JIRA", "Salesforce"],
    icon: "🌐"
  },
  {
    number: 2,
    title: "CRM Service Design & Implementation",
    description: "Transformed research insights into a functional CRM implementation with specialized modules for different departments across 17 countries.",
    client: "Grupo Bimbo",
    slug: "crm-service-design",
    imageSrc: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    challenge: "Transform research insights and service blueprints into a functional, scalable CRM implementation that would unify customer experience processes while enabling local adaptation.",
    complexity: [
      "Integration with diverse legacy systems across markets",
      "Varying levels of digital literacy among end users",
      "Multiple user types requiring different interfaces and workflows",
      "Need to balance standardization with local requirements"
    ],
    research: [],
    insights: [],
    process: [
      "Translated service blueprints into detailed process flows",
      "Designed modular system architecture for market customization",
      "Created adaptive workflows for diverse organizational structures",
      "Designed specialized modules for different departments",
      "Conducted extensive usability testing with representative users"
    ],
    impact: [
      "60% reduction in complaint handling time",
      "30% reduction in customer response time",
      "25% increase in marketing campaign effectiveness",
      "System adoption rates above 85% across all markets",
      "Enhanced sales performance visibility",
      "Improved cross-team coordination"
    ],
    tools: ["Salesforce", "Figma", "InVision", "JIRA", "Confluence"],
    icon: "💼"
  },
  {
    number: 3,
    title: "T-Conecta: B2B Omnichannel Service Ecosystem",
    description: "Designed an integrated digital and physical service ecosystem for small businesses, connecting ordering systems, financial services, and additional revenue streams.",
    client: "Grupo Bimbo",
    slug: "t-conecta",
    imageSrc: "https://images.unsplash.com/photo-1554224155-1696413565d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    challenge: "Design an integrated B2B digital platform for small businesses in Mexico, combining ordering systems, financial services, and additional revenue streams into a single ecosystem.",
    complexity: [
      "Diverse user needs across small business owners with varying digital literacy levels",
      "Integration with multiple service providers and payment gateways",
      "Balancing digital transformation with cultural preferences for personal interaction",
      "Complex financial services regulation and credit assessment requirements"
    ],
    research: [
      "Small business owner interviews and field observations",
      "Pain point analysis across daily business operations",
      "Financial services needs assessment",
      "Technical capabilities evaluation across user segments",
      "Competitive analysis of existing B2B platforms"
    ],
    insights: [
      "Small businesses needed integrated solutions, not multiple disconnected apps",
      "Credit applications strongly preferred through personal interaction with sales reps — least digitalizable aspect",
      "Digital ordering adoption required gradual onboarding strategy",
      "Platform most successful when designed as innovation ecosystem, not just transaction system"
    ],
    process: [
      "Developed service blueprints for ordering, payment, and credit journeys",
      "Designed user journeys for app and POS terminal interfaces",
      "Created payment flow and integration architecture planning",
      "Designed credit assessment and financial reporting modules",
      "Coordinated alignment with Bimbo's financial unit and service provider partnerships"
    ],
    impact: [
      "15% of clients using app for orders in first year, 27% adoption in second year",
      "Average monthly transaction volume of 250,000",
      "App-generated sales volume equivalent to an entire sales center",
      "New revenue streams through utility bill payments and mobile top-up services",
      "Improved financial access for underserved small businesses"
    ],
    tools: ["Marvel", "Illustrator", "Miro", "JIRA"],
    icon: "🏪"
  },
  {
    number: 4,
    title: "Continuous Improvement & Innovation Framework",
    description: "Designed and implemented a sustainable model for continuous improvement and innovation across the global Connection Center ecosystem.",
    client: "Grupo Bimbo",
    slug: "continuous-improvement",
    imageSrc: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    icon: "🔄"
  },
  {
    number: 5,
    title: "Digital Sales Channel Transformation",
    description: "Transformed traditional insurance sales into digital channel, being the first key project in La Positiva's transformative roadmap.",
    client: "La Positiva Insurance",
    slug: "digital-sales-transformation",
    imageSrc: "https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    icon: "📱"
  },
  {
    number: 6,
    title: "BARTISTA - Global Coffee Content Production Model",
    description: "Designed an operational model for producing content at global scale for Nestlé's premium coffee brands, balancing global consistency with local relevance.",
    client: "Nestlé",
    slug: "bartista",
    imageSrc: "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    icon: "☕"
  },
  {
    number: 7,
    title: "Digital Innovation Maturity Index",
    description: "Development of self-assessment tool and roadmap planning service for public institutions to enhance understanding of innovation capabilities.",
    client: "Peruvian Government",
    slug: "innovation-maturity-index",
    imageSrc: "https://images.unsplash.com/photo-1584941705321-d883d8b6a3c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    icon: "📊"
  },
  {
    number: 8,
    title: "META Sales Optimization Program",
    description: "Redesign of telephone sales process and training program for Meta advertisers, resulting in improved conversion rates and agent performance.",
    client: "Facebook",
    slug: "meta-sales-optimization",
    imageSrc: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    icon: "📞"
  },
  {
    number: 9,
    title: "Cardholder Loyalty Program Redesign",
    description: "Redesigned loyalty program for credit card holders to drive card usage and retention with optimized points accrual system.",
    client: "BBVA",
    slug: "loyalty-program-redesign",
    imageSrc: "https://images.unsplash.com/photo-1589758438368-0ad531db3366?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    icon: "💳"
  }
];

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};
