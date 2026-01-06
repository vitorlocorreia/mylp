import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PortfolioItem } from '../types';
import { ExternalLink, ArrowRight, Monitor, Smartphone, Layers } from 'lucide-react';
import desktopImg1 from '@/assets/desktop.png';
import mobileImg1 from '@/assets/mobile.png';
import desktopImg2 from '@/assets/desktop2.png';
import mobileImg2 from '@/assets/mobile2.png';
import desktopImg3 from '@/assets/desktop3.png';
import mobileImg3 from '@/assets/mobile3.png';

const projects: PortfolioItem[] = [
  {
    id: 1,
    title: 'Miguel Correia',
    category: 'Landing Page Pessoal',
    description: 'Uma landing page desenvolvida para o treinador pessoal Miguel Correia, focada em conversão de visitantes em clientes. O design moderno e responsivo destaca seus serviços de treinamento físico, depoimentos de clientes satisfeitos. Ideal para profissionais que desejam fortalecer sua presença online e atrair mais clientes.',
    // PLACEHOLDERS: Desktop ~16:10 aspect ratio, Mobile ~9:19 aspect ratio
    desktopImg: desktopImg1,
    mobileImg: mobileImg1,
    link: 'https://miguelcorreiatreinador.vercel.app/',
  },
  {
    id: 2,
    title: 'LP BASE DE DENTISTAS',
    category: 'Serviços de Saúde',
    description: 'Em um mercado competitivo, a confiança é um diferencial. Esta landing page foi projetada para transmitir profissionalismo e acolhimento, utilizando um design limpo, prova social e chamadas para ação eficazes para transformar visitantes em pacientes agendados.',
    desktopImg: desktopImg2,
    mobileImg: mobileImg2,
    link: 'https://lpdentista-ikdq2a3bi-vitorlocorreias-projects.vercel.app',
  },
  {
    id: 3,
  title: 'LP BASE DE ADVOGADOS',
    category: 'Serviços Jurídicos',
    description: 'Sobriedade e autoridade são essenciais no universo jurídico. Para este projeto, o desafio foi traduzir esses valores em uma experiência digital que converte. Cada elemento, da paleta de cores à disposição dos depoimentos, foi pensado para gerar credibilidade e, consequentemente, clientes.',
    desktopImg: desktopImg3,
    mobileImg: mobileImg3,
    link: 'https://lpadv.vercel.app',
  },
];

interface ProjectCardProps {
  project: PortfolioItem;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isEven = index % 2 === 0;
  
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-20 mb-20 md:mb-32`}
    >
      {/* Project Info */}
      <div className="w-full lg:w-5/12 space-y-6 md:space-y-8 z-10">
        <div className="flex items-center gap-3">
            <div className="h-px w-8 md:w-12 bg-electric"></div>
            <span className="text-electric font-bold tracking-widest text-xs md:text-sm uppercase">{project.category}</span>
        </div>
        
        <h3 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
          {project.title}
        </h3>
        
        <p className="text-chrome text-base md:text-lg leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
            <div className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-anthracite rounded-full text-xs md:text-sm text-chrome border border-steel">
                <Monitor size={14} className="text-white"/> Desktop
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-anthracite rounded-full text-xs md:text-sm text-chrome border border-steel">
                <Smartphone size={14} className="text-white"/> Mobile
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-anthracite rounded-full text-xs md:text-sm text-chrome border border-steel">
                <Layers size={14} className="text-white"/> UI/UX
            </div>
        </div>

        <div className="pt-4 md:pt-6">
            <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-white font-bold text-base md:text-lg hover:text-electric transition-colors"
            >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-steel flex items-center justify-center group-hover:bg-electric group-hover:text-void transition-all group-hover:scale-110">
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
                Ver Projeto Online
            </a>
        </div>
      </div>

      {/* Interactive Mockups Area */}
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        initial="rest"
        whileHover="hover"
        className="w-full lg:w-7/12 relative perspective-1000 group cursor-pointer"
        onClick={() => window.open(project.link, '_blank')}
      >
        <div className="relative transform-style-3d transition-transform duration-200 ease-out">
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-electric/20 blur-[60px] md:blur-[100px] rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Desktop Mockup */}
            <div className="relative z-10 w-full bg-void rounded-xl border border-steel shadow-2xl overflow-hidden group-hover:border-electric/50 transition-colors duration-500">
                {/* Browser Header */}
                <div className="h-6 md:h-8 bg-anthracite border-b border-steel flex items-center px-4 gap-2">
                    <div className="flex gap-1.5">
                        <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-steel" />
                        <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-steel" />
                        <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-steel" />
                    </div>
                    <div className="ml-4 flex-1 h-4 md:h-5 bg-black/50 rounded flex items-center px-3 border border-white/5">
                        <span className="text-[8px] md:text-[10px] text-gray-500 font-mono truncate">{project.link}</span>
                    </div>
                </div>
                
                {/* Image Area - Static */}
                <div className={`w-full overflow-hidden bg-white/5 relative ${project.id !== 1 ? 'aspect-[16/10]' : ''}`}>
                    <motion.img 
                        src={project.desktopImg} 
                        alt="Desktop View" 
                        className={`w-full opacity-90 ${project.id === 1 ? '' : 'h-full object-cover'}`}
                        variants={{
                          rest: { scale: 1 },
                          hover: { scale: 1.05, transition: { duration: 4, ease: "easeInOut" } }
                        }}
                    />
                    
                     {/* Tap hint for mobile */}
                    <div className="absolute inset-0 flex items-center justify-center lg:hidden opacity-0 group-active:opacity-100 transition-opacity bg-black/20 pointer-events-none">
                        <span className="text-white text-xs font-bold px-3 py-1 bg-black/50 rounded-full backdrop-blur-sm">Toque para visitar</span>
                    </div>
                </div>
            </div>

            {/* Mobile Mockup */}
            <motion.div 
                className={`absolute -bottom-4 md:-bottom-8 -right-2 md:-right-8 w-[25%] md:w-[28%] z-20`}
                animate={{ 
                  y: [0, -12, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{ transform: "translateZ(50px)" }}
            >
                <div className="relative bg-void rounded-[1rem] md:rounded-[2rem] border-[2px] md:border-[4px] border-anthracite shadow-2xl overflow-hidden ring-1 ring-steel">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-3 md:h-5 bg-anthracite rounded-b-lg md:rounded-b-xl z-20" />
                    
                    {/* Screen */}
                    <div className="w-full aspect-[9/19] bg-white/5 overflow-hidden">
                        <img 
                            src={project.mobileImg} 
                            alt="Mobile View" 
                            className={`w-full h-full object-cover opacity-90`}
                        />
                    </div>
                </div>
            </motion.div>

        </div>
      </motion.div>
    </motion.div>
  );
};

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-void relative overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric/20 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full border border-electric/30 bg-electric/10 text-electric text-xs font-bold tracking-widest uppercase"
          >
            Projetos Selecionados
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white tracking-tight"
          >
            Resultados Visíveis em Cada Projeto
          </motion.h2>
          <p className="text-chrome max-w-2xl mx-auto text-base md:text-lg">
          Estes não são apenas sites. São projetos de design e desenvolvimento, desenhados para transformar cliques em resultados.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-12 md:mt-20 text-center">
            <a 
                href="https://wa.me/5581985742015"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-transparent text-white border border-steel rounded-full font-bold hover:bg-electric hover:text-void hover:border-electric transition-all shadow-[0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_30px_rgba(0,175,255,0.4)] text-sm md:text-base"
            >
                Gostou do que viu? Fale comigo
                <ArrowRight size={18} />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;