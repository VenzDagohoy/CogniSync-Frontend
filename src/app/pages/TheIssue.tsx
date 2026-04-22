import { motion } from 'motion/react';
import { StatsGrid } from '../components/StatsGrid';
import { BookOpen, AlertTriangle, Brain, Globe } from 'lucide-react';

export function TheIssue() {
  return (
    <div className="pt-24 pb-16 px-6 sm:px-12 bg-background min-h-screen text-foreground">
      <div className="max-w-4xl mx-auto space-y-16">
        
        <header className="text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4"
          >
            <BookOpen className="w-8 h-8 text-primary" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Digital Addiction in the <span className="text-primary">Philippines</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Understanding the unique landscape of digital burnout and tech dependency among Filipino students through peer-reviewed research and national data.
          </motion.p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-card rounded-3xl border border-border space-y-4 shadow-sm"
          >
            <Globe className="w-6 h-6 text-chart-2" />
            <h3 className="text-xl font-semibold text-card-foreground">The Social Media Capital</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              According to Simon Kemp's DataReportal reports, the Philippines consistently ranks among the top countries globally for average daily time spent online. Filipino internet users spend roughly 10 hours and 27 minutes on the internet daily, with over 4 hours dedicated solely to social media—a staggering statistic that sets the stage for widespread digital fatigue.
            </p>
            <div className="pt-4 border-t border-border">
              <span className="text-xs text-muted-foreground italic">Citation: Kemp, S. (2024). Digital 2024: The Philippines. DataReportal.</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 bg-card rounded-3xl border border-border space-y-4 shadow-sm"
          >
            <Brain className="w-6 h-6 text-chart-3" />
            <h3 className="text-xl font-semibold text-card-foreground">Psychological Toll & FOMO</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Research by Elhai et al. (2020) and Giray et al. (2024) has established strong correlations between problematic smartphone use, "fear of missing out" (FOMO), and elevated levels of depression and anxiety severity. For Filipino students navigating a highly social yet digitized culture, this dependency exacerbates academic pressure and social comparison, leading to diminished self-esteem (Lacsa, 2025).
            </p>
            <div className="pt-4 border-t border-border">
              <span className="text-xs text-muted-foreground italic">Citation: Elhai, J. D., et al. (2020). Depression and anxiety symptoms are related to problematic smartphone use severity in Chinese young adults: Fear of missing out as a mediator. Addictive Behaviors.</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-card rounded-3xl border border-border space-y-4 md:col-span-2 shadow-sm"
          >
            <AlertTriangle className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold text-card-foreground">Local Impact on Students & Academic Performance</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              A pivotal study by Buctot et al. (2020) focused specifically on the Filipino youth demographic. It revealed that excessive internet and gaming addiction directly correlates with poorer sleep quality, degraded interpersonal relationships offline, and diminished academic performance. Recent surveys by Giray et al. (2024) further corroborate that late-night screen time depletes cognitive resources, drastically increasing the likelihood of academic neglect and chronic psychological exhaustion among university students.
            </p>
            <div className="pt-4 border-t border-border">
              <span className="text-xs text-muted-foreground italic block mb-1">Citation 1: Buctot, D. B., et al. (2020). Factors associated with smartphone addiction prevalence... Children and Youth Services Review.</span>
              <span className="text-xs text-muted-foreground italic block">Citation 2: Giray, L., et al. (2024). A survey on digital device engagement, digital stress... International Journal of Adolescence and Youth.</span>
            </div>
          </motion.div>
        </section>
      </div>

      <div className="-mx-6 sm:-mx-12 mt-12">
        <StatsGrid />
      </div>
    </div>
  );
}