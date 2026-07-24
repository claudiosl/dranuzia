import { DoctorConfig, DifferentialItem } from '../types';
import doctorNewPhoto from '../assets/images/doctor_portrait_new_1784889223839.jpg';
import doctorMalePhoto from '../assets/images/doctor_hero_portrait_1784818707690.jpg';
import doctorFemalePhoto from '../assets/images/female_doctor_portrait_1784818961947.jpg';

export const defaultDoctorConfig: DoctorConfig = {
  name: "Dr. Gabriel Santos",
  crm: "CRM 148.920 • SP",
  specialty: "Cardiologia & Medicina Preventiva",
  whatsappNumber: "5599999999999",
  whatsappMessage: "Olá! Gostaria de agendar uma consulta médica. Pode me informar os horários disponíveis?",
  photoUrl: doctorNewPhoto,
  rating: 5.0,
  reviewCount: 248,
};

export const defaultDifferentiators: DifferentialItem[] = [
  {
    id: "diff-1",
    title: "Atendimento Humanizado",
    description: "Escuta atenta e consulta sem pressa, dedicada a compreender suas reais necessidades.",
    iconName: "HeartPulse"
  },
  {
    id: "diff-2",
    title: "Profissional Especialista",
    description: "Título de especialista registrado, atualização contínua e vasta experiência clínica.",
    iconName: "Award"
  },
  {
    id: "diff-3",
    title: "Consultas com Hora Marcada",
    description: "Respeito rigoroso ao seu tempo com pontualidade e ambiente exclusivo de espera.",
    iconName: "Clock"
  }
];

export const doctorPresets = [
  {
    id: "default-male",
    label: "Dr. Gabriel (Principal)",
    name: "Dr. Gabriel Santos",
    crm: "CRM 148.920 • SP",
    specialty: "Cardiologia & Medicina Preventiva",
    photoUrl: doctorMalePhoto
  },
  {
    id: "female-doctor-gen",
    label: "Dra. Helena (HD Gerada)",
    name: "Dra. Helena Vasconcelos",
    crm: "CRM 162.410 • SP",
    specialty: "Clínica Geral & Endocrinologia",
    photoUrl: doctorFemalePhoto
  },
  {
    id: "doctor-stethoscope",
    label: "Dr. Lucas (Consultório)",
    name: "Dr. Lucas Andrade",
    crm: "CRM 135.890 • SP",
    specialty: "Medicina da Família & Check-up",
    photoUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800"
  }
];
