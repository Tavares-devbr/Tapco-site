import React from 'react';
import { motion } from 'framer-motion';
import { Globe, CreditCard, MapPin } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const Services: React.FC = () => {
  const services = [
    {
      title: 'Criação de Sites',
      desc: 'Landing pages e sites institucionais otimizados para conversão, ultra rápidos e responsivos para qualquer dispositivo.',
      icon: <Globe className="text-brand-highlight" size={32} />,
      feature: 'Foco em ROI e Conversão'
    },
    {
      title: 'Cards NFC',
      desc: 'O fim dos cartões de visita de papel. Troque contatos, links e redes sociais com apenas um toque no celular do cliente.',
      icon: <CreditCard className="text-brand-primary" size={32} />,
      feature: 'Tecnologia Touch-and-Go'
    },
    {
      title: 'Gestão de Google Perfil',
      desc: 'Colocamos sua empresa no mapa. Otimizamos seu perfil no Google para atrair mais clientes locais organicamente.',
      icon: <MapPin className="text-brand-highlight" size={32} />,
      feature: 'Visibilidade Local Máxima'
    }
  ];

  return (
    <section id="servicos" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Soluções Digitais de Elite</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Tudo o que sua empresa precisa para dominar o mercado digital, do primeiro clique à fidelização do cliente.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <div className="mb-6 p-3 w-fit rounded-xl bg-slate-900 border border-slate-800">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-slate-400 mb-6 flex-grow leading-relaxed">{s.desc}</p>
                <div className="mb-6 py-2 px-3 rounded-lg bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider inline-block">
                  {s.feature}
                </div>
                <Button variant="outline" href="https://instagram.com/tapco.brasil" className="w-full">
                  Saber Mais
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
