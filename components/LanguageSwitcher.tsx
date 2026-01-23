import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ReactCountryFlag from "react-country-flag";

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const languages = [
        { code: 'pt', label: 'Português', countryCode: 'BR' },
        { code: 'en', label: 'English', countryCode: 'US' },
    ];

    const currentLanguage = languages.find((lang) => lang.code === language);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-sm font-medium text-chrome hover:text-white group"
                title={language === 'pt' ? 'Alterar idioma' : 'Change language'}
            >
                <ReactCountryFlag
                    countryCode={currentLanguage?.countryCode}
                    svg
                    style={{
                        width: '1.5em',
                        height: '1.5em',
                    }}
                />
                <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} text-chrome group-hover:text-electric`}
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 mt-2 w-48 bg-anthracite border border-steel/50 rounded-xl shadow-2xl overflow-hidden z-50 backdrop-blur-xl"
                    >
                        <div className="py-1">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => {
                                        setLanguage(lang.code as 'pt' | 'en');
                                        setIsOpen(false);
                                    }}
                                    className={`w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-white/5 transition-colors ${language === lang.code ? 'bg-electric/10 text-electric' : 'text-chrome'
                                        }`}
                                >
                                    <ReactCountryFlag
                                        countryCode={lang.countryCode}
                                        svg
                                        style={{
                                            width: '1.5em',
                                            height: '1.5em',
                                        }}
                                    />
                                    <span className="text-sm font-medium">{lang.label}</span>
                                    {language === lang.code && (
                                        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-electric shadow-[0_0_8px_#00AFFF]" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default LanguageSwitcher;
