import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
// import ProcessSection from '../components/home/ProcessSection';
import ContactSection from '../components/home/ContactSection';
import StatsSection from '../components/home/StatsSection';
import TestimonialCarousel from '../components/home/TestimonialCarousel';
import CountUp from '../components/animations/CountUp';
import TypeWriter from '../components/animations/TypeWriter';
import ScrollProgress from '../components/animations/ScrollProgress';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowRight, 
  Target, 
  TrendingUp, 
  LineChart, 
  Users, 
  CheckCircle2,
  Star,
  MessageCircle,
  ChevronRight,
  BarChart3,
  Zap,
  Award,
  Phone,
  Mail,
  Instagram,
  Linkedin,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const whatsappNumber = "5581989967923";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent("Olá Cassio! Gostaria de saber mais sobre seus serviços de tráfego pago.")}`;

  const services = [
    {
      icon: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936de2cdf46248c9f7703bd/b02302fee_ads-removebg-preview.png",
      title: "Gestão de Tráfego pago",
      description: "Maximize seu alcance online com nossa Gestão de Tráfego. Direcionamos o público certo para impulsionar sua presença e eficácia nas estratégias de marketing",
      isLogo: true
    },
    {
      icon: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936de2cdf46248c9f7703bd/f36b4443e_facebook-removebg-preview.png",
      title: "Gestão de redes sociais",
      description: "Maximize sua presença online com nossa gestão de redes sociais. Criamos conteúdo envolvente e estratégias personalizadas para impulsionar seu negócio.",
      isLogo: true
    },
    {
      icon: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936de2cdf46248c9f7703bd/5d9037cda_instagram-removebg-preview.png",
      title: "Consultoria individual de marketing digital",
      description: "Obtenha orientação personalizada em Marketing Digital e Tráfego Pago. Nossa consultoria oferece insights estratégicos para otimizar sua presença online.",
      isLogo: true
    },
    {
      icon: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936de2cdf46248c9f7703bd/eea921d4b_META-removebg-preview.png",
      title: "Criação de sites",
      description: "Transformamos suas ideias em sites impressionantes. Do design à funcionalidade, criamos a presença online perfeita para o seu negócio.",
      isLogo: true
    }
  ];

  const testimonials = [
    {
      name: "João Silva",
      role: "Empreendedor Digital",
      phone: "+55 81 99999-0001",
      messages: [
        { text: "Cassio, muito obrigado pelo trabalho! 🙏", time: "10:23" },
        { text: "Triplicamos as vendas em apenas 3 meses com sua gestão de tráfego", time: "10:23" },
        { text: "Profissionalismo e resultados reais! Recomendo demais 👏", time: "10:24" }
      ]
    },
    {
      name: "Ana Souza",
      role: "Loja de Roupas Online",
      phone: "+55 81 98888-0002",
      messages: [
        { text: "Cassio, você é muito estratégico e atencioso", time: "14:15" },
        { text: "Hoje temos total previsibilidade dos nossos resultados com as campanhas", time: "14:16" },
        { text: "Melhor investimento que fizemos! 🚀", time: "14:16" }
      ]
    },
    {
      name: "Marcos Lima",
      role: "Infoprodutor",
      phone: "+55 81 97777-0003",
      messages: [
        { text: "Cara, os resultados estão incríveis!", time: "16:42" },
        { text: "O custo por lead caiu 40% e a qualidade dos contatos melhorou demais", time: "16:42" },
        { text: "Valeu muito a pena parceiro! 💪", time: "16:43" }
      ]
    }
  ];

  const stats = [
    { value: "+5", label: "Anos de experiência" },
    { value: "120+", label: "Campanhas gerenciadas" },
    { value: "R$2M+", label: "Investidos em anúncios" },
    { value: "3x", label: "Aumento médio de vendas" }
  ];

  return (
    <>
      <Helmet>
        <title>Cassio - Especialista em Tráfego Pago | Facebook, Instagram e Google Ads</title>
        <meta 
          name="description" 
          content="Especialista em tráfego pago com +5 anos de experiência. Gestão de campanhas no Facebook, Instagram e Google Ads. Aumente suas vendas com estratégias comprovadas e ROI otimizado." 
        />
        <meta name="keywords" content="tráfego pago, Facebook Ads, Instagram Ads, Google Ads, gestão de campanhas, especialista em anúncios, marketing digital, ROI, otimização de campanhas" />
        <link rel="canonical" href={window.location.origin + createPageUrl('Home')} />
      </Helmet>
      
      <ScrollProgress />
      
      <div className="min-h-screen bg-white">
        {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <span className={`font-bold text-base sm:text-lg ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                Cassio <span className="text-blue-500">Tráfego</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {[
                { label: 'Sobre', id: 'sobre' },
                { label: 'Serviços', id: 'servicos' },
                { label: 'Contato', id: 'contato' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-500 ${scrolled ? 'text-slate-600' : 'text-white/90'}`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-slate-900' : 'text-white'}`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="px-4 py-4 space-y-2">
                {[
                  { label: 'Sobre', id: 'sobre' },
                  { label: 'Serviços', id: 'servicos' },
                  { label: 'Contato', id: 'contato' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-lg"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden pt-16">
        {/* Advanced Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-blue-950 to-slate-900" />
        
        {/* Animated Gradient Mesh */}
        <div className="absolute inset-0 opacity-30">
          <motion.div 
            className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/30 rounded-full blur-[100px]"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[100px]"
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content Side */}
            <div className="space-y-6 sm:space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div 
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-full mb-6 backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 text-sm font-bold">+5 Anos Transformando Negócios</span>
                </motion.div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-4 sm:mb-5">
                  Multiplique Seus
                  <br />
                  <span className="relative inline-block mt-1">
                    <span className="relative z-10 bg-gradient-to-r from-emerald-400 via-emerald-500 to-blue-400 bg-clip-text text-transparent">
                      Resultados
                    </span>
                    <motion.span 
                      className="absolute bottom-2 left-0 w-full h-3 bg-emerald-500/20 -z-10 blur-sm"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                    />
                  </span>
                  <br />
                  com Tráfego Pago
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                  Gestão especializada de anúncios que{' '}
                  <span className="text-white font-bold">gera vendas consistentes</span> enquanto você foca no seu negócio.
                </p>
              </motion.div>

              {/* Trust Bar */}
              <motion.div 
                className="flex flex-wrap items-center gap-4 sm:gap-6 py-4 sm:py-5 border-y border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">+56</div>
                  <div className="text-xs text-slate-400">Empresas</div>
                </div>
                <div className="w-px h-8 sm:h-10 bg-white/10" />
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-emerald-400 mb-1">R$2M+</div>
                  <div className="text-xs text-slate-400">Gerenciados</div>
                </div>
                <div className="w-px h-8 sm:h-10 bg-white/10" />
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-blue-400 mb-1">3.8x</div>
                  <div className="text-xs text-slate-400">ROI Médio</div>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="space-y-6"
              >
                <motion.button
                  onClick={() => scrollToSection('contato')}
                  className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-500 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white font-bold text-sm sm:text-base rounded-2xl shadow-2xl shadow-emerald-500/40 transition-all duration-500 overflow-hidden min-h-[48px]"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ backgroundSize: '200% 100%' }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
                  <MessageCircle className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Quero Aumentar Minhas Vendas</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-2 transition-transform" />
                </motion.button>

                {/* Platform Logos */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs sm:text-sm text-slate-400 font-medium">Plataformas:</span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: "Google Ads", icon: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936de2cdf46248c9f7703bd/b02302fee_ads-removebg-preview.png" },
                      { name: "Facebook", icon: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936de2cdf46248c9f7703bd/f36b4443e_facebook-removebg-preview.png" },
                      { name: "Instagram", icon: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936de2cdf46248c9f7703bd/5d9037cda_instagram-removebg-preview.png" },
                      { name: "Meta", icon: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936de2cdf46248c9f7703bd/eea921d4b_META-removebg-preview.png" }
                    ].map((platform, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + (i * 0.1), type: "spring" }}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl p-2 sm:p-2.5 border border-white/10 hover:border-white/20 transition-all cursor-pointer"
                        >
                        <img src={platform.icon} alt={platform.name} className="w-full h-full object-contain" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Visual Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full max-w-xl mx-auto">
                {/* Orbital Rings */}
                <motion.div 
                  className="absolute inset-0 rounded-full border-2 border-emerald-500/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ scale: 1.2 }}
                />
                <motion.div 
                  className="absolute inset-0 rounded-full border-2 border-blue-500/20"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  style={{ scale: 1.1 }}
                />

                {/* Main Card */}
                <motion.div 
                  className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-[2rem] p-8 border border-white/20 shadow-2xl"
                  whileHover={{ y: -10, rotateY: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Profile Section */}
                  <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
                    <motion.div 
                      className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-600 flex items-center justify-center shadow-xl"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-4xl font-bold text-white">C</span>
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Cassio</h3>
                      <p className="text-emerald-400 font-semibold text-sm">Especialista em Tráfego</p>
                      <div className="flex gap-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Performance Stats */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300 text-xs">Performance Mensal</span>
                      <span className="text-emerald-400 font-bold text-base">+245%</span>
                    </div>
                    
                    {/* Animated Bars */}
                    <div className="space-y-3">
                      {[
                        { label: "Google Ads", value: 92, color: "from-blue-500 to-blue-600" },
                        { label: "Facebook Ads", value: 88, color: "from-blue-600 to-violet-600" },
                        { label: "Instagram Ads", value: 95, color: "from-pink-500 to-purple-600" }
                      ].map((item, i) => (
                        <div key={i}>
                          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                            <span>{item.label}</span>
                            <span>{item.value}%</span>
                          </div>
                          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                              initial={{ width: 0 }}
                              animate={{ width: `${item.value}%` }}
                              transition={{ delay: 1.2 + (i * 0.2), duration: 1, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-3 pt-4">
                      <div className="bg-white/5 rounded-xl p-3 backdrop-blur-sm border border-white/10">
                        <div className="text-xl font-bold text-white mb-1">12.5K</div>
                        <div className="text-[10px] text-slate-400">Cliques/mês</div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-3 backdrop-blur-sm border border-white/10">
                        <div className="text-xl font-bold text-emerald-400 mb-1">3.2K</div>
                        <div className="text-[10px] text-slate-400">Conversões</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Badges */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute -top-6 -right-6 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-5 py-3 rounded-2xl shadow-xl font-bold text-sm"
                >
                  ✓ ROI 3.8x Garantido
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
                  className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-3 rounded-2xl shadow-xl font-bold text-sm"
                >
                  ✓ +R$50K/mês
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-slate-500 font-medium">Scroll</span>
            <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center pt-2">
              <motion.div 
                className="w-1.5 h-3 bg-gradient-to-b from-emerald-400 to-blue-400 rounded-full"
                animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section - Mobile */}
      <section className="lg:hidden bg-slate-50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  <CountUp end={stat.value} />
                </div>
                <div className="text-xs sm:text-sm text-slate-600 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Process Section */}
      {/* <ProcessSection onContactClick={() => setIsContatoModalOpen(true)} /> */}

      {/* Sobre Section - Novo Layout Profissional */}
      <section id="sobre" className="py-12 sm:py-16 lg:py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-emerald-600 font-bold text-sm uppercase tracking-wider">
              Potencialize Suas Vendas Online
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-3 mb-4 sm:mb-6">
              Se você deseja{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                impulsionar significativamente
              </span>{' '}
              o crescimento do seu negócio
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              É essencial atrair um público mais amplo e desenvolver uma estratégia sólida 
              para transformá-los em clientes. E é exatamente aí que entro para oferecer 
              minha expertise e auxílio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-12 sm:py-16 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-emerald-600 font-bold text-sm uppercase tracking-wider">
              Nossos Serviços
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-3 mb-4">
              Soluções completas em{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                marketing digital
              </span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Serviços personalizados para impulsionar seu negócio e gerar resultados reais.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="group"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="h-full bg-gradient-to-br from-slate-50 to-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-emerald-200">
                  <motion.div 
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center mb-4 shadow-lg p-2.5 sm:p-3"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {service.isLogo ? (
                      <img src={service.icon} alt={service.title} className="w-full h-full object-contain" />
                    ) : (
                      <service.icon className="w-8 h-8 text-emerald-600" />
                    )}
                  </motion.div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <motion.button
              onClick={() => scrollToSection('contato')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold rounded-full hover:shadow-xl hover:shadow-emerald-500/30 transition-all overflow-hidden group text-sm sm:text-base min-h-[48px]"
            >
              <motion.span
                className="absolute inset-0 bg-white"
                initial={{ scale: 0, opacity: 0.3 }}
                whileHover={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.6 }}
              />
              <MessageCircle className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />
              <span className="relative z-10">Solicitar Orçamento Gratuito</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Depoimentos em Vídeo Section 
      <section id="depoimentos" className="py-12 sm:py-16 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-emerald-600 font-bold text-sm uppercase tracking-wider">
              Depoimentos
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-3 mb-4">
              O que os clientes dizem{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                sobre meu trabalho?
              </span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Resultados reais de quem confiou no nosso trabalho
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
            {[
              { 
                name: "Google Ads", 
                icon: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936de2cdf46248c9f7703bd/b02302fee_ads-removebg-preview.png"
              },
              { 
                name: "Facebook Ads", 
                icon: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936de2cdf46248c9f7703bd/f36b4443e_facebook-removebg-preview.png"
              },
              { 
                name: "Instagram Ads", 
                icon: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936de2cdf46248c9f7703bd/5d9037cda_instagram-removebg-preview.png"
              },
              { 
                name: "Meta Business", 
                icon: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936de2cdf46248c9f7703bd/eea921d4b_META-removebg-preview.png"
              }
            ].map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 shadow-md hover:shadow-xl transition-all border border-slate-100 text-center">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 mx-auto mb-3 sm:mb-4 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 p-3 sm:p-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <img 
                      src={platform.icon} 
                      alt={`Logo ${platform.name}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">{platform.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <TestimonialCarousel testimonials={testimonials} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <button
              onClick={() => setIsContatoModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold rounded-full hover:shadow-xl hover:shadow-emerald-500/30 transition-all text-sm sm:text-base min-h-[48px]"
              >
              <MessageCircle className="w-5 h-5" />
              Quero Melhorar Meus Resultados
            </button>
            </motion.div>
            </div>
            </section> */}

      {/* Contact Section */}
      <ContactSection />

      {/* CTA Final */}
      <section className="py-12 sm:py-16 lg:py-32 bg-gradient-to-br from-[#0a1628] via-[#0d2847] to-[#1a3a5c] relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-5 sm:mb-6">
              Gere até{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                5x mais vendas
              </span>{' '}
              atraindo clientes com anúncios online
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Tenha leads procurando por seus serviços todos os dias! Entre em contato 
              agora e descubra como podemos transformar seu negócio com tráfego pago.
            </p>

            {/* Logos plataformas no CTA */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              {[
                { name: "Google Ads", icon: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936de2cdf46248c9f7703bd/b02302fee_ads-removebg-preview.png" },
                { name: "Facebook", icon: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936de2cdf46248c9f7703bd/f36b4443e_facebook-removebg-preview.png" },
                { name: "Instagram", icon: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936de2cdf46248c9f7703bd/5d9037cda_instagram-removebg-preview.png" },
                { name: "Meta", icon: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6936de2cdf46248c9f7703bd/eea921d4b_META-removebg-preview.png" }
              ].map((platform, i) => (
                <div key={i} className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 backdrop-blur-sm p-2 sm:p-2.5 flex items-center justify-center border border-white/20">
                  <img src={platform.icon} alt={platform.name} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <motion.button
                onClick={() => scrollToSection('contato')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 lg:px-10 py-3.5 sm:py-4 lg:py-5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold rounded-full transition-all hover:shadow-xl hover:shadow-emerald-500/30 text-sm sm:text-base lg:text-lg overflow-hidden group min-h-[48px]"
              >
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  style={{ opacity: 0.2 }}
                />
                <MessageCircle className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform" />
                <span className="relative z-10">Entrar Em Contato Agora!</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <span className="font-bold text-base sm:text-lg text-white">
                Cassio <span className="text-blue-500">Tráfego</span>
              </span>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <a href="#" className="w-11 h-11 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-11 h-11 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm">
            © {new Date().getFullYear()} Cassio – Todos os direitos reservados.
          </div>
        </div>
      </footer>
      </div>
      </>
      );
      }