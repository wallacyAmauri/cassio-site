import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { 
  Send, 
  MessageCircle, 
  User, 
  Mail, 
  Phone, 
  FileText,
  CheckCircle2,
  Loader2,
  Briefcase,
  Upload,
  AlertCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { uploadFile } from '@/api/base44Client';

export default function ContactSection() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [fileUrl, setFileUrl] = useState('');

  const whatsappNumber = "5581989967923";

  const { 
    register, 
    handleSubmit: handleFormSubmit, 
    control,
    formState: { errors },
    reset
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      nome: '',
      email: '',
      telefone: '',
      servico: '',
      mensagem: ''
    }
  });

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Arquivo muito grande. Tamanho máximo: 5MB');
        return;
      }
      setUploadedFile(file);
      
      try {
        const { file_url } = await uploadFile(file);
        setFileUrl(file_url);
      } catch (error) {
        console.error('Erro ao fazer upload:', error);
        alert('Erro ao enviar arquivo. Tente novamente.');
      }
    }
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    const { nome, email, telefone, servico, mensagem } = data;
    
    let texto = `Olá Cassio! 👋

*Novo contato pelo site:*

📌 *Nome:* ${nome}
📧 *E-mail:* ${email}
📱 *Telefone:* ${telefone}
🎯 *Serviço de interesse:* ${servico || 'Não especificado'}

💬 *Mensagem:*
${mensagem || 'Não informada'}`;

    if (fileUrl) {
      texto += `\n\n📎 *Arquivo anexado:* ${fileUrl}`;
    }

    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(texto)}`;
    
    window.open(url, "_blank");
    
    reset();
    setUploadedFile(null);
    setFileUrl('');
    setTimeout(() => {
      navigate(createPageUrl('Obrigado'));
    }, 300);
  };

  return (
    <section id="contato" className="py-12 sm:py-16 lg:py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-emerald-600 font-bold text-sm uppercase tracking-wider">
            Entre em Contato
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Pronto para{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              impulsionar suas vendas?
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Preencha o formulário abaixo e vamos conversar sobre como transformar seu negócio com tráfego pago
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Info Column */}
            <div className="lg:col-span-2 bg-gradient-to-br from-slate-900 via-blue-900 to-violet-900 p-8 md:p-12 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-violet-500 rounded-full filter blur-3xl" />
              </div>

              <div className="relative">
                <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
                  Contato
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6">
                  Vamos conversar sobre{' '}
                  <span className="text-transparent bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text">
                    seu projeto
                  </span>
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  Preencha o formulário e você será redirecionado para conversar 
                  comigo diretamente pelo WhatsApp.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">
                        Atendimento rápido
                      </h3>
                      <p className="text-slate-300 text-sm">
                        Respondo todas as mensagens em até 24 horas úteis
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">
                        Sem compromisso
                      </h3>
                      <p className="text-slate-300 text-sm">
                        Primeira conversa é totalmente gratuita
                      </p>
                    </div>
                  </div>
                </div>

                {/* Benefits Card */}
                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <h3 className="font-semibold text-white text-lg mb-3">
                    Por que entrar em contato?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>Análise gratuita do seu negócio</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>Estratégia personalizada de tráfego pago</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>Projeção de resultados baseada em dados</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-3 p-8 md:p-12">
              <div className="max-w-2xl">
                <form onSubmit={handleFormSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <Label htmlFor="nome" className="text-slate-700 font-medium">
                      Seu nome *
                    </Label>
                    <div className="relative mt-2">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <Input
                        id="nome"
                        {...register('nome', {
                          required: 'Nome é obrigatório',
                          minLength: { value: 2, message: 'Nome deve ter pelo menos 2 caracteres' }
                        })}
                        placeholder="Como gostaria de ser chamado?"
                        className={`pl-12 h-12 bg-slate-50 border-slate-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl ${errors.nome ? 'border-red-500' : ''}`}
                      />
                    </div>
                    {errors.nome && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-1 text-red-600 text-sm mt-1"
                      >
                        <AlertCircle className="w-4 h-4" />
                        {errors.nome.message}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-slate-700 font-medium">
                      E-mail *
                    </Label>
                    <div className="relative mt-2">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <Input
                        id="email"
                        {...register('email', {
                          required: 'E-mail é obrigatório',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'E-mail inválido'
                          }
                        })}
                        placeholder="seu@email.com"
                        className={`pl-12 h-12 bg-slate-50 border-slate-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl ${errors.email ? 'border-red-500' : ''}`}
                      />
                    </div>
                    {errors.email && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-1 text-red-600 text-sm mt-1"
                      >
                        <AlertCircle className="w-4 h-4" />
                        {errors.email.message}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="telefone" className="text-slate-700 font-medium">
                      WhatsApp *
                    </Label>
                    <div className="relative mt-2">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <Input
                        id="telefone"
                        {...register('telefone', {
                          required: 'Telefone é obrigatório',
                          pattern: {
                            value: /^[\d\s\(\)\-\+]+$/,
                            message: 'Telefone inválido'
                          },
                          minLength: { value: 10, message: 'Telefone muito curto' }
                        })}
                        placeholder="(00) 00000-0000"
                        className={`pl-12 h-12 bg-slate-50 border-slate-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl ${errors.telefone ? 'border-red-500' : ''}`}
                      />
                    </div>
                    {errors.telefone && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-1 text-red-600 text-sm mt-1"
                      >
                        <AlertCircle className="w-4 h-4" />
                        {errors.telefone.message}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="servico" className="text-slate-700 font-medium">
                      Serviço de interesse *
                    </Label>
                    <div className="relative mt-2">
                      <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 z-10" />
                      <Controller
                        name="servico"
                        control={control}
                        rules={{ required: 'Selecione um serviço' }}
                        render={({ field }) => (
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger className={`pl-12 h-12 bg-slate-50 border-slate-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl ${errors.servico ? 'border-red-500' : ''}`}>
                              <SelectValue placeholder="Selecione o serviço desejado" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Gestão de Campanhas">Gestão de Campanhas de Tráfego Pago</SelectItem>
                              <SelectItem value="Otimização e ROI">Otimização e ROI</SelectItem>
                              <SelectItem value="Consultoria Estratégica">Consultoria Estratégica</SelectItem>
                              <SelectItem value="Não sei ainda">Ainda não sei qual serviço preciso</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </div>
                    {errors.servico && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-1 text-red-600 text-sm mt-1"
                      >
                        <AlertCircle className="w-4 h-4" />
                        {errors.servico.message}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="mensagem" className="text-slate-700 font-medium">
                      Mensagem
                    </Label>
                    <div className="relative mt-2">
                      <FileText className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                      <Textarea
                        id="mensagem"
                        {...register('mensagem')}
                        placeholder="Conte um pouco sobre seu negócio e objetivos..."
                        rows={4}
                        className="pl-12 pt-3 bg-slate-50 border-slate-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl resize-none"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="arquivo" className="text-slate-700 font-medium">
                      Anexar arquivo (opcional)
                    </Label>
                    <div className="relative mt-2">
                      <input
                        id="arquivo"
                        type="file"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        className="hidden"
                      />
                      <label
                        htmlFor="arquivo"
                        className="flex items-center justify-center gap-2 w-full h-12 px-4 bg-slate-50 border-2 border-dashed border-slate-300 hover:border-blue-500 rounded-xl cursor-pointer transition-colors"
                      >
                        <Upload className="w-5 h-5 text-slate-400" />
                        <span className="text-slate-600">
                          {uploadedFile ? uploadedFile.name : 'Clique para anexar um arquivo'}
                        </span>
                      </label>
                    </div>
                    {uploadedFile && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 mt-2 text-emerald-600 text-sm"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        Arquivo anexado com sucesso
                      </motion.div>
                    )}
                    <p className="text-xs text-slate-500 mt-1">
                      Formatos aceitos: PDF, DOC, DOCX, JPG, PNG (máx. 5MB)
                    </p>
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}