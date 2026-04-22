import { motion } from 'motion/react';
import { Brain, SmartphoneNfc, ShieldCheck } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center py-24 overflow-hidden bg-slate-950 px-6 sm:px-12">
      {/* Background Graphic */}
      <div className="absolute inset-0 w-full h-full opacity-30 mix-blend-screen pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950 z-10" />
        <img
          src="https://images.unsplash.com/photo-1739343338040-2dae68f6bdf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjB0ZWNobm9sb2d5JTIwY3lhbnxlbnwxfHx8fDE3NzU2NDI3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Abstract background"
          className="w-full h-full object-cover blur-sm scale-110"
        />
      </div>

      <div className="relative z-20 max-w-5xl mx-auto flex flex-col items-center text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 font-medium tracking-widest text-sm mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>DIGITAL WELLNESS INITIATIVE</span>
          </div>
          
          <h1 className="text-5xl md:text-[5.5rem] font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Regain your focus.<br/>
            <span className="text-[#00E5FF] tracking-tighter drop-shadow-sm">
              Conquer Digital Addiction.
            </span>
          </h1>
          
          <p className="text-lg md:text-[1.3rem] text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
            CogniSync is a non-personalized, mental-focused digital wellness coach<br className="hidden md:block" /> designed for Filipino high school and college students. Reclaim your analog<br className="hidden md:block" /> life, combat digital addiction, and rediscover balance safely.
          </p>
        </motion.div>

        {/* Feature Cards - Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {[
            {
              icon: <Brain className="w-8 h-8 text-teal-400 mb-4" />,
              title: "CBT-Lite Interventions",
              desc: "Guided cognitive reframing to break the cycle of tech addiction using relatable Taglish approaches.",
            },
            {
              icon: <SmartphoneNfc className="w-8 h-8 text-cyan-400 mb-4" />,
              title: "Combat Nomophobia",
              desc: "Actionable 'Soft Disconnects' and structured digital fasting customized for students.",
            },
            {
              icon: <ShieldCheck className="w-8 h-8 text-emerald-400 mb-4" />,
              title: "Private & Standardized",
              desc: "100% non-personalized interventions grounded in PH research to protect student privacy. We don't track your behavior.",
            }
          ].map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
              className="p-8 rounded-2xl bg-slate-900/40 backdrop-blur-md border border-slate-800/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-slate-800/60 hover:border-teal-500/30 transition-all duration-300 group text-left hover-card-anim"
            >
              {card.icon}
              <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-teal-300 transition-colors">
                {card.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}