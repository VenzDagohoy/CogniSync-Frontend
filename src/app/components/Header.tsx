import { motion, AnimatePresence } from 'motion/react';
import { Activity, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { useState, useEffect } from 'react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border px-6 py-4"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="p-2 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
              <Activity className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary tracking-tight">
                CogniSync
              </h1>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold mt-0.5">Digital Wellness Initiative</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
            <Link to="/" className={`transition-colors hover-nav-anim ${location.pathname === '/' ? 'text-primary font-bold' : 'hover:text-primary'}`}>Home</Link>
            <Link to="/the-issue" className={`transition-colors hover-nav-anim ${location.pathname === '/the-issue' ? 'text-primary font-bold' : 'hover:text-primary'}`}>The Issue</Link>
            <Link to="/ethics" className={`transition-colors hover-nav-anim ${location.pathname === '/ethics' ? 'text-primary font-bold' : 'hover:text-primary'}`}>Ethics</Link>
            <Link to="/prototype" className={`transition-colors hover-nav-anim ${location.pathname === '/prototype' ? 'text-primary font-bold' : 'hover:text-primary'}`}>The Prototype</Link>
            <Link to="/conclusion" className={`transition-colors hover-nav-anim ${location.pathname === '/conclusion' ? 'text-primary font-bold' : 'hover:text-primary'}`}>Conclusion</Link>
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => document.getElementById('cognisync-chatbot-trigger')?.click()}
              className="hidden md:block px-5 py-2.5 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full border border-border hover:bg-secondary/80 transition-all hover-btn-anim"
            >
              Chatbot
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-3xl pt-24 pb-6 px-6 md:hidden flex flex-col"
          >
            <nav className="flex flex-col gap-6 text-lg font-medium text-foreground mt-8">
              <Link to="/" className={`transition-colors hover-nav-anim w-fit ${location.pathname === '/' ? 'text-primary font-bold' : 'hover:text-primary'}`}>Home</Link>
              <Link to="/the-issue" className={`transition-colors hover-nav-anim w-fit ${location.pathname === '/the-issue' ? 'text-primary font-bold' : 'hover:text-primary'}`}>The Issue</Link>
              <Link to="/ethics" className={`transition-colors hover-nav-anim w-fit ${location.pathname === '/ethics' ? 'text-primary font-bold' : 'hover:text-primary'}`}>Ethics</Link>
              <Link to="/prototype" className={`transition-colors hover-nav-anim w-fit ${location.pathname === '/prototype' ? 'text-primary font-bold' : 'hover:text-primary'}`}>The Prototype</Link>
              <Link to="/conclusion" className={`transition-colors hover-nav-anim w-fit ${location.pathname === '/conclusion' ? 'text-primary font-bold' : 'hover:text-primary'}`}>Conclusion</Link>
            </nav>
            <div className="mt-auto mb-8">
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.getElementById('cognisync-chatbot-trigger')?.click();
                }}
                className="w-full py-4 bg-primary/10 text-primary font-semibold rounded-2xl border border-primary/20 hover:bg-primary/20 transition-all hover-btn-anim"
              >
                Open AI Chatbot
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
