import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Helmet } from 'react-helmet-async';
import { 
  Send, 
  MessageCircle, 
  User, 
  Mail, 
  Phone, 
  FileText,
  Zap,
  ArrowLeft,
  CheckCircle2,
  Loader2,
  Briefcase
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Contato() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    servico: '',
    mensagem: ''
  });

  const whatsappNumber = "5581989967923";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { nome, email, telefone, servico, mensagem } = formData;
    
    const texto = `Olá Cassio! 👋

*Novo contato pelo site:*

📌 *Nome:* ${nome}
📧 *E-mail:* ${email}
📱 *Telefone:* ${telefone}
🎯 *Serviço de interesse:* ${servico || 'Não especificado'}

💬 *Mensagem:*
${mensagem || 'Não informada'}`;

    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(texto)}`;
    
    // Abre o WhatsApp em nova aba
    window.open(url, "_blank");
    
    // Redireciona para página de obrigado
    setTimeout(() => {
      navigate(createPageUrl('Obrigado'));
    }, 500);
  };

  return (
    <>
      <Helmet>
        <title>Contato - Cassio Tráfego Pago | Solicite uma Consultoria Gratuita</title>
        <meta 
          name="description" 
          content="Entre em contato com Cassio para uma consultoria gratuita sobre tráfego pago. Especialista em Facebook Ads, Instagram Ads e Google Ads. Atendimento rápido via WhatsApp." 
        />
        <meta name="keywords" content="contato tráfego pago, consultoria gratuita, orçamento Facebook Ads, orçamento Google Ads, contato especialista anúncios" />
        <link rel="canonical" href={window.location.origin + createPageUrl('Contato')} />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Header Simples */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to={createPageUrl('Home')} className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg text-slate-900">
                Cassio <span className="text-blue-500">Tráfego</span>
              </span>
            </Link>
            <Link 
              to={createPageUrl('Home')}
              className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Info Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                Contato
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-6">
                Vamos conversar sobre{' '}
                <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  seu projeto
                </span>
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Preencha o formulário ao lado com suas informações e, em seguida, 
                você será redirecionado para conversar comigo diretamente pelo WhatsApp.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Atendimento rápido
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Respondo todas as mensagens em até 24 horas úteis
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Sem compromisso
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Primeira conversa é totalmente gratuita e sem compromisso
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefícios do Contato */}
              <div className="mt-10 p-6 bg-gradient-to-br from-blue-50 to-violet-50 rounded-2xl border border-blue-100">
                <h3 className="font-semibold text-slate-900 text-lg mb-3">
                  Por que entrar em contato?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Análise gratuita do seu negócio</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Estratégia personalizada de tráfego pago</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Projeção de resultados baseada em dados</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="nome" className="text-slate-700 font-medium">
                      Seu nome *
                    </Label>
                    <div className="relative mt-2">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <Input
                        id="nome"
                        name="nome"
                        type="text"
                        required
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder="Como gostaria de ser chamado?"
                        className="pl-12 h-12 bg-slate-50 border-slate-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-slate-700 font-medium">
                      E-mail *
                    </Label>
                    <div className="relative mt-2">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        className="pl-12 h-12 bg-slate-50 border-slate-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="telefone" className="text-slate-700 font-medium">
                      WhatsApp *
                    </Label>
                    <div className="relative mt-2">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <Input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        required
                        value={formData.telefone}
                        onChange={handleChange}
                        placeholder="(00) 00000-0000"
                        className="pl-12 h-12 bg-slate-50 border-slate-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="servico" className="text-slate-700 font-medium">
                      Serviço de interesse *
                    </Label>
                    <div className="relative mt-2">
                      <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 z-10" />
                      <Select
                        value={formData.servico}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, servico: value }))}
                        required
                      >
                        <SelectTrigger className="pl-12 h-12 bg-slate-50 border-slate-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl">
                          <SelectValue placeholder="Selecione o serviço desejado" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Gestão de Campanhas">Gestão de Campanhas de Tráfego Pago</SelectItem>
                          <SelectItem value="Otimização e ROI">Otimização e ROI</SelectItem>
                          <SelectItem value="Consultoria Estratégica">Consultoria Estratégica</SelectItem>
                          <SelectItem value="Não sei ainda">Ainda não sei qual serviço preciso</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="mensagem" className="text-slate-700 font-medium">
                      Mensagem
                    </Label>
                    <div className="relative mt-2">
                      <FileText className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                      <Textarea
                        id="mensagem"
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        placeholder="Conte um pouco sobre seu negócio e objetivos..."
                        rows={4}
                        className="pl-12 pt-3 bg-slate-50 border-slate-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl resize-none"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-semibold rounded-xl text-lg shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Enviar e Abrir WhatsApp
                      </>
                    )}
                  </Button>

                  <p className="text-center text-sm text-slate-500">
                    Após enviar, você será redirecionado para conversar comigo no WhatsApp.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Footer Simples */}
      <footer className="bg-white border-t border-slate-100 py-8">
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