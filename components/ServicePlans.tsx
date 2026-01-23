import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const whatsappLink = "https://wa.me/5581985742015?text=Olá!%20Tenho%20interesse%20em%20uma%20landing%20page%20profissional.";

const InvestmentSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="investimento" className="py-20 md:py-32 bg-void relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold text-white tracking-tight text-center mb-6"
        >
          {t.servicePlans.title}
        </motion.h2>
        <p
          className="text-chrome text-base md:text-lg text-center mb-8"
          dangerouslySetInnerHTML={{ __html: t.servicePlans.description }}
        />
        <div className="flex flex-col items-center gap-4 mb-6">
          <div className="text-electric text-3xl md:text-4xl font-extrabold bg-anthracite rounded-full px-8 py-4 shadow-lg border border-electric mb-2">
            {t.servicePlans.price}
          </div>
        </div>
        <p className="text-chrome text-sm md:text-base text-center mb-8">
          {t.servicePlans.disclaimer}
        </p>
        <div className="flex justify-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-full font-bold bg-electric text-void text-lg shadow-lg hover:bg-electric/90 transition-all border-2 border-electric hover:scale-105"
          >
            {t.servicePlans.cta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
