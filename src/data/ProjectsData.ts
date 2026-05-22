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
    challenge: "Design and implement a sustainable model for continuous improvement and innovation across the global Connection Center ecosystem, transforming customer feedback into systematic competitive advantage across 17 countries.",
    complexity: [
      "Coordinating improvement cycles across markets with different maturity levels",
      "Building organizational capability for customer-driven innovation from scratch",
      "Aligning improvement processes with existing R&D and product development cycles",
      "Sustaining momentum across leadership transitions and organizational changes"
    ],
    research: [
      "Audit of existing improvement methodologies across markets",
      "Assessment of customer feedback loops and their connection to decision-making",
      "Benchmarking of continuous improvement frameworks in FMCG sector",
      "Stakeholder interviews on innovation barriers and enablers"
    ],
    insights: [
      "Customer insights existed but were not systematically flowing into product or process decisions",
      "Each market had independent improvement initiatives with no shared learning",
      "Innovation cycles were product-driven rather than customer-insight driven",
      "Local teams had capacity to identify improvements but lacked framework to escalate them"
    ],
    process: [
      "Designed global continuous improvement governance model",
      "Created standardized feedback-to-action pipeline connecting customer insights to product teams",
      "Developed market-level improvement playbooks adaptable to local contexts",
      "Implemented regular cross-market learning sessions to share improvement outcomes",
      "Designed innovation scorecard to track improvement velocity and impact"
    ],
    impact: [
      "47 product and process improvements implemented based on customer insights in first two years",
      "Established shared improvement methodology adopted across 17 countries",
      "Reduced average time from customer insight to implemented change",
      "Created first cross-market innovation community within Grupo Bimbo's CX organization"
    ],
    tools: ["Miro", "Confluence", "JIRA", "Tableau"],
    icon: "🔄"
  },
  {
    number: 5,
    title: "Digital Sales Channel Transformation",
    description: "Transformed traditional insurance sales into digital channel, being the first key project in La Positiva's transformative roadmap.",
    client: "La Positiva Insurance",
    slug: "digital-sales-transformation",
    imageSrc: "https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    challenge: "Transform traditional insurance sales into a digital channel, designing the end-to-end digital purchase experience as the first key project in La Positiva's digital transformation roadmap.",
    complexity: [
      "High dependency on traditional channels and significant change resistance from sales force",
      "Integration with legacy systems and regulatory compliance requirements",
      "Need to balance automation with human touch in a sensitive financial industry",
      "Diverse customer segments with varying digital literacy levels"
    ],
    research: [
      "Deep evaluation of current insurance purchase journey across channels",
      "Pain point research into quotation process with customers and brokers",
      "Stakeholder interviews with internal teams, insurance brokers, healthcare providers, auto repair shops, and end customers",
      "Competitive analysis of insurance sector digital solutions",
      "Technical assessment of existing infrastructure and limitations"
    ],
    insights: [
      "Quotation process was the biggest friction point — too long and complex for digital self-service",
      "Brokers feared digitalization would eliminate their role rather than enhance it",
      "Customers wanted digital convenience but still needed human reassurance for final purchase",
      "Regulatory requirements created real constraints on what could be fully automated"
    ],
    process: [
      "Developed information architecture balancing business needs with user expectations",
      "Designed digital touchpoint strategy integrating online and offline channels",
      "Created optimized quote and purchase flow for different product lines",
      "Developed design principles framework for future digital initiatives",
      "Conducted prototyping and user testing with current and potential customers",
      "Facilitated alignment workshops with business and IT areas"
    ],
    impact: [
      "First digital sales channel successfully launched as foundation for La Positiva's digital roadmap",
      "Significant reduction in quotation time through automated flow",
      "Design principles framework adopted for subsequent digital projects",
      "Established blueprint for integrating broker network with digital channels"
    ],
    tools: ["Figma", "Miro", "InVision", "Optimal Workshop"],
    icon: "📱"
  },
  {
    number: 6,
    title: "BARTISTA - Global Coffee Content Production Model",
    description: "Designed an operational model for producing content at global scale for Nestlé's premium coffee brands, balancing global consistency with local relevance.",
    client: "Nestlé",
    slug: "bartista",
    imageSrc: "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    challenge: "Design an operational model for producing coffee content at global scale for Nestlé's premium coffee brands, balancing global consistency with local cultural relevance across multiple markets.",
    complexity: [
      "Maintaining premium brand standards across markets with very different cultural contexts",
      "Coordinating centralized creative direction with distributed local production teams",
      "Designing governance that balances speed-to-market with brand quality control",
      "Integrating digital content experience with physical product experience"
    ],
    research: [
      "Audit of existing content production processes and pain points",
      "Stakeholder interviews with global brand teams, local market managers, and content creators",
      "Analysis of content performance across markets and channels",
      "Benchmarking of content operating models in global FMCG brands",
      "Customer research on coffee content consumption and brand perception"
    ],
    insights: [
      "Content production costs were high due to duplicated efforts across markets",
      "Global content often felt culturally irrelevant at local level",
      "Approval processes were the main bottleneck slowing time-to-market",
      "Physical and digital brand experiences were designed independently, missing integration opportunities"
    ],
    process: [
      "Designed three-tier content architecture: global pillars, regional adaptations, and local content",
      "Developed content journey maps connecting customer experience touchpoints",
      "Created service blueprints for content production and approval workflows",
      "Designed governance model balancing central control with local autonomy",
      "Piloted model with Content Hub and iterated based on feedback"
    ],
    impact: [
      "40% reduction in content production costs through modular architecture",
      "60% faster time-to-market for campaigns",
      "25% increase in content reuse across markets",
      "Greater consistency in premium brand experience with stronger local relevance"
    ],
    tools: ["Figma", "Asana", "Miro", "Adobe Creative Suite"],
    icon: "☕"
  },
  {
    number: 7,
    title: "Digital Innovation Maturity Index",
    description: "Development of self-assessment tool and roadmap planning service for public institutions to enhance understanding of innovation capabilities.",
    client: "Peruvian Government",
    slug: "innovation-maturity-index",
    imageSrc: "https://images.unsplash.com/photo-1584941705321-d883d8b6a3c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    challenge: "Develop a self-assessment tool and roadmap planning service to measure digital innovation maturity and guide capability-building journeys across 2,500 diverse public entities in Peru.",
    complexity: [
      "Highly variable digital maturity levels across public entities of different sizes and purposes",
      "High turnover of institutional leadership through elections creating continuity challenges",
      "Political instability affecting program continuity and adoption",
      "Change management across 2,500 diverse public entities with different constraints"
    ],
    research: [
      "Analysis of existing innovation measurement frameworks from MIT, Harvard, and OECD",
      "Open discussion forums with national digital innovation ecosystem stakeholders",
      "Expert interviews with innovation lab leaders from Chile and Uruguay",
      "Literature review of scientific articles on digital innovation index implementation",
      "Stakeholder interviews across different government levels",
      "Assessment of organizational capabilities and constraints"
    ],
    insights: [
      "Existing frameworks were too complex and academic for practical public sector use",
      "Leadership turnover meant the tool needed to be self-explanatory without prior knowledge",
      "Entities needed roadmaps, not just scores — knowing where they stood was not enough",
      "Peer benchmarking was a stronger motivator for improvement than top-down mandates"
    ],
    process: [
      "Designed survey structure, sampling method, and maturity assessment dimensions",
      "Developed scoring methodology and capability measurement criteria",
      "Created self-service platform with results dashboard and recommendation engine",
      "Tested with 25 entities in first round, 55 in second round, iterated based on feedback",
      "Designed launch materials toolkit and entity support system",
      "Developed training program and change management planning"
    ],
    impact: [
      "Tool successfully deployed across Peruvian public sector entities",
      "First standardized digital innovation measurement framework for Peruvian government",
      "Enabled evidence-based capability building roadmaps for participating institutions",
      "Model referenced as best practice for public sector digital transformation in Latin America"
    ],
    tools: ["Figma", "Miro", "Google Forms", "Looker Studio"],
    icon: "📊"
  },
  {
    number: 8,
    title: "META Sales Optimization Program",
    description: "Redesign of telephone sales process and training program for Meta advertisers, resulting in improved conversion rates and agent performance.",
    client: "Facebook",
    slug: "meta-sales-optimization",
    imageSrc: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    challenge: "Redesign the telephone sales process and training program for Meta advertisers, improving conversion rates and agent performance across a high-volume sales operation.",
    complexity: [
      "High volume operation requiring scalable process design",
      "Diverse advertiser profiles from small businesses to large enterprises",
      "Rapidly evolving advertising platform requiring continuously updated training",
      "Multilingual operation across multiple markets with different advertiser behaviors"
    ],
    research: [
      "Process audit of existing telephone sales flows and conversion drop-off points",
      "Agent interviews and observation sessions to understand real operational constraints",
      "Advertiser interviews to understand needs, objections, and decision criteria",
      "Analysis of call recordings and performance data to identify patterns",
      "Benchmarking of sales training methodologies in digital advertising sector"
    ],
    insights: [
      "Agents had deep platform knowledge but lacked structured conversation frameworks",
      "Onboarding training was too product-focused and not enough on advertiser business needs",
      "Conversion rates varied significantly by agent — top performers had learnable behaviors",
      "Advertisers responded better to consultative approach than feature-led pitches"
    ],
    process: [
      "Redesigned end-to-end telephone sales process with clear conversation frameworks",
      "Developed competency model based on top performer behaviors",
      "Created modular training program adaptable to different advertiser segments",
      "Designed performance measurement system to track adoption of new process",
      "Piloted redesigned process with selected team and iterated before full rollout"
    ],
    impact: [
      "Measurable improvement in conversion rates following process redesign",
      "Reduced onboarding time for new agents through structured training program",
      "Improved consistency in sales conversations across agent teams",
      "Training model adopted as standard for advertiser sales operations"
    ],
    tools: ["Miro", "Google Slides", "Looker Studio", "Confluence"],
    icon: "📞"
  },
  {
    number: 9,
    title: "Cardholder Loyalty Program Redesign",
    description: "Redesigned loyalty program for credit card holders to drive card usage and retention with optimized points accrual system.",
    client: "BBVA",
    slug: "loyalty-program-redesign",
    imageSrc: "https://images.unsplash.com/photo-1589758438368-0ad531db3366?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    challenge: "Redesign the loyalty program for BBVA credit card holders to drive card usage and retention through an optimized points accrual and redemption system.",
    complexity: [
      "Highly regulated financial services environment with strict compliance requirements",
      "Diverse cardholder segments with very different usage patterns and motivations",
      "Integration with existing banking infrastructure and partner reward networks",
      "Balancing commercial objectives with genuine customer value creation"
    ],
    research: [
      "Cardholder interviews and segmentation analysis across usage profiles",
      "Competitive benchmarking of loyalty programs in financial services sector",
      "Analysis of existing program performance data and redemption patterns",
      "Partner ecosystem mapping and value proposition assessment",
      "Regulatory review of loyalty program constraints in banking sector"
    ],
    insights: [
      "Most cardholders did not understand how to maximize their points accrual",
      "Redemption process had too much friction — points expired before being used",
      "High-value customers wanted experiential rewards, not just cashback",
      "Program complexity was a bigger barrier to engagement than reward value"
    ],
    process: [
      "Redesigned points accrual model to reward usage patterns that drive business value",
      "Simplified redemption experience with fewer steps and clearer value communication",
      "Designed tiered benefits structure aligned to cardholder segments",
      "Created onboarding journey to help new cardholders understand and activate program",
      "Developed measurement framework to track engagement and retention impact"
    ],
    impact: [
      "Increased card usage frequency among active program participants",
      "Improved points redemption rates reducing liability from unused points",
      "Higher satisfaction scores among loyalty program members",
      "Stronger card retention metrics in target cardholder segments"
    ],
    tools: ["Figma", "Miro", "Tableau", "Optimal Workshop"],
    icon: "💳"
  }
];

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};
