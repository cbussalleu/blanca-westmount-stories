
import { CheckCircle } from 'lucide-react';

const MethodologySection = () => {
  const approaches = [
    { title: "Human Systems", items: ["Behaviors", "Culture", "Relationships", "Perceptions", "Expectations"] },
    { title: "Functional Systems", items: ["Processes", "Technology", "Metrics", "Architecture", "Operations"] }
  ];

  const processes = [
    { 
      title: "Understand", 
      items: [
        "Research planning", 
        "Qualitative research", 
        "Quantitative research", 
        "Journey analytics",
        "Journey mapping",
        "Benchmarking",
        "Stakeholder mapping",
        "Process mapping (BPM + Blueprinting)"
      ]
    },
    { 
      title: "Ideate", 
      items: [
        "Conceptualization workshop facilitation", 
        "Prototyping workshop facilitation", 
        "Experience vision & value proposition concept", 
        "Sketching & wireframing"
      ]
    },
    { 
      title: "Deliver", 
      items: [
        "Process design", 
        "Continuous improvement framework", 
        "Service orchestration PoC", 
        "Processes adoption monitoring",
        "Sprint planning",
        "Project management",
        "RFI & RFP definitions"
      ]
    }
  ];

  const tools = [
    "Salesforce cloud", "Excel", "Marvel", "InVision", "Illustrator", 
    "Jira", "Optimal Workshop", "UX Pin", "Figma", "Miro", 
    "Adobe Creative Suite", "Tableau", "Power BI", "Confluence"
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-westmount text-3xl md:text-4xl mb-12 text-center">My Service Design Methodology</h2>
          
          <p className="font-helvetica text-gray-700 mb-8 text-lg">
            My approach to service design recognizes that we operate at the intersection of two complex systems:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {approaches.map((approach) => (
              <div key={approach.title} className="border border-gray-100 rounded-md p-6">
                <h3 className="font-westmount text-xl mb-4">{approach.title}</h3>
                <ul className="space-y-2">
                  {approach.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle size={18} className="mr-2 flex-shrink-0 mt-1 text-gray-700" />
                      <span className="font-helvetica text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mb-12">
            <h3 className="font-westmount text-xl mb-4 text-center">Core Principle</h3>
            <p className="font-helvetica text-gray-700 text-center italic text-lg mb-6">
              Experience cannot be designed, only enabled.
            </p>
            
            <p className="font-helvetica text-gray-700">
              This principle guides me to maintain a systemic mindset during:
            </p>
            <ol className="list-decimal list-inside space-y-2 mt-4 font-helvetica text-gray-700">
              <li><strong>Problem Understanding Phase:</strong> Holistic research considering all system dimensions</li>
              <li><strong>Stakeholder Relationship Management:</strong> Facilitation of alignment between diverse objectives</li>
              <li><strong>Solution Design:</strong> Creation of frameworks that allow for adaptation and evolution</li>
              <li><strong>Implementation and Management:</strong> Recognition that services are living organisms requiring continuous adaptation</li>
            </ol>
          </div>
          
          <div className="mb-12">
            <h3 className="font-westmount text-xl mb-6 text-center">My Service Design Process</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {processes.map((process) => (
                <div key={process.title} className="border border-gray-100 rounded-md p-6">
                  <h4 className="font-westmount text-lg mb-4">{process.title}</h4>
                  <ul className="space-y-2">
                    {process.items.map((item) => (
                      <li key={item} className="flex items-start">
                        <CheckCircle size={16} className="mr-2 flex-shrink-0 mt-1 text-gray-700" />
                        <span className="font-helvetica text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-westmount text-xl mb-4 text-center">Tools Proficiency</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {tools.map((tool) => (
                <span key={tool} className="bg-gray-100 px-3 py-1 rounded-full text-sm font-helvetica">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
