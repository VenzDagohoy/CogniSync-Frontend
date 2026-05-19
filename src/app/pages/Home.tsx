import { motion } from 'motion/react';
import { ArrowRight, Shield, Globe, Database } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen font-sans bg-background text-foreground">
      {/* Hero Section */}
      <section className="bg-[#2a2e2b] text-[#eae8e1] pt-32 pb-24 px-6 sm:px-12 flex flex-col items-center">
        <div className="max-w-5xl mx-auto text-left w-full space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif font-bold text-[#8a9c8f] leading-[1.1] max-w-4xl"
          >
            Addressing Philippine Student Tech Addiction Through Web-Based Generative AI Intervention.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-[#d4d0c9] max-w-3xl leading-relaxed"
          >
            CogniSync is a specialized web-based digital wellness coach, providing localized support to help
            users manage compulsive digital device usage. Empowering students with cognitive tools and
            standardized digital detox strategies.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <Link 
              to="/the-issue"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#eae8e1] text-[#2a2e2b] font-semibold rounded-md hover:bg-[#d4d0c9] transition-colors hover-btn-anim"
            >
              Explore the Problem <ArrowRight className="w-4 h-4" />
            </Link>
            <button 
              onClick={() => document.getElementById('cognisync-chatbot-trigger')?.click()}
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-[#5c7064] text-[#eae8e1] font-semibold rounded-md hover:bg-[#3b423e] transition-colors hover-btn-anim"
            >
              <Shield className="w-4 h-4" /> Try the Wellness Coach
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-background py-20 px-6 sm:px-12 border-b border-border">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h2 className="text-6xl md:text-7xl font-serif font-bold text-foreground tracking-tight">
              81<span className="text-[#5c7064] text-5xl">%</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base font-medium leading-relaxed">
              Report Experiencing Digital Stress and<br/>
              FOMO (Elhai et al., 2020)
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-3"
          >
            <h2 className="text-6xl md:text-7xl font-serif font-bold text-foreground tracking-tight">
              65<span className="text-[#5c7064] text-5xl">%</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base font-medium leading-relaxed">
              Experience Severe Sleep Deprivation Due to<br/>
              Late-Night Scrolling (Giray et al., 2024)
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-3"
          >
            <h2 className="text-6xl md:text-7xl font-serif font-bold text-foreground tracking-tight">
              78<span className="text-[#5c7064] text-5xl">%</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base font-medium leading-relaxed">
              Report Declining Academic Engagement<br/>
              (Lacsa, 2025)
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted py-24 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              A Specialized Web-Based Intervention
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              CogniSync addresses the problem of tech addiction through generalized cognitive strategies (source: Montag et al., 2021).<br className="hidden md:block"/>
              A conceptual prototype demonstrating how Retrieval-Augmented Generation (RAG) and CBT-Lite prompts can safely help<br className="hidden md:block"/>
              students build resilience. Not a automated content filter, but a guided digital wellness coach.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 rounded-2xl overflow-hidden shadow-sm"
            >
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1651129520737-7137123b7611?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjBoZWFsdGglMjBhcHAlMjBkYXNoYm9hcmQlMjB1aSUyMG1vYmlsZSUyMHBob25lfGVufDF8fHx8MTc3NTc4MDcxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Conceptual Prototype Interface" 
                className="w-full h-auto object-cover object-center rounded-2xl"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-4"
            >
              {[
                {
                  icon: <Shield className="w-5 h-5 text-[#5c7064]" />,
                  title: "Mental-Focused Wellness",
                  desc: "Addressing the mental urge to use tech (dependency, FOMO). Built with mental wellness guardrails.",
                  bgColor: "bg-[#e8e4de]"
                },
                {
                  icon: <Globe className="w-5 h-5 text-[#ab5e53]" />,
                  title: "Localized AI Context",
                  desc: "Grounded in a curated database of Philippine mental health research (2020-2026). Supports English, Tagalog, Taglish, Bisaya tone.",
                  bgColor: "bg-[#f2f0ea]"
                },
                {
                  icon: <Database className="w-5 h-5 text-[#5c7064]" />,
                  title: "RAG-Based Standardized Intervention",
                  desc: "Uses Retrieval-Augmented Generation for evidence-based CBT-Lite prompts and action plans.",
                  bgColor: "bg-[#e8e4de]"
                }
              ].map((card, idx) => (
                <div key={idx} className="flex gap-4 p-6 bg-card rounded-2xl shadow-sm border border-border hover-card-anim">
                  <div className={`w-10 h-10 shrink-0 rounded-full ${card.bgColor} flex items-center justify-center mt-1`}>
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-card-foreground text-[15px] mb-1">{card.title}</h3>
                    <p className="text-muted-foreground text-[13px] leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
