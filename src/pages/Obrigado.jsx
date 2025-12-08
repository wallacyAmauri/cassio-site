import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  Home, 
  MessageCircle,
  Zap,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function Obrigado() {
  const whatsappNumber = "5581989967923";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent("Olá Cassio! Acabei de preencher o formulário no site.")}`;

  return (
    <>
      <Helmet>
        <title>Obrigado pelo Contato - Cassio Tráfego Pago</title>
        <meta 
          name="description" 
          content="Obrigado por entrar em contato! Em breve Cassio retornará pelo WhatsApp para conversar sobre suas estratégias de tráfego pago." 
        />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={window.location.origin + createPageUrl('Obrigado')} />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-violet-50 flex flex-col">
        {/* Header Simples */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16 md:h-20">
            <Link to={createPageUrl('Home')} className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg text-slate-900">
                Cassio <span className="text-blue-500">Tráfego</span>
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg w-full"
        >
          <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 p-8 md:p-12 text-center">
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30"
            >
              <CheckCircle className="w-12 h-12 text-white" />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            >
              Obrigado pelo{' '}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                contato!
              </span>
            </motion.h1>

            {/* Message */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-slate-600 text-lg mb-8 leading-relaxed"
            >
              Sua mensagem foi enviada com sucesso! Em breve Cassio retornará 
              para você pelo WhatsApp.
            </motion.p>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-slate-50 rounded-2xl p-6 mb-8"
            >
              <p className="text-slate-600 text-sm">
                Se preferir, você também pode iniciar a conversa diretamente 
                pelo WhatsApp clicando no botão abaixo.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-emerald-500/25"
              >
                <MessageCircle className="w-5 h-5" />
                Conversar no WhatsApp
              </a>
              
              <Link to={createPageUrl('Home')}>
                <Button
                  variant="outline"
                  className="w-full h-14 rounded-xl border-slate-200 hover:bg-slate-50 text-slate-700"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Voltar para a Página Inicial
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Extra CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-center"
          >
            <p className="text-slate-500 text-sm mb-3">
              Enquanto aguarda, que tal conhecer mais sobre os serviços?
            </p>
            <Link 
              to={createPageUrl('Home') + '#servicos'}
              className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              Ver serviços
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-slate-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Cassio – Todos os direitos reservados.
          </p>
        </div>
      </footer>
      </div>
      </>
      );
      }