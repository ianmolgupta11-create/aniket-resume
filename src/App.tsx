/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ImpactMetrics } from './components/ImpactMetrics';
import { EnterpriseFitSection } from './components/EnterpriseFitSection';
import { ExcelSimulationSection } from './components/ExcelSimulationSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationAndCertifications } from './components/EducationAndCertifications';
import { InteractiveGame } from './components/InteractiveGame';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InteractiveResumeModal } from './components/InteractiveResumeModal';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [selectedCompanyForContact, setSelectedCompanyForContact] = useState('Deloitte');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHireClick = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGameClick = () => {
    const gameElem = document.getElementById('game-arena');
    if (gameElem) {
      gameElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCompany = (companyName: string) => {
    setSelectedCompanyForContact(companyName);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-sky-500 selection:text-white relative">
      {/* Scroll Progress Indicator Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 z-50 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Subtle Dynamic Ambient Canvas Particle Constellation */}
      <ParticleBackground interactive={true} />

      {/* Main Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation */}
        <Navbar 
          onResumeClick={() => setResumeModalOpen(true)}
          onHireClick={handleHireClick}
          onGameClick={handleGameClick}
        />

        {/* Hero Section */}
        <main className="flex-1">
          <HeroSection 
            onResumeClick={() => setResumeModalOpen(true)}
            onHireClick={handleHireClick}
            onGameClick={handleGameClick}
          />

          {/* Quantifiable Impact Metrics */}
          <ImpactMetrics />

          {/* Target Fit for Deloitte, EY, Accenture, Google */}
          <EnterpriseFitSection 
            onSelectCompanyForContact={handleSelectCompany}
          />

          {/* Live Enterprise Proof of Work: Excel Dashboard & Executive Prose */}
          <ExcelSimulationSection />

          {/* Interactive Game: Recruiter Skill Arena */}
          <InteractiveGame 
            onHireClick={handleHireClick}
          />

          {/* Comprehensive Skills Matrix */}
          <SkillsSection />

          {/* Education Timeline & Verified Certifications */}
          <EducationAndCertifications />

          {/* Recruiter Outreach & Direct Connection */}
          <ContactSection 
            initialCompany={selectedCompanyForContact}
          />
        </main>

        {/* Footer */}
        <Footer 
          onResumeClick={() => setResumeModalOpen(true)}
          onGameClick={handleGameClick}
        />
      </div>

      {/* Authentic Resume Preview & PDF Print Modal */}
      <InteractiveResumeModal 
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
