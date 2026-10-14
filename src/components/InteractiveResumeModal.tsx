import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Copy, 
  Check, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  Award, 
  Briefcase, 
  GraduationCap,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface InteractiveResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InteractiveResumeModal: React.FC<InteractiveResumeModalProps> = ({ isOpen, onClose }) => {
  const [copiedText, setCopiedText] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = () => {
    const md = `# ANIKET KUMAR GUPTA
English Graduate | Computer & Communication Skills
Phone: +91 6392001167 | Email: ianmolgupta11@gmail.com | Location: Kushinagar, Uttar Pradesh

## PROFESSIONAL SUMMARY
English graduate with strong communication, computer, and organizational skills. Proficient in English writing, MS Office, Advanced Excel, data management, and digital tools. A quick learner with problem-solving abilities and a willingness to contribute effectively to organizational goals.

## CORE SKILLS
- Computer Skills: MS Office, Advanced Excel, Data Management
- Communication: English Communication, Verbal and Written Communication
- Technical Skills: Basic AI Tools, Web Technologies, Computer Applications
- Professional Skills: Teamwork, Time Management, Problem-Solving, Organization

## EDUCATION
- Master of Social Work (MSW) — Uttar Pradesh Rajarshi Tandon Open University (Pursuing — First Year)
- Bachelor of Arts (B.A.) — English — Deen Dayal Upadhyaya Gorakhpur University (2023 | Honours in English)
- Class XII (Intermediate) — UP Board (2020 | 70% | Mathematics Stream)
- Class X (High School) — UP Board (2018 | 80%)

## CERTIFICATIONS & ACHIEVEMENTS
- Assistant Bookkeeper — RSETI Certification
- Advanced Excel — Certification (2024)
- Computer Olympiad — Secured 1st Rank (2019)
- CCC (Course on Computer Concepts) — NIELIT Certification (2024)

## CAREER OBJECTIVE
To obtain a suitable position in a reputed organization where I can apply my computer proficiency, communication skills, and educational background while gaining professional experience and contributing to organizational growth.
`;
    navigator.clipboard.writeText(md);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200 my-auto">
        {/* Modal Top Action Toolbar */}
        <div className="p-4 sm:px-6 bg-slate-900 text-white flex items-center justify-between gap-4 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-sky-400" />
            <span className="font-bold text-sm tracking-wide">
              Aniket_Kumar_Gupta_Executive_Resume.pdf
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyMarkdown}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-all cursor-pointer"
            >
              {copiedText ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedText ? 'Copied Text' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Scrollable Preview (Styled like the exact attached PDF) */}
        <div className="overflow-y-auto p-6 sm:p-12 bg-slate-100 flex-1 flex justify-center">
          <div className="bg-white shadow-xl max-w-2xl w-full p-8 sm:p-12 text-slate-800 rounded-lg border border-slate-300 relative print:shadow-none print:border-none print:m-0 print:p-0">
            {/* Top Resume Header Ribbon styling */}
            <div className="border-b-4 border-sky-800 pb-6 mb-6">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-sky-950 tracking-tight uppercase">
                ANIKET KUMAR GUPTA
              </h1>
              <div className="text-sm font-semibold text-sky-800 mt-1">
                English Graduate | Computer & Communication Skills
              </div>

              {/* Contact Bar */}
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-600 font-medium">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-sky-700" />
                  +91 6392001167
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-sky-700" />
                  ianmolgupta11@gmail.com
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-700" />
                  Kushinagar, Uttar Pradesh
                </span>
              </div>
            </div>

            {/* Section 1: Professional Summary */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2 pb-1 border-b-2 border-sky-200">
                <div className="w-2.5 h-2.5 bg-sky-800 rounded-sm" />
                <h2 className="text-xs font-extrabold uppercase tracking-wider text-sky-950">
                  PROFESSIONAL SUMMARY
                </h2>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed text-justify">
                {PORTFOLIO_DATA.summary.paragraph}
              </p>
            </div>

            {/* Section 2: Core Skills */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3 pb-1 border-b-2 border-sky-200">
                <div className="w-2.5 h-2.5 bg-sky-800 rounded-sm" />
                <h2 className="text-xs font-extrabold uppercase tracking-wider text-sky-950">
                  CORE SKILLS
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-2.5 rounded bg-slate-50 border border-slate-200/80">
                  <div className="font-bold text-sky-950 mb-0.5">Computer Skills</div>
                  <div className="text-slate-600">MS Office, Advanced Excel, Data Management</div>
                </div>
                <div className="p-2.5 rounded bg-slate-50 border border-slate-200/80">
                  <div className="font-bold text-sky-950 mb-0.5">Communication</div>
                  <div className="text-slate-600">English Communication, Verbal and Written Communication</div>
                </div>
                <div className="p-2.5 rounded bg-slate-50 border border-slate-200/80">
                  <div className="font-bold text-sky-950 mb-0.5">Technical Skills</div>
                  <div className="text-slate-600">Basic AI Tools, Web Technologies, Computer Applications</div>
                </div>
                <div className="p-2.5 rounded bg-slate-50 border border-slate-200/80">
                  <div className="font-bold text-sky-950 mb-0.5">Professional Skills</div>
                  <div className="text-slate-600">Teamwork, Time Management, Problem-Solving, Organization</div>
                </div>
              </div>
            </div>

            {/* Section 3: Education */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3 pb-1 border-b-2 border-sky-200">
                <div className="w-2.5 h-2.5 bg-sky-800 rounded-sm" />
                <h2 className="text-xs font-extrabold uppercase tracking-wider text-sky-950">
                  EDUCATION
                </h2>
              </div>
              <div className="space-y-3 text-xs">
                {/* MSW */}
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-bold text-sky-950">Master of Social Work (MSW)</div>
                    <div className="text-slate-600">Uttar Pradesh Rajarshi Tandon Open University</div>
                  </div>
                  <div className="text-right font-medium text-sky-800 bg-sky-50 px-2 py-0.5 rounded">
                    Pursuing — First Year
                  </div>
                </div>

                {/* B.A. */}
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-bold text-sky-950">Bachelor of Arts (B.A.) — English</div>
                    <div className="text-slate-600">Deen Dayal Upadhyaya Gorakhpur University</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-slate-800">2023</div>
                    <div className="text-[11px] text-slate-500">Graduated with Honours in English</div>
                  </div>
                </div>

                {/* Class XII */}
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-bold text-sky-950">Class XII (Intermediate)</div>
                    <div className="text-slate-600">Uttar Pradesh Madhyamik Shiksha Board</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-slate-800">2020</div>
                    <div className="text-[11px] text-slate-500">70% | Mathematics Stream</div>
                  </div>
                </div>

                {/* Class X */}
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-bold text-sky-950">Class X (High School)</div>
                    <div className="text-slate-600">Uttar Pradesh Madhyamik Shiksha Board</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-slate-800">2018</div>
                    <div className="text-[11px] text-slate-500">80%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Certifications & Achievements */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3 pb-1 border-b-2 border-sky-200">
                <div className="w-2.5 h-2.5 bg-sky-800 rounded-sm" />
                <h2 className="text-xs font-extrabold uppercase tracking-wider text-sky-950">
                  CERTIFICATIONS & ACHIEVEMENTS
                </h2>
              </div>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-700 mt-1.5 shrink-0" />
                  <span><strong>Assistant Bookkeeper</strong> — RSETI Certification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-700 mt-1.5 shrink-0" />
                  <span><strong>Advanced Excel</strong> — Certification (2024)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-700 mt-1.5 shrink-0" />
                  <span><strong>Computer Olympiad</strong> — Secured 1st Rank (2019)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-700 mt-1.5 shrink-0" />
                  <span><strong>CCC (Course on Computer Concepts)</strong> — NIELIT Certification (2024)</span>
                </li>
              </ul>
            </div>

            {/* Section 5: Career Objective */}
            <div>
              <div className="flex items-center gap-2 mb-2 pb-1 border-b-2 border-sky-200">
                <div className="w-2.5 h-2.5 bg-sky-800 rounded-sm" />
                <h2 className="text-xs font-extrabold uppercase tracking-wider text-sky-950">
                  CAREER OBJECTIVE
                </h2>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed text-justify">
                {PORTFOLIO_DATA.careerObjective}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
