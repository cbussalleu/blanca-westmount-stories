import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const RadarSkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState<string>('Hard Skills');
  const [tooltipSkill, setTooltipSkill] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number } | null>(null);
  const [isFullscreenTooltip, setIsFullscreenTooltip] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const skillsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node) &&
        !isFullscreenTooltip
      ) {
        setTooltipSkill(null);
        setTooltipPosition(null);
      }
    }
    if (tooltipSkill) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [tooltipSkill, isFullscreenTooltip]);

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
          { name: "Interdisciplinary Communication", category: "excelling", caseStudy: { image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", slug: "communication-project", brand: "Global Org" } },
          { name: "Workshop Facilitation", category: "excelling", caseStudy: { image: "/lovable-uploads/62c5b772-9c99-41b3-b48e-83926e910229.png", slug: "crm-service-design", brand: "Grupo Bimbo" } },
          { name: "Conflict Resolution", category: "building", caseStudy: { image: "https://images.unsplash.com/photo-1589758438368-0ad531db3366?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", slug: "resolution-campaign", brand: "Peace Org" } },
          { name: "Professional Relationship Building", category: "building", caseStudy: { image: "/lovable-uploads/62c5b772-9c99-41b3-b48e-83926e910229.png", slug: "continuous-improvement", brand: "Grupo Bimbo" } }
        ];
      case "Cognitive Skills":
        return [
          { name: "Complex Systems Understanding", category: "excelling", caseStudy: { image: "/lovable-uploads/62c5b772-9c99-41b3-b48e-83926e910229.png", slug: "connection-center", brand: "Grupo Bimbo" } },
          { name: "Abstract Thinking", category: "excelling", caseStudy: { image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", slug: "abstract-thinking", brand: "Thinkers Inc." } },
          { name: "Innovative Solution Generation", category: "building", caseStudy: { image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", slug: "innovation-lab", brand: "Innovators Ltd." } },
          { name: "Adaptability", category: "excelling", caseStudy: { image: "/lovable-uploads/62c5b772-9c99-41b3-b48e-83926e910229.png", slug: "crm-service-design", brand: "Grupo Bimbo" } }
        ];
      case "Hard Skills":
        return [
          { name: "HCD", category: "excelling", caseStudy: { image: "/lovable-uploads/loyaltyprogram-visa.png", slug: "loyalty-program", brand: "BBVA" } },
          { name: "System Thinking", category: "excelling", caseStudy: { image: "/lovable-uploads/62c5b772-9c99-41b3-b48e-83926e910229.png", slug: "connection-center", brand: "Grupo Bimbo" } },
          { name: "Agile", category: "excelling", caseStudy: { image: "/lovable-uploads/nespresso.png", slug: "bartista", brand: "Nestlé" } },
          { name: "Service Prototyping", category: "excelling", caseStudy: { image: "/lovable-uploads/62c5b772-9c99-41b3-b48e-83926e910229.png", slug: "crm-service-design", brand: "Grupo Bimbo" } },
          { name: "Digital Tools Proficiency", category: "excelling", caseStudy: { image: "/lovable-uploads/lapositiva.png", slug: "digital-transformation", brand: "La Positiva" } },
          { name: "Training & Change Management", category: "building", caseStudy: { image: "/lovable-uploads/62c5b772-9c99-41b3-b48e-83926e910229.png", slug: "continuous-improvement", brand: "Grupo Bimbo" } },
          { name: "Data Analysis", category: "excelling", caseStudy: { image: "/lovable-uploads/loyaltyprogram-visa.png", slug: "loyalty-program", brand: "BBVA" } },
          { name: "Process Design", category: "excelling", caseStudy: { image: "/lovable-uploads/62c5b772-9c99-41b3-b48e-83926e910229.png", slug: "connection-center", brand: "Grupo Bimbo" } },
          { name: "Continuous Improvement Management", category: "excelling", caseStudy: { image: "/lovable-uploads/62c5b772-9c99-41b3-b48e-83926e910229.png", slug: "continuous-improvement", brand: "Grupo Bimbo" } }
        ];
      case "Leadership":
        return [
          { name: "Team Inspiration & Motivation", category: "building", caseStudy: { image: "/lovable-uploads/62c5b772-9c99-41b3-b48e-83926e910229.png", slug: "crm-service-design", brand: "Grupo Bimbo" } },
          { name: "Strategic Decision-Making", category: "excelling", caseStudy: { image: "/lovable-uploads/62c5b772-9c99-41b3-b48e-83926e910229.png", slug: "connection-center", brand: "Grupo Bimbo" } },
          { name: "Talent Development", category: "building", caseStudy: { image: "/lovable-uploads/62c5b772-9c99-41b3-b48e-83926e910229.png", slug: "continuous-improvement", brand: "Grupo Bimbo" } },
          { name: "Innovation Promotion", category: "building", caseStudy: { image: "/lovable-uploads/nespresso.png", slug: "innovation-lab", brand: "Nestlé" } }
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
  const tooltipSkillData = tooltipSkill
    ? skillContent.find(skill => skill.name === tooltipSkill)
    : null;

  const handleSkillChange = (newSkill: string) => {
    if (newSkill !== selectedSkill) {
      setSelectedSkill(newSkill);
    }
  };

  const openFullscreenTooltip = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFullscreenTooltip(true);
  };

  const closeFullscreenTooltip = () => {
    setIsFullscreenTooltip(false);
    setTooltipSkill(null);
    setTooltipPosition(null);
  };

  // Animación variants para skills
  const skillsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const skillVariants = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      scale: 0.8 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.9,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section className="py-8 sm:py-16">
      <div className="container-narrow">
        <motion.div 
          className="text-center mb-8 sm:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-westmount">WHAT I BRING</h2>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
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
                    onClick={() => handleSkillChange(point.label)}
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
                      onClick={() => handleSkillChange(point.label)}
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
          </motion.div>
          
          <div className="space-y-6 relative">
            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-lg font-merriweather font-semibold">Core capabilities</h3>
              <div className="transition-all duration-700 ease-in-out min-h-[120px] relative">
                <div ref={skillsContainerRef}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedSkill}
                      className="flex flex-wrap gap-2"
                      variants={skillsContainerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      {skillContent.map((skill, index) => {
                        const isGreen = skill.category === 'excelling';
                        return (
                          <motion.span
                            key={skill.name}
                            className={[
                              "px-3 py-1 rounded-full text-sm font-merriweather transition-all duration-200",
                              isGreen
                                ? "bg-[#8ab1a2] text-white cursor-pointer hover:bg-[#7ca196] hover:scale-105 active:scale-95"
                                : "bg-slate-400 text-white"
                            ].join(" ")}
                            variants={skillVariants}
                            onClick={e => {
                              if (isGreen) {
                                if (tooltipSkill === skill.name) {
                                  setTooltipSkill(null);
                                  setTooltipPosition(null);
                                } else {
                                  const skillRect = (e.target as HTMLElement).getBoundingClientRect();
                                  const containerRect = skillsContainerRef.current?.getBoundingClientRect();
                                  if (containerRect) {
                                    setTooltipSkill(skill.name);
                                    setTooltipPosition({
                                      x: skillRect.left - containerRect.left + skillRect.width / 2,
                                      y: skillRect.top - containerRect.top,
                                    });
                                  }
                                }
                              }
                            }}
                            tabIndex={isGreen ? 0 : -1}
                            aria-haspopup={isGreen ? "dialog" : undefined}
                            aria-expanded={isGreen && tooltipSkill === skill.name}
                          >
                            {skill.name}
                          </motion.span>
                        );
                      })}
                    </motion.div>
                  </AnimatePresence>
                </div>
                
                {/* Tooltip normal */}
                {tooltipSkill && tooltipSkillData && tooltipPosition && !isFullscreenTooltip && (
                  <motion.div
                    className="absolute z-50 pointer-events-auto shadow-2xl"
                    style={{
                      left: tooltipPosition.x - 120,
                      top: tooltipPosition.y - 70,
                    }}
                    ref={tooltipRef}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-white border border-gray-200 rounded-lg p-4 max-w-xs">
                      <div className="flex items-start gap-3">
                        <img 
                          src={tooltipSkillData.caseStudy.image} 
                          alt={tooltipSkillData.caseStudy.brand}
                          className="w-16 h-12 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-merriweather font-semibold text-sm leading-tight">
                            {tooltipSkill}
                          </h4>
                          <p className="text-xs text-gray-600 mt-1 font-merriweather">
                            {tooltipSkillData.caseStudy.brand}
                          </p>
                          <button
                            onClick={openFullscreenTooltip}
                            className="inline-flex items-center text-xs text-blue-600 hover:text-blue-800 mt-2 font-merriweather"
                          >
                            View case study
                            <ArrowRight size={10} className="ml-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
            
            <div 
              className="flex items-center justify-start gap-6 text-xs font-merriweather py-2 transition-all duration-300"
            >
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
            
            <div 
              className="pt-4 text-center lg:text-left transition-all duration-300"
            >
              <Link
                to="/self-assessment-method"
                className="inline-flex items-center text-sm border-b border-black pb-1 hover:opacity-70 transition-opacity font-merriweather group"
              >
                See the method 
                <ArrowRight 
                  size={14} 
                  className="ml-1 group-hover:translate-x-1 transition-transform duration-200" 
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Tooltip */}
      <AnimatePresence>
        {isFullscreenTooltip && tooltipSkillData && (
          <motion.div
            className="fixed inset-0 z-50 bg-white"
            initial={{ 
              clipPath: tooltipPosition 
                ? `circle(20px at ${tooltipPosition.x + 120}px ${tooltipPosition.y + 70}px)`
                : "circle(20px at 50% 50%)"
            }}
            animate={{ 
              clipPath: "circle(100% at 50% 50%)" 
            }}
            exit={{ 
              clipPath: tooltipPosition 
                ? `circle(20px at ${tooltipPosition.x + 120}px ${tooltipPosition.y + 70}px)`
                : "circle(20px at 50% 50%)"
            }}
            transition={{
              type: "spring",
              stiffness: 20,
              restDelta: 2,
              duration: 0.6
            }}
          >
            <div className="h-full flex flex-col">
              <div className="flex justify-between items-center p-6 border-b">
                <div>
                  <h2 className="text-2xl font-westmount">{tooltipSkill}</h2>
                  <p className="text-gray-600 font-merriweather">{tooltipSkillData.caseStudy.brand}</p>
                </div>
                <button
                  onClick={closeFullscreenTooltip}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex-1 p-6 overflow-auto">
                <div className="max-w-4xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div>
                      <img 
                        src={tooltipSkillData.caseStudy.image} 
                        alt={tooltipSkillData.caseStudy.brand}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-merriweather">About this skill</h3>
                      <p className="font-merriweather text-gray-700">
                        This skill was developed and refined through my work on the {tooltipSkillData.caseStudy.brand} project, 
                        where I applied {tooltipSkill.toLowerCase()} principles to solve complex business challenges.
                      </p>
                      <div className="pt-4">
                        <Link
                          to={`/portfolio/${tooltipSkillData.caseStudy.slug}`}
                          onClick={closeFullscreenTooltip}
                          className="inline-flex items-center bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors font-merriweather"
                        >
                          Skill in action
                          <ArrowRight size={16} className="ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default RadarSkillsSection;
