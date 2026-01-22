import React from 'react';
import { Instagram, Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-chrome py-12 border-t border-steel">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
            
            {/* Brand */}
            <div>
                <div className="font-extrabold text-2xl tracking-tighter text-white mb-4">
                  Vitor<span className="text-electric">Dev</span>.
                </div>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                Eu construo máquinas de aquisição de clientes. Minha abordagem une design de alto impacto, performance obsessiva e uma arquitetura de conversão implacável.
                </p>
            </div>

            {/* Links */}
            <div>
                <h4 className="font-bold text-lg mb-4 text-white">Navegação</h4>
                <ul className="space-y-2 text-sm">
                    <li><a href="#services" className="hover:text-electric transition-colors">Soluções</a></li>
                    <li><a href="#portfolio" className="hover:text-electric transition-colors">Portfólio</a></li>
                    <li><a href="#testimonials" className="hover:text-electric transition-colors">Depoimentos</a></li>
                </ul>
            </div>

            {/* Social */}
            <div>
                <h4 className="font-bold text-lg mb-4 text-white">Contato</h4>
                <div className="flex space-x-4 mb-4">
                    <a href="https://www.instagram.com/dev.vitorcorreia/?hl=en" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-anthracite border border-steel flex items-center justify-center hover:border-electric hover:text-electric transition-all">
                        <Instagram size={20} />
                    </a>
                </div>
                <a href="https://wa.me/5581985742015" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm">
                    <Mail size={16} className="text-electric" /> Fale no WhatsApp
                </a>
            </div>
        </div>

        <div className="border-t border-steel pt-8 text-center text-xs text-gray-600">
            &copy; {new Date().getFullYear()} VitorDev. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
