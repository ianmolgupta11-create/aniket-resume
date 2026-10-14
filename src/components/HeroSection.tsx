import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Check, 
  Copy, 
  FileText, 
  Gamepad2, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  FileSpreadsheet,
  GraduationCap
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroSectionProps {
  onResumeClick: () => void;
  onHireClick: () => void;
  onGameClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onResumeClick, onHireClick, onGameClick }) => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-sky-400/20 via-blue-500/10 to-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bio & Core Pitch */}
          <div className="lg:col-span-7 text-left">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold shadow-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Immediate Joining • Open to Relocation</span>
            </div>

            {/* Candidate Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              ANIKET KUMAR <br />
              <span className="bg-gradient-to-r from-sky-700 via-blue-700 to-indigo-800 bg-clip-text text-transparent">
                GUPTA
              </span>
            </h1>

            {/* Sub-Headline from Resume */}
            <div className="mt-4 flex flex-wrap items-center gap-2 text-slate-700 font-semibold text-base sm:text-lg">
              <span className="text-sky-700 font-bold">English Graduate</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-800">Computer & Communication Skills</span>
              <span className="text-slate-300">•</span>
              <span className="text-blue-700 font-medium">Operations & Data Specialist</span>
            </div>

            {/* Executive Summary paragraph */}
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
              {PORTFOLIO_DATA.summary.paragraph}
            </p>

            {/* Quick Contact Bar with 1-click Copy */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              {/* Phone */}
              <button
                onClick={() => handleCopy(PORTFOLIO_DATA.personal.phone, 'phone')}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:border-sky-300 text-xs text-slate-700 hover:text-sky-700 shadow-xs transition-all cursor-pointer group"
                title="Click to copy phone number"
              >
                <Phone className="w-3.5 h-3.5 text-sky-600 group-hover:scale-110 transition-transform" />
                <span className="font-mono">{PORTFOLIO_DATA.personal.phone}</span>
                {copiedItem === 'phone' ? (
                  <Check className="w-3 h-3 text-emerald-600 ml-1" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-400 opacity-60 group-hover:opacity-100 ml-1" />
                )}
              </button>

              {/* Email */}
              <button
                onClick={() => handleCopy(PORTFOLIO_DATA.personal.email, 'email')}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:border-sky-300 text-xs text-slate-700 hover:text-sky-700 shadow-xs transition-all cursor-pointer group"
                title="Click to copy email address"
              >
                <Mail className="w-3.5 h-3.5 text-sky-600 group-hover:scale-110 transition-transform" />
                <span>{PORTFOLIO_DATA.personal.email}</span>
                {copiedItem === 'email' ? (
                  <Check className="w-3 h-3 text-emerald-600 ml-1" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-400 opacity-60 group-hover:opacity-100 ml-1" />
                )}
              </button>

              {/* Location */}
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100/80 border border-slate-200 text-xs text-slate-600">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{PORTFOLIO_DATA.personal.location}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={onHireClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-md shadow-sky-600/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Connect / Schedule Screening</span>
              </button>

              <button
                onClick={onGameClick}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-sm transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Gamepad2 className="w-4 h-4 text-sky-400" />
                <span>Play Recruiter Arena</span>
              </button>

              <button
                onClick={onResumeClick}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-300 shadow-xs transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-slate-500" />
                <span>Executive Resume</span>
              </button>
            </div>

            {/* Target Big 4 / Tech Match strip */}
            <div className="mt-10 pt-6 border-t border-slate-200/80">
              <div className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-3">
                Tailored for Associate & Analyst Hiring at:
              </div>
              <div className="flex flex-wrap items-center gap-3 sm:gap-6">
                <span className="font-bold text-sm text-slate-700 tracking-tight flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" /> Deloitte
                </span>
                <span className="font-bold text-sm text-slate-700 tracking-tight flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-yellow-500" /> EY
                </span>
                <span className="font-bold text-sm text-slate-700 tracking-tight flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-purple-500" /> Accenture
                </span>
                <span className="font-bold text-sm text-slate-700 tracking-tight flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500" /> Google
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Executive Profile Card & Key Badges */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer decorative card */}
              <div className="bg-gradient-to-br from-slate-900 via-sky-950 to-blue-900 rounded-3xl p-6 sm:p-8 text-white shadow-2xl border border-sky-500/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

                {/* Candidate Avatar & Meta */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-sky-500 to-blue-600 text-white font-black text-2xl flex items-center justify-center shadow-lg border-2 border-white/20">
                    AG
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl font-extrabold text-white">Aniket K. Gupta</h2>
                      <CheckCircle2 className="w-4 h-4 text-sky-400" />
                    </div>
                    <p className="text-xs text-sky-200 font-medium">B.A. English (Honours) • MSW (Pursuing)</p>
                    <p className="text-[11px] text-slate-400 font-mono mt-0.5">Kushinagar, UP, India</p>
                  </div>
                </div>

                {/* Core Verified Credentials Stack */}
                <div className="space-y-3">
                  {/* Badge 1: Olympiad */}
                  <div className="p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-300">
                      <Award className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white">Computer Olympiad</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300">
                          1st Rank
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-300 truncate">Secured 1st Rank (2019) in Algorithmic Computing</p>
                    </div>
                  </div>

                  {/* Badge 2: Advanced Excel */}
                  <div className="p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300">
                      <FileSpreadsheet className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white">Advanced Excel Certified</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300">
                          2024
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-300 truncate">Pivot Tables, VLOOKUP, Financial Modeling</p>
                    </div>
                  </div>

                  {/* Badge 3: Assistant Bookkeeper */}
                  <div className="p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-sky-500/20 border border-sky-400/40 text-sky-300">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white">Assistant Bookkeeper</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-400/20 text-sky-300">
                          RSETI
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-300 truncate">Standardized Double-Entry & Ledger Auditing</p>
                    </div>
                  </div>

                  {/* Badge 4: NIELIT CCC */}
                  <div className="p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-indigo-500/20 border border-indigo-400/40 text-indigo-300">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white">Course on Computer Concepts</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-400/20 text-indigo-300">
                          NIELIT 2024
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-300 truncate">Govt. Recognized Digital IT Standard</p>
                    </div>
                  </div>
                </div>

                {/* Quick Career Objective Callout */}
                <div className="mt-6 pt-5 border-t border-white/10 text-xs text-slate-300 leading-relaxed italic bg-white/5 p-3 rounded-xl">
                  &ldquo;To apply my computer proficiency, communication skills, and educational background while contributing to organizational growth.&rdquo;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
