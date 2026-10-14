import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Mail, 
  Gamepad2, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Menu, 
  X,
  Phone,
  Sparkles
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  onResumeClick: () => void;
  onHireClick: () => void;
  onGameClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onResumeClick, onHireClick, onGameClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'Impact Metrics', href: '#metrics' },
    { label: 'Big-4 Fit', href: '#enterprise-fit' },
    { label: 'Live Sandbox', href: '#proof-of-work' },
    { label: 'Skills & Tools', href: '#skills' },
    { label: 'Education & Certs', href: '#education' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Name */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-700 via-blue-600 to-sky-500 text-white font-black text-lg flex items-center justify-center shadow-md shadow-sky-600/20 group-hover:scale-105 transition-transform">
            AK
          </div>
          <div>
            <div className="font-extrabold text-slate-900 text-sm tracking-tight leading-none group-hover:text-sky-600 transition-colors">
              {PORTFOLIO_DATA.personal.fullName}
            </div>
            <div className="text-[11px] text-slate-500 font-medium tracking-tight mt-0.5">
              Operations & Communication Specialist
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-semibold text-slate-600 hover:text-sky-600 transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onGameClick}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-800 text-xs font-bold border border-sky-200 transition-all cursor-pointer"
            title="Test Aniket's profile in the interactive skill game"
          >
            <Gamepad2 className="w-3.5 h-3.5 text-sky-600" />
            <span>Recruiter Arena</span>
          </button>

          <button
            onClick={onResumeClick}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold border border-slate-300 shadow-xs transition-all cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-slate-500" />
            <span>View Resume</span>
          </button>

          <button
            onClick={onHireClick}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold shadow-sm shadow-sky-600/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Hire Aniket</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onHireClick}
            className="px-3 py-1 rounded-md bg-sky-600 text-white text-xs font-bold"
          >
            Hire
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-700 hover:text-sky-600 py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onGameClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-sky-50 text-sky-800 text-xs font-bold border border-sky-200"
            >
              <Gamepad2 className="w-4 h-4" />
              Recruiter Skill Arena
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onResumeClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-slate-200 text-slate-800 text-xs font-semibold"
            >
              <FileText className="w-4 h-4" />
              View Resume
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onHireClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-sky-600 text-white text-xs font-bold"
            >
              <Mail className="w-4 h-4" />
              Recruiter Outreach
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
