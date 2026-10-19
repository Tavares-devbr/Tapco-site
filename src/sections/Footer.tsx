import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';

export const Footer: React.FC = () => {
  return (
    <footer id="contato" className="py-20 px-6 bg-slate-950 border-t border-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Pronto para <span className="text-gradient">decolar?</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            Não deixe seu negócio para trás. Entre em contato agora via direct do Instagram e vamos construir seu império digital.
          </p>
          <Button
            variant="primary"
            href="https://instagram.com/tapco.brasil"
            className="text-xl px-10 py-5 flex mx-auto gap-3"
          >
            <span>📸</span>
            Chamar no Instagram
          </Button>
        </motion.div>

        <div className="mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2026 tapco.brasil - Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="https://instagram.com/tapco.brasil" className="hover:text-white transition-colors">Instagram</a>
            <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
