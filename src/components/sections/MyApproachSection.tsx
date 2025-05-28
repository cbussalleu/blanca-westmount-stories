import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface MyApproachSectionProps {
  className?: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * i, duration: 0.7, type: 'spring', stiffness: 40 }
  })
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: 0.05 * i, duration: 0.6 }
  })
};

const MyApproachSection = forwardRef<HTMLElement, MyApproachSectionProps>(
  ({ className }, ref) => {
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
            <p className="text-base max-w-2xl mx-auto mt-4 sm:mt-8 font-merriweather text-neutral-700">
              If you're serious about being human-centered, you better be systems-centered too. Break it down. Rebuild it better.
            </p>
          </motion.div>

          {/* Desktop/Tablet Horizontal Diagram */}
          <div className="hidden sm:flex justify-center mb-8 sm:mb-12">
            <motion.svg
              viewBox="0 0 480 340"
              className="w-[70%] xs:w-[68%] sm:w-[65%] md:w-[62%] lg:w-[60%] transition-all"
              initial="hidden"
              animate="visible"
            >
              {/* Left Circle - Human Systems */}
              <motion.circle
                cx="130"
                cy="150"
                r="110"
                fill="none"
                stroke="#444"
                strokeWidth="2"
                opacity="0.88"
                whileHover={{ stroke: "#2e7d32", strokeWidth: 3 }}
                transition={{ duration: 0.2 }}
                variants={fadeIn}
                custom={1}
              />
              {/* Right Circle - Functional Systems */}
              <motion.circle
                cx="350"
                cy="150"
                r="110"
                fill="none"
                stroke="#444"
                strokeWidth="2"
                opacity="0.88"
                whileHover={{ stroke: "#1565c0", strokeWidth: 3 }}
                transition={{ duration: 0.2 }}
                variants={fadeIn}
                custom={2}
              />
              {/* Human Systems Text */}
              <motion.text
                x="130" y="95" textAnchor="middle"
                fontFamily="Merriweather" fontSize="15" fontWeight="700"
                fill="#333"
                variants={fadeInUp}
                custom={3}
              >
                Human Systems
              </motion.text>
              {/* Human Systems List */}
              <motion.text x="75" y="125" fontFamily="Merriweather" fontSize="13" fill="#2e7d32" variants={fadeInUp} custom={4}>• Behaviors</motion.text>
              <motion.text x="75" y="150" fontFamily="Merriweather" fontSize="13" fill="#2e7d32" variants={fadeInUp} custom={5}>• Culture</motion.text>
              <motion.text x="75" y="175" fontFamily="Merriweather" fontSize="13" fill="#2e7d32" variants={fadeInUp} custom={6}>• Relationships</motion.text>
              {/* Functional Systems Text */}
              <motion.text
                x="350" y="95" textAnchor="middle"
                fontFamily="Merriweather" fontSize="15" fontWeight="700"
                fill="#333"
                variants={fadeInUp}
                custom={7}
              >
                Functional Systems
              </motion.text>
              {/* Functional Systems List */}
              <motion.text x="295" y="125" fontFamily="Merriweather" fontSize="13" fill="#1565c0" variants={fadeInUp} custom={8}>• Processes</motion.text>
              <motion.text x="295" y="150" fontFamily="Merriweather" fontSize="13" fill="#1565c0" variants={fadeInUp} custom={9}>• Technology</motion.text>
              <motion.text x="295" y="175" fontFamily="Merriweather" fontSize="13" fill="#1565c0" variants={fadeInUp} custom={10}>• Metrics</motion.text>
              {/* SERVICE DESIGN Box */}
              <motion.rect
                x="180" y="145" width="120" height="40" rx="8"
                fill="white" stroke="#333" strokeWidth="1.8"
                style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.06))'}}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.55, duration: 0.5 }}
              />
              <motion.text
                x="240" y="170" textAnchor="middle"
                fontFamily="Merriweather" fontSize="13" fontWeight="900"
                fill="#333"
                variants={fadeInUp}
                custom={11}
                style={{ letterSpacing: 1.2 }}
              >
                SERVICE DESIGN
              </motion.text>
              {/* Bottom Labels */}
              <motion.text x="130" y="280" textAnchor="middle" fontFamily="Merriweather" fontSize="12" fontStyle="italic" fill="#666" variants={fadeInUp} custom={12}>
                Human experiences
              </motion.text>
              <motion.text x="130" y="300" textAnchor="middle" fontFamily="Merriweather" fontSize="12" fontStyle="italic" fill="#666" variants={fadeInUp} custom={13}>
                can only be enabled
              </motion.text>
              <motion.text x="350" y="280" textAnchor="middle" fontFamily="Merriweather" fontSize="12" fontStyle="italic" fill="#666" variants={fadeInUp} custom={14}>
                Functional elements
              </motion.text>
              <motion.text x="350" y="300" textAnchor="middle" fontFamily="Merriweather" fontSize="12" fontStyle="italic" fill="#666" variants={fadeInUp} custom={15}>
                can be designed and controlled
              </motion.text>
              {/* Arrow with control labels */}
              <motion.line x1="40" y1="320" x2="440" y2="320" stroke="#333" strokeWidth="1.2" strokeDasharray="2,2"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.2 }} />
              <polyline points="40,320 30,315 30,325 40,320" fill="#333" />
              <polyline points="440,320 450,315 450,325 440,320" fill="#333" />
              <motion.text x="130" y="335" textAnchor="middle" fontFamily="Merriweather" fontSize="11" fill="#888" variants={fadeIn} custom={16}>
                less control
              </motion.text>
              <motion.text x="350" y="335" textAnchor="middle" fontFamily="Merriweather" fontSize="11" fill="#888" variants={fadeIn} custom={17}>
                more control
              </motion.text>
            </motion.svg>
          </div>

          {/* Mobile Vertical Diagram */}
          <div className="flex sm:hidden justify-center mb-8">
            <motion.svg
              viewBox="0 0 280 400"
              className="w-[85%] transition-all"
              initial="hidden"
              animate="visible"
            >
              {/* Top Circle - Human Systems */}
              <motion.circle
                cx="140" cy="90" r="80"
                fill="none" stroke="#444" strokeWidth="2" opacity="0.88"
                whileHover={{ stroke: "#2e7d32", strokeWidth: 3 }}
                transition={{ duration: 0.2 }}
                variants={fadeIn}
                custom={1}
              />
              {/* Bottom Circle - Functional Systems */}
              <motion.circle
                cx="140" cy="260" r="80"
                fill="none" stroke="#444" strokeWidth="2" opacity="0.88"
                whileHover={{ stroke: "#1565c0", strokeWidth: 3 }}
                transition={{ duration: 0.2 }}
                variants={fadeIn}
                custom={2}
              />
              {/* Human Systems Text */}
              <motion.text x="140" y="55" textAnchor="middle" fontFamily="Merriweather" fontSize="13" fontWeight="700" fill="#333" variants={fadeInUp} custom={3}>
                Human Systems
              </motion.text>
              {/* Human Systems List */}
              <motion.text x="100" y="75" fontFamily="Merriweather" fontSize="11" fill="#2e7d32" variants={fadeInUp} custom={4}>• Behaviors</motion.text>
              <motion.text x="100" y="90" fontFamily="Merriweather" fontSize="11" fill="#2e7d32" variants={fadeInUp} custom={5}>• Culture</motion.text>
              <motion.text x="100" y="105" fontFamily="Merriweather" fontSize="11" fill="#2e7d32" variants={fadeInUp} custom={6}>• Relationships</motion.text>
              {/* SERVICE DESIGN Box */}
              <motion.rect
                x="90" y="160" width="100" height="30" rx="8"
                fill="white" stroke="#333" strokeWidth="1.7"
                style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.07))'}}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.55, duration: 0.5 }}
              />
              <motion.text x="140" y="180" textAnchor="middle" fontFamily="Merriweather" fontSize="11" fontWeight="900" fill="#333" style={{ letterSpacing: 1.2 }} variants={fadeInUp} custom={7}>
                SERVICE DESIGN
              </motion.text>
              {/* Functional Systems Text */}
              <motion.text x="140" y="225" textAnchor="middle" fontFamily="Merriweather" fontSize="13" fontWeight="700" fill="#333" variants={fadeInUp} custom={8}>
                Functional Systems
              </motion.text>
              {/* Functional Systems List */}
              <motion.text x="100" y="245" fontFamily="Merriweather" fontSize="11" fill="#1565c0" variants={fadeInUp} custom={9}>• Processes</motion.text>
              <motion.text x="100" y="260" fontFamily="Merriweather" fontSize="11" fill="#1565c0" variants={fadeInUp} custom={10}>• Technology</motion.text>
              <motion.text x="100" y="275" fontFamily="Merriweather" fontSize="11" fill="#1565c0" variants={fadeInUp} custom={11}>• Metrics</motion.text>
              {/* Vertical Arrow with control labels */}
              <motion.line x1="20" y1="60" x2="20" y2="290" stroke="#333" strokeWidth="1.2" strokeDasharray="2,2"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.2 }} />
              <polyline points="20,60 15,70 25,70 20,60" fill="#333" />
              <polyline points="20,290 15,280 25,280 20,290" fill="#333" />
              <motion.text x="8" y="90" textAnchor="middle" fontFamily="Merriweather" fontSize="9" fill="#888" transform="rotate(-90 8 90)" variants={fadeIn} custom={12}>
                less control
              </motion.text>
              <motion.text x="8" y="260" textAnchor="middle" fontFamily="Merriweather" fontSize="9" fill="#888" transform="rotate(-90 8 260)" variants={fadeIn} custom={13}>
                more control
              </motion.text>
            </motion.svg>
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
