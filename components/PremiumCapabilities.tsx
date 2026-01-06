
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Layout, Smartphone, Search, TrendingUp, ShieldCheck } from 'lucide-react';

const PremiumCapabilities: React.FC = () => {
  return (
    <section id="capabilities" className="py-16 md:py-24 bg-void relative overflow-hidden">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(36,38,43,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(36,38,43,0.3)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 className="text-xs md:text-sm font-bold text-electric tracking-[0.2em] uppercase mb-3">Especificações Técnicas</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Engenharia Digital & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-white">Performance Comercial</span>
          </h3>
          <p className="mt-6 text-chrome text-base md:text-lg">
            É a união da estética de alto padrão com a engenharia da conversão, resultando em uma presença digital que não apenas impressiona, mas também converte.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* Card 1: Main Value Prop (Span 2 columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 row-span-2 bg-anthracite rounded-2xl p-6 md:p-8 border border-steel hover:border-electric/50 transition-colors group relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 p-32 bg-electric/5 rounded-full blur-[80px] group-hover:bg-electric/10 transition-colors pointer-events-none" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-lg bg-electric text-void flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,175,255,0.4)]">
                <Layout size={28} />
              </div>
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">Design de Autoridade</h4>
              <p className="text-chrome text-base md:text-lg leading-relaxed max-w-lg">
                Eu construo uma fortaleza visual para sua marca. Cada pixel é estrategicamente posicionado para comunicar autoridade, confiança e guiar seu cliente para a ação.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm font-medium text-white/80">
                <div className="flex items-center gap-2 px-3 py-1 bg-void rounded border border-steel">
                    <ShieldCheck size={14} className="text-electric" /> Autoridade Imediata
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-void rounded border border-steel">
                    <TrendingUp size={14} className="text-electric" /> Foco em ROI
                </div>
            </div>
          </motion.div>

          {/* Card 2: Performance (Speed) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-void rounded-2xl p-6 md:p-8 border border-steel hover:border-chrome/50 transition-colors flex flex-col justify-center relative overflow-hidden"
          >
             <div className="absolute -right-4 -top-4 text-[8rem] md:text-[10rem] font-black text-white/5 pointer-events-none select-none">99</div>
             <div className="w-10 h-10 rounded bg-anthracite border border-steel flex items-center justify-center mb-4 text-electric">
                <Zap size={24} />
             </div>
             <h4 className="text-xl font-bold text-white mb-2">Velocidade da Luz</h4>
             <p className="text-chrome text-sm">
                A velocidade é um dos pilares do sucesso digital. Seu site carregará em um piscar de olhos, garantindo a satisfação do usuário e a preferência do Google.
             </p>
          </motion.div>

          {/* Card 3: Mobile (Responsive) */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="bg-void rounded-2xl p-6 md:p-8 border border-steel hover:border-chrome/50 transition-colors flex flex-col justify-center"
          >
             <div className="w-10 h-10 rounded bg-anthracite border border-steel flex items-center justify-center mb-4 text-electric">
                <Smartphone size={24} />
             </div>
             <h4 className="text-xl font-bold text-white mb-2">Onipresença Digital</h4>
             <p className="text-chrome text-sm">
             Seja impecável em qualquer dispositivo. Do smartphone ao desktop de alta resolução, sua marca estará sempre pronta para impressionar e converter.
             </p>
          </motion.div>

          {/* Card 4: SEO & Sales (Full width bottom) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-3 bg-gradient-to-r from-anthracite to-void rounded-2xl p-6 md:p-8 border border-steel flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
            
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center relative z-10">
                <div className="p-3 bg-electric/10 rounded-full text-electric border border-electric/20 animate-pulse-glow">
                    <Search size={32} />
                </div>
                <div>
                    <h4 className="text-xl font-bold text-white">Fundação para o Domínio e Vendas Ininterruptas</h4>
                    <p className="text-chrome max-w-xl text-sm mt-1">
                        Eu construo a base para o seu domínio nos buscadores, enquanto sua nova máquina de vendas opera 24/7, sem descanso.
                    </p>
                </div>
            </div>

            <div className="relative z-10 flex gap-4 w-full md:w-auto">
                <div className="flex-1 md:flex-none text-center px-4 py-2 bg-void rounded border border-steel">
                    <span className="block text-xl font-bold text-white">24<span className="text-electric text-sm">h</span></span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider">Disponibilidade</span>
                </div>
                <div className="flex-1 md:flex-none text-center px-4 py-2 bg-void rounded border border-steel">
                    <span className="block text-xl font-bold text-white">100<span className="text-electric text-sm">%</span></span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider">Nota SEO</span>
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PremiumCapabilities;
