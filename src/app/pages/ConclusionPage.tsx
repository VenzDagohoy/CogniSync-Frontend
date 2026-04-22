import { motion } from 'motion/react';
import { Target, Lightbulb, TrendingUp, Flag } from 'lucide-react';

export function ConclusionPage() {
  return (
    <div className="pt-28 pb-20 px-6 min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-4">
            <Flag className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Project <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary">Conclusion</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Reflecting on the journey of building CogniSync and our mission to help Filipino students find balance in an increasingly digital world.
          </p>
        </motion.div>

        {/* Key Takeaways */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2">Key Takeaways</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <TakeawayCard 
              icon={<Target className="w-6 h-6 text-primary" />}
              title="Cultural Nuance Matters"
              description="A one-size-fits-all approach to digital wellness doesn't work. By understanding Taglish user inputs and suggesting local analog hobbies (like playing sungka or OPM guitar) in professional English, interventions remain accessible yet authoritative."
              delay={0.1}
            />
            <TakeawayCard 
              icon={<Lightbulb className="w-6 h-6 text-chart-4" />}
              title="CBT-Lite Efficacy"
              description="Simplifying Cognitive Behavioral Therapy into bite-sized, chat-based interactions removes the friction of starting therapy, offering an accessible bridge for students who are experiencing digital burnout."
              delay={0.2}
            />
            <TakeawayCard 
              icon={<TrendingUp className="w-6 h-6 text-chart-2" />}
              title="Ethical AI Boundaries"
              description="We learned that placing strict RAG constraints ensures safety. The system prevents hallucinated diagnoses by enforcing non-personalized interactions, prioritizing student mental health over data harvesting."
              delay={0.3}
            />
          </div>
        </div>

        {/* Future Scope */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 p-8 rounded-3xl bg-card border border-border backdrop-blur-md space-y-6 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-card-foreground">The Road Ahead</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              By deploying the Python FastAPI backend and Llama-3.1-8B RAG pipeline to Vercel's cloud infrastructure, the prototype has transitioned from local testing to a live, integrated web service. This deployment demonstrates a fully functional end-to-end CBT-Lite chatbot, accessible via a production-grade cloud environment.
            </p>
            <p>
              <strong>Upcoming Technical Goals:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-2 text-foreground/80">
              <li>Continuo to refine the system prompt engineering to ensure even stricter adherence to digital wellness guardrails and analog hobby suggestions.</li>
            </ul>
            <p className="mt-4 pt-4 border-t border-border">
              CogniSync is more than just an app; it's an initiative. Thank you for exploring our digital wellness solution.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

function TakeawayCard({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="p-6 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all group backdrop-blur-sm shadow-sm"
    >
      <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-card-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}