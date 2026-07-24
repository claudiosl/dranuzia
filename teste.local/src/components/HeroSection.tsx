import React from 'react';
import { motion } from 'motion/react';
import { Star, Check, Calendar, MessageCircle, ShieldCheck, HeartPulse, Award, Clock, Sparkles, Camera } from 'lucide-react';
import { DoctorConfig, DifferentialItem } from '../types';

interface HeroSectionProps {
  doctor: DoctorConfig;
  differentiators: DifferentialItem[];
  onUpdatePhoto?: (newPhotoUrl: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  doctor,
  differentiators,
  onUpdatePhoto,
}) => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onUpdatePhoto) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onUpdatePhoto(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Clean phone number format for wa.me URL
  const cleanPhone = doctor.whatsappNumber.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(doctor.whatsappMessage)}`;

  return (
    <section id="hero" className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 via-[#EBF3FA]/40 to-slate-50 py-8 lg:py-12">
      {/* Organic Background Decorative Shapes */}
      <div className="absolute top-1/4 left-[-100px] w-96 h-96 bg-[#0F3D66]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-[-80px] w-[450px] h-[450px] bg-[#EBF3FA] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-12 right-1/4 w-64 h-64 bg-sky-200/20 rounded-full blur-2xl pointer-events-none" />

      {/* Subtle organic medical background pattern lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0F3D66_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ========================================================================= */}
          {/* COLUNA DE FOTO DO MÉDICO (No celular aparece PRIMEIRO - order-first lg:order-last) */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 order-first lg:order-last flex justify-center items-center relative"
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-full">
              
              {/* Organic Framing & Soft Gradient Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#0F3D66]/10 via-[#EBF3FA] to-sky-100 rounded-3xl blur-2xl -z-10 animate-pulse-glow" />

              {/* Main Image Frame Container with Floating Animation & Sleek Rotation */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative rounded-[40px] sm:rounded-[48px] overflow-hidden bg-white p-3.5 sm:p-5 shadow-2xl shadow-[#0F3D66]/15 border border-slate-100 transform sm:rotate-1 hover:rotate-0 transition-transform duration-500"
              >
                {/* Doctor Photo Image */}
                <div className="relative aspect-[3/4] rounded-[28px] sm:rounded-[36px] overflow-hidden bg-slate-100 group">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                  />

                  <img
                    src={doctor.photoUrl}
                    alt={`Foto oficial do ${doctor.name}`}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.failed) {
                        target.dataset.failed = 'true';
                        target.src = "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800";
                      }
                    }}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  
                  {/* Subtle Dark Gradient at base of image for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F3D66]/50 via-transparent to-transparent opacity-60" />

                  {/* Upload Custom Photo Button */}
                  {onUpdatePhoto && (
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      type="button"
                      className="absolute top-3 right-3 bg-white/90 hover:bg-white text-[#0F3D66] font-semibold text-xs px-3 py-1.5 rounded-full shadow-md border border-white/80 flex items-center gap-1.5 transition-all hover:scale-105 cursor-pointer z-30"
                      title="Clique para escolher a sua foto do seu computador ou celular"
                    >
                      <Camera className="w-3.5 h-3.5 text-blue-600" />
                      <span>Trocar foto</span>
                    </button>
                  )}

                  {/* Floating Doctor Name Overlay Tag */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/60 shadow-lg flex items-center justify-between">
                    <div>
                      <p className="font-bold text-[#0F3D66] text-xs sm:text-sm leading-tight">
                        {doctor.name}
                      </p>
                      <p className="text-[11px] text-slate-600 font-medium">
                        {doctor.specialty}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                      Disponível
                    </span>
                  </div>
                </div>

                {/* Floating Badge 1: Rating & Google Reviews */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute top-6 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100/80 flex items-center gap-3 z-20"
                >
                  <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center font-bold">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-slate-900 text-xs sm:text-sm">5.0</span>
                      <div className="flex text-amber-400 text-[10px]">★★★★★</div>
                    </div>
                    <p className="text-[10px] text-slate-500 font-medium">Atendimento Humanizado</p>
                  </div>
                </motion.div>

                {/* Floating Badge 2: Experience & Credibility */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="absolute bottom-16 -right-3 sm:-right-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100/80 flex items-center gap-3 z-20"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#0F3D66] text-white flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-sky-200" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-[#0F3D66] text-xs sm:text-sm leading-tight">CRM Verificado</p>
                    <p className="text-[10px] text-slate-500 font-medium">{doctor.crm}</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* COLUNA DE TEXTO E BOTÕES (Left column on desktop, centered on mobile) */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            
            {/* SELO ACIMA DO TÍTULO: ★★★★★ Atendimento Humanizado */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full mb-6 shadow-xs"
            >
              <div className="flex text-amber-400 text-sm tracking-widest">
                ★★★★★
              </div>
              <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">
                Atendimento Humanizado
              </span>
            </motion.div>

            {/* TÍTULO PRINCIPAL */}
            <h1 className="text-3xl sm:text-4xl lg:text-[52px] font-bold text-[#0F3D66] leading-[1.12] tracking-tight mb-6 max-w-2xl">
              Cuidando da sua saúde com <span className="text-blue-500 italic">experiência</span>, confiança e atenção personalizada.
            </h1>

            {/* SUBTÍTULO */}
            <p className="text-base sm:text-lg text-slate-500 leading-relaxed font-normal mb-8 max-w-xl">
              Consultas, diagnósticos e acompanhamento médico com foco no bem-estar e na qualidade de vida dos pacientes.
            </p>

            {/* BOTÃO PRINCIPAL: Falar pelo WhatsApp */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 mb-10">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-base px-9 py-4 rounded-full transition-all duration-300 shadow-lg shadow-green-900/25 hover:shadow-xl hover:shadow-green-900/35 hover:-translate-y-0.5"
              >
                {/* Official WhatsApp style icon */}
                <MessageCircle className="w-5 h-5 fill-white/20 text-white" />
                <span>Falar pelo WhatsApp</span>
              </a>
            </div>

            {/* ABAIXO DOS BOTÕES: TRÊS DIFERENCIAIS COM ÍCONES */}
            <div className="w-full pt-6 border-t border-slate-200">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                
                {/* Differential 1: ✔ Atendimento Humanizado */}
                <div className="flex items-center justify-center lg:justify-start gap-2.5">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-blue-600 stroke-[3]" />
                  </div>
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wide text-left">
                    Atendimento Humanizado
                  </span>
                </div>

                {/* Differential 2: ✔ Profissional Especialista */}
                <div className="flex items-center justify-center lg:justify-start gap-2.5">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-blue-600 stroke-[3]" />
                  </div>
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wide text-left">
                    Profissional Especialista
                  </span>
                </div>

                {/* Differential 3: ✔ Consultas com Hora Marcada */}
                <div className="flex items-center justify-center lg:justify-start gap-2.5">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-blue-600 stroke-[3]" />
                  </div>
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wide text-left">
                    Consultas com Hora Marcada
                  </span>
                </div>

              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
