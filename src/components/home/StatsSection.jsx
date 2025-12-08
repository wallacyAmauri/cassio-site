import React from 'react';
import { motion } from 'framer-motion';
import CountUp from '../animations/CountUp';

export default function StatsSection() {
  const stats = [
    { value: "+56", label: "Clientes atendidos no Brasil", numValue: "56" },
    { value: "+R$2Mi", label: "Gerenciados em anúncios", numValue: "R$2M+" },
    { value: "+R$4Mi", label: "De vendas geradas para nossos parceiros", numValue: "R$4M+" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-[#0a1628] to-[#1a3a5c] relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent mb-3">
                <CountUp end={stat.numValue} duration={2.5} />
              </div>
              <div className="text-slate-300 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}