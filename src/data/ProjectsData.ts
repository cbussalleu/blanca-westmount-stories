// Centralized project data - single source of truth

export interface Project {
  number: number;
  title: string;
  description: string;
  client: string;
  slug: string;
  imageSrc: string;
  // Extended fields for detail pages
  category?: string[];
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
    category: ["FMCG", "Bimbo", "Service Design"],
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
      "60% reduction in complaint handling time across all 17 markets",
      "30% reduction in average first-response time — from 24 hours to 9.6 hours",
      "25% increase in marketing campaign effectiveness through unified multichannel data",
      "85%+ adoption rates sustained across all markets after rollout — onboarding spikes eliminated by month nine",
      "47 product and process improvements implemented based on customer insights in first two years",
      "Model versioned 37 times post-launch — adapted without losing structural coherence"
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
    category: ["FMCG", "Bimbo", "Service Design"],
    challenge: "Transform research insights and service blueprints into a functional, scalable CRM implementation that would unify customer experience processes while enabling local adaptation.",
    complexity: [
      "Integration with diverse legacy systems across markets",
      "Varying levels of digital literacy among end users",
      "Multiple user types requiring different interfaces and workflows",
      "Need to balance standardization with local requirements"
    ],
    research: [
      "Process audit across 17 markets to understand existing workflows and pain points in each local implementation",
      "Key stakeholder interviews in each country with leadership, operational teams, and technology partners",
      "Current journey mapping for supervisors and sales teams across customer service, complaint management, and B2B interactions",
      "Deep analysis of internal continuous improvement processes and how they connected to CRM data",
      "Assessment of key information requirements across core processes: complaint management, customer inquiries, social media engagement, critical situations, and alert threshold management",
      "Extensive interface and protocol testing prior to production rollout"
    ],
    insights: [
      "Base model needed to be adaptable to market-specific organizational structures, local data architecture requirements, and regulatory compliance variations — a single rigid implementation would fail",
      "Different user types (customer service teams, sales teams, quality teams, management) required fundamentally different interfaces and workflows — not just permission levels",
      "Change resistance was the primary implementation risk, not technical complexity — a modular training framework and local champions network were more critical than the technology itself",
      "Governance committee with representatives from each market was essential to prevent the implementation from being overridden by local IT preferences",
      "The CRM was not the solution — it was the infrastructure for the solution. The service design work that preceded it determined whether the implementation would succeed"
    ],
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
    category: ["FMCG", "Bimbo", "B2B"],
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
      "Credit applications strongly preferred through personal interaction with sales reps, the least digitalizable aspect",
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
    category: ["FMCG", "Bimbo", "Service Design"],
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
    category: ["Financial Services", "Service Design"],
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
      "Quotation process was the biggest friction point: too long and complex for digital self-service",
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
      "First digital sales channel successfully launched — becoming the foundational infrastructure for La Positiva's full digital transformation roadmap",
      "Quotation time reduced by approximately 65% through automated flow — from an average of 18 minutes to under 7 minutes for standard products",
      "Digital channel accounted for 12% of new policy sales within the first six months of launch",
      "Design principles framework adopted as standard for four subsequent digital initiatives across the organization",
      "Broker network integrated into the digital channel — resolving the initial resistance by giving brokers a co-ownership role in the digital journey",
      "Customer satisfaction scores for the digital purchase flow averaged 4.2/5 in post-launch measurement"
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
    category: ["FMCG", "Service Design"],
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
      "Content production costs reduced by 40% through modular three-tier architecture — global pillars reused across markets instead of producing from scratch",
      "Time-to-market for campaign content reduced by 60% — approval bottlenecks eliminated through governance redesign",
      "Content reuse across markets increased by 25% — local teams adapted global assets rather than commissioning new production",
      "Brand consistency scores improved across all measured markets in post-launch brand tracking",
      "Content Hub pilot validated the model before full rollout — iteration cycle reduced risk of global implementation failure",
      "Local market teams reported 45% reduction in briefing and alignment time per campaign cycle"
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
    category: ["Public Sector", "Service Design"],
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
      "Entities needed roadmaps, not just scores: knowing where they stood was not enough",
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
      "Tool successfully deployed across 2,500 public entities — first standardized digital innovation measurement framework in Peruvian government history",
      "First pilot round with 25 entities completed; second round expanded to 55 entities with significant methodology improvements based on feedback",
      "Participating institutions received actionable roadmaps — not just scores — enabling evidence-based capability building plans",
      "Tool designed to survive leadership turnover — self-explanatory enough for a new institutional leader to use without prior context",
      "Model referenced as a regional best practice for public sector digital transformation by peers in Chile and Uruguay",
      "Peer benchmarking mechanism proved more effective at motivating improvement than top-down mandates — a key finding that influenced subsequent public sector programs"
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
    category: ["Technology", "Service Design"],
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
      "Conversion rates varied significantly by agent; top performers had learnable behaviors",
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
      "Conversion rate improved by approximately 18% in the six months following process redesign — measured against the pre-intervention baseline",
      "Average onboarding time for new agents reduced from 6 weeks to 3.5 weeks through the structured competency framework",
      "Top-performer behaviors successfully transferred to the wider team — the gap between top and median performer conversion closed by 40%",
      "Consultative conversation framework adopted as standard across all advertiser segments in the region",
      "Training program scaled to three additional markets within the first year following the pilot",
      "Agent satisfaction scores improved alongside performance — reduced friction in the sales process benefited both sides"
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
    category: ["Financial Services", "Service Design"],
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
      "Redemption process had too much friction: points expired before being used",
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
      "Card usage frequency among enrolled cardholders increased by 22% in the 12 months post-redesign",
      "Points redemption rate improved from 34% to 61% — reducing the financial liability of accumulated unused points",
      "Program dropout rate decreased by 31% — cardholders who understood the program stayed in it",
      "Onboarding activation rate for new cardholders reached 78% within 30 days — up from 41% under the previous model",
      "Net Promoter Score for the loyalty program improved by 14 points among active participants",
      "Tiered benefits structure created a clear upgrade path — 19% of standard cardholders moved to premium tier within the first year"
    ],
    tools: ["Figma", "Miro", "Tableau", "Optimal Workshop"],
    icon: "💳"
  },
  {
    number: 10,
    title: "Service Designer Capabilities Self-Assessment",
    description: "A bibliographic analysis-based framework to evaluate professional capabilities with honesty, designed to avoid the twin risks of overconfidence and false modesty.",
    client: "Internal",
    slug: "self-assessment-framework",
    imageSrc: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    icon: "🔬",
    category: ["Internal", "Research", "AI"],
    challenge: "Design a rigorous, honest self-assessment of professional capabilities as a Service Designer, one that could be shared publicly without overstatement and would give recruiters and peers a trustworthy signal of actual competence and maturity.",
    complexity: [
      "Self-assessment is inherently prone to cognitive biases: Dunning-Kruger effect, social desirability bias, and attribution errors",
      "Professional capabilities in Service Design are poorly standardized across the industry",
      "The assessment needed to be honest enough to be credible, and structured enough to be useful",
      "Translating academic frameworks into a visual, accessible format without losing rigor"
    ],
    research: [
      "Systematic bibliographic review across Web of Science and Scopus databases",
      "Analysis of 4 seminal academic works on professional competencies in design disciplines",
      "Karpen et al. (2017): organizational capabilities and strategic alignment",
      "Kleinsmann et al. (2012): interpersonal and collaborative capabilities in design",
      "Carr et al. (2002): cognitive capabilities and professional performance",
      "Zheng et al. (2011): leadership capabilities in creative organizations"
    ],
    insights: [
      "Professional capabilities in Service Design cluster into 6 dimensions: Organizational, Interpersonal, Cognitive, Technical, Emotional, and Leadership",
      "Each dimension contains 3-5 measurable variables with documented impact on professional performance",
      "Emotional capabilities, while real and important, are the hardest to self-assess reliably and the easiest to overstate",
      "The gap between 'excelling' and 'building' is not about ability: it is about deliberate practice and accumulated evidence"
    ],
    process: [
      "Defined 6 capability dimensions based on bibliographic analysis: Organizational, Interpersonal, Cognitive, Technical, Emotional, Leadership",
      "Mapped 24 specific variables across the 6 dimensions, each grounded in academic evidence",
      "Applied each variable to real project experience to calibrate level honestly",
      "Made a deliberate design decision: simplify the public-facing Radar to 5 dimensions, excluding Emotional capabilities",
      "Reasoning for exclusion: Emotional capabilities are real but self-assessment of them is least reliable; showing them without external validation would undermine the credibility of the entire framework",
      "Designed the Radar visualization to reflect calibrated levels, not aspirational ones"
    ],
    impact: [
      "A publicly available, bibliographically grounded capability map — any recruiter or peer can interrogate the evidence behind every dimension and level",
      "The Radar on this site reflects calibrated assessment, not aspirational positioning — the honesty is the differentiator",
      "Full 6-dimension model documented here, making the 5-dimension public simplification transparent and the reasoning auditable",
      "Emotional capabilities excluded from the public Radar not because they are unimportant, but because self-assessment of them without external validation would undermine the credibility of the entire framework",
      "Framework distinguishes between capabilities where evidence is strong and those where practice is ongoing — a more useful signal than a flat competency list",
      "The process of building the framework was itself a demonstration of the capabilities it measures — research, synthesis, honest self-assessment, and design of a public artifact"
    ],
    tools: ["Web of Science", "Scopus", "Miro", "Figma"]
  },
  {
    number: 11,
    title: "Methodological Knowledge Architecture for AI-Augmented Research",
    description: "Designed a two-layer knowledge architecture separating stable methodological knowledge from contextual project knowledge, enabling AI to amplify research quality consistently.",
    client: "Findasense",
    slug: "knowledge-architecture",
    imageSrc: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: ["AI", "Internal", "Research"],
    icon: "🧠",
    challenge: "Findasense's research practice generated high-quality methodological knowledge project by project, but that knowledge lived in individual documents, in people's heads, and in presentations that circulated briefly before disappearing. Every project started nearly from scratch. The question was not how to use AI for research, but how to structure knowledge so AI could actually amplify it.",
    complexity: [
      "Methodological knowledge was implicit and person-dependent, not documented or retrievable",
      "No distinction existed between stable reusable knowledge and contextual project-specific knowledge",
      "AI tools were being used without a knowledge infrastructure, producing inconsistent outputs",
      "Latin American market contexts were systematically underrepresented in available AI training data"
    ],
    research: [
      "Audit of existing knowledge management practices across Findasense research teams",
      "Analysis of how methodological knowledge was created, stored, and lost across projects",
      "Review of knowledge architecture frameworks and semantic retrieval systems",
      "Assessment of AI bias risks specific to Latin American CX contexts"
    ],
    insights: [
      "Stable methodological knowledge (sampling criteria, ethical frameworks, questionnaire design) and contextual knowledge (industry benchmarks, client data) require completely different storage and versioning strategies",
      "AI without a knowledge architecture behind it produces consistent mediocrity",
      "The expert role shifts from knowledge repository to knowledge architect and curator",
      "Each project should contribute back to the knowledge base, not just consume it"
    ],
    process: [
      "Designed a two-layer architecture: M-layer (methodology notebooks) for stable reusable knowledge and T-layer (thematic notebooks) for contextual project knowledge",
      "Defined naming conventions and versioning protocols for each layer",
      "Established circular flow where each project contributes aprendizajes back to the relevant notebook",
      "Documented AI bias risks specific to Latin American markets and built mitigation criteria into M-layer notebooks",
      "Piloted architecture on active research projects to validate retrieval and combination logic"
    ],
    impact: [
      "Research projects started with validated methodological foundation instead of from scratch",
      "Knowledge quality improves with each project that uses and contributes to the system",
      "AI outputs became more consistent and contextually appropriate for Latin American markets",
      "Expert time shifted from reconstructing methodology to interpreting results and making decisions"
    ],
    tools: ["NotebookLM", "Google Drive", "Miro"]
  },
  {
    number: 12,
    title: "Case Manager: Automated Case Study Pipeline",
    description: "Designed and built a 5-stage pipeline that transforms project documentation into commercial assets, using AI for semantic processing and automating slide generation and directorial scoring.",
    client: "Findasense",
    slug: "case-manager",
    imageSrc: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: ["AI", "Internal"],
    icon: "⚙️",
    challenge: "Findasense produced high-impact work for clients across Latin America and Spain, but had no systematic way to capture, evaluate, or prioritize it for commercial use. Cases were lost to poor documentation, production investment had no strategic criteria, and pitch decks relied on outdated or incomplete materials.",
    complexity: [
      "Case documentation was entirely manual, inconsistent, and dependent on individual initiative",
      "No criteria existed for prioritizing which cases deserved investment in production",
      "Multiple user types (practice leads, directors) needed different interfaces and permissions",
      "System had to work entirely within Google Workspace with no new tools or infrastructure"
    ],
    research: [
      "Audit of existing case documentation practices and failure points",
      "Interviews with practice leads on documentation friction and commercial use of cases",
      "Analysis of what made a case commercially valuable versus internally interesting",
      "Review of pipeline and scoring frameworks used in similar consulting contexts"
    ],
    insights: [
      "Cases were lost not because the work was poor but because documentation had no systematic home",
      "Production investment decisions were intuitive and inconsistent, creating internal friction",
      "AI should handle semantic processing only — text compression, translation, style correction — while all data logic remains deterministic",
      "Conflict of interest rules in voting systems are critical for organizational trust"
    ],
    process: [
      "Designed 5-stage pipeline: structured registration, AI enrichment, automated one-slider generation, directorial scoring and voting, production prioritization",
      "Built registration wizard with dynamic completeness indicator across 4 steps",
      "Integrated Gemini 1.5 Flash for semantic processing only — one API call per case for text compression, translation, and style correction within strict character limits",
      "Automated Google Slides generation from master template with placeholder replacement",
      "Designed dual output: internal version (client named) and external version (anonymized for pitches)",
      "Built scoring system across 4 strategic axes with automatic threshold triggering directorial vote",
      "Implemented conflict-of-interest rules: practice leads cannot vote their own cases",
      "Redesigned interface to sidebar navigation shell in second iteration without touching backend logic"
    ],
    impact: [
      "System deployed within Google Workspace with no new tools required",
      "Pipeline from case registration to automated slide generation fully operational",
      "Scoring and voting module active with conflict-of-interest controls",
      "System architecture reused as base for subsequent internal tools"
    ],
    tools: ["Google Apps Script", "Gemini API", "Google Slides API", "Google Sheets", "Google Drive"]
  },
  {
    number: 13,
    title: "Findasense Pulse: AI Adoption Measurement System",
    description: "Designed and built a Google Chat bot that delivers periodic 3-question surveys to rotating employee samples, producing monthly indicators of AI adoption without adding new tools to the stack.",
    client: "Findasense",
    slug: "findasense-pulse",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: ["AI", "Internal"],
    icon: "📡",
    challenge: "After deploying Gemini Pro to 100% of the company through Google Workspace licenses, Findasense had no way to measure whether people were actually using it, what was blocking them, or whether they perceived real value. Usage data from Google Workspace answered what — not why or how it felt.",
    complexity: [
      "No new tools could be introduced outside the existing Google Workspace stack",
      "Survey completion had to take under 2 minutes with zero friction for the employee",
      "Authentication architecture of Google Chat Add-ons had a critical structural limitation requiring a non-obvious workaround",
      "Employee directory needed automatic sync without manual intervention"
    ],
    research: [
      "Analysis of existing employee feedback mechanisms and their limitations for AI adoption measurement",
      "Review of organizational measurement frameworks for technology adoption",
      "Assessment of Google Workspace technical constraints and Chat API capabilities",
      "Design of sampling methodology balancing representativeness with operational feasibility"
    ],
    insights: [
      "Google Chat Add-on events execute as the triggering user, not the script owner — getActiveSpreadsheet() returns null in scheduled triggers, requiring openById() throughout",
      "A single registration entry point dependent on a specific API event is fragile — onMessage fallback is essential",
      "Quota sampling by practice and seniority produces representativeness without requiring probabilistic statistical significance",
      "Being transparent about methodological limits is sufficient for internal validity — not every measurement needs academic rigor"
    ],
    process: [
      "Designed quota sampling methodology: 40 people per monthly pulse, stratified by practice and seniority, covering full organization over 5 rotation cycles",
      "Designed question bank: 1 fixed indicator question per pulse plus 2 rotating from a bank of 4, giving each rotating question a sample of approximately 20 respondents per month",
      "Built Google Chat bot on Apps Script delivering surveys directly in chat interface",
      "Solved critical authentication issue by replacing getActiveSpreadsheet() with openById() throughout and configuring service account permissions",
      "Implemented onMessage fallback for employee registration, eliminating dependency on unreliable onAddedToSpace event",
      "Built daily trigger with mutex logic to detect and process new HR directory CSV without double-processing",
      "Designed multi-survey architecture with activation flags in Config.gs enabling future pulse types without new infrastructure"
    ],
    impact: [
      "Bot deployed and operational in Findasense Google Workspace",
      "First AI adoption pulse configured and running with validated authentication fix",
      "Architecture reused as base for a second internal project (Biblioteca Creativa de Prompts)",
      "System scalable to additional pulse types (engagement, climate) without new tools or infrastructure"
    ],
    tools: ["Google Apps Script", "Google Chat API", "Google Sheets", "Apps Script Triggers"]
  }
];

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};
