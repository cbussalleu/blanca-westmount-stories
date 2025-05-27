import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const RadarSkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState<string>('Hard Skills');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const radarData = [
    { label: "Organization Understanding", value: 65, angle: 0 },
    { label: "Soft Skills", value: 65, angle: 72 },
    { label: "Cognitive Skills", value: 80, angle: 144 },
    { label: "Hard Skills", value: 80, angle: 216 },
    { label: "Leadership", value: 45, angle: 288 }
  ];

  const getSkillContent = (skill: string) => {
    switch (skill) {
      case "Organization Understanding":
        return [
          { name: "Strategic Alignment", category: "excelling", caseStudy: { image: "/lovable-uploads/62c5b772-9c99-41b3-b48e-83926e910229.png", slug: "connection-center", brand: "Grupo Bimbo" } },
          { name: "Organizational Dynamics Comprehension", category: "excelling", caseStudy: { image: "/lovable-uploads/62c5b772-9c99-41b3-b48e-83926e910229.png", slug: "crm-service-design", brand: "Grupo Bimbo" } },
          { name: "Cross-Departmental Integration", category: "building", caseStudy: { image: "/lovable-uploads/62c5b772-9c99-41b3-b48e-83926e910229.png", slug: "continuous-improvement", brand: "Grupo Bimbo" } },
          { name: "Design Resource Management", category: "building", caseStudy: { image: "/lovable-uploads/62c5b772-9c99-41b3-b48e-83926e910229.png", slug: "connection-center", brand: "Grupo Bimbo" } }
        ];
      case "Soft Skills":
        return [
          { name: "Interdisciplinary Communication", category: "excelling", caseStudy: { image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", slug: "bartista", brand: "Nestlé" } },
          { name: "Workshop Facilitation", category: "excelling", caseStudy: { image: "/lovable-uploads/62c5b772-9c99-41b3-b48e-83926e910229.png", slug: "crm-service-design", brand: "Grupo Bimbo" } },
          { name: "Conflict Resolution", category: "building", caseStudy: { image: "https://images.unsplash.com/photo-1589758438368-0ad531db3366?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", slug: "loyalty-program-redesign", brand: "BBVA" } },
          { name: "Professional Relationship Building", category: "building", caseStudy: { image: "/lovable-uploads/62c5b772-9c99-41b3-b48e-83926e910229.png", slug: "continuous-improvement", brand: "Grupo Bimbo" } }
        ];
      case "Cognitive Skills":
        return [
          { name: "Complex Systems Understanding", category: "excelling", caseStudy: { image: "/lovable-uploads/62c5b772-9c99-41b3-b48e-83926e910229.png", slug: "connection-center", brand: "Grupo Bimbo" } },
          { name: "Abstract Thinking", category: "excelling", caseStudy: { image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", slug: "bartista", brand: "Nestlé" } },
          { name: "Innovative Solution Generation", category: "building", caseStudy: { image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", slug: "insurance-journey-redesign", brand: "La Positiva" } },
          { name: "Adaptability", category: "excelling", caseStudy: { image: "/lovable-uploads/62c5b772-9c99-41b3-b48e-83926e910229.png", slug: "crm-service-design", brand: "Grupo Bimbo" } }
        ];
      case "Hard Skills":
        return [
          { name: "HCD", category: "excelling", caseStudy: { image: "https://images.unsplash.com/photo-1589758438368-0ad531db3366?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", slug: "loyalty-program-redesign", brand: "BBVA" } },
          { name: "System Thinking", category: "excelling", caseStudy: { image: "/lovable-uploads/62c5b772-9c99-41b3-b48e-83926e910229.png", slug: "connection-center", brand: "Grupo Bimbo" } },
          { name: "Agile", category: "excelling", caseStudy: { image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", slug: "bartista", brand: "Nestlé" } },
          { name: "Service Prototyping", category: "excelling", caseStudy: { image: "/lovable-uploads/62c5b772-9c99-41b3-b48e-83926e910229.png", slug: "crm-service-design", brand: "Grupo Bimbo" } },
          { name: "Digital Tools Proficiency", category: "excelling", caseStudy: { image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", slug: "insurance-journey-redesign", brand: "La Positiva" } },
          { name: "Training & Change Management", category: "building", caseStudy: { image: "/lovable-uploads/62c5b772-9c99-41b3-b48e-83926e910229.png", slug: "continuous-improvement", brand: "Grupo Bimbo" } },
          { name: "Data Analysis", category: "excelling", caseStudy: { image: "https://images.unsplash.com/photo-1589758438368-0ad531db3366?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", slug: "loyalty-program-redesign", brand: "BBVA" } },
          { name: "Process Design", category: "excelling", caseStudy: { image: "/lovable-uploads/62c5b772-9c99-41b3-b48e-83926e910229.png", slug: "connection-center", brand: "Grupo Bimbo" } },
          { name: "Continuous Improvement Management", category: "excelling", caseStudy: { image: "/lovable-uploads/62c5b772-9c99-41b3-b48e-83926e910229.png", slug: "continuous-improvement", brand: "Grupo Bimbo" } }
        ];
      case "Leadership":
        return [
          { name: "Team Inspiration & Motivation", category: "building", caseStudy: { image: "/lovable-uploads/62c5b772-9c99-41b3-b48e-83926e910229.png", slug: "crm-service-design", brand: "Grupo Bimbo" } },
          { name: "Strategic Decision-Making", category: "excelling", caseStudy: { image: "/lovable-uploads/62c5b772-9c99-41b3-b48e-83926e910229.png", slug: "connection-center", brand: "Grupo Bimbo" } },
          { name: "Talent Development", category: "building", caseStudy: { image: "/lovable-uploads/62c5b772-9c99-41b3-b48e-83926e910229.png", slug: "continuous-improvement", brand: "Grupo Bimbo" } },
          { name: "Innovation Promotion", category: "building", caseStudy: { image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", slug: "bartista", brand: "Nestlé" } }
        ];
      default:
        return [];
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
    const centerX = 200;
    const centerY = 200;
    const maxRadius = 140;
    
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
    const centerX = 200;
    const centerY = 200;
    const maxRadius = 140;
    
    const currentAngle = index * 72;
    const nextAngle = ((index + 1) % radarData.length) * 72;
    
    const currentCoords = polarToCartesian(centerX, centerY, maxRadius, currentAngle);
    const nextCoords = polarToCartesian(centerX, centerY, maxRadius, nextAngle);
    
    return `M ${centerX} ${centerY} L ${currentCoords.x} ${currentCoords.y} A ${maxRadius} ${maxRadius} 0 0 1 ${nextCoords.x} ${nextCoords.y} Z`;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const handleSkillHover = (skillName: string, isGreen: boolean) => {
    if (isGreen) {
      setHoveredSkill(skillName);
      setTimeout(() => setShowTooltip(true), 150);
    }
  };

  const handleSkillLeave = () => {
    setHoveredSkill(null);
    setShowTooltip(false);
  };

  const skillContent = getSkillContent(selectedSkill);
  const hoveredSkillData = hoveredSkill ? getSkillContent(selectedSkill).find(skill => skill.name === hoveredSkill) : null;

  return (
    <section className="py-8 sm:py-16" onMouseMove={handleMouseMove}>
      <div className="container-narrow">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-westmount">WHAT I BRING</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Radar Chart */}
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-md aspect-square">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                {[20, 40, 60, 80, 100].map((percent) => (
                  <circle
                    key={percent}
                    cx="200"
                    cy="200"
                    r={(percent / 100) * 140}
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="1"
                  />
                ))}
                
                {radarData.map((_, index) => {
                  const coords = polarToCartesian(200, 200, 140, index * 72);
                  return (
                    <line
                      key={index}
                      x1="200"
                      y1="200"
                      x2={coords.x}
                      y2={coords.y}
                      stroke="#e5e7eb"
                      strokeWidth="1"
                    />
                  );
                })}
                
                {radarData.map((point, index) => (
                  <path
                    key={`section-${index}`}
                    d={createSectionPath(index)}
                    fill={selectedSkill === point.label ? "rgba(138, 177, 162, 0.2)" : "transparent"}
                    className="cursor-pointer transition-all duration-500 hover:fill-[rgba(138,177,162,0.1)]"
                    onClick={() => setSelectedSkill(point.label)}
                  />
                ))}
                
                <path
                  d={createRadarPath()}
                  fill="rgba(138, 177, 162, 0.3)"
                  stroke="rgba(138, 177, 162, 0.8)"
                  strokeWidth="2"
                  className="transition-all duration-500"
                />
                
                {radarData.map((point, index) => {
                  const radius = (point.value / 100) * 140;
                  const coords = polarToCartesian(200, 200, radius, point.angle);
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
                      onClick={() => setSelectedSkill(point.label)}
                    />
                  );
                })}
                
                {radarData.map((point, index) => {
                  const labelRadius = 170;
                  const coords = polarToCartesian(200, 200, labelRadius, point.angle);
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
                
                {radarData.map((point, index) => {
                  const radius = (point.value / 100) * 140;
                  const coords = polarToCartesian(200, 200, radius - 15, point.angle);
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
          </div>

          {/* Skills Content */}
          <div className="space-y-6 relative" ref={containerRef}>
            {/* Core Capabilities */}
            <div className="space-y-3">
              <h3 className="text-lg font-merriweather font-semibold">Core capabilities</h3>
              
              <div className="transition-all duration-700 ease-in-out min-h-[120px] relative">
                <div className="flex flex-wrap gap-2">
                  {skillContent.map((skill, index) => {
                    const isGreen = skill.category === 'excelling';
                    return (
                      <span
                        key={skill.name}
                        className={`px-3 py-1 rounded-full text-sm font-merriweather transition-all duration-500 ease-in-out cursor-pointer relative ${
                          isGreen
                            ? 'bg-[#8ab1a2] text-white hover:bg-[#7ca196]'
                            : 'bg-slate-400 text-white hover:bg-slate-500'
                        }`}
                        style={{ 
                          animationDelay: `${index * 100}ms`,
                          opacity: 1,
                          transform: 'translateY(0)'
                        }}
                        onMouseEnter={() => handleSkillHover(skill.name, isGreen)}
                        onMouseLeave={handleSkillLeave}
                      >
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-start gap-6 text-xs font-merriweather py-2 transition-all duration-300">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#8ab1a2] rounded-full"></div>
                <span className="text-gray-600">Excelling at</span>
              </div>
              <div className="w-px h-3 bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                <span className="text-gray-600">Building up</span>
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-4 text-center lg:text-left transition-all duration-300">
              <Link 
                to="/self-assessment-method" 
                className="inline-flex items-center text-sm border-b border-black pb-1 hover:opacity-70 transition-opacity font-merriweather"
              >
                See the method <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>

            {/* Fixed Hover Tooltip with improved positioning */}
            {hoveredSkill && hoveredSkillData && showTooltip && (
              <div 
                className="fixed z-50"
                style={{
                  left: Math.min(mousePosition.x - 100, window.innerWidth - 220),
                  top: mousePosition.y - 100,
                  pointerEvents: 'auto'
                }}
              >
                <div className="w-48 h-20 border-2 border-gray-200 rounded-lg bg-white shadow-lg p-3">
                  <Link 
                    to={`/portfolio/${hoveredSkillData.caseStudy.slug}`}
                    className="flex items-center space-x-3 h-full group"
                  >
                    <img 
                      src={hoveredSkillData.caseStudy.image} 
                      alt={hoveredSkillData.caseStudy.brand}
                      className="w-12 h-8 object-cover rounded flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-merriweather text-gray-600 mb-1 truncate">{hoveredSkillData.caseStudy.brand}</p>
                      <div className="text-xs text-[#8ab1a2] hover:text-[#7ca196] font-merriweather flex items-center group-hover:underline">
                        Capability in action <ArrowRight size={10} className="ml-1 flex-shrink-0" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RadarSkillsSection;
