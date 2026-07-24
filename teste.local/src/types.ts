export interface DoctorConfig {
  name: string;
  crm: string;
  specialty: string;
  whatsappNumber: string;
  whatsappMessage: string;
  photoUrl: string;
  rating: number;
  reviewCount: number;
}

export interface AppointmentData {
  patientName: string;
  patientPhone: string;
  specialtyOrType: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}

export interface DifferentialItem {
  id: string;
  title: string;
  description?: string;
  iconName: string;
}
