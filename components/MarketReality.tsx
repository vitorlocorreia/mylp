
import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, XCircle, TrendingDown, Zap, ShieldCheck, ArrowUpRight, Ban } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const MarketReality: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section className="py-16 md:py-24 bg-void relative border-t border-steel/30">
            <div className="container mx-auto px-6">

                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-xs md:text-sm font-bold text-gray-500 tracking-[0.2em] uppercase mb-2">{t.marketReality.subtitle}</h2>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-white">
                        {t.marketReality.title} <span className="text-electric">{t.marketReality.titleHighlight}</span>
                    </h3>
                    <p className="mt-4 text-chrome max-w-2xl mx-auto text-sm md:text-base">
                        {t.marketReality.description}
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
                            <h4 className="text-lg md:text-xl font-bold text-gray-400">{t.marketReality.negative.title}</h4>
                        </div>

                        <ul className="space-y-6 relative z-10">
                            <li className="flex items-start gap-4">
                                <div className="mt-1 text-gray-600 shrink-0">
                                    <Ban size={20} />
                                </div>
                                <div>
                                    <h5 className="text-white font-semibold text-sm md:text-base">{t.marketReality.negative.item1Title}</h5>
                                    <p className="text-xs md:text-sm text-gray-500 mt-1">{t.marketReality.negative.item1Desc}</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 text-gray-600 shrink-0">
                                    <TrendingDown size={20} />
                                </div>
                                <div>
                                    <h5 className="text-white font-semibold text-sm md:text-base">{t.marketReality.negative.item2Title}</h5>
                                    <p className="text-xs md:text-sm text-gray-500 mt-1">{t.marketReality.negative.item2Desc}</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 text-gray-600 shrink-0">
                                    <XCircle size={20} />
                                </div>
                                <div>
                                    <h5 className="text-white font-semibold text-sm md:text-base">{t.marketReality.negative.item3Title}</h5>
                                    <p className="text-xs md:text-sm text-gray-500 mt-1">{t.marketReality.negative.item3Desc}</p>
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
                            <h4 className="text-lg md:text-xl font-bold text-white">{t.marketReality.positive.title}</h4>
                        </div>

                        <ul className="space-y-6 relative z-10">
                            <li className="flex items-start gap-4">
                                <div className="mt-1 text-electric drop-shadow-[0_0_8px_rgba(0,175,255,0.8)] shrink-0">
                                    <ArrowUpRight size={20} />
                                </div>
                                <div>
                                    <h5 className="text-white font-semibold text-sm md:text-base">{t.marketReality.positive.item1Title}</h5>
                                    <p className="text-xs md:text-sm text-chrome mt-1">{t.marketReality.positive.item1Desc}</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 text-electric drop-shadow-[0_0_8px_rgba(0,175,255,0.8)] shrink-0">
                                    <ShieldCheck size={20} />
                                </div>
                                <div>
                                    <h5 className="text-white font-semibold text-sm md:text-base">{t.marketReality.positive.item2Title}</h5>
                                    <p className="text-xs md:text-sm text-chrome mt-1">{t.marketReality.positive.item2Desc}</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 text-electric drop-shadow-[0_0_8px_rgba(0,175,255,0.8)] shrink-0">
                                    <Zap size={20} />
                                </div>
                                <div>
                                    <h5 className="text-white font-semibold text-sm md:text-base">{t.marketReality.positive.item3Title}</h5>
                                    <p className="text-xs md:text-sm text-chrome mt-1">{t.marketReality.positive.item3Desc}</p>
                                </div>
                            </li>
                        </ul>

                        <div className="mt-8 pt-6 border-t border-white/5">
                            <p className="text-xs text-center text-electric font-mono tracking-widest uppercase animate-pulse">
                                {t.marketReality.positive.status}
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default MarketReality;
