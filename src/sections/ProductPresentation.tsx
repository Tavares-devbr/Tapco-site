import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export const ProductPresentation: React.FC = () => {
  return (
    <section id="apresentacao" className="py-20 px-6 bg-dark-bg">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            A Revolução do Networking
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Conheça o poder da tecnologia NFC aplicada ao seu negócio. Sofisticação, praticidade e impacto imediato em cada toque.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group max-w-4xl mx-auto"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-highlight rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
            <video
              src="/video-apresentacao.mp4"
              className="w-full h-auto block"
              controls
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
