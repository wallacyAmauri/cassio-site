import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function ProcessSection({ onContactClick }) {
  return (
    <section className="py-12 sm:py-16 lg:py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="relative bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#2563eb] rounded-3xl p-8 sm:p-10 lg:p-12 overflow-hidden min-h-[500px] flex items-center justify-center shadow-2xl">
                {/* Glow effect */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-white/20 rounded-full blur-3xl" />

                {/* Main Image Container with Logos */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative w-48 h-auto sm:w-56 lg:w-64">
                    {/* Meta Logo - Esquerda */}
                    <motion.div 
                      className="absolute top-1/3 -left-16 sm:-left-20 lg:-left-24 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 opacity-70 blur-sm"
                      animate={{ 
                        y: [0, -15, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936de2cdf46248c9f7703bd/eea921d4b_META-removebg-preview.png" alt="" className="w-full h-full object-contain" />
                    </motion.div>

                    {/* Google Ads Logo - Direita */}
                    <motion.div 
                      className="absolute top-1/3 -right-16 sm:-right-20 lg:-right-24 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 opacity-70 blur-sm"
                      animate={{ 
                        y: [0, 15, 0],
                        scale: [1, 1.15, 1]
                      }}
                      transition={{ 
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                    >
                      <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936de2cdf46248c9f7703bd/b02302fee_ads-removebg-preview.png" alt="" className="w-full h-full object-contain" />
                    </motion.div>

                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936de2cdf46248c9f7703bd/4c1471a56_photo-1507003211169-0a1dd7228f2d-removebg-preview.png" 
                      alt="Cassio" 
                      className="w-full h-auto relative z-10"
                      style={{ filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.5))' }}
                    />
                  </div>

                  <div className="mt-4 text-center">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Cassio</h3>
                    <p className="text-emerald-400 font-semibold text-sm sm:text-base">Especialista em Tráfego Pago</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-emerald-600 font-bold text-sm uppercase tracking-wider">
              O que fazemos
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-3 mb-4 sm:mb-6">
              Vamos nos conhecer e{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                impulsionar seu negócio!
              </span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Em uma reunião <span className="font-bold text-emerald-600">100% gratuita</span>, 
              entenderemos suas metas, público-alvo e concorrência. Juntos, criaremos a estratégia 
              perfeita para aumentar o faturamento da sua empresa.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              Marque uma chamada de vídeo de qualquer lugar. Nossa abordagem é totalmente 
              personalizada e focada em entregar resultados reais para o seu negócio.
            </p>

            <button
              onClick={onContactClick}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold rounded-full hover:shadow-xl hover:shadow-emerald-500/30 transition-all text-sm sm:text-base min-h-[48px]"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar Reunião Gratuita
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}