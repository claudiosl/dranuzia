import React from 'react';
import { ShieldCheck, HeartPulse, MessageCircle } from 'lucide-react';
import { DoctorConfig } from '../types';

interface FooterProps {
  doctor: DoctorConfig;
}

export const Footer: React.FC<FooterProps> = ({ doctor }) => {
  const whatsappUrl = `https://wa.me/${doctor.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(doctor.whatsappMessage)}`;

  return (
    <footer className="bg-[#0F3D66] text-white border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-white/10">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[#0F3D66] flex items-center justify-center font-bold text-lg">
                {doctor.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-base text-white">{doctor.name}</h4>
                <p className="text-xs text-sky-200">{doctor.specialty}</p>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Atendimento médico humanizado com foco em prevenção, diagnóstico preciso e promoção da saúde e qualidade de vida.
            </p>
          </div>

          {/* Registration & Ethics */}
          <div>
            <h5 className="font-bold text-xs uppercase tracking-wider text-sky-200 mb-3">
              Credenciais & Ética Médica
            </h5>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{doctor.crm}</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Conforme Resolução CFM nº 2.336/2023</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Ambiente e Atendimento Presencial com Agendamento</span>
              </li>
            </ul>
          </div>

          {/* Quick Contact */}
          <div>
            <h5 className="font-bold text-xs uppercase tracking-wider text-sky-200 mb-3">
              Agendamentos & Dúvidas
            </h5>
            <p className="text-xs text-slate-300 mb-3">
              Fale diretamente com nossa equipe de atendimento para agendar sua consulta.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-xs px-4 py-2.5 rounded-lg transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Abrir no WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2 text-center sm:text-left">
          <p>© {new Date().getFullYear()} {doctor.name}. Todos os direitos reservados.</p>
          <p className="text-[11px] text-slate-400">
            Design de Alta Performance • Hero Section Médica
          </p>
        </div>
      </div>
    </footer>
  );
};
