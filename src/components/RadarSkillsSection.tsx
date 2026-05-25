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

  const getCapabilitySVG = (skillName: string) => {
    const svgs: Record<string, React.ReactNode> = {
      "HCD": (
        <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="var(--ink)" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="24" r="10"/>
          <path d="M14 56 Q14 40 32 40 Q50 40 50 56"/>
          <circle cx="32" cy="24" r="2.5" fill="var(--ink)" stroke="none"/>
        </svg>
      ),
      "System Thinking": (
        <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="var(--ink)" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="24"/>
          <circle cx="32" cy="32" r="12"/>
          <circle cx="32" cy="32" r="3" fill="var(--ink)" stroke="none"/>
          <line x1="32" y1="8" x2="32" y2="20"/>
          <line x1="32" y1="44" x2="32" y2="56"/>
          <line x1="8" y1="32" x2="20" y2="32"/>
          <line x1="44" y1="32" x2="56" y2="32"/>
        </svg>
      ),
      "Agile": (
        <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="var(--ink)" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 52 L12 28 L32 8 L52 28 L52 52"/>
          <line x1="12" y1="52" x2="52" y2="52"/>
          <path d="M22 52 L22 36 L32 26 L42 36 L42 52"/>
          <circle cx="32" cy="36" r="2.5" fill="var(--ink)" stroke="none"/>
        </svg>
      ),
      "Service Prototyping": (
        <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="var(--ink)" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="22" height="22"/>
          <rect x="34" y="8" width="22" height="22"/>
          <rect x="8" y="34" width="22" height="22"/>
          <rect x="34" y="34" width="22" height="22" strokeDasharray="3 3"/>
          <circle cx="45" cy="45" r="3" fill="var(--ink)" stroke="none"/>
        </svg>
      ),
      "Digital Tools Proficiency": (
        <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="var(--ink)" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="14" width="48" height="32"/>
          <line x1="8" y1="46" x2="56" y2="46"/>
          <line x1="24" y1="50" x2="40" y2="50"/>
          <line x1="20" y1="26" x2="28" y2="34"/>
          <line x1="28" y1="26" x2="20" y2="34"/>
          <line x1="34" y1="30" x2="44" y2="30"/>
          <circle cx="44" cy="30" r="2.5" fill="var(--ink)" stroke="none"/>
        </svg>
      ),
      "Training & Change Management": (
        <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="var(--ink)" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="48" height="32"/>
          <line x1="8" y1="40" x2="56" y2="40"/>
          <line x1="20" y1="50" x2="44" y2="50"/>
          <line x1="32" y1="40" x2="32" y2="50"/>
          <line x1="16" y1="20" x2="48" y2="20"/>
          <line x1="16" y1="28" x2="36" y2="28"/>
          <circle cx="32" cy="14" r="2.5" fill="var(--ink)" stroke="none"/>
        </svg>
      ),
      "Data Analysis": (
        <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="var(--ink)" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
          <line x1="8" y1="56" x2="8" y2="8"/>
          <line x1="8" y1="56" x2="56" y2="56"/>
          <rect x="14" y="36" width="10" height="20"/>
          <rect x="30" y="24" width="10" height="32"/>
          <rect x="46" y="14" width="10" height="42"/>
          <circle cx="19" cy="36" r="2" fill="var(--ink)" stroke="none"/>
          <circle cx="35" cy="24" r="2" fill="var(--ink)" stroke="none"/>
          <circle cx="51" cy="14" r="2" fill="var(--ink)" stroke="none"/>
          <path d="M19 36 L35 24 L51 14" strokeDasharray="2 2"/>
        </svg>
      ),
      "Process Design": (
        <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="var(--ink)" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="26" width="14" height="12"/>
          <rect x="26" y="14" width="14" height="12"/>
          <rect x="26" y="38" width="14" height="12"/>
          <rect x="46" y="26" width="14" height="12"/>
          <line x1="18" y1="32" x2="26" y2="20"/>
          <line x1="18" y1="32" x2="26" y2="44"/>
          <line x1="40" y1="20" x2="46" y2="32"/>
          <line x1="40" y1="44" x2="46" y2="32"/>
          <circle cx="32" cy="32" r="2.5" fill="var(--ink)" stroke="none"/>
        </svg>
      ),
      "Continuous Improvement Management": (
        <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="var(--ink)" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 8 A24 24 0 1 1 10 42"/>
          <polyline points="6,36 10,42 16,38"/>
          <circle cx="32" cy="32" r="8"/>
          <circle cx="32" cy="32" r="2.5" fill="var(--ink)" stroke="none"/>
        </svg>
      ),
      "Strategic Alignment": (
        <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="var(--ink)" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
          <line x1="8" y1="16" x2="56" y2="16"/>
          <line x1="8" y1="32" x2="56" y2="32"/>
          <line x1="8" y1="48" x2="56" y2="48"/>
          <circle cx="20" cy="16" r="3" fill="var(--ink)" stroke="none"/>
          <circle cx="36" cy="32" r="3" fill="var(--ink)" stroke="none"/>
          <circle cx="48" cy="48" r="3" fill="var(--ink)" stroke="none"/>
          <path d="M20 16 L36 32 L48 48" strokeDasharray="3 3"/>
        </svg>
      ),
      "Organizational Dynamics Comprehension": (
        <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="var(--ink)" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="16" r="8"/>
          <circle cx="14" cy="46" r="8"/>
          <circle cx="50" cy="46" r="8"/>
          <line x1="26" y1="22" x2="18" y2="38"/>
          <line x1="38" y1="22" x2="46" y2="38"/>
          <line x1="22" y1="46" x2="42" y2="46"/>
          <circle cx="32" cy="32" r="2.5" fill="var(--ink)" stroke="none"/>
        </svg>
      ),
      "Cross-Departmental Integration": (
        <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="var(--ink)" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="4" width="24" height="24"/>
          <rect x="36" y="4" width="24" height="24"/>
          <rect x="4" y="36" width="24" height="24"/>
          <rect x="36" y="36" width="24" height="24"/>
          <line x1="28" y1="16" x2="36" y2="16"/>
          <line x1="28" y1="48" x2="36" y2="48"/>
          <line x1="16" y1="28" x2="16" y2="36"/>
          <line x1="48" y1="28" x2="48" y2="36"/>
          <circle cx="32" cy="32" r="2.5" fill="var(--ink)" stroke="none"/>
        </svg>
      ),
      "Design Resource Management": (
        <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="var(--ink)" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="48" height="10"/>
          <rect x="8" y="24" width="30" height="10"/>
          <rect x="8" y="40" width="18" height="10"/>
          <circle cx="56" cy="44" r="6"/>
          <line x1="56" y1="38" x2="56" y2="30"/>
          <circle cx="56" cy="28" r="2.5" fill="var(--ink)" stroke="none"/>
        </svg>
      ),
      "Interdisciplinary Communication": (
        <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="var(--ink)" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="8" width="26" height="20"/>
          <rect x="34" y="36" width="26" height="20"/>
          <path d="M4 28 L12 36 L30 28"/>
          <path d="M60 36 L52 28 L34 36"/>
          <line x1="17" y1="36" x2="47" y2="28"/>
          <circle cx="32" cy="32" r="2.5" fill="var(--ink)" stroke="none"/>
        </svg>
      ),
      "Workshop Facilitation": (
        <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="var(--ink)" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="14" r="6"/>
          <circle cx="12" cy="48" r="6"/>
          <circle cx="52" cy="48" r="6"/>
          <line x1="32" y1="20" x2="32" y2="36"/>
          <line x1="32" y1="36" x2="12" y2="42"/>
          <line x1="32" y1="36" x2="52" y2="42"/>
          <line x1="12" y1="42" x2="52" y2="42"/>
          <circle cx="32" cy="36" r="2.5" fill="var(--ink)" stroke="none"/>
        </svg>
      ),
      "Conflict Resolution": (
        <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="var(--ink)" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
          <line x1="8" y1="8" x2="28" y2="28"/>
          <line x1="56" y1="8" x2="36" y2="28"/>
          <line x1="28" y1="28" x2="36" y2="28"/>
          <line x1="32" y1="28" x2="32" y2="48"/>
          <circle cx="32" cy="48" r="6"/>
          <circle cx="32" cy="36" r="2.5" fill="var(--ink)" stroke="none"/>
        </svg>
      ),
      "Professional Relationship Building": (
        <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="var(--ink)" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="24" r="10"/>
          <circle cx="44" cy="24" r="10"/>
          <line x1="30" y1="24" x2="34" y2="24"/>
          <path d="M8 52 Q8 38 20 38 Q32 38 32 52"/>
          <path d="M32 52 Q32 38 44 38 Q56 38 56 52"/>
          <circle cx="32" cy="24" r="2.5" fill="var(--ink)" stroke="none"/>
        </svg>
      ),
      "Complex Systems Understanding": (
        <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="var(--ink)" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="24"/>
          <circle cx="32" cy="32" r="14"/>
          <circle cx="32" cy="32" r="6"/>
          <line x1="32" y1="8" x2="32" y2="18"/>
          <line x1="50" y1="18" x2="43" y2="24"/>
          <line x1="50" y1="46" x2="43" y2="40"/>
          <line x1="32" y1="56" x2="32" y2="46"/>
          <line x1="14" y1="46" x2="21" y2="40"/>
          <line x1="14" y1="18" x2="21" y2="24"/>
          <circle cx="32" cy="32" r="2.5" fill="var(--ink)" stroke="none"/>
        </svg>
      ),
      "Abstract Thinking": (
        <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="var(--ink)" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
          <polygon points="32,8 56,52 8,52"/>
          <polygon points="32,20 46,44 18,44"/>
          <circle cx="32" cy="36" r="2.5" fill="var(--ink)" stroke="none"/>
        </svg>
      ),
      "Innovative Solution Generation": (
        <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="var(--ink)" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="26" r="14"/>
          <line x1="32" y1="40" x2="32" y2="52"/>
          <line x1="26" y1="48" x2="38" y2="48"/>
          <line x1="26" y1="52" x2="38" y2="52"/>
          <circle cx="32" cy="26" r="2.5" fill="var(--ink)" stroke="none"/>
        </svg>
      ),
      "Adaptability": (
        <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="var(--ink)" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 32 Q16 12 32 12 Q48 12 48 32"/>
          <path d="M48 32 Q48 52 32 52 Q16 52 16 32"/>
          <polyline points="44,24 48,32 52,24"/>
          <polyline points="20,40 16,32 12,40"/>
          <circle cx="32" cy="32" r="2.5" fill="var(--ink)" stroke="none"/>
        </svg>
      ),
      "Team Inspiration & Motivation": (
        <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="var(--ink)" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="16" r="8"/>
          <circle cx="14" cy="44" r="6"/>
          <circle cx="50" cy="44" r="6"/>
          <circle cx="32" cy="44" r="6"/>
          <line x1="32" y1="24" x2="32" y2="38"/>
          <line x1="32" y1="38" x2="14" y2="38"/>
          <line x1="32" y1="38" x2="50" y2="38"/>
          <circle cx="32" cy="38" r="2.5" fill="var(--ink)" stroke="none"/>
        </svg>
      ),
      "Strategic Decision-Making": (
        <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="var(--ink)" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
          <line x1="8" y1="32" x2="56" y2="32"/>
          <circle cx="32" cy="32" r="4" fill="var(--ink)" stroke="none"/>
          <path d="M32 8 L32 28"/>
          <path d="M32 36 L32 56"/>
          <path d="M20 20 L28 28"/>
          <path d="M36 36 L44 44"/>
          <path d="M44 20 L36 28"/>
          <path d="M28 36 L20 44"/>
        </svg>
      ),
      "Talent Development": (
        <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="var(--ink)" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="20" r="10"/>
          <path d="M16 52 Q16 38 32 38 Q48 38 48 52"/>
          <line x1="44" y1="12" x2="56" y2="4"/>
          <line x1="48" y1="18" x2="60" y2="16"/>
          <line x1="44" y1="24" x2="56" y2="28"/>
          <circle cx="32" cy="20" r="2.5" fill="var(--ink)" stroke="none"/>
        </svg>
      ),
      "Innovation Promotion": (
        <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="var(--ink)" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
          <polygon points="32,8 38,26 58,26 42,38 48,56 32,44 16,56 22,38 6,26 26,26"/>
          <circle cx="32" cy="32" r="2.5" fill="var(--ink)" stroke="none"/>
        </svg>
      ),
    };
    return svgs[skillName] || null;
  };

  return (
    <section className="sec" style={{ paddingBottom: 'var(--s-4)' }}>
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
                    fill={selectedSkill === point.label ? "var(--accent-fill-soft)" : "transparent"}
                    className="cursor-pointer transition-all duration-500 hover:fill-[rgba(138,177,162,0.1)]"
                    onClick={() => handleSkillChange(point.label)}
                  />
                ))}
                <path
                  d={createRadarPath()}
                  fill="var(--accent-fill)"
                  stroke="var(--accent)"
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
                      fill="var(--accent)"
                      stroke="hsl(var(--pastel-yellow))"
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
                        {getCapabilitySVG(tooltipSkill || '')}
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
                <span className="inline-block w-3 h-2" style={{ border: '1px solid var(--ink)', background: 'transparent' }}></span>
                Excelling at
              </div>
              <div className="inline-flex items-center gap-2 eyebrow">
                <span className="inline-block w-3 h-2 border border-dashed" style={{ borderColor: 'var(--ink-4)' }}></span>
                Building up
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default RadarSkillsSection;
