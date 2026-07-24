import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TrustStats } from './components/TrustStats';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { defaultDoctorConfig, defaultDifferentiators } from './data/doctorData';
import { DoctorConfig } from './types';

export default function App() {
  const [doctor, setDoctor] = useState<DoctorConfig>(() => {
    const savedPhoto = localStorage.getItem('doctor_custom_photo');
    if (savedPhoto) {
      return { ...defaultDoctorConfig, photoUrl: savedPhoto };
    }
    return defaultDoctorConfig;
  });

  const handleUpdatePhoto = (newPhotoUrl: string) => {
    setDoctor(prev => ({ ...prev, photoUrl: newPhotoUrl }));
    localStorage.setItem('doctor_custom_photo', newPhotoUrl);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased flex flex-col selection:bg-[#0F3D66] selection:text-white">
      {/* Fixed Sticky Header */}
      <Header doctor={doctor} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Core Requested Hero Section (~100vh viewport) */}
        <HeroSection
          doctor={doctor}
          differentiators={defaultDifferentiators}
          onUpdatePhoto={handleUpdatePhoto}
        />

        {/* Authority Trust Stats */}
        <TrustStats />

        {/* About & Services Section */}
        <AboutSection doctor={doctor} />
      </main>

      {/* Footer */}
      <Footer doctor={doctor} />
    </div>
  );
}
