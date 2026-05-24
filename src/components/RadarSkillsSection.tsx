import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const RadarSkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState<string>('Hard Skills');
  const [tooltipSkill, setTooltipSkill] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number } | null>(null);
  const [isFullscreenTooltip] = useState<boolean>(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const skillsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node)
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
  }, [tooltipSkill]);

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
          { name: "Interdisciplinary Communication", category: "excelling", caseStudy: { image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", slug: "crm-service-design", brand: "Grupo Bimbo" } },
          { name: "Workshop Facilitation", category: "excelling", caseStudy: { image: "/lovable-uploads/62c5b772-9c99-41b3-b48e-83926e910229.png", slug: "crm-service-design", brand: "Grupo Bimbo" } },
          { name: "Conflict Resolution", category: "building", caseStudy: { image: "https://images.unsplash.com/photo-1589758438368-0ad531db3366?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", slug: "loyalty-program-redesign", brand: "BBVA" } },
          { name: "Professional Relationship Building", category: "building", caseStudy: { image: "/lovable-uploads/62c5b772-9c99-41b3-b48e-83926e910229.png", slug: "continuous-improvement", brand: "Grupo Bimbo" } }
        ];
      case "Cognitive Skills":
        return [
          { name: "Complex Systems Understanding", category: "excelling", caseStudy: { image: "/lovable-uploads/62c5b772-9c99-41b3-b48e-83926e910229.png", slug: "connection-center", brand: "Grupo Bimbo" } },
          { name: "Abstract Thinking", category: "excelling", caseStudy: { image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", slug: "connection-center", brand: "Grupo Bimbo" } },
          { name: "Innovative Solution Generation", category: "building", caseStudy: { image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", slug: "bartista", brand: "Nestlé" } },
          { name: "Adaptability", category: "excelling", caseStudy: { image: "/lovable-uploads/62c5b772-9c99-41b3-b48e-83926e910229.png", slug: "crm-service-design", brand: "Grupo Bimbo" } }
        ];
      case "Hard Skills":
        return [
          { name: "HCD", category: "excelling", caseStudy: { image: "/lovable-uploads/loyaltyprogram-visa.png", slug: "loyalty-program-redesign", brand: "BBVA" } },
          { name: "System Thinking", category: "excelling", caseStudy: { image: "/lovable-uploads/62c5b772-9c99-41b3-b48e-83926e910229.png", slug: "connection-center", brand: "Grupo Bimbo" } },
          { name: "Agile", category: "excelling", caseStudy: { image: "/lovable-uploads/nespresso.png", slug: "bartista", brand: "Nestlé" } },
          { name: "Service Prototyping", category: "excelling", caseStudy: { image: "/lovable-uploads/62c5b772-9c99-41b3-b48e-83926e910229.png", slug: "crm-service-design", brand: "Grupo Bimbo" } },
          { name: "Digital Tools Proficiency", category: "excelling", caseStudy: { image: "/lovable-uploads/lapositiva.png", slug: "digital-sales-transformation", brand: "La Positiva" } },
          { name: "Training & Change Management", category: "building", caseStudy: { image: "/lovable-uploads/62c5b772-9c99-41b3-b48e-83926e910229.png", slug: "continuous-improvement", brand: "Grupo Bimbo" } },
          { name: "Data Analysis", category: "excelling", caseStudy: { image: "/lovable-uploads/loyaltyprogram-visa.png", slug: "loyalty-program-redesign", brand: "BBVA" } },
          { name: "Process Design", category: "excelling", caseStudy: { image: "/lovable-uploads/62c5b772-9c99-41b3-b48e-83926e910229.png", slug: "connection-center", brand: "Grupo Bimbo" } },
          { name: "Continuous Improvement Management", category: "excelling", caseStudy: { image: "/lovable-uploads/62c5b772-9c99-41b3-b48e-83926e910229.png", slug: "continuous-improvement", brand: "Grupo Bimbo" } }
        ];
      case "Leadership":
        return [
          { name: "Team Inspiration & Motivation", category: "building", caseStudy: { image: "/lovable-uploads/62c5b772-9c99-41b3-b48e-83926e910229.png", slug: "crm-service-design", brand: "Grupo Bimbo" } },
          { name: "Strategic Decision-Making", category: "excelling", caseStudy: { image: "/lovable-uploads/62c5b772-9c99-41b3-b48e-83926e910229.png", slug: "connection-center", brand: "Grupo Bimbo" } },
          { name: "Talent Development", category: "building", caseStudy: { image: "/lovable-uploads/62c5b772-9c99-41b3-b48e-83926e910229.png", slug: "continuous-improvement", brand: "Grupo Bimbo" } },
          { name: "Innovation Promotion", category: "building", caseStudy: { image: "/lovable-uploads/nespresso.png", slug: "bartista", brand: "Nestlé" } }
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

  return (
    <section className="sec">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
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
                    stroke="var(--rule)"
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
                      stroke="var(--rule)"
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
                      className="cursor-pointer transition-all duration-300"
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
                      className={`text-sm font-merriweather fill-current transition-all duration-300 ${isSelected ? 'font-bold' : ''}`}
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
                      className="font-westmount font-light"
                      style={{ fontSize: '11px', fill: 'var(--ink)', letterSpacing: '0.04em' }}
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
              <h3 className="heading-m">Core capabilities</h3>
              <div className="transition-all duration-300 ease-in-out min-h-[120px] relative">
                <div ref={skillsContainerRef}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedSkill}
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skillContent.map((skill) => {
                        const isGreen = skill.category === 'excelling';
                        return (
                          <span
                            key={skill.name}
                            className={[
                              "tag-chip",
                              isGreen ? "cursor-pointer" : "is-muted",
                              isGreen && tooltipSkill === skill.name ? "is-selected" : ""
                            ].join(" ")}
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
                          </span>
                        );
                      })}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Tooltip */}
                {tooltipSkill && tooltipSkillData && tooltipPosition && !isFullscreenTooltip && (
                  <motion.div
                    className="absolute z-50 pointer-events-auto"
                    style={{
                      left: tooltipPosition.x - 120,
                      top: tooltipPosition.y - 70,
                    }}
                    ref={tooltipRef}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.15 }}
                  >
                    <div className="bg-[hsl(var(--pastel-yellow))] border border-ink p-4 max-w-xs">
                      <div className="flex items-start gap-3">
                        {selectedSkill === 'Hard Skills' && (
                          <svg viewBox="0 0 120 80" width="120" height="80" fill="none" stroke="var(--ink)" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
                            <rect x="4" y="4" width="112" height="72"/>
                            <line x1="4" y1="28" x2="116" y2="28"/>
                            <rect x="16" y="36" width="20" height="32"/>
                            <rect x="44" y="42" width="20" height="26"/>
                            <rect x="72" y="48" width="20" height="20"/>
                            <text x="26" y="22" textAnchor="middle" fontFamily="var(--ff-display)" fontWeight="300" fontSize="7" letterSpacing="0.12em" fill="var(--ink-3)">TOOLS</text>
                            <text x="100" y="68" textAnchor="middle" fontFamily="var(--ff-display)" fontWeight="300" fontSize="7" letterSpacing="0.12em" fill="var(--ink-3)">METHODS</text>
                          </svg>
                        )}
                        {selectedSkill === 'Cognitive Skills' && (
                          <svg viewBox="0 0 120 80" width="120" height="80" fill="none" stroke="var(--ink)" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="40" cy="40" r="32"/>
                            <circle cx="80" cy="40" r="32"/>
                            <text x="40" y="72" textAnchor="middle" fontFamily="var(--ff-display)" fontWeight="300" fontSize="7" letterSpacing="0.12em" fill="var(--ink-3)">ANALYSE</text>
                            <text x="80" y="72" textAnchor="middle" fontFamily="var(--ff-display)" fontWeight="300" fontSize="7" letterSpacing="0.12em" fill="var(--ink-3)">SYNTHESISE</text>
                          </svg>
                        )}
                        {selectedSkill === 'Organization Understanding' && (
                          <svg viewBox="0 0 120 80" width="120" height="80" fill="none" stroke="var(--ink)" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
                            <rect x="44" y="4" width="32" height="18"/>
                            <rect x="4" y="58" width="32" height="18"/>
                            <rect x="84" y="58" width="32" height="18"/>
                            <line x1="60" y1="22" x2="60" y2="46"/>
                            <line x1="60" y1="46" x2="20" y2="58"/>
                            <line x1="60" y1="46" x2="100" y2="58"/>
                            <text x="60" y="14" textAnchor="middle" fontFamily="var(--ff-display)" fontWeight="300" fontSize="7" letterSpacing="0.10em" fill="var(--ink)">STRATEGY</text>
                            <text x="20" y="72" textAnchor="middle" fontFamily="var(--ff-display)" fontWeight="300" fontSize="7" letterSpacing="0.08em" fill="var(--ink-3)">OPS</text>
                            <text x="100" y="72" textAnchor="middle" fontFamily="var(--ff-display)" fontWeight="300" fontSize="7" letterSpacing="0.08em" fill="var(--ink-3)">CULTURE</text>
                          </svg>
                        )}
                        {selectedSkill === 'Soft Skills' && (
                          <svg viewBox="0 0 120 80" width="120" height="80" fill="none" stroke="var(--ink)" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
                            <rect x="4" y="4" width="52" height="32"/>
                            <rect x="4" y="44" width="52" height="32"/>
                            <line x1="56" y1="20" x2="116" y2="20"/>
                            <line x1="56" y1="60" x2="116" y2="60"/>
                            <line x1="116" y1="20" x2="116" y2="60"/>
                            <text x="30" y="24" textAnchor="middle" fontFamily="var(--ff-display)" fontWeight="300" fontSize="7" letterSpacing="0.10em" fill="var(--ink)">LISTEN</text>
                            <text x="30" y="64" textAnchor="middle" fontFamily="var(--ff-display)" fontWeight="300" fontSize="7" letterSpacing="0.10em" fill="var(--ink)">FACILITATE</text>
                            <text x="100" y="43" textAnchor="middle" fontFamily="var(--ff-display)" fontWeight="300" fontSize="7" letterSpacing="0.10em" fill="var(--ink-3)">ALIGN</text>
                          </svg>
                        )}
                        {selectedSkill === 'Leadership' && (
                          <svg viewBox="0 0 120 80" width="120" height="80" fill="none" stroke="var(--ink)" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
                            <line x1="4" y1="76" x2="116" y2="76"/>
                            <line x1="4" y1="76" x2="60" y2="4"/>
                            <line x1="116" y1="76" x2="60" y2="4"/>
                            <line x1="30" y1="50" x2="90" y2="50"/>
                            <line x1="17" y1="63" x2="103" y2="63"/>
                            <text x="60" y="72" textAnchor="middle" fontFamily="var(--ff-display)" fontWeight="300" fontSize="7" letterSpacing="0.10em" fill="var(--ink-3)">SCALE</text>
                            <text x="60" y="24" textAnchor="middle" fontFamily="var(--ff-display)" fontWeight="300" fontSize="7" letterSpacing="0.10em" fill="var(--ink)">VISION</text>
                          </svg>
                        )}
                        <div className="flex-1 min-w-0">
                          <h4 className="heading-m">{tooltipSkill}</h4>
                          <p className="eyebrow mt-2">{tooltipSkillData.caseStudy.brand}</p>
                          <Link
                            to={`/portfolio/${tooltipSkillData.caseStudy.slug}`}
                            style={{
                              fontFamily: 'var(--ff-editorial)',
                              fontSize: 14,
                              color: 'var(--ink)',
                              borderBottom: '1px solid var(--ink)',
                              paddingBottom: 2,
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 6,
                              marginTop: 'var(--s-4)',
                              transition: 'opacity 200ms'
                            }}
                            onMouseEnter={e => e.currentTarget.style.opacity = '0.6'}
                            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                          >
                            In practice →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Legend */}
            <div className="flex items-center justify-start gap-6 py-2 transition-all duration-300">
              <div className="inline-flex items-center gap-2 eyebrow">
                <span className="inline-block w-3 h-2" style={{ background: 'var(--accent)' }}></span>
                Excelling at
              </div>
              <div className="inline-flex items-center gap-2 eyebrow">
                <span className="inline-block w-3 h-2 border border-dashed" style={{ borderColor: 'var(--ink-4)' }}></span>
                Building up
              </div>
            </div>

            <div style={{ paddingTop: 'var(--s-5)', textAlign: 'left' }}>
              <Link
                to="/methodology"
                style={{
                  fontFamily: 'var(--ff-editorial)',
                  fontSize: 14,
                  color: 'var(--ink)',
                  borderBottom: '1px solid var(--ink)',
                  paddingBottom: 2,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  transition: 'opacity 200ms'
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.6'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                In practice →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RadarSkillsSection;
