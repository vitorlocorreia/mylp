import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Zap, Smartphone, Search } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 1,
    title: 'Design Atraente',
    description: 'Crio uma experiência visual única que captura a atenção e fortalece a sua marca.',
    icon: Layout,
  },
  {
    id: 2,
    title: 'Alta Performance',
    description: 'Seu site será incrivelmente rápido, uma performance que o Google e seus clientes valorizam.',
    icon: Zap,
  },
  {
    id: 3,
    title: 'Design Responsivo',
    description: 'Seu negócio bem apresentado em todas as telas. Garanto uma navegação fluida e profissional.',
    icon: Smartphone,
  },
  {
    id: 4,
    title: 'Base Otimizada para SEO',
    description: 'Construo seu site sobre uma base sólida de SEO, preparando o terreno para que você seja encontrado no Google.',
    icon: Search,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-void relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-sm font-bold text-electric tracking-[0.2em] uppercase mb-2">Capabilities</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">Vantagens que Colocam Você à Frente</h3>
          <p className="mt-4 text-chrome">
          Cada recurso é pensado para garantir que seu negócio tenha destaque no ambiente digital.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group p-8 rounded-xl bg-anthracite border border-steel hover:border-electric/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_-5px_rgba(0,175,255,0.15)]"
            >
              <div className="w-14 h-14 rounded-lg bg-steel flex items-center justify-center mb-6 group-hover:bg-electric group-hover:text-void transition-colors duration-300">
                <service.icon size={28} className="text-electric group-hover:text-void" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
              <p className="text-chrome leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;