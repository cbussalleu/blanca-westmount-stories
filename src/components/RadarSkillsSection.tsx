import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// ...tus otros imports y lógica

const RadarSkillsSection = () => {
  // ...otros estados
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);
  const [isTooltipHovered, setIsTooltipHovered] = useState(false); // <--- NUEVO

  // ...resto de tu código y lógica

  // Ajusta estos handlers:
  const handleSkillHover = (skillName: string, isGreen: boolean) => {
    if (isGreen) {
      setHoveredSkill(skillName);
      setTimeout(() => setShowTooltip(true), 150);
    }
  };

  const handleSkillLeave = () => {
    setTimeout(() => {
      if (!isTooltipHovered) {
        setHoveredSkill(null);
        setShowTooltip(false);
      }
    }, 80);
  };

  // Debes mostrar el tooltip si el mouse está sobre la skill o el tooltip:
  const shouldShowTooltip = hoveredSkill && hoveredSkillData && (showTooltip || isTooltipHovered);

  // ...resto de tu componente

  return (
    // ... otros componentes
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

    {/* ...resto del render */}
    {shouldShowTooltip && (
      <div
        className="fixed z-50 pointer-events-auto"
        style={{
          left: mousePosition.x - 120,
          top: mousePosition.y - 60,
        }}
        onMouseEnter={() => setIsTooltipHovered(true)}
        onMouseLeave={() => {
          setIsTooltipHovered(false);
          setHoveredSkill(null);
          setShowTooltip(false);
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
              <p className="text-xs font-merriweather text-gray-600 mb-1 truncate">
                {hoveredSkillData.caseStudy.brand}
              </p>
              <div className="text-xs text-[#8ab1a2] hover:text-[#7ca196] font-merriweather flex items-center group-hover:underline">
                Capability in action <ArrowRight size={10} className="ml-1 flex-shrink-0" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    )}
    // ...otros componentes
  );
};

export default RadarSkillsSection;
