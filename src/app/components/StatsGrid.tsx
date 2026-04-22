import { motion } from 'motion/react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const areaData = [
  { time: '6 AM', fatigue: 20 },
  { time: '9 AM', fatigue: 45 },
  { time: '12 PM', fatigue: 60 },
  { time: '3 PM', fatigue: 80 },
  { time: '6 PM', fatigue: 95 },
  { time: '9 PM', fatigue: 85 },
  { time: '12 AM', fatigue: 70 },
];

const barData = [
  { hobby: 'Basketball (Liga)', impact: 85 },
  { hobby: 'Board Games / Sungka', impact: 75 },
  { hobby: 'Cycling / Running', impact: 90 },
  { hobby: 'Family Dinner (No Tech)', impact: 95 },
];

export function StatsGrid() {
  return (
    <section className="py-24 px-6 sm:px-12 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Backed by <span className="text-primary">Local Research</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Interventions are designed around the latest studies on digital burnout among Filipino students, inspired by researchers like Elhai et al., Buctot et al., and Kemp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Chart 1: Digital Burnout over the day */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 md:p-8 rounded-3xl bg-card border border-border shadow-sm hover-card-anim"
          >
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-card-foreground">Average Student Cognitive Fatigue</h3>
              <p className="text-sm text-muted-foreground mt-1">Simulated data: Tracking mental exhaustion throughout a typical module-heavy day.</p>
            </div>
            
            <div className="w-full h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={areaData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs key="defs">
                    <linearGradient id="colorFatigueGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#5c7064" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#5c7064" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid key="grid" strokeDasharray="3 3" stroke="#e8e4de" vertical={false} />
                  <XAxis key="xaxis" dataKey="time" stroke="#8a9c8f" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis key="yaxis" stroke="#8a9c8f" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    key="tooltip"
                    contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e8e4de', borderRadius: '8px', color: '#2d312e' }}
                    itemStyle={{ color: '#5c7064' }}
                  />
                  <Area key="area" isAnimationActive={false} type="monotone" dataKey="fatigue" stroke="#5c7064" strokeWidth={3} fillOpacity={1} fill="url(#colorFatigueGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Chart 2: Analog Hobbies Impact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 md:p-8 rounded-3xl bg-card border border-border shadow-sm hover-card-anim"
          >
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-card-foreground">Analog Exit Strategies Impact</h3>
              <p className="text-sm text-muted-foreground mt-1">Efficacy of traditional Philippine activities in reducing screen-time anxiety.</p>
            </div>
            
            <div className="w-full h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData} layout="vertical" margin={{ top: 10, right: 30, left: 20, bottom: 0 }}>
                  <CartesianGrid key="grid" strokeDasharray="3 3" stroke="#e8e4de" horizontal={false} />
                  <XAxis key="xaxis" type="number" stroke="#8a9c8f" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis key="yaxis" dataKey="hobby" type="category" stroke="#8a9c8f" fontSize={12} tickLine={false} axisLine={false} width={130} />
                  <Tooltip 
                    key="tooltip"
                    cursor={{fill: '#f2f0ea'}}
                    contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e8e4de', borderRadius: '8px', color: '#2d312e' }}
                    itemStyle={{ color: '#ab5e53' }}
                  />
                  <Bar key="bar" isAnimationActive={false} dataKey="impact" fill="#ab5e53" radius={[0, 4, 4, 0]} barSize={24} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
