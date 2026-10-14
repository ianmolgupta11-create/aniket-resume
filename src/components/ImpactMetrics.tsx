import React from 'react';
import { 
  Trophy, 
  TrendingUp, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  FileSpreadsheet, 
  Keyboard, 
  GraduationCap,
  Sparkles
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ImpactMetrics: React.FC = () => {
  const iconMap: Record<string, typeof Trophy> = {
    'Computer Olympiad': Trophy,
    'Scholastic Excellence': GraduationCap,
    'Advanced Excel Modeling': FileSpreadsheet,
    'Bookkeeping Compliance': ShieldCheck,
    'Professional Certifications': Award,
    'Typing & Doc Velocity': Keyboard,
  };

  return (
    <section id="metrics" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider mb-2">
            <TrendingUp className="w-3.5 h-3.5 text-sky-600" />
            Quantifiable Candidate Evidence
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Measurable Benchmarks & Impact Indicators
          </h2>
          <p className="mt-2 text-slate-600 text-sm">
            Recruiters at consulting and tech firms look for verified numbers and performance consistency.
          </p>
        </div>

        {/* 6 Grid Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PORTFOLIO_DATA.quantifiableStats.map((stat, idx) => {
            const Icon = iconMap[stat.label] || Award;
            return (
              <div 
                key={idx}
                className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
              >
                {/* Subtle top indicator bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-blue-600 opacity-80 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-sky-50 text-sky-700 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 group-hover:bg-sky-50 group-hover:text-sky-700 transition-colors">
                    {stat.badge}
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-mono-code mb-1 group-hover:text-sky-700 transition-colors">
                  {stat.value}
                </div>

                <div className="text-sm font-bold text-slate-800 mb-1">
                  {stat.label}
                </div>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {stat.subtext}
                </p>
              </div>
            );
          })}
        </div>

        {/* HR Callout Strip */}
        <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-sky-900 via-blue-900 to-indigo-950 text-white flex flex-col md:flex-row items-center justify-between gap-4 shadow-md">
          <div className="flex items-center gap-3.5 text-left">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center shrink-0 text-sky-300">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Why This Matters to Hiring Managers</div>
              <div className="text-xs text-slate-300">
                Combines high verbal articulation (B.A. Honours English) with rigorous mathematical foundation (Class XII 70% Math) and hands-on bookkeeping/Excel execution.
              </div>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-2">
            <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/10 text-sky-200 border border-white/10">
              Low Ramp-Up Time
            </span>
            <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
              Day-1 Operational
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
