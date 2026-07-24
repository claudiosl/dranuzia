import React from 'react';
import { HeartPulse, Stethoscope, ShieldCheck, MessageCircle } from 'lucide-react';
import { DoctorConfig } from '../types';

interface AboutSectionProps {
  doctor: DoctorConfig;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ doctor }) => {
  const whatsappUrl = `https://wa.me/${doctor.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(doctor.whatsappMessage)}`;

  return (
    <section className="py-16 bg-slate-50 relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#0F3D66] uppercase tracking-wider bg-[#0F3D66]/5 px-3 py-1 rounded-full border border-[#0F3D66]/10 inline-block mb-3">
            Excelência Médica
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F3D66] tracking-tight">
            Acompanhamento médico integral voltado para a sua qualidade de vida.
          </h2>
          <p className="text-sm text-slate-600 mt-3">
            Estrutura planejada para proporcionar conforto, segurança diagnóstica e um canal de comunicação direto entre médico e paciente.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0F3D66] flex items-center justify-center mb-4">
              <HeartPulse className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0F3D66] mb-2">
              Consultas Detalhadas
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Avaliação clínica minuciosa com histórico completo, exame físico atencioso e plano terapêutico individualizado.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0F3D66] flex items-center justify-center mb-4">
              <Stethoscope className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0F3D66] mb-2">
              Diagnóstico Preciso
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Orientações respaldadas pela literatura médica atualizada e tecnologias modernas de medicina preventiva.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0F3D66] flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0F3D66] mb-2">
              Acompanhamento Pós-Consulta
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Suporte para dúvidas, esclarecimentos sobre receitas e monitoramento contínuo da evolução da sua saúde.
            </p>
          </div>
        </div>

        {/* Callout Banner */}
        <div className="bg-gradient-to-r from-[#0F3D66] to-[#0A2B4A] rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <span className="text-xs font-bold text-sky-200 uppercase tracking-widest block mb-2">
              Pronto para cuidar da sua saúde?
            </span>
            <h3 className="text-xl sm:text-2xl font-bold leading-tight">
              Agende sua consulta presencial ou online com facilidade e agilidade.
            </h3>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold px-8 py-3.5 rounded-full transition-all shadow-md text-sm text-center inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Falar pelo WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
