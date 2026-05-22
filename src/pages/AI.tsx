import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useScrollToTop } from '../hooks/use-scroll-to-top';

const AI = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-[hsl(var(--pastel-yellow))]">
      <Header />
      <main className="pt-24 pb-16">
        <section className="py-8">
          <div className="container-narrow">
            <div className="max-w-3xl mx-auto">

              {/* Back link */}
              <div className="mb-8">
                <Link to="/" className="inline-flex items-center text-xs hover:opacity-70 transition-opacity">
                  <ArrowLeft size={14} className="mr-1" /> Back to Home
                </Link>
              </div>

              {/* Title + Intro */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <p className="text-xs tracking-widest uppercase text-gray-500 mb-4">How I work with AI</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-westmount mb-8">AI IN SERVICE DESIGN</h1>
                <p className="text-sm font-merriweather leading-relaxed">
                  AI has not changed what is hard about designing services. It has changed what is possible around it. The judgment calls (what to research, how to interpret ambiguous findings, when a design is good enough) remain human. What AI changes is the infrastructure: how knowledge is stored, how it is surfaced, and how fast it can be applied. These three projects show what that looks like in practice.
                </p>
              </motion.div>

              {/* Project 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-16 flex gap-6"
              >
                <span className="text-5xl font-westmount text-gray-200 leading-none select-none flex-shrink-0">01</span>
                <div>
                  <p className="text-xs tracking-widest uppercase text-gray-500 mb-2">Knowledge Architecture</p>
                  <h2 className="text-lg font-westmount mb-1">Metodological Knowledge Architecture for AI-Augmented Research</h2>
                  <p className="text-xs text-gray-500 font-merriweather mb-4">Findasense · Internal · 2025</p>

                  <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">Challenge</p>
                  <p className="text-sm font-merriweather leading-relaxed mb-4">
                    Findasense's research practice generated high-quality methodological knowledge project by project, but that knowledge lived in individual documents, in people's heads, and in presentations that circulated briefly before disappearing. Every project started nearly from scratch. The question was not how to use AI for research, but how to structure knowledge so AI could actually amplify it.
                  </p>

                  <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">What I did</p>
                  <ul className="text-sm font-merriweather leading-relaxed mb-4 space-y-2">
                    <li className="flex gap-2"><span className="flex-shrink-0">—</span><span>Designed a two-layer knowledge architecture separating stable methodological knowledge (frameworks, sampling criteria, ethical principles) from contextual project knowledge (industry benchmarks, client-specific data)</span></li>
                    <li className="flex gap-2"><span className="flex-shrink-0">—</span><span>Defined naming conventions and versioning protocols for methodology notebooks (M-layer) and thematic notebooks (T-layer)</span></li>
                    <li className="flex gap-2"><span className="flex-shrink-0">—</span><span>Established a circular flow where each project contributes back to the knowledge base rather than just consuming it</span></li>
                    <li className="flex gap-2"><span className="flex-shrink-0">—</span><span>Documented the principle of treating the expert as knowledge architect: not replacing judgment, but giving it infrastructure</span></li>
                    <li className="flex gap-2"><span className="flex-shrink-0">—</span><span>Identified and documented the specific risks of AI bias in Latin American CX contexts</span></li>
                  </ul>

                  <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">Result</p>
                  <p className="text-sm font-merriweather leading-relaxed mb-4">
                    A reusable knowledge infrastructure that makes each research project faster and more consistent, and gets smarter with every project that uses it.
                  </p>

                  <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">Tools</p>
                  <div className="flex flex-wrap gap-2">
                    {["NotebookLM", "Google Drive", "Miro"].map(tool => (
                      <span key={tool} className="text-xs border border-gray-400 px-2 py-1 font-merriweather">{tool}</span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Project 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-16 flex gap-6"
              >
                <span className="text-5xl font-westmount text-gray-200 leading-none select-none flex-shrink-0">02</span>
                <div>
                  <p className="text-xs tracking-widest uppercase text-gray-500 mb-2">Process Automation</p>
                  <h2 className="text-lg font-westmount mb-1">Case Manager: Automated Case Study Pipeline</h2>
                  <p className="text-xs text-gray-500 font-merriweather mb-4">Findasense · Internal · 2025–2026</p>

                  <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">Challenge</p>
                  <p className="text-sm font-merriweather leading-relaxed mb-4">
                    Findasense produced high-impact work for clients across Latin America and Spain, but had no systematic way to capture, evaluate, or prioritize it for commercial use. Cases were lost to poor documentation, production investment had no strategic criteria, and pitch decks relied on outdated or incomplete materials.
                  </p>

                  <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">What I did</p>
                  <ul className="text-sm font-merriweather leading-relaxed mb-4 space-y-2">
                    <li className="flex gap-2"><span className="flex-shrink-0">—</span><span>Designed a 5-stage pipeline: structured registration → AI enrichment → automated one-slider generation → directorial scoring and voting → production prioritization</span></li>
                    <li className="flex gap-2"><span className="flex-shrink-0">—</span><span>Integrated Gemini 1.5 Flash for semantic processing only (text compression, translation, style correction), keeping all data logic deterministic</span></li>
                    <li className="flex gap-2"><span className="flex-shrink-0">—</span><span>Designed dual-version output: internal slides (client named, full methodology) and external slides (anonymized for pitches)</span></li>
                    <li className="flex gap-2"><span className="flex-shrink-0">—</span><span>Built scoring system across 4 strategic axes with automatic threshold triggering directorial vote</span></li>
                    <li className="flex gap-2"><span className="flex-shrink-0">—</span><span>Implemented conflict-of-interest rules in the voting system: practice leads cannot vote their own cases</span></li>
                    <li className="flex gap-2"><span className="flex-shrink-0">—</span><span>Redesigned interface to a sidebar navigation shell in a second iteration without touching backend logic</span></li>
                  </ul>

                  <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">Result</p>
                  <p className="text-sm font-merriweather leading-relaxed mb-4">
                    Deployed system within Google Workspace (no new tools required). Pipeline from case registration to automated slide generation is fully operational. Scoring and voting module active. System architecture is now being reused as base for other internal tools.
                  </p>

                  <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">Tools</p>
                  <div className="flex flex-wrap gap-2">
                    {["Google Apps Script", "Gemini API", "Google Slides API", "Google Sheets", "Google Drive"].map(tool => (
                      <span key={tool} className="text-xs border border-gray-400 px-2 py-1 font-merriweather">{tool}</span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Project 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-16 flex gap-6"
              >
                <span className="text-5xl font-westmount text-gray-200 leading-none select-none flex-shrink-0">03</span>
                <div>
                  <p className="text-xs tracking-widest uppercase text-gray-500 mb-2">Internal Tooling</p>
                  <h2 className="text-lg font-westmount mb-1">Findasense Pulse: AI Adoption Measurement System</h2>
                  <p className="text-xs text-gray-500 font-merriweather mb-4">Findasense · Internal · 2025–2026</p>

                  <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">Challenge</p>
                  <p className="text-sm font-merriweather leading-relaxed mb-4">
                    After deploying Gemini Pro to 100% of the company through Google Workspace licenses, Findasense had no way to measure whether people were actually using it, what was blocking them, or whether they perceived real value. Usage data from Google Workspace said what, not why or how it felt.
                  </p>

                  <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">What I did</p>
                  <ul className="text-sm font-merriweather leading-relaxed mb-4 space-y-2">
                    <li className="flex gap-2"><span className="flex-shrink-0">—</span><span>Designed a survey methodology using proportional quota sampling across practice and seniority: 40 people per monthly pulse covering the full organization over 5 rotation cycles</span></li>
                    <li className="flex gap-2"><span className="flex-shrink-0">—</span><span>Built a Google Chat bot on Apps Script that delivers 3-question surveys directly in the chat interface, with no new tools required and under 2 minutes to complete</span></li>
                    <li className="flex gap-2"><span className="flex-shrink-0">—</span><span>Designed a rotating question bank: 1 fixed question (shared indicator) + 2 rotating from a bank of 4, giving each question a sample of ~20 respondents per month</span></li>
                    <li className="flex gap-2"><span className="flex-shrink-0">—</span><span>Solved a critical authentication issue: discovered that Chat Add-on events execute as the triggering user, not the script owner; fixed by replacing getActiveSpreadsheet() with openById() throughout</span></li>
                    <li className="flex gap-2"><span className="flex-shrink-0">—</span><span>Implemented automatic employee directory sync from HR CSV via daily trigger with mutex logic to prevent double processing</span></li>
                    <li className="flex gap-2"><span className="flex-shrink-0">—</span><span>Designed multi-survey architecture so the same bot can handle future pulse types (engagement, climate) with a flag in Config.gs</span></li>
                  </ul>

                  <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">Result</p>
                  <p className="text-sm font-merriweather leading-relaxed mb-4">
                    Bot deployed and operational in Findasense's Google Workspace. Authentication fix confirmed. First AI adoption pulse configured and running. Architecture already reused as base for a second internal project (Biblioteca Creativa de Prompts).
                  </p>

                  <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">Tools</p>
                  <div className="flex flex-wrap gap-2">
                    {["Google Apps Script", "Google Chat API", "Google Sheets", "Apps Script Triggers"].map(tool => (
                      <span key={tool} className="text-xs border border-gray-400 px-2 py-1 font-merriweather">{tool}</span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Closing note */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mb-16 border-t border-gray-300 pt-12"
              >
                <p className="text-xs tracking-widest uppercase text-gray-500 mb-4">A note on approach</p>
                <p className="text-sm font-merriweather leading-relaxed">
                  In all three projects, AI handles what requires semantic reasoning: compressing text, surfacing relevant knowledge, processing language. Everything that requires judgment (what to measure, how to interpret results, what to build) remains human. This is not a philosophical position. It is a practical one: AI without a knowledge architecture behind it produces consistent mediocrity. With one, it amplifies the quality of what the expert already knows how to do.
                </p>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center"
              >
                <p className="text-sm font-merriweather mb-4">Want to understand the thinking behind this?</p>
                <Link to="/methodology" className="inline-flex items-center text-xs tracking-widest uppercase hover:opacity-70 transition-opacity">
                  Read the methodology <ArrowRight size={12} className="ml-1" />
                </Link>
              </motion.div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AI;
