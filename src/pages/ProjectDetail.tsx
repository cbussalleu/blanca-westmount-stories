import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // In a real application, you would fetch project data based on slug
  // This is simplified for example purposes
  const getProjectData = () => {
    const projects: Record<string, any> = {
      "connection-center": {
        title: "Omnichannel Connection Center Research & Design",
        client: "Grupo Bimbo",
        description: "Designed a global omnichannel customer experience model capable of standardizing consumer and customer engagement while adapting to diverse market needs across 17 countries in Latin America, Europe, and Asia.",
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
      "crm-service-design": {
        title: "CRM Service Design & Implementation",
        client: "Grupo Bimbo",
        description: "Transformed research insights and service blueprints into a functional, scalable CRM implementation that would unify customer experience processes while enabling local adaptation.",
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
      // Add more projects as needed with icons instead of imageUrls
    };
    
    return projects[slug || ""] || {
      title: "Project Not Found",
      client: "",
      description: "This project could not be found.",
      challenge: "",
      complexity: [],
      research: [],
      insights: [],
      process: [],
      impact: [],
      tools: [],
      icon: "❓"
    };
  };
  
  const project = getProjectData();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center justify-center mb-8">
              <div className="text-8xl">{project.icon}</div>
            </div>
            <div className="text-center max-w-4xl mx-auto">
              <div className="mb-4 text-sm opacity-80 font-helvetica">{project.client}</div>
              <h1 className="font-westmount text-4xl md:text-5xl mb-4">{project.title}</h1>
              <p className="font-helvetica text-gray-700 max-w-2xl mx-auto">
                {project.description}
              </p>
            </div>
          </div>
        </div>
        
        {/* Back Link */}
        <div className="container mx-auto px-4 md:px-6 py-8">
          <Link to="/portfolio" className="inline-flex items-center font-helvetica text-sm hover:text-gray-600 transition-colors">
            <ArrowLeft size={16} className="mr-1" /> Back to Portfolio
          </Link>
        </div>
        
        {/* Project Content */}
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <h2 className="font-westmount text-2xl mb-4">Project Overview</h2>
              <p className="font-helvetica text-gray-700 leading-relaxed">
                {project.description}
              </p>
            </div>
            
            {project.challenge && (
              <div className="mb-12">
                <h2 className="font-westmount text-2xl mb-4">Challenge & Context</h2>
                <p className="font-helvetica text-gray-700 leading-relaxed mb-6">
                  {project.challenge}
                </p>
                
                {project.complexity && project.complexity.length > 0 && (
                  <div>
                    <h3 className="font-westmount text-lg mb-3">Complexity Factors</h3>
                    <ul className="space-y-2">
                      {project.complexity.map((item: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle size={18} className="mr-2 flex-shrink-0 mt-1 text-gray-700" />
                          <span className="font-helvetica text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
            
            {project.research && project.research.length > 0 && (
              <div className="mb-12">
                <h2 className="font-westmount text-2xl mb-4">Research Approach</h2>
                <ul className="space-y-2">
                  {project.research.map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={18} className="mr-2 flex-shrink-0 mt-1 text-gray-700" />
                      <span className="font-helvetica text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.insights && project.insights.length > 0 && (
              <div className="mb-12">
                <h2 className="font-westmount text-2xl mb-4">Key Insights</h2>
                <ul className="space-y-2">
                  {project.insights.map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={18} className="mr-2 flex-shrink-0 mt-1 text-gray-700" />
                      <span className="font-helvetica text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.process && project.process.length > 0 && (
              <div className="mb-12">
                <h2 className="font-westmount text-2xl mb-4">Service Design Process</h2>
                <ul className="space-y-2">
                  {project.process.map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={18} className="mr-2 flex-shrink-0 mt-1 text-gray-700" />
                      <span className="font-helvetica text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.impact && project.impact.length > 0 && (
              <div className="mb-12">
                <h2 className="font-westmount text-2xl mb-4">Impact & Results</h2>
                <ul className="space-y-2">
                  {project.impact.map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={18} className="mr-2 flex-shrink-0 mt-1 text-gray-700" />
                      <span className="font-helvetica text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {project.tools && project.tools.length > 0 && (
              <div>
                <h2 className="font-westmount text-2xl mb-4">Tools Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool: string, index: number) => (
                    <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm font-helvetica">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
