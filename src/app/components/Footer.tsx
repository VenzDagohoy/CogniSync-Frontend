import { ShieldCheck, Mail, Phone, Heart } from 'lucide-react';
import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary tracking-tight">
              CogniSync
            </span>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            A mental-focused digital wellness coach designed for Filipino high school and college students to help combat tech addiction and digital burnout. Our system is completely non-personalized to protect student privacy.
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground border border-primary/20 bg-primary/10 px-3 py-1.5 rounded-md inline-flex">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>Not a replacement for professional therapy.</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">Resources</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/ethics" className="hover:text-primary transition-colors">System & Design Ethics</Link></li>
            <li><Link to="/the-issue" className="hover:text-primary transition-colors">The Issue</Link></li>
            <li><Link to="/prototype" className="hover:text-primary transition-colors">The Prototype</Link></li>
            <li><Link to="/conclusion" className="hover:text-primary transition-colors">Project Conclusion</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-destructive mb-4">Urgent Help (PH)</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-destructive" />
              <span>NCMH: <strong className="text-foreground">0917-899-USAP</strong></span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-destructive" />
              <span>Hopeline: <strong className="text-foreground">0917-558-4673</strong></span>
            </li>
            <li className="flex items-center gap-2 mt-4 text-xs italic">
              Available 24/7. Your life matters.
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-border text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} CogniSync. Built for student well-being.
      </div>
    </footer>
  );
}
