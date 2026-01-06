import React from "react";
import { motion } from "framer-motion";

const whatsappLink = "https://wa.me/5581985742015?text=Olá!%20Tenho%20interesse%20em%20uma%20landing%20page%20profissional.";

const InvestmentSection: React.FC = () => {
  return (
    <section id="investimento" className="py-20 md:py-32 bg-void relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold text-white tracking-tight text-center mb-6"
        >
          Invista na Presença Digital do Seu Negócio
        </motion.h2>
        <p className="text-chrome text-base md:text-lg text-center mb-8">
          O desenvolvimento da sua landing page profissional começa <span className="text-electric font-bold">a partir de R$ 499</span>. Esse valor inicial inclui design responsivo, hospedagem gratuita via Vercel e um CTA de contato para gerar oportunidades reais para o seu negócio.
        </p>
        <div className="flex flex-col items-center gap-4 mb-6">
          <div className="text-electric text-3xl md:text-4xl font-extrabold bg-anthracite rounded-full px-8 py-4 shadow-lg border border-electric mb-2">
            A partir de R$ 499
          </div>
        </div>
        <p className="text-chrome text-sm md:text-base text-center mb-8">
          O valor final pode variar conforme o escopo do projeto, quantidade de páginas, copy personalizada, integrações e funcionalidades extras. Solicite um orçamento sem compromisso e receba uma proposta sob medida para o seu objetivo.
        </p>
        <div className="flex justify-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-full font-bold bg-electric text-void text-lg shadow-lg hover:bg-electric/90 transition-all border-2 border-electric hover:scale-105"
          >
            Solicitar Orçamento no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
