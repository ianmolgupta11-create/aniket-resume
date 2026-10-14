import React, { useState } from 'react';
import { 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  Sparkles,
  Zap,
  Target
} from 'lucide-react';
import { PORTFOLIO_DATA, CompanyRoleMapping } from '../data/portfolioData';

interface EnterpriseFitSectionProps {
  onSelectCompanyForContact: (companyName: string) => void;
}

export const EnterpriseFitSection: React.FC<EnterpriseFitSectionProps> = ({ onSelectCompanyForContact }) => {
  const [selectedCompany, setSelectedCompany] = useState<string>('Deloitte');

  const currentMapping = PORTFOLIO_DATA.companyAlignments.find(c => c.company === selectedCompany) 
    || PORTFOLIO_DATA.companyAlignments[0];

  return (
    <section id="enterprise-fit" className="py-20 relative bg-white border-b border-slate-200/80 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Target className="w-3.5 h-3.5 text-indigo-600" />
            Recruiter Match Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tailored Fit for Deloitte, EY, Accenture & Google
          </h2>
          <p className="mt-2 text-slate-600 text-base">
            See exactly how Aniket&apos;s dual skillset (Linguistic Precision + Computational Operations) solves specific team bottlenecks.
          </p>
        </div>

        {/* Company Tabs */}
        <div className="flex justify-center mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200 max-w-2xl w-full">
            {PORTFOLIO_DATA.companyAlignments.map((comp) => {
              const isSelected = comp.company === selectedCompany;
              return (
                <button
                  key={comp.company}
                  onClick={() => setSelectedCompany(comp.company)}
                  className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-white text-slate-900 shadow-md border border-slate-200/60'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <Building2 className={`w-4 h-4 ${
                    comp.company === 'Deloitte' ? 'text-emerald-600' :
                    comp.company === 'EY' ? 'text-yellow-600' :
                    comp.company === 'Accenture' ? 'text-purple-600' : 'text-blue-600'
                  }`} />
                  <span>{comp.company}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Company Detail Display Card */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 cols: Role Fit & Key Deliverables */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-extrabold border ${currentMapping.logoColor}`}>
                    {currentMapping.company} Engagement Profile
                  </span>
                  <span className="text-xs text-slate-500 font-medium">Full-Time / Associate Grade</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Target Roles: {currentMapping.targetRoles.join(' • ')}
                </h3>
                <p className="mt-3 text-slate-700 text-sm leading-relaxed">
                  {currentMapping.roleFitSummary}
                </p>
              </div>

              {/* Quantifiable Value Proposition */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold text-sky-700 uppercase tracking-wider mb-1">
                  <Zap className="w-3.5 h-3.5" />
                  Measurable Productivity Value
                </div>
                <div className="text-sm font-semibold text-slate-900">
                  {currentMapping.quantifiableValue}
                </div>
              </div>

              {/* Key Day-to-Day Contributions */}
              <div>
                <h4 className="text-xs uppercase font-bold text-slate-500 tracking-wider mb-3">
                  Day-1 Actionable Deliverables:
                </h4>
                <div className="space-y-2.5">
                  {currentMapping.keyContributions.map((contrib, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                        {contrib}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 cols: Matched Skills & Recruiter CTA */}
            <div className="lg:col-span-5 space-y-6">
              {/* Matched Skills Box */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <h4 className="text-xs uppercase font-bold text-slate-500 tracking-wider mb-4">
                  Direct Qualifications Match:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentMapping.matchedSkills.map((sk, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-sky-50 text-sky-800 text-xs font-semibold border border-sky-200 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3 h-3 text-sky-600" />
                      {sk}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 text-xs text-slate-500 space-y-2">
                  <div className="flex items-center justify-between">
                    <span>Onboarding Ramp-Up:</span>
                    <strong className="text-slate-800">&lt; 1 Week</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Office Tools Competency:</span>
                    <strong className="text-slate-800">Advanced / Certified</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>English Language Proficiency:</span>
                    <strong className="text-slate-800">Honours Graduate Level</strong>
                  </div>
                </div>
              </div>

              {/* Recruiter Action Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-sky-950 text-white shadow-lg">
                <h4 className="text-base font-bold text-white mb-2">
                  Hiring for {currentMapping.company}?
                </h4>
                <p className="text-xs text-slate-300 mb-5 leading-relaxed">
                  Open a tailored screening request pre-configured for {currentMapping.company}&apos;s recruitment workflow.
                </p>
                <button
                  onClick={() => onSelectCompanyForContact(currentMapping.company)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs uppercase tracking-wide transition-all cursor-pointer"
                >
                  <span>Request {currentMapping.company} Candidate Dossier</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
