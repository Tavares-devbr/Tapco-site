import React from 'react';
import { Button } from '../components/ui/Button';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full z-50 glass border-b border-slate-800 py-4 px-6 flex items-center justify-between backdrop-blur-md">
      <div className="flex items-center gap-3">
        <span className="text-2xl md:text-3xl font-bold tracking-tighter text-white">tapco<span className="text-brand-highlight">.brasil</span></span>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
        <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
        <a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais</a>
        <a href="#contato" className="hover:text-white transition-colors">Contato</a>
      </nav>
      <Button variant="outline" href="https://instagram.com/tapco.brasil" className="py-2 px-4 text-sm">
        Falar Conosco
      </Button>
    </header>
  );
};
