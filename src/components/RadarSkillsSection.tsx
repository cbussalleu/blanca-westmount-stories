import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const RadarSkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState<string>('Hard Skills');

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
          { name: "Strategic Alignment", category: "excelling" },
          { name: "Organizational Dynamics Comprehension", category: "excelling" },
          { name: "Cross-Departmental Integration", category: "building" },
          { name: "Design Resource Management", category: "building" }
        ];
      case "Soft Skills":
        return [
          { name: "Interdisciplinary Communication", category: "excelling" },
          { name: "Workshop Facilitation", category: "excelling" },
          { name: "Conflict Resolution", category: "building" },
          { name: "Professional Relationship Building", category: "building" }
        ];
      case "Cognitive Skills":
        return [
          { name: "Complex Systems Understanding", category: "excelling" },
          { name: "Abstract Thinking", category: "excelling" },
          { name: "Innovative Solution Generation", category: "building" },
          { name: "Adaptability", category: "excelling" }
        ];
      case "Hard Skills":
        return [
          { name: "HCD", category: "excelling" },
          { name: "System Thinking", category: "excelling" },
          { name: "Agile", category: "excelling" },
          { name: "Service Prototyping", category: "excelling" },
          { name: "Digital Tools Proficiency", category: "excelling" },
          { name: "Training & Change Management", category: "building" },
          { name: "Data Analysis", category: "excelling" },
          { name: "Process Design", category: "excelling" },
          { name: "Continuous Improvement Management", category: "excelling" }
        ];
      case "Leadership":
        return [
          { name: "Team Inspiration & Motivation", category: "building" },
          { name: "Strategic Decision-Making", category: "excelling" },
          { name: "Talent Development", category: "building" },
          { name: "Innovation Promotion", category: "building" }
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

  const skillContent = getSkillContent(selectedSkill);

  return (
    <section className="py-8 sm:py-16">
      <div className="container-narrow">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-westmount">MY SELF ASSESSMENT TOOL</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Radar Chart */}
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-md aspect-square">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                {/* Grid circles */}
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
                
                {/* Grid lines */}
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
                
                {/* Clickable sections */}
                {radarData.map((point, index) => (
                  <path
                    key={`section-${index}`}
                    d={createSectionPath(index)}
                    fill={selectedSkill === point.label ? "rgba(138, 177, 162, 0.2)" : "transparent"}
                    className="cursor-pointer transition-all duration-500 hover:fill-[rgba(138,177,162,0.1)]"
                    onClick={() => setSelectedSkill(point.label)}
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
                
                {/* Labels */}
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
                
                {/* Percentage labels */}
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
          <div className="space-y-6">
            {/* Core Capabilities */}
            <div className="space-y-3">
              <h3 className="text-lg font-merriweather font-semibold">Core capabilities</h3>
              
              <div className="transition-all duration-500 ease-in-out">
                <div className="flex flex-wrap gap-2 animate-fade-in">
                  {skillContent.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-3 py-1 rounded-full text-sm font-merriweather transition-all duration-300 animate-scale-in ${
                        skill.category === 'excelling'
                          ? 'bg-[#8ab1a2] text-white'
                          : 'bg-slate-400 text-white'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Legend - Minimal and linear design */}
            <div className="flex items-center justify-start gap-6 text-xs font-merriweather py-2">
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

            {/* Call to Action - Centered on larger screens, left-aligned on smaller */}
            <div className="pt-4 text-center lg:text-left">
              <Link 
                to="/self-assessment-method" 
                className="inline-flex items-center text-sm border-b border-black pb-1 hover:opacity-70 transition-opacity font-merriweather"
              >
                Learn more about my Self Assessment tool <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RadarSkillsSection;
