
import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, XCircle, TrendingDown, Zap, ShieldCheck, ArrowUpRight, Ban } from 'lucide-react';

const MarketReality: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-void relative border-t border-steel/30">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xs md:text-sm font-bold text-gray-500 tracking-[0.2em] uppercase mb-2">Análise de Cenário</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">
            O Custo da <span className="text-electric">Invisibilidade</span>
          </h3>
          <p className="mt-4 text-chrome max-w-2xl mx-auto text-sm md:text-base">
          No cenário digital de hoje, a ausência de uma página profissional não é um mero detalhe - é uma sentença de irrelevância e prejuízo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-stretch relative">
          
          {/* VS Badge Absolute Centered (Desktop) */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-void border border-steel rounded-full w-16 h-16 items-center justify-center font-black text-white text-xl shadow-[0_0_30px_rgba(0,0,0,0.8)]">
            VS
          </div>

          {/* Negative Side: The Problem */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative p-6 md:p-8 rounded-2xl bg-[#0F0F10] border border-steel/50 overflow-hidden"
          >
            {/* Background Noise for 'Glitch' effect */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none"></div>
            
            <div className="flex items-center gap-3 mb-6 md:mb-8 opacity-70">
                <div className="p-2 bg-red-500/10 rounded text-red-500 border border-red-500/20">
                    <AlertTriangle size={24} />
                </div>
                <h4 className="text-lg md:text-xl font-bold text-gray-400">O Abismo Digital do Amadorismo</h4>
            </div>

            <ul className="space-y-6 relative z-10">
                <li className="flex items-start gap-4">
                    <div className="mt-1 text-gray-600 shrink-0">
                        <Ban size={20} />
                    </div>
                    <div>
                        <h5 className="text-white font-semibold text-sm md:text-base">ROI Negativo: O Cemitério de Ads</h5>
                        <p className="text-xs md:text-sm text-gray-500 mt-1">Direcionar anúncios para redes sociais é como tentar encher um balde furado. Você atrai curiosos, mas as vendas escorrem pelos vãos. Seu investimento se torna pó.</p>
                    </div>
                </li>
                <li className="flex items-start gap-4">
                    <div className="mt-1 text-gray-600 shrink-0">
                        <TrendingDown size={20} />
                    </div>
                    <div>
                        <h5 className="text-white font-semibold text-sm md:text-base">Commoditização: A Batalha pelo Centavo</h5>
                        <p className="text-xs md:text-sm text-gray-500 mt-1">Sem um diferencial claro, sua marca se torna apenas mais uma na multidão, forçada a competir no campo minado do preço baixo, onde a margem de lucro é a primeira vítima.</p>
                    </div>
                </li>
                <li className="flex items-start gap-4">
                    <div className="mt-1 text-gray-600 shrink-0">
                        <XCircle size={20} />
                    </div>
                    <div>
                        <h5 className="text-white font-semibold text-sm md:text-base">O Ciclo Vicioso do Atendimento Manual</h5>
                        <p className="text-xs md:text-sm text-gray-500 mt-1">Você se torna um gargalo para o próprio negócio, preso em um ciclo de repetir as mesmas informações para leads desqualificados, enquanto as oportunidades reais esfriam e desaparecem.</p>
                    </div>
                </li>
            </ul>
          </motion.div>

          {/* Positive Side: The Solution */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-6 md:p-8 rounded-2xl bg-anthracite border border-electric/30 shadow-[0_0_50px_-15px_rgba(0,175,255,0.15)] overflow-hidden"
          >
             {/* Glowing gradient background */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-electric/5 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

            <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="p-2 bg-electric/10 rounded text-electric border border-electric/20 shadow-[0_0_15px_rgba(0,175,255,0.2)]">
                    <Zap size={24} className="fill-electric" />
                </div>
                <h4 className="text-lg md:text-xl font-bold text-white">Arsenal de Alta Conversão</h4>
            </div>

            <ul className="space-y-6 relative z-10">
                <li className="flex items-start gap-4">
                    <div className="mt-1 text-electric drop-shadow-[0_0_8px_rgba(0,175,255,0.8)] shrink-0">
                        <ArrowUpRight size={20} />
                    </div>
                    <div>
                        <h5 className="text-white font-semibold text-sm md:text-base">Qualificação e Vendas no Piloto Automático</h5>
                        <p className="text-xs md:text-sm text-chrome mt-1">A página que eu construo é um filtro inteligente, separando os curiosos dos compradores sérios. Ela educa, qualifica e prepara o lead, entregando a você apenas as oportunidades mais quentes.</p>
                    </div>
                </li>
                <li className="flex items-start gap-4">
                    <div className="mt-1 text-electric drop-shadow-[0_0_8px_rgba(0,175,255,0.8)] shrink-0">
                        <ShieldCheck size={20} />
                    </div>
                    <div>
                        <h5 className="text-white font-semibold text-sm md:text-base">Posicionamento de Elite e Margens Elevadas</h5>
                        <p className="text-xs md:text-sm text-chrome mt-1">Através de um design de alto padrão, sua marca é instantaneamente percebida como líder de mercado. Isso não apenas atrai clientes de maior calibre, mas justifica e sustenta preços premium, blindando suas margens de lucro.</p>
                    </div>
                </li>
                <li className="flex items-start gap-4">
                    <div className="mt-1 text-electric drop-shadow-[0_0_8px_rgba(0,175,255,0.8)] shrink-0">
                        <Zap size={20} />
                    </div>
                    <div>
                        <h5 className="text-white font-semibold text-sm md:text-base">A Tríade da Conversão: Design, Copy e Velocidade</h5>
                        <p className="text-xs md:text-sm text-chrome mt-1">É a sinergia perfeita entre um design que seduz, um texto que convence e uma velocidade que impressiona. Cada elemento é meticulosamente orquestrado para um único fim: maximizar sua receita.</p>
                    </div>
                </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-white/5">
                <p className="text-xs text-center text-electric font-mono tracking-widest uppercase animate-pulse">
                    /// Status do Sistema: Otimizado para Crescimento
                </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MarketReality;
