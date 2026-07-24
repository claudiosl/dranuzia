import React from 'react';
import { Award, Users, HeartHandshake, ShieldCheck, Clock, MapPin } from 'lucide-react';

export const TrustStats: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: "+12.000",
      label: "Pacientes Atendidos",
      subtext: "Histórico consolidado de satisfação"
    },
    {
      icon: Award,
      value: "15+ Anos",
      label: "De Experiência",
      subtext: "Especialização contínua"
    },
    {
      icon: HeartHandshake,
      value: "99.8%",
      label: "Aprovação dos Pacientes",
      subtext: "Avaliação em órgãos oficiais e web"
    },
    {
      icon: Clock,
      value: "Pontualidade",
      label: "Garantida",
      subtext: "Respeito total à sua rotina"
    }
  ];

  return (
    <section className="bg-white border-y border-slate-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center sm:items-start text-center sm:text-left p-4 rounded-2xl bg-slate-50/70 border border-slate-100 transition-all hover:border-[#0F3D66]/20 hover:bg-white hover:shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0F3D66]/10 text-[#0F3D66] flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-xl sm:text-2xl font-extrabold text-[#0F3D66] tracking-tight">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm font-semibold text-slate-800">
                  {stat.label}
                </p>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                  {stat.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
