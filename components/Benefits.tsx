import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, MousePointer2, Clock } from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-anthracite relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-1/2 -right-64 w-[500px] h-[500px] bg-electric/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">O que esperar de um projeto <span className="text-electric">Premium?</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-void p-8 rounded-xl border border-steel hover:border-chrome/30 transition-colors"
            >
                <div className="w-12 h-12 bg-anthracite rounded-lg flex items-center justify-center mb-6 text-electric border border-steel">
                    <TrendingUp size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Foco em Conversão</h3>
                <p className="text-chrome">
                Com um design estratégico, sua nova página é focada em transformar visitantes em clientes.
                </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-electric p-8 rounded-xl shadow-[0_0_40px_-10px_rgba(0,175,255,0.3)] border border-electric/50 transform md:-translate-y-6"
            >
                <div className="w-12 h-12 bg-black/20 rounded-lg flex items-center justify-center mb-6 text-white">
                    <MousePointer2 size={24} />
                </div>
                <h3 className="text-2xl font-bold text-void mb-4">Percepção de Valor</h3>
                <p className="text-void/80 font-medium">
                Um visual premium posiciona sua marca no topo. Seus clientes sentirão a qualidade do que você oferece.
                </p>
            </motion.div>

             {/* Card 3 */}
             <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-void p-8 rounded-xl border border-steel hover:border-chrome/30 transition-colors"
            >
                <div className="w-12 h-12 bg-anthracite rounded-lg flex items-center justify-center mb-6 text-electric border border-steel">
                    <Clock size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Captação de Leads</h3>
                <p className="text-chrome">
                Sua nova página pode capturar leads 24/7, para que você possa focar no crescimento do seu negócio.
                </p>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;