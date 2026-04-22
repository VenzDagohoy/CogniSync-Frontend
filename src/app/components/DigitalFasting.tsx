import { useState } from 'react';
import { motion } from 'motion/react';
import { Clock, Calendar, Moon, Coffee, Sunrise, Battery } from 'lucide-react';

interface FastPreset {
  id: string;
  name: string;
  duration: number; // in minutes
  icon: React.ReactNode;
  description: string;
}

const presets: FastPreset[] = [
  {
    id: 'power-hour',
    name: 'Power Hour',
    duration: 60,
    icon: <Coffee className="w-5 h-5" />,
    description: 'Focus session para sa module work',
  },
  {
    id: 'afternoon-break',
    name: 'Afternoon Break',
    duration: 180,
    icon: <Sunrise className="w-5 h-5" />,
    description: 'Hapon disconnect, after lunch hanggang merienda',
  },
  {
    id: 'evening-rest',
    name: 'Evening Rest',
    duration: 300,
    icon: <Moon className="w-5 h-5" />,
    description: 'Gabi na, time to disconnect before tulog',
  },
  {
    id: 'full-recharge',
    name: 'Full Recharge',
    duration: 480,
    icon: <Battery className="w-5 h-5" />,
    description: '8-hour reset para sa weekend',
  },
];

export function DigitalFasting() {
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);
  const [isActive, setIsActive] = useState(false);

  const handleStartFast = () => {
    if (!selectedPreset) return;
    setIsActive(true);
  };

  const formatDuration = (minutes: number) => {
    if (minutes < 60) return `${minutes}min`;
    const hours = Math.floor(minutes / 60);
    return `${hours}h`;
  };

  return (
    <section className="min-h-screen bg-slate-950 py-20 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-xs font-medium tracking-widest mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>DIGITAL FASTING</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 tracking-tight">
            Schedule Your<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">
              Soft Disconnect
            </span>
          </h1>

          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Guided digital breaks designed for Filipino students. Choose a preset below para mag-pause from screens.
          </p>
        </motion.div>

        {/* Presets Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 space-y-4"
        >
          <h2 className="text-sm font-semibold text-slate-500 tracking-wider uppercase mb-6">
            Select Duration
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {presets.map((preset, idx) => (
              <motion.button
                key={preset.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + idx * 0.05 }}
                onClick={() => setSelectedPreset(preset.id)}
                disabled={isActive}
                className={`
                  group relative p-6 text-left rounded-2xl border transition-all duration-300 hover-card-anim
                  ${
                    selectedPreset === preset.id
                      ? 'bg-teal-500/10 border-teal-500 shadow-[0_0_20px_rgba(20,184,166,0.3)]'
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                  }
                  ${isActive ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                `}
              >
                <div className="flex items-start justify-between mb-3">
                  <div
                    className={`
                      p-2.5 rounded-xl transition-colors
                      ${
                        selectedPreset === preset.id
                          ? 'bg-teal-500 text-slate-950'
                          : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700'
                      }
                    `}
                  >
                    {preset.icon}
                  </div>
                  <span
                    className={`
                      text-2xl font-bold transition-colors
                      ${selectedPreset === preset.id ? 'text-teal-400' : 'text-slate-400 group-hover:text-slate-300'}
                    `}
                  >
                    {formatDuration(preset.duration)}
                  </span>
                </div>

                <h3
                  className={`
                    text-lg font-semibold mb-1.5 transition-colors
                    ${selectedPreset === preset.id ? 'text-teal-50' : 'text-slate-200 group-hover:text-slate-100'}
                  `}
                >
                  {preset.name}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed">
                  {preset.description}
                </p>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-20"
        >
          <button
            onClick={handleStartFast}
            disabled={!selectedPreset || isActive}
            className={`
              px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover-btn-anim
              ${
                !selectedPreset || isActive
                  ? 'bg-slate-800 text-slate-600 cursor-not-allowed'
                  : 'bg-teal-500 text-slate-950 hover:bg-teal-400 hover:shadow-[0_0_30px_rgba(20,184,166,0.4)]'
              }
            `}
          >
            {isActive ? 'Fast Active' : 'Start Digital Fast'}
          </button>
        </motion.div>

        {/* Why It Works */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="pt-16 border-t border-slate-800 space-y-8"
        >
          <h2 className="text-2xl font-bold text-slate-200 mb-8">
            Why Digital Fasting Works
          </h2>

          <div className="space-y-6">
            {[
              {
                title: 'Breaks the Dopamine Loop',
                desc: 'Every notif hit triggers dopamine. Structured breaks help reset your brain reward system.',
              },
              {
                title: 'Reduces Cognitive Fatigue',
                desc: 'Research by Elhai et al. shows that constant smartphone use increases mental exhaustion. Disconnecting restores focus.',
              },
              {
                title: 'Combats FOMO Anxiety',
                desc: 'Scheduled fasts help you realize: the GC drama, TikTok trends, and IG stories will still be there later.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex gap-4 items-start"
              >
                <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-teal-400 mt-2.5" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-200 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
