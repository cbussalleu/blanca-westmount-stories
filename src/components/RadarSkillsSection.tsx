
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const RadarSkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const radarData = [
    { label: "Organization Understanding", value: 65, angle: 0 },
    { label: "Soft Skills", value: 65, angle: 60 },
    { label: "Cognitive Skills", value: 80, angle: 120 },
    { label: "Hard Skills", value: 80, angle: 180 },
    { label: "Emotional management", value: 65, angle: 240 },
    { label: "Leadership", value: 45, angle: 300 }
  ];

  const getSkillContent = (skill: string | null) => {
    switch (skill) {
      case "Organization Understanding":
        return {
          tags: ["Engage internal stakeholders with service design processes"],
          text: null
        };
      case "Soft Skills":
        return {
          tags: ["Facilitate group interactions", "Interdisciplinary communication"],
          text: null
        };
      case "Cognitive Skills":
        return {
          tags: ["Adaptability in changing environments", "Service Conceptualization and Modeling"],
          text: null
        };
      case "Hard Skills":
        return {
          tags: ["Service Prototyping and testing", "HCD mastery", "Complete tool suites for the entire design process"],
          text: null
        };
      case "Emotional management":
        return {
          tags: [],
          text: "Let's find out in a meeting"
        };
      case "Leadership":
        return {
          tags: ["People engagement"],
          text: "Currently working in my abilities for team building and up-skilling"
        };
      default:
        return {
          tags: ["Service Conceptualization and Modeling", "Service Prototyping and Testing"],
          text: null
        };
    }
  };

  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  const createRadarPath = () => {
    const centerX = 150;
    const centerY = 150;
    const maxRadius = 100;
    
    let path = "";
    radarData.forEach((point, index) => {
      const radius = (point.value / 100) * maxRadius;
      const coords = polarToCartesian(centerX, centerY, radius, point.angle);
      
      if (index === 0) {
        path += `M ${coords.x} ${coords.y}`;
      } else {
        path += ` L ${coords.x} ${coords.y}`;
      }
    });
    path += " Z";
    
    return path;
  };

  const createSectionPath = (index: number) => {
    const centerX = 150;
    const centerY = 150;
    const maxRadius = 100;
    
    const currentAngle = index * 60;
    const nextAngle = ((index + 1) % radarData.length) * 60;
    
    const currentCoords = polarToCartesian(centerX, centerY, maxRadius, currentAngle);
    const nextCoords = polarToCartesian(centerX, centerY, maxRadius, nextAngle);
    
    return `M ${centerX} ${centerY} L ${currentCoords.x} ${currentCoords.y} A ${maxRadius} ${maxRadius} 0 0 1 ${nextCoords.x} ${nextCoords.y} Z`;
  };

  const skillContent = getSkillContent(selectedSkill);

  return (
    <section className="py-8 sm:py-16">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Radar Chart */}
          <div className="flex flex-col items-center">
            <div className="relative w-80 h-80">
              <svg viewBox="0 0 300 300" className="w-full h-full">
                {/* Grid circles */}
                {[20, 40, 60, 80, 100].map((percent) => (
                  <circle
                    key={percent}
                    cx="150"
                    cy="150"
                    r={percent}
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="1"
                  />
                ))}
                
                {/* Grid lines */}
                {radarData.map((_, index) => {
                  const coords = polarToCartesian(150, 150, 100, index * 60);
                  return (
                    <line
                      key={index}
                      x1="150"
                      y1="150"
                      x2={coords.x}
                      y2={coords.y}
                      stroke="#e5e7eb"
                      strokeWidth="1"
                    />
                  );
                })}
                
                {/* Clickable sections */}
                {radarData.map((point, index) => (
                  <path
                    key={`section-${index}`}
                    d={createSectionPath(index)}
                    fill={selectedSkill === point.label ? "rgba(138, 177, 162, 0.2)" : "transparent"}
                    className="cursor-pointer transition-all duration-300 hover:fill-[rgba(138,177,162,0.1)]"
                    onClick={() => setSelectedSkill(selectedSkill === point.label ? null : point.label)}
                  />
                ))}
                
                {/* Data area */}
                <path
                  d={createRadarPath()}
                  fill="rgba(138, 177, 162, 0.3)"
                  stroke="rgba(138, 177, 162, 0.8)"
                  strokeWidth="2"
                  className="transition-all duration-500"
                />
                
                {/* Data points */}
                {radarData.map((point, index) => {
                  const radius = (point.value / 100) * 100;
                  const coords = polarToCartesian(150, 150, radius, point.angle);
                  const isSelected = selectedSkill === point.label;
                  return (
                    <circle
                      key={index}
                      cx={coords.x}
                      cy={coords.y}
                      r={isSelected ? "8" : "6"}
                      fill="#8ab1a2"
                      stroke="#fff"
                      strokeWidth="2"
                      className="cursor-pointer transition-all duration-300 hover:r-8"
                      onClick={() => setSelectedSkill(selectedSkill === point.label ? null : point.label)}
                    />
                  );
                })}
                
                {/* Labels */}
                {radarData.map((point, index) => {
                  const labelRadius = 120;
                  const coords = polarToCartesian(150, 150, labelRadius, point.angle);
                  const isSelected = selectedSkill === point.label;
                  return (
                    <text
                      key={index}
                      x={coords.x}
                      y={coords.y}
                      textAnchor="middle"
                      dy="0.3em"
                      className={`text-sm font-merriweather fill-current transition-all duration-300 ${
                        isSelected ? 'font-bold' : ''
                      }`}
                      style={{ fontSize: '12px' }}
                    >
                      {point.label}
                    </text>
                  );
                })}
                
                {/* Percentage labels */}
                {radarData.map((point, index) => {
                  const radius = (point.value / 100) * 100;
                  const coords = polarToCartesian(150, 150, radius - 15, point.angle);
                  return (
                    <text
                      key={index}
                      x={coords.x}
                      y={coords.y}
                      textAnchor="middle"
                      dy="0.3em"
                      className="text-xs font-merriweather fill-blue-600 font-semibold"
                      style={{ fontSize: '11px' }}
                    >
                      {point.value}%
                    </text>
                  );
                })}
              </svg>
            </div>
            
            {/* Call to Action */}
            <div className="mt-8 text-center">
              <Link 
                to="/self-assessment-method" 
                className="inline-flex items-center text-sm border-b border-black pb-1 hover:opacity-70 transition-opacity font-merriweather"
              >
                Learn more about my self-assessment method <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          </div>

          {/* Skills Content */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-westmount">What I bring</h2>
            
            {/* Methodologies Group */}
            <div className="space-y-3">
              <h3 className="text-lg font-merriweather font-semibold">Methodologies</h3>
              <div className="flex flex-wrap gap-2">
                {["Human Centered Design", "System Thinking", "CAP", "EFQM", "PMO"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm font-merriweather transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Capabilities Group */}
            <div className="space-y-3">
              <h3 className="text-lg font-merriweather font-semibold">Core capabilities</h3>
              <div className="flex flex-wrap gap-2">
                {["Data Analysis", "Stakeholders Communication Strategy", "Cross-Regional Project Management", "Survey Design", "Workshop Facilitation", "Service Blueprinting and Processes Design", "Training Management", "Service Prototyping", "Continuous Improvement Management"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm font-merriweather transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Excelling at section */}
            <div className="space-y-3">
              <h3 className="text-lg font-merriweather font-semibold">Excelling at</h3>
              
              <div className="transition-all duration-500 ease-in-out">
                {skillContent.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 animate-fade-in">
                    {skillContent.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[#8ab1a2] text-white rounded-full text-sm font-merriweather transition-all duration-300 animate-scale-in"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                {skillContent.text && (
                  <p className="text-sm font-merriweather italic text-gray-600 animate-fade-in">
                    {skillContent.text}
                  </p>
                )}
              </div>
            </div>

            {selectedSkill && (
              <div className="text-xs font-merriweather text-gray-500 animate-fade-in">
                Click again to deselect • Selected: {selectedSkill}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RadarSkillsSection;
