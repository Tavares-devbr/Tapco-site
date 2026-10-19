import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden text-center">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-primary/20 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-brand-highlight/10 blur-[100px] rounded-full -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-highlight text-xs font-bold uppercase tracking-wider mb-6">
          <Zap size={14} /> Digital Performance
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
          Presença Digital na <br />
          <span className="text-gradient">Velocidade da Luz</span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Criamos sites de alta conversão, cartões NFC inovadores e gestão de Google Perfil para empresas que não podem perder tempo.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" href="https://instagram.com/tapco.brasil" className="w-full sm:w-auto text-lg px-8 py-4">
            Quero Escalar Meu Negócio ⚡
          </Button>
          <Button variant="outline" href="#servicos" className="w-full sm:w-auto text-lg px-8 py-4">
            Ver Serviços
          </Button>
        </div>
      </motion.div>
    </section>
  );
};
