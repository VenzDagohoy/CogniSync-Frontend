import { motion } from 'motion/react';
import { Cpu, ShieldCheck, Database, Layers, Shield } from 'lucide-react';

export function PrototypePage() {
  return (
    <div className="pt-28 pb-24 px-6 sm:px-12 bg-background min-h-screen text-foreground">
      <div className="max-w-4xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
            <Cpu className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            How The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary">Prototype</span> Works
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Understanding the system architecture, chatbot constraints, and non-personalized logic that drives CogniSync.
          </p>
          <div className="pt-4 flex justify-center">
            <button 
              onClick={() => document.getElementById('cognisync-chatbot-trigger')?.click()}
              className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border border-border text-foreground font-medium rounded-lg hover:bg-card transition-colors shadow-sm"
            >
              <Shield className="w-5 h-5" /> Try the Wellness Coach
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Box 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-card border border-border shadow-sm"
          >
            <div className="mb-6">
              <Layers className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-4">React.js Frontend & Mobile Optimized</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The platform is a web-based <strong className="text-primary">React.js</strong> application optimized for mobile browser use, featuring a high-performance, responsive chat interface with clean UI elements and page transitions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Deployment is handled via <strong>Vercel</strong> for frontend hosting and edge functions.
            </p>
          </motion.div>

          {/* Box 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-card border border-border shadow-sm"
          >
            <div className="mb-6">
              <ShieldCheck className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-4">Strict Guardrails & AI Engine</h3>
            <p className="text-muted-foreground leading-relaxed">
              Powered by the <strong className="text-primary">llama-3.3-70b-versatile</strong> model via Groq, the AI acts with a "Digital Wellness" persona. It strictly enforces Philippine domain limitations, answering only tech addiction queries and refusing medical diagnoses or academic tutoring. User inputs in Taglish are understood, but all AI responses are formulated strictly in professional English.
            </p>
          </motion.div>

          {/* Box 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-card border border-border shadow-sm md:col-span-2 flex flex-col md:flex-row items-center gap-8"
          >
            <div className="flex-shrink-0">
              <Database className="w-12 h-12 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Python FastAPI Backend & RAG Intervention Logic</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The backend utilizes <strong className="text-primary">Python FastAPI</strong> to handle asynchronous requests with low latency. 
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Intervention logic is driven by <strong>Retrieval-Augmented Generation (RAG)</strong> using a curated database of Philippine mental health research (2020–2026), ensuring all advice is 100% private, non-personalized, and culturally grounded.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
