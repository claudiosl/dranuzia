import React from 'react';
import { Calendar, Phone, MessageCircle, Settings, ShieldCheck, Sparkles } from 'lucide-react';
import { DoctorConfig } from '../types';

interface HeaderProps {
  doctor: DoctorConfig;
}

export const Header: React.FC<HeaderProps> = ({
  doctor,
}) => {
  const whatsappUrl = `https://wa.me/${doctor.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(doctor.whatsappMessage)}`;

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs transition-all">
      {/* Top micro bar for high-end feel */}
      <div className="bg-[#0F3D66] text-white text-xs py-1.5 px-4 sm:px-8 font-medium">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-white/10 px-2 py-0.5 rounded-full text-[11px] font-semibold text-emerald-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Agenda Aberta
            </span>
            <span className="text-slate-200 hidden md:inline">|</span>
            <span className="text-slate-200 text-[11px] sm:text-xs">
              {doctor.crm} • Consultas Presenciais e Telemedicina
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-200 text-[11px] sm:text-xs">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-300 transition-colors flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Direto</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand / Doctor Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#0F3D66] text-white flex items-center justify-center font-bold text-lg shadow-md shadow-[#0F3D66]/20">
            {doctor.name.charAt(0)}
          </div>
          <div>
            <span className="text-lg font-bold text-[#0F3D66] tracking-tight block leading-tight">
              {doctor.name}
            </span>
            <span className="text-xs text-slate-500 font-medium block">
              {doctor.specialty}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all shadow-md shadow-green-900/15 hover:shadow-lg hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};
