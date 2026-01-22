import React from 'react';
import { motion } from 'framer-motion';
import { Code2, PenTool, Coffee } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-void">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative order-2 md:order-1"
          >
            <div className="relative aspect-square max-w-md mx-auto group">
                <div className="absolute inset-0 bg-anthracite rounded-3xl rotate-6 border border-steel transition-transform group-hover:rotate-12" />
                <div className="absolute inset-0 bg-steel/30 rounded-3xl -rotate-3 border border-white/5 transition-transform group-hover:-rotate-6" />
                
                {/* PLACEHOLDER IMAGE: 600x600px */}
                <img 
                    src="/imgA.jpeg" 
                    alt="Vitor Portrait" 
                    className="relative w-full h-full object-cover rounded-3xl shadow-2xl transition-all duration-500 border border-steel hover:grayscale-0"
                />
                
                
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-6 order-1 md:order-2"
          >
            <h2 className="text-xs md:text-sm font-bold text-electric tracking-[0.2em] uppercase">Quem é o Vitor?</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white">Do design ao código, projetos feitos para durar.</h3>
            
            <p className="text-chrome leading-relaxed text-base md:text-lg">
            Olá! Sou o Vitor, desenvolvedor front-end e parceiro estratégico para o seu negócio. Minha missão é desenvolver cada detalhe do seu projeto para refletir a essência da sua marca e engajar seu público, garantindo um resultado final de alta performance.
            </p>

            <div className="grid grid-cols-3 gap-3 md:gap-4 pt-4 md:pt-6">
                <div className="text-center p-3 md:p-4 rounded-lg bg-anthracite border border-steel hover:border-electric transition-colors group">
                    <Code2 className="w-6 h-6 md:w-8 md:h-8 text-chrome group-hover:text-electric mx-auto mb-2 transition-colors" />
                    <span className="font-semibold text-white block text-xs md:text-sm">Alta Performance</span>
                </div>
                <div className="text-center p-3 md:p-4 rounded-lg bg-anthracite border border-steel hover:border-electric transition-colors group">
                    <PenTool className="w-6 h-6 md:w-8 md:h-8 text-chrome group-hover:text-electric mx-auto mb-2 transition-colors" />
                    <span className="font-semibold text-white block text-xs md:text-sm">Design Focado em Conversão</span>
                </div>
                <div className="text-center p-3 md:p-4 rounded-lg bg-anthracite border border-steel hover:border-electric transition-colors group">
                    <Coffee className="w-6 h-6 md:w-8 md:h-8 text-chrome group-hover:text-electric mx-auto mb-2 transition-colors" />
                    <span className="font-semibold text-white block text-xs md:text-sm">Atenção aos Detalhes</span>
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
