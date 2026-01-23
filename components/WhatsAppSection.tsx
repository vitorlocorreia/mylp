
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const WhatsAppSection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="whatsapp" className="py-16 md:py-20 bg-void relative overflow-hidden border-t border-steel">
      {/* Abstract Background Shapes */}
      <div className="absolute left-0 bottom-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,175,255,0.05),transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            {t.whatsappSection.title}
          </h2>
          <p className="text-chrome text-base md:text-lg mb-8 md:mb-10">
            {t.whatsappSection.description}
          </p>

          <a
            href="https://wa.me/5581985742015" // Replace with real number
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-electric text-void px-6 py-4 md:px-8 md:py-5 rounded-lg font-bold text-lg shadow-[0_0_30px_rgba(0,175,255,0.3)] hover:shadow-[0_0_50px_rgba(0,175,255,0.6)] hover:bg-white hover:text-void transform hover:-translate-y-1 transition-all duration-300 w-full md:w-auto justify-center"
          >
            <MessageCircle size={28} className="fill-current" />
            {t.whatsappSection.cta}
          </a>

          <p className="mt-6 text-xs md:text-sm text-steel">
            {t.whatsappSection.note}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatsAppSection;
