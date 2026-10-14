import React, { useState } from 'react';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  CheckCircle2, 
  ExternalLink, 
  ShieldCheck, 
  Trophy, 
  FileSpreadsheet, 
  FileCheck,
  Building,
  X
} from 'lucide-react';
import { PORTFOLIO_DATA, CertificationItem } from '../data/portfolioData';

export const EducationAndCertifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  const getCertIcon = (id: string) => {
    switch (id) {
      case 'olympiad-2019':
        return Trophy;
      case 'excel-2024':
        return FileSpreadsheet;
      case 'bookkeeper-rseti':
        return ShieldCheck;
      default:
        return FileCheck;
    }
  };

  return (
    <section id="education" className="py-20 relative bg-slate-50 border-t border-slate-200/80 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Education Timeline (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider w-fit mb-3">
              <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
              Academic Trajectory
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
              Formal Education
            </h2>
            <p className="text-slate-600 text-sm mb-8">
              A balanced synthesis of advanced linguistic inquiry, mathematical reasoning, and social systems analysis.
            </p>

            {/* Timeline */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-sky-300 space-y-8">
              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-sky-600 shadow-sm group-hover:scale-125 transition-transform" />

                  {/* Card */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                        edu.badgeType === 'pursuing' 
                          ? 'bg-amber-100 text-amber-800 border border-amber-200'
                          : edu.badgeType === 'graduated'
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                          : 'bg-sky-100 text-sky-800 border border-sky-200'
                      }`}>
                        {edu.statusOrYear}
                      </span>
                      <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-md font-mono">
                        {edu.scoreOrDetail}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900">
                      {edu.degree}
                    </h3>
                    <div className="text-sm font-semibold text-sky-800 mt-0.5 flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                      <span>{edu.institution}</span>
                    </div>

                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {edu.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                      {edu.keySubjects.map((subj, sIdx) => (
                        <span key={sIdx} className="text-[11px] font-medium bg-slate-50 border border-slate-200/80 text-slate-700 px-2 py-0.5 rounded">
                          {subj}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications & Achievements (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider w-fit mb-3">
              <Award className="w-3.5 h-3.5 text-emerald-600" />
              Credentials & Honors
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
              Certifications
            </h2>
            <p className="text-slate-600 text-sm mb-8">
              Verified national benchmarks and industry certifications.
            </p>

            <div className="space-y-4">
              {PORTFOLIO_DATA.certifications.map((cert) => {
                const Icon = getCertIcon(cert.id);
                return (
                  <div
                    key={cert.id}
                    onClick={() => setSelectedCert(cert)}
                    className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-sky-400 hover:shadow-md transition-all cursor-pointer group"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="p-2.5 rounded-xl bg-sky-50 text-sky-700 group-hover:bg-sky-600 group-hover:text-white transition-colors shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-xs font-bold text-sky-700 uppercase tracking-wider truncate">
                            {cert.category}
                          </span>
                          <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                            {cert.year}
                          </span>
                        </div>
                        <h3 className="text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                          {cert.title}
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {cert.issuer}
                        </p>
                        <div className="mt-3 flex items-center justify-between text-xs text-slate-600 pt-2 border-t border-slate-100">
                          <span className="font-semibold text-emerald-700 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            {cert.scoreOrRank || 'Verified'}
                          </span>
                          <span className="text-sky-600 font-semibold group-hover:translate-x-0.5 transition-transform">
                            View Details &rarr;
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Summary Box */}
            <div className="mt-6 p-5 rounded-2xl bg-slate-900 text-white shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-sky-300 uppercase tracking-wider mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Recruiter Verification Note
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                All credentials (RSETI Bookkeeping, NIELIT CCC, Advanced Excel 2024, Computer Olympiad Gold) are authenticated with original certificates ready for background verification.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Certification Details Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-sky-50 text-sky-600">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
                  Credential Dossier
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  {selectedCert.title}
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600">
              <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div>
                  <div className="text-[11px] text-slate-400 uppercase font-semibold">Issuing Authority</div>
                  <div className="font-bold text-slate-800">{selectedCert.issuer}</div>
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 uppercase font-semibold">Classification</div>
                  <div className="font-bold text-slate-800">{selectedCert.category}</div>
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 uppercase font-semibold">Year / Status</div>
                  <div className="font-bold text-slate-800">{selectedCert.year}</div>
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 uppercase font-semibold">Rank / Grade</div>
                  <div className="font-bold text-emerald-700">{selectedCert.scoreOrRank}</div>
                </div>
              </div>

              <div>
                <div className="font-bold text-slate-900 mb-1">Credential Summary:</div>
                <p className="leading-relaxed">{selectedCert.description}</p>
              </div>

              <div>
                <div className="font-bold text-slate-900 mb-2">Verified Enterprise Competencies:</div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCert.competencies.map((comp, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 text-xs font-medium border border-sky-200">
                      {comp}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase cursor-pointer"
              >
                Close Verification
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
