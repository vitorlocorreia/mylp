import React from 'react';
import { ArrowRight, Code, Terminal, Cpu, Zap, Layers, Database } from 'lucide-react';
import { Spotlight } from './ui/spotlight';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

// Actually, I'll use a simple utility or just render the string. Since the description has markdown '**', I should handle it.
// For now, I will just render it as string and perhaps use a simple split or replace if needed, or better yet, I will update the translation file to not use markdown if I don't want to install a parser, OOOOR i will just render it as text.
// Let's stick to simple text for now to avoid compilation errors if react-markdown isn't installed.
// Wait, the prompt didn't ask to install new packages. I'll check if I need to parse the markdown.
// The description: 'Meu nome é **Vitor**...'
// I will just use a helper function to bold the text or just leave it as is for now.
// Better: I'll use a simple split to bold "Vitor".

const techStack = [
  { name: 'React.js', icon: Cpu },
  { name: 'TypeScript', icon: Code },
  { name: 'Next.js', icon: Terminal },
  { name: 'Tailwind CSS', icon: Layers },
  { name: 'Node.js', icon: Database },
  { name: 'Framer Motion', icon: Zap },
];

const Hero: React.FC = () => {
  const { t } = useLanguage();

  // Helper to parse simple bold markdown
  const renderDescription = (text: string) => {
    const parts = text.split('**');
    return parts.map((part, index) =>
      index % 2 === 1 ? <strong key={index}>{part}</strong> : part
    );
  };

  return (
    <section className="relative bg-void min-h-screen flex items-center pt-24 md:pt-32 pb-12 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(36,38,43,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(36,38,43,0.3)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#00AFFF" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left Content (Text) */}
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/10 text-electric text-xs md:text-sm font-semibold border border-electric/20 mx-auto lg:mx-0"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-electric"></span>
              </span>
              {t.hero.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight"
            >
              {t.hero.titleStart} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric via-white to-electric bg-[length:200%_auto] animate-shimmer">
                {t.hero.titleHighlight}
              </span> <br />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-xl text-chrome max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              {renderDescription(t.hero.description)}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start"
            >
              <a
                href="https://wa.me/5581985742015"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-electric text-void rounded-lg font-bold shadow-[0_0_20px_rgba(0,175,255,0.4)] overflow-hidden hover:scale-105 transition-transform active:scale-95"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="flex items-center justify-center gap-2">
                  {t.hero.ctaPrimary} <ArrowRight size={20} />
                </span>
              </a>
              <button
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-transparent text-white border border-steel rounded-lg font-bold hover:bg-anthracite hover:border-chrome transition-colors active:scale-95"
              >
                {t.hero.ctaSecondary}
              </button>
            </motion.div>
          </div>

          {/* Right Content (Photo/Visuals) */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-md aspect-[4/5] lg:aspect-[3/4]"
            >
              {/* Decorative Frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-electric via-transparent to-transparent opacity-30 rounded-3xl blur-xl" />
              <div className="absolute inset-0 border-2 border-steel bg-anthracite/50 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl">

                {/* Placeholder for Vitor's Photo */}
                <img
                  src="/imgH2.png"
                  alt="Vitor Developer"
                  className="w-full h-full object-cover transition-all duration-700 hover:grayscale-0"
                />

                {/* Floating Tech Badge 1 */}
                <div className="absolute top-6 left-6 bg-void/90 border border-steel backdrop-blur p-3 rounded-xl flex items-center gap-3 shadow-lg animate-float">
                  <div className="bg-electric/20 p-2 rounded-lg text-electric">
                    <Terminal size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider">{t.hero.techLabel}</div>
                    <div className="text-sm font-bold text-white">{t.hero.techRole}</div>
                  </div>
                </div>

                {/* Floating Tech Badge 2 */}
                <div className="absolute bottom-6 right-6 bg-void/90 border border-steel backdrop-blur p-4 rounded-xl shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-bold text-white">{t.hero.available}</span>
                  </div>
                  <div className="text-xs text-chrome">{t.hero.acceptingProjects}</div>
                </div>
              </div>

              {/* Background Geometric Elements */}
              <div className="absolute -z-10 -right-12 -bottom-12 w-48 h-48 bg-electric/10 rounded-full blur-3xl animate-pulse-glow" />
              <div className="absolute -z-10 -left-12 -top-12 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
            </motion.div>
          </div>

        </div>

        {/* Tech Stack Marquee Footer */}
        <div className="mt-20 border-t border-white/5 pt-8 overflow-hidden w-full">
          <p className="text-center text-xs text-gray-500 uppercase tracking-[0.3em] mb-8">{t.hero.techStack}</p>

          <div className="relative flex overflow-hidden group mask-image-gradient">
            {/* Gradient Masks for smooth fade out */}
            <div className="absolute z-10 left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-void to-transparent pointer-events-none" />
            <div className="absolute z-10 right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-void to-transparent pointer-events-none" />

            <div className="flex animate-scroll whitespace-nowrap gap-16 md:gap-24 hover:[animation-play-state:paused] min-w-full items-center">
              {/* First Loop */}
              {techStack.map((tech, index) => (
                <div key={`tech-1-${index}`} className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300">
                  <tech.icon size={24} className="text-white" />
                  <span className="text-lg md:text-xl font-bold text-white">{tech.name}</span>
                </div>
              ))}

              {/* Second Loop (Duplicate for seamless scroll) */}
              {techStack.map((tech, index) => (
                <div key={`tech-2-${index}`} className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300">
                  <tech.icon size={24} className="text-white" />
                  <span className="text-lg md:text-xl font-bold text-white">{tech.name}</span>
                </div>
              ))}

              {/* Third Loop (To ensure coverage on very wide screens) */}
              {techStack.map((tech, index) => (
                <div key={`tech-3-${index}`} className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300">
                  <tech.icon size={24} className="text-white" />
                  <span className="text-lg md:text-xl font-bold text-white">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
