import { motion } from 'motion/react';
import { ShieldCheck, Eye, AlertTriangle, BookOpen, Lock, Scale, HeartHandshake } from 'lucide-react';

export function EthicsPage() {
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
            <Scale className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            System & <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary">Design Ethics</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            At CogniSync, we believe that digital wellness tools must be built on a foundation of trust, transparency, and clinical responsibility. Here is our commitment to you.
          </p>
        </motion.div>

        {/* Core Principles */}
        <div className="grid md:grid-cols-2 gap-6">
          <EthicsCard 
            icon={<Lock className="w-6 h-6 text-primary" />}
            title="Data Privacy First"
            description="Our floating AI chatbot operates strictly on a non-personalized basis. We do not store conversational logs, personal identifiers, or behavioral tracking data. Your interventions are ephemeral by design to protect your mental health journey."
            delay={0.1}
          />
          <EthicsCard 
            icon={<ShieldCheck className="w-6 h-6 text-chart-2" />}
            title="Safe RAG Architecture"
            description="The underlying system utilizes a live Python FastAPI backend with Retrieval-Augmented Generation (RAG). The Llama-3.1 model only references validated CBT-Lite principles from our secured local vector database, preventing hallucinated psychological advice."
            delay={0.2}
          />
          <EthicsCard 
            icon={<HeartHandshake className="w-6 h-6 text-primary" />}
            title="Cultural Relevance"
            description="We designed CogniSync specifically for Filipino high school and college students. The system understands conversational Taglish, but formulates all responses strictly in professional English, while suggesting localized analog hobbies to ensure culturally grounded advice."
            delay={0.3}
          />
          <EthicsCard 
            icon={<AlertTriangle className="w-6 h-6 text-chart-4" />}
            title="Clinical Boundaries"
            description="CogniSync provides CBT-Lite interventions—structured exercises for mild tech addiction and burnout. It is not a diagnostic tool and will never replace professional therapy. We actively provide crisis hotlines when severe distress is detected."
            delay={0.4}
          />
        </div>

        {/* Detailed Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 p-8 rounded-3xl bg-card border border-border backdrop-blur-md space-y-6 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
            <Eye className="w-6 h-6 text-primary" />
            Transparency Note
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              <strong>Current State (FastAPI Integrated):</strong> We have successfully bypassed initial Supabase edge function deployment errors by directly integrating our chatbot logic with a local Python FastAPI backend and Groq's Llama-3.1 API. 
            </p>
            <p>
              The AI chatbot now actively routes requests through this RAG-enabled backend. The AI model is constrained by strict guardrails that reject queries outside the scope of digital fasting, screen-time management, and analog hobby discovery.
            </p>
            <p>
              By keeping the intelligence scoped and bypassing centralized tracking databases entirely, we protect Filipino students from surveillance capitalism and unintended psychological harm.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

function EthicsCard({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) {
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
