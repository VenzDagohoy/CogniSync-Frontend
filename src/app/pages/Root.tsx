import { Outlet, ScrollRestoration } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FloatingChatBot } from '../components/FloatingChatBot';

export function Root() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 font-sans flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingChatBot />
      <ScrollRestoration />
    </div>
  );
}
