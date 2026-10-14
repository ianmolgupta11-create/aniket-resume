import React from 'react';
import { 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  Award, 
  ShieldCheck, 
  ArrowUp, 
  Gamepad2,
  Heart
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onResumeClick: () => void;
  onGameClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onResumeClick, onGameClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 text-white font-black text-lg flex items-center justify-center">
                AK
              </div>
              <div>
                <h3 className="font-extrabold text-base text-white tracking-tight">
                  {PORTFOLIO_DATA.personal.fullName}
                </h3>
                <p className="text-xs text-sky-400 font-medium">
                  {PORTFOLIO_DATA.personal.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Prepared for Talent Acquisition leaders at Deloitte, EY, Accenture, Google, and premier global enterprises seeking high-precision operational, spreadsheet, and communication talent.
            </p>

            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                1st Rank Olympiad
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                RSETI Certified
              </span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#hero" className="hover:text-sky-400 transition-colors">Overview</a>
              </li>
              <li>
                <a href="#metrics" className="hover:text-sky-400 transition-colors">Impact Metrics</a>
              </li>
              <li>
                <a href="#enterprise-fit" className="hover:text-sky-400 transition-colors">Big-4 & Tech Alignment</a>
              </li>
              <li>
                <a href="#proof-of-work" className="hover:text-sky-400 transition-colors">Live Excel & Memo Sandbox</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-sky-400 transition-colors">Skills Matrix</a>
              </li>
              <li>
                <a href="#education" className="hover:text-sky-400 transition-colors">Education & Credentials</a>
              </li>
            </ul>
          </div>

          {/* Recruiter Actions (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Fast Recruiter Resources
            </h4>
            <div className="space-y-2">
              <button
                onClick={onResumeClick}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-white transition-all cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-sky-400" />
                  View Authentic Resume Document
                </span>
                <span className="text-slate-400">&rarr;</span>
              </button>

              <button
                onClick={onGameClick}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-white transition-all cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Gamepad2 className="w-4 h-4 text-amber-400" />
                  Launch Skill Arena Challenge
                </span>
                <span className="text-slate-400">&rarr;</span>
              </button>

              <a
                href="#contact"
                className="w-full flex items-center justify-between p-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-xs font-bold text-white transition-all cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Connect for Recruitment
                </span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Aniket Kumar Gupta. All credentials and references verified.
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
