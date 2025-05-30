import { forwardRef, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

interface MyApproachSectionProps {
  className?: string;
}

// Helper para convertir ángulo a coordenadas cartesianas
function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const angle = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(angle),
    y: cy + r * Math.sin(angle),
  };
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * i, duration: 0.7, type: 'spring', stiffness: 40 }
  })
};

const MyApproachSection = forwardRef<HTMLElement, MyApproachSectionProps>(
  ({ className }, ref) => {
    const svgRef = useRef<SVGSVGElement>(null);
    const isInView = useInView(svgRef, { once: true, amount: 0.3 });

    // Círculos y caja
    const leftCircle = { cx: 155, cy: 170, r: 110 };
    const rightCircle = { cx: 305, cy: 170, r: 110 };
    const serviceBox = { x: 170, y: 225, width: 140, height: 40 };
    const serviceText = { x: 240, y: 250 };

    // Listas alineadas
    const leftListX = leftCircle.cx - 52;
    const rightListX = rightCircle.cx - 30;

    return (
      <section className={`py-8 sm:py-16 ${className || ''}`} ref={ref}>
        <div className="container-narrow">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={0}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-westmount tracking-tight">
              MY APPROACH
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mt-4 sm:mt-8 font-merriweather text-neutral-700 leading-relaxed">
              If you're serious about being human-centered, you better be{' '}
              <span className="text-[#8ab1a2] font-semibold">systems-centered</span>{' '}
              too. Break it down. Rebuild it better.
            </p>
          </motion.div>

          {/* Desktop/Tablet Horizontal Diagram */}
          <div className="hidden sm:flex justify-center mb-8 sm:mb-12">
            <motion.svg
              ref={svgRef}
              viewBox="0 0 460 340"
              className="w-[65%] md:w-[60%] transition-all"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {/* Círculos base (negro, siempre) */}
              <circle
                {...leftCircle}
                fill="none"
                stroke="#333"
                strokeWidth={1.5}
                opacity={0.9}
              />
              <circle
                {...rightCircle}
                fill="none"
                stroke="#333"
                strokeWidth={1.5}
                opacity={0.9}
              />

              {/* Títulos en dos filas */}
              <motion.text
                x={leftCircle.cx}
                y={leftCircle.cy - 54}
                textAnchor="middle"
                fontFamily="Merriweather"
                fontSize="12"
                fontWeight="600"
                fill="#222"
                style={{ pointerEvents: 'none' }}
              >
                <tspan x={leftCircle.cx} dy="0">Human</tspan>
                <tspan x={leftCircle.cx} dy="15">Systems</tspan>
              </motion.text>
              <motion.text
                x={rightCircle.cx}
                y={rightCircle.cy - 54}
                textAnchor="middle"
                fontFamily="Merriweather"
                fontSize="12"
                fontWeight="600"
                fill="#222"
                style={{ pointerEvents: 'none' }}
              >
                <tspan x={rightCircle.cx} dy="0">Functional</tspan>
                <tspan x={rightCircle.cx} dy="15">Systems</tspan>
              </motion.text>

              {/* Listas alineadas, color neutro */}
              <motion.text x={leftListX} y={leftCircle.cy - 10} fontFamily="Merriweather" fontSize="12" fill="#333">• Behaviors</motion.text>
              <motion.text x={leftListX} y={leftCircle.cy + 14} fontFamily="Merriweather" fontSize="12" fill="#333">• Culture</motion.text>
              <motion.text x={leftListX} y={leftCircle.cy + 38} fontFamily="Merriweather" fontSize="12" fill="#333">• Relationships</motion.text>
              <motion.text x={rightListX} y={rightCircle.cy - 10} fontFamily="Merriweather" fontSize="12" fill="#333">• Processes</motion.text>
              <motion.text x={rightListX} y={rightCircle.cy + 14} fontFamily="Merriweather" fontSize="12" fill="#333">• Technology</motion.text>
              <motion.text x={rightListX} y={rightCircle.cy + 38} fontFamily="Merriweather" fontSize="12" fill="#333">• Metrics</motion.text>

              {/* SERVICE DESIGN Box */}
              <motion.rect
                {...serviceBox}
                rx="16"
                fill="#8ab1a2"
                stroke="#333"
                strokeWidth="1.7"
                style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.08))', cursor: 'pointer' }}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.85 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              />
              <motion.text
                x={serviceText.x}
                y={serviceText.y}
                textAnchor="middle"
                fontFamily="Merriweather"
                fontSize="12"
                fontWeight="700"
                fill="#ffffff"
                style={{ letterSpacing: 1.2, pointerEvents: 'none' }}
              >
                SERVICE DESIGN
              </motion.text>

              {/* Flecha de control */}
              <motion.line
                x1="50" y1="320" x2="410" y2="320"
                stroke="#333"
                strokeWidth="1.2"
                strokeDasharray="2,2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: isInView ? 1 : 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              />
              <polyline points="50,320 40,315 40,325 50,320" fill="#333" />
              <polyline points="410,320 420,315 420,325 410,320" fill="#333" />
              <motion.text x="120" y="335" textAnchor="middle" fontFamily="Merriweather" fontSize="11" fill="#888">
                less control
              </motion.text>
              <motion.text x="340" y="335" textAnchor="middle" fontFamily="Merriweather" fontSize="11" fill="#888">
                more control
              </motion.text>
            </motion.svg>
          </div>

          {/* Mobile Vertical Diagram */}
          <div className="flex sm:hidden justify-center mb-8">
            <svg
              viewBox="0 0 280 400"
              className="w-[85%] transition-all"
            >
              <circle
                cx="140" cy="90" r="80"
                fill="none" stroke="#444" strokeWidth="2" opacity="0.88"
              />
              <circle
                cx="140" cy="260" r="80"
                fill="none" stroke="#444" strokeWidth="2" opacity="0.88"
              />
              <text x="140" y="55" textAnchor="middle" fontFamily="Merriweather" fontSize="13" fontWeight="700" fill="#333">
                Human Systems
              </text>
              <text x="100" y="75" fontFamily="Merriweather" fontSize="11" fill="#333">• Behaviors</text>
              <text x="100" y="90" fontFamily="Merriweather" fontSize="11" fill="#333">• Culture</text>
              <text x="100" y="105" fontFamily="Merriweather" fontSize="11" fill="#333">• Relationships</text>
              <rect
                x="75" y="160" width="130" height="30" rx="12"
                fill="#8ab1a2" stroke="#333" strokeWidth="1.7"
                style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.07))'}}
              />
              <text x="140" y="180" textAnchor="middle" fontFamily="Merriweather" fontSize="12" fontWeight="900" fill="#ffffff" style={{ letterSpacing: 1.2 }}>
                SERVICE DESIGN
              </text>
              <text x="140" y="225" textAnchor="middle" fontFamily="Merriweather" fontSize="13" fontWeight="700" fill="#333">
                Functional Systems
              </text>
              <text x="100" y="245" fontFamily="Merriweather" fontSize="11" fill="#333">• Processes</text>
              <text x="100" y="260" fontFamily="Merriweather" fontSize="11" fill="#333">• Technology</text>
              <text x="100" y="275" fontFamily="Merriweather" fontSize="11" fill="#333">• Metrics</text>
              <line x1="20" y1="60" x2="20" y2="290" stroke="#333" strokeWidth="1.2" strokeDasharray="2,2" />
              <polyline points="20,60 15,70 25,70 20,60" fill="#333" />
              <polyline points="20,290 15,280 25,280 20,290" fill="#333" />
              <text x="8" y="90" textAnchor="middle" fontFamily="Merriweather" fontSize="9" fill="#888" transform="rotate(-90 8 90)">
                less control
              </text>
              <text x="8" y="260" textAnchor="middle" fontFamily="Merriweather" fontSize="9" fill="#888" transform="rotate(-90 8 260)">
                more control
              </text>
            </svg>
          </div>

          <motion.div
            className="text-center mt-8 sm:mt-12"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={20}
          >
            <Link
              to="/methodology"
              className="inline-flex items-center text-sm border-b border-black pb-1 hover:opacity-70 transition-opacity font-merriweather group"
            >
              The thinking behind
              <ArrowRight
                size={14}
                className="ml-1 group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
          </motion.div>
        </div>
      </section>
    );
  }
);

MyApproachSection.displayName = 'MyApproachSection';

export default MyApproachSection;
