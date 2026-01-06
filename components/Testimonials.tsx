
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TestimonialItem } from '../types';

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: 'Ricardo Silva',
    role: 'CEO, TechStart',
    content: 'A landing page superou todas as expectativas. O design é incrível e nossa taxa de conversão dobrou no primeiro mês. Profissionalismo puro.',
    // PLACEHOLDER: 150x150
    avatarUrl: 'https://placehold.co/150x150/151518/00AFFF?text=RS&font=inter',
  },
  {
    id: 2,
    name: 'Amanda Costa',
    role: 'Marketing, BeautyCo',
    content: 'Processo rápido, comunicação clara e um resultado final impecável. Ele entendeu exatamente a essência da nossa marca.',
    avatarUrl: 'https://placehold.co/150x150/151518/00AFFF?text=AC&font=inter',
  },
  {
    id: 3,
    name: 'Lucas Mendes',
    role: 'Infoprodutor',
    content: 'Precisava de uma página de alta conversão para meu lançamento e o resultado foi fantástico. Recomendo de olhos fechados!',
    avatarUrl: 'https://placehold.co/150x150/151518/00AFFF?text=LM&font=inter',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-anthracite">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">A Prova Social de Quem Já Atingiu o Próximo Nível</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-void p-6 md:p-8 rounded-xl shadow-lg border border-steel relative group hover:border-chrome/50 transition-colors"
            >
              <div className="absolute top-6 right-8 text-steel group-hover:text-electric/50 transition-colors">
                <Quote size={40} />
              </div>
              
              <p className="text-chrome mb-6 relative z-10 leading-relaxed italic text-sm md:text-base">
                "{item.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                    src={item.avatarUrl} 
                    alt={item.name} 
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-steel grayscale group-hover:grayscale-0 transition-all" 
                />
                <div>
                    <h4 className="font-bold text-white text-sm">{item.name}</h4>
                    <span className="text-xs text-electric/80 uppercase tracking-wide">{item.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
