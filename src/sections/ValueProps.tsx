import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap } from 'lucide-react';

export const ValueProps: React.FC = () => {
  const props = [
    {
      title: 'Rapidez na Entrega',
      desc: 'Sabemos que no mundo digital, cada segundo conta. Entregamos seu projeto com agilidade máxima sem abrir mão da qualidade.',
      icon: <Zap className="text-brand-highlight" size={32} />,
      color: 'from-brand-highlight/20 to-transparent'
    },
    {
      title: 'Confiança Total',
      desc: 'Transparência em cada etapa, suporte dedicado e compromisso com o resultado real do seu negócio.',
      icon: <ShieldCheck className="text-brand-primary" size={32} />,
      color: 'from-brand-primary/20 to-transparent'
    }
  ];

  return (
    <section id="diferenciais" className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {props.map((prop, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className={`p-8 rounded-3xl bg-gradient-to-br ${prop.color} border border-slate-800 flex items-start gap-6`}
          >
            <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
              {prop.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">{prop.title}</h3>
              <p className="text-slate-400 leading-relaxed">{prop.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
