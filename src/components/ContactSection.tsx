import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  Building2, 
  Calendar, 
  MessageSquare,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactSectionProps {
  initialCompany?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialCompany = 'Deloitte' }) => {
  const [selectedFirm, setSelectedFirm] = useState(initialCompany);
  const [senderName, setSenderName] = useState('');
  const [senderOrg, setSenderOrg] = useState(initialCompany);
  const [senderRole, setSenderRole] = useState('Talent Acquisition / HR Partner');
  const [targetRoleTitle, setTargetRoleTitle] = useState('Operations & Data Associate');
  const [customNote, setCustomNote] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [sentStatus, setSentStatus] = useState(false);

  const firms = [
    { name: 'Deloitte', defaultRole: 'Tax / Audit Operations Analyst' },
    { name: 'EY', defaultRole: 'Assurance & Reporting Associate' },
    { name: 'Accenture', defaultRole: 'Digital Operations Specialist' },
    { name: 'Google', defaultRole: 'Customer & People Operations Coordinator' },
    { name: 'Other Leading Firm', defaultRole: 'Operations / Executive Associate' }
  ];

  const handleSelectFirm = (firm: string, role: string) => {
    setSelectedFirm(firm);
    setSenderOrg(firm === 'Other Leading Firm' ? '' : firm);
    setTargetRoleTitle(role);
  };

  const getEmailSubject = () => {
    return `Interview Invitation: ${targetRoleTitle} at ${senderOrg || 'Our Organization'} - Aniket Kumar Gupta`;
  };

  const getEmailBody = () => {
    return `Dear Aniket,

We have reviewed your profile and verified portfolio (including your 1st Rank Computer Olympiad, Advanced Excel certification, and English Honours communication foundation).

We would like to invite you for an initial screening round for the following position:
• Position: ${targetRoleTitle}
• Organization: ${senderOrg || selectedFirm}
• Recruiter / Hiring Lead: ${senderName || 'Talent Acquisition Team'} (${senderRole})

${customNote ? `Additional Note: ${customNote}\n\n` : ''}Please let us know your availability for an introductory discussion this week.

Best regards,
${senderName || 'Talent Acquisition Partner'}
${senderOrg || selectedFirm}`;
  };

  const handleLaunchEmailClient = () => {
    const mailto = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(getEmailSubject())}&body=${encodeURIComponent(getEmailBody())}`;
    window.location.href = mailto;
    setSentStatus(true);
    setTimeout(() => setSentStatus(false), 3000);
  };

  const handleCopyBody = () => {
    navigator.clipboard.writeText(`SUBJECT: ${getEmailSubject()}\n\n${getEmailBody()}`);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="contact" className="py-20 relative bg-white border-t border-slate-200/80 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 text-emerald-600" />
            Recruiter Fast-Track Portal
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Schedule an Interview with Aniket
          </h2>
          <p className="mt-2 text-slate-600 text-base">
            Generate an executive interview outreach email with 1-click or reach out directly via phone or email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            {/* Quick Contact Card */}
            <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-xl pointer-events-none" />

              <h3 className="text-lg font-bold text-white mb-1">
                Candidate Direct Access
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Direct contact channels for talent acquisition partners and hiring directors.
              </p>

              <div className="space-y-4">
                {/* Phone */}
                <a
                  href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-xs"
                >
                  <div className="p-2 rounded-lg bg-sky-500/20 text-sky-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Primary Contact / Mobile</div>
                    <div className="font-mono font-bold text-white text-sm">{PORTFOLIO_DATA.personal.phone}</div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-xs"
                >
                  <div className="p-2 rounded-lg bg-sky-500/20 text-sky-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] text-slate-400">Official Email</div>
                    <div className="font-bold text-white text-xs truncate">{PORTFOLIO_DATA.personal.email}</div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                  <div className="p-2 rounded-lg bg-sky-500/20 text-sky-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Base Location</div>
                    <div className="font-bold text-white">{PORTFOLIO_DATA.personal.location}</div>
                  </div>
                </div>
              </div>

              {/* Relocation badge */}
              <div className="mt-6 pt-5 border-t border-white/10 text-xs text-slate-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                <span>Open to immediate relocation across Pan-India hubs (Gurugram, Bengaluru, Mumbai, Hyderabad, Noida).</span>
              </div>
            </div>

            {/* Response Time Guarantee */}
            <div className="p-5 rounded-2xl bg-sky-50 border border-sky-200 text-xs text-sky-900 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold">HR Inquiry Response Guarantee:</strong>
                <span className="text-slate-600">
                  All corporate interview inquiries sent through this portal are monitored and answered within 2 to 4 business hours.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Pre-Configured Recruiter Outreach Composer (8 cols) */}
          <div className="lg:col-span-8 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Recruiter Outreach Dispatcher
            </h3>
            <p className="text-xs text-slate-600 mb-6">
              Customize or preview the outreach invitation before dispatching directly to Aniket.
            </p>

            {/* Fast Firm Preset Selector */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Select Your Organization:
              </label>
              <div className="flex flex-wrap gap-2">
                {firms.map((f) => (
                  <button
                    key={f.name}
                    type="button"
                    onClick={() => handleSelectFirm(f.name, f.defaultRole)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      selectedFirm === f.name
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {f.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Name / Hiring Lead
                </label>
                <input
                  type="text"
                  placeholder="e.g. Priya Sharma"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Target Role Title
                </label>
                <input
                  type="text"
                  placeholder="e.g. Operations Analyst"
                  value={targetRoleTitle}
                  onChange={(e) => setTargetRoleTitle(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
            </div>

            {/* Optional Note */}
            <div className="mb-6">
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Optional Message / Notes for Aniket
              </label>
              <textarea
                rows={3}
                placeholder="e.g. We have an opening on our advisory operations team in Gurugram and would like to conduct a 20-minute Zoom introductory round."
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
              />
            </div>

            {/* Email Preview Box */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 mb-6 text-xs text-slate-700 font-mono-code leading-relaxed">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 font-sans">
                Outreach Preview:
              </div>
              <div className="text-slate-900 font-bold mb-2">
                Subject: {getEmailSubject()}
              </div>
              <div className="whitespace-pre-line text-slate-600 font-sans text-xs bg-slate-50 p-3 rounded-lg border border-slate-100 max-h-48 overflow-y-auto">
                {getEmailBody()}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleLaunchEmailClient}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-sky-600/20 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Dispatch Email Invitation</span>
              </button>

              <button
                type="button"
                onClick={handleCopyBody}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-semibold text-xs transition-all cursor-pointer"
              >
                {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-500" />}
                <span>{copiedLink ? 'Text Copied!' : 'Copy Outreach Body'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
