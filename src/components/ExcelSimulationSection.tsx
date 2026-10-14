import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  Search, 
  Filter, 
  ArrowUpDown, 
  CheckCircle, 
  Calculator, 
  Sparkles, 
  BookOpen, 
  Copy, 
  Check, 
  ShieldCheck,
  TrendingUp,
  Layers
} from 'lucide-react';

interface MockRow {
  id: string;
  engagement: string;
  practice: 'Consulting' | 'Audit & Assurance' | 'Tax & Regulatory' | 'Digital Ops';
  leadPartner: string;
  budgetUSD: number;
  actualUSD: number;
  varianceUSD: number;
  status: 'On Target' | 'Under Budget' | 'Requires Review';
}

const INITIAL_DATA: MockRow[] = [
  { id: 'DEL-2024-08', engagement: 'Global Supply Chain Modernization', practice: 'Consulting', leadPartner: 'S. Mehta', budgetUSD: 240000, actualUSD: 228500, varianceUSD: -11500, status: 'Under Budget' },
  { id: 'EY-2024-19', engagement: 'Enterprise Statutory Audit & IFRS', practice: 'Audit & Assurance', leadPartner: 'R. Kapoor', budgetUSD: 185000, actualUSD: 184200, varianceUSD: -800, status: 'On Target' },
  { id: 'ACC-2024-03', engagement: 'Workforce Cloud Migration Analytics', practice: 'Digital Ops', leadPartner: 'A. Verma', budgetUSD: 310000, actualUSD: 332000, varianceUSD: 22000, status: 'Requires Review' },
  { id: 'GOOG-2024-41', engagement: 'Customer Operations Metric Standardization', practice: 'Digital Ops', leadPartner: 'K. Sharma', budgetUSD: 150000, actualUSD: 147800, varianceUSD: -2200, status: 'On Target' },
  { id: 'DEL-2024-92', engagement: 'Cross-Border Indirect Tax Compliance', practice: 'Tax & Regulatory', leadPartner: 'V. Joshi', budgetUSD: 95000, actualUSD: 91500, varianceUSD: -3500, status: 'Under Budget' },
  { id: 'EY-2024-77', engagement: 'Risk Control Framework Transformation', practice: 'Consulting', leadPartner: 'P. Nair', budgetUSD: 215000, actualUSD: 219000, varianceUSD: 4000, status: 'Requires Review' },
];

export const ExcelSimulationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'excel' | 'memo' | 'audit'>('excel');
  const [selectedPractice, setSelectedPractice] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFormula, setSelectedFormula] = useState<string | null>(null);

  // Memo generator state
  const [memoTopic, setMemoTopic] = useState<'delay' | 'audit' | 'savings'>('savings');
  const [copiedMemo, setCopiedMemo] = useState(false);

  // Filtered dataset
  const filteredRows = INITIAL_DATA.filter((row) => {
    const matchesPractice = selectedPractice === 'All' || row.practice === selectedPractice;
    const matchesSearch = row.engagement.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          row.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          row.leadPartner.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesPractice && matchesSearch;
  });

  const totalBudget = filteredRows.reduce((acc, r) => acc + r.budgetUSD, 0);
  const totalActual = filteredRows.reduce((acc, r) => acc + r.actualUSD, 0);
  const totalVariance = filteredRows.reduce((acc, r) => acc + r.varianceUSD, 0);

  const memoTemplates = {
    savings: {
      subject: "Executive Summary: Q3 Workflow Automation & 14.8% Operational Cost Optimization",
      recipient: "Engagement Partners & Practice Directors",
      body: `Dear Leadership Team,

Following the deployment of our automated data validation pipeline, this memorandum outlines quantifiable milestones achieved across Q3 operations:

1. Operational Efficiency: Data compilation turnaround accelerated by 35% through standardized Excel lookup arrays and automated macro routines.
2. Financial Impact: Gross actual spend finished at $863,000 against a sanctioned allocation of $890,000, realizing a net $27,000 (3.03%) operational surplus.
3. Quality Assurance: Reconciliations achieved 100% first-pass accuracy with zero audit discrepancies across 6,400+ ledger line items.

Recommendation: We recommend scaling this automated reconciliation template across adjacent regional engagements for Q4.

Prepared with diligence,
Aniket Kumar Gupta | Operations & Data Specialist`
    },
    delay: {
      subject: "Proactive Advisory Notice: 24-Hour Deliverable Calibration for Regulatory Filing",
      recipient: "Client Managing Director & Audit Steering Committee",
      body: `Dear Stakeholders,

During preliminary variance reconciliation of client subsidiary statements, our team identified an upstream source data transposition of $2,700 within the Q2 journal extracts.

To ensure 100% compliance with statutory guidelines:
• Impacted Stream: Fixed Asset Schedule & Depreciation Register
• Action Taken: Automated parity audit executed; source entries isolated and reconciled.
• Updated Timetable: Final deliverable pack will be transmitted tomorrow at 14:00 hrs IST, fully verified and sign-off ready.

All downstream delivery milestones remain uncompromised. Thank you for your continued partnership.

Sincerely,
Aniket Kumar Gupta | Engagement Communications Lead`
    },
    audit: {
      subject: "Internal Control & Assistant Bookkeeper Reconciliation Sign-Off (RSETI Benchmark)",
      recipient: "Senior Finance Controller",
      body: `MEMORANDUM FOR RECORD

SUBJECT: Monthly Bank Reconciliation & Cashbook Parity Audit
AUDIT PERIOD: Current Operating Month
STATUS: FULLY RECONCILED (ZERO UNEXPLAINED VARIANCE)

Audit Highlights:
• Passbook Closing Balance: Verified against official bank transcript.
• Cashbook General Ledger Balance: Cross-referenced with physical cash vouchers.
• Outstanding Timing Adjustments: 2 cheques totaling $1,450 deposited prior to month-end, cleared on Day 2 of subsequent cycle.
• Compliance Rating: 100% compliant with standard RSETI double-entry bookkeeping controls.

Sign-off verified,
Aniket Kumar Gupta | Certified Assistant Bookkeeper`
    }
  };

  const handleCopyMemo = () => {
    const memo = memoTemplates[memoTopic];
    navigator.clipboard.writeText(`SUBJECT: ${memo.subject}\nTO: ${memo.recipient}\n\n${memo.body}`);
    setCopiedMemo(true);
    setTimeout(() => setCopiedMemo(false), 2000);
  };

  return (
    <section id="proof-of-work" className="py-20 relative bg-slate-50 border-y border-slate-200/80 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-blue-600" />
            Applied Enterprise Proof-of-Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Live Operational Sandbox
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Inspect the exact deliverables Aniket produces: Advanced Excel financial models, executive correspondence memos, and audit reconciliations.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <button
              onClick={() => setActiveTab('excel')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'excel'
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Advanced Excel Dashboard</span>
            </button>
            <button
              onClick={() => setActiveTab('memo')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'memo'
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Executive English Prose</span>
            </button>
            <button
              onClick={() => setActiveTab('audit')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'audit'
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Bookkeeping & Audit Controls</span>
            </button>
          </div>
        </div>

        {/* TAB 1: Advanced Excel Dashboard */}
        {activeTab === 'excel' && (
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            {/* Excel Ribbon Simulation */}
            <div className="bg-emerald-800 text-white px-5 py-3 flex flex-wrap items-center justify-between gap-3 border-b border-emerald-900">
              <div className="flex items-center gap-3">
                <FileSpreadsheet className="w-5 h-5 text-emerald-300" />
                <span className="font-bold text-sm tracking-wide">
                  Corporate_Engagements_Consolidation_Model_2024.xlsx
                </span>
                <span className="text-[11px] bg-emerald-700/80 px-2 py-0.5 rounded font-mono">
                  [Read/Write Simulation]
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-emerald-200">
                <span>Formulas Active:</span>
                <span className="font-mono bg-emerald-950/60 px-2 py-0.5 rounded text-emerald-300">
                  XLOOKUP, SUMIFS, CONDITIONAL_FORMAT
                </span>
              </div>
            </div>

            {/* Formula Bar */}
            <div className="bg-slate-100 border-b border-slate-200 px-5 py-2.5 flex items-center gap-3 text-xs font-mono">
              <span className="font-bold text-slate-500 bg-white px-2 py-1 rounded border border-slate-300">
                fx
              </span>
              <span className="text-slate-800 flex-1 truncate">
                {selectedFormula || '=XLOOKUP(TargetID, EngagementMaster!A:A, EngagementMaster!G:G, "0.00")'}
              </span>
              <span className="text-slate-400 text-[11px] hidden sm:inline">
                Click any cell or row to inspect formula logic
              </span>
            </div>

            {/* KPI Summary Cards */}
            <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-50 border-b border-slate-200">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="text-xs text-slate-500 font-semibold uppercase">Total Sanctioned Budget</div>
                <div className="text-2xl font-black text-slate-900 mt-1 font-mono-code">
                  ${totalBudget.toLocaleString()}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">Across {filteredRows.length} active workstreams</div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="text-xs text-slate-500 font-semibold uppercase">Actual Realized Spend</div>
                <div className="text-2xl font-black text-slate-900 mt-1 font-mono-code">
                  ${totalActual.toLocaleString()}
                </div>
                <div className="text-[11px] text-emerald-600 font-medium mt-0.5">Automated ledger import</div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="text-xs text-slate-500 font-semibold uppercase">Net Variance (Surplus / Deficit)</div>
                <div className={`text-2xl font-black mt-1 font-mono-code ${
                  totalVariance <= 0 ? 'text-emerald-600' : 'text-amber-600'
                }`}>
                  {totalVariance > 0 ? '+' : ''}${totalVariance.toLocaleString()}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {totalVariance <= 0 ? 'Cost control benchmark achieved' : 'Variance alert flagged for review'}
                </div>
              </div>
            </div>

            {/* Interactive Filters */}
            <div className="p-5 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 bg-white">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-600 flex items-center gap-1 mr-1">
                  <Filter className="w-3.5 h-3.5" />
                  Practice Filter:
                </span>
                {['All', 'Consulting', 'Audit & Assurance', 'Tax & Regulatory', 'Digital Ops'].map((practice) => (
                  <button
                    key={practice}
                    onClick={() => setSelectedPractice(practice)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      selectedPractice === practice
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {practice}
                  </button>
                ))}
              </div>

              <div className="relative min-w-[220px]">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter engagement or partner..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 rounded-lg border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
            </div>

            {/* Excel Data Grid */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-100 text-slate-600 font-semibold uppercase tracking-wider border-b border-slate-200">
                    <th className="py-3 px-4 w-12 text-center">Row</th>
                    <th className="py-3 px-4">Engagement ID</th>
                    <th className="py-3 px-4">Client Project / Scope</th>
                    <th className="py-3 px-4">Practice Line</th>
                    <th className="py-3 px-4">Lead</th>
                    <th className="py-3 px-4 text-right">Budget (USD)</th>
                    <th className="py-3 px-4 text-right">Actual (USD)</th>
                    <th className="py-3 px-4 text-right">Variance</th>
                    <th className="py-3 px-4 text-center">Audit Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredRows.map((row, idx) => (
                    <tr
                      key={row.id}
                      onClick={() => setSelectedFormula(`=IF(ActualUSD > BudgetUSD, "Requires Review", "On Target") [Row ${idx + 2}: ${row.id}]`)}
                      className="hover:bg-sky-50/60 transition-colors cursor-pointer group"
                    >
                      <td className="py-3 px-4 text-center text-slate-400 font-mono bg-slate-50/50 group-hover:bg-sky-100/50">
                        {idx + 1}
                      </td>
                      <td className="py-3 px-4 font-mono font-bold text-sky-900">
                        {row.id}
                      </td>
                      <td className="py-3 px-4 font-medium text-slate-900">
                        {row.engagement}
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        <span className="px-2 py-0.5 rounded-md bg-slate-100 font-medium text-[11px]">
                          {row.practice}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        {row.leadPartner}
                      </td>
                      <td className="py-3 px-4 text-right font-mono text-slate-800">
                        ${row.budgetUSD.toLocaleString()}
                      </td>
                      <td className="py-3 px-4 text-right font-mono text-slate-800 font-medium">
                        ${row.actualUSD.toLocaleString()}
                      </td>
                      <td className={`py-3 px-4 text-right font-mono font-bold ${
                        row.varianceUSD <= 0 ? 'text-emerald-600' : 'text-rose-600'
                      }`}>
                        {row.varianceUSD > 0 ? '+' : ''}${row.varianceUSD.toLocaleString()}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                          row.status === 'On Target'
                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                            : row.status === 'Under Budget'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-amber-50 text-amber-700 border border-amber-200'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            row.status === 'Under Budget' ? 'bg-emerald-500' : row.status === 'On Target' ? 'bg-blue-500' : 'bg-amber-500'
                          }`} />
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Excel Status Bar */}
            <div className="bg-slate-100 px-5 py-2.5 border-t border-slate-200 flex flex-wrap items-center justify-between text-[11px] text-slate-500">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" /> Ready
                </span>
                <span>Filtered Count: {filteredRows.length} of {INITIAL_DATA.length}</span>
              </div>
              <div className="flex items-center gap-4 font-mono">
                <span>SUM = ${totalActual.toLocaleString()}</span>
                <span>AVERAGE = ${(totalActual / (filteredRows.length || 1)).toFixed(0)}</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Executive English Prose */}
        {activeTab === 'memo' && (
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="bg-slate-900 text-white p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs text-sky-400 font-bold uppercase tracking-wider">
                    English Honours (B.A.) In Practice
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    Corporate Prose & Executive Memorandums
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyMemo}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold transition-all cursor-pointer"
                  >
                    {copiedMemo ? <Check className="w-4 h-4 text-emerald-900" /> : <Copy className="w-4 h-4" />}
                    {copiedMemo ? 'Copied to Clipboard!' : 'Copy Template'}
                  </button>
                </div>
              </div>
              <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
                Demonstrating clear, disciplined communication expected by Big-4 advisory and enterprise leaders — no fluff, quantified findings, and definitive ownership.
              </p>

              {/* Scenario selector */}
              <div className="mt-6 flex flex-wrap gap-2">
                <button
                  onClick={() => setMemoTopic('savings')}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    memoTopic === 'savings'
                      ? 'bg-sky-500 text-slate-950 font-bold'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Scenario A: Q3 Operational Savings Memo
                </button>
                <button
                  onClick={() => setMemoTopic('delay')}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    memoTopic === 'delay'
                      ? 'bg-sky-500 text-slate-950 font-bold'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Scenario B: Client Deliverable Calibration
                </button>
                <button
                  onClick={() => setMemoTopic('audit')}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    memoTopic === 'audit'
                      ? 'bg-sky-500 text-slate-950 font-bold'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Scenario C: Internal Bookkeeping Sign-Off
                </button>
              </div>
            </div>

            {/* Memo Document Body */}
            <div className="p-6 sm:p-10 bg-slate-50 font-mono-code text-xs sm:text-sm text-slate-800 border-t border-slate-200">
              <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-slate-200 space-y-4">
                <div className="border-b border-slate-200 pb-4 space-y-1 text-xs text-slate-600">
                  <div><strong className="text-slate-900">SUBJECT:</strong> {memoTemplates[memoTopic].subject}</div>
                  <div><strong className="text-slate-900">TO:</strong> {memoTemplates[memoTopic].recipient}</div>
                  <div><strong className="text-slate-900">FROM:</strong> Aniket Kumar Gupta (Operations & Communication)</div>
                  <div><strong className="text-slate-900">DATE:</strong> October 2024 / Q4 Operating Cycle</div>
                </div>
                <div className="whitespace-pre-line leading-relaxed font-sans text-slate-800 text-sm">
                  {memoTemplates[memoTopic].body}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Bookkeeping & Audit Controls */}
        {activeTab === 'audit' && (
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-10">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-emerald-700 tracking-wider">
                    RSETI Certified Standard
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">
                    Assistant Bookkeeper Internal Control Matrix
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-sm text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    General Ledger & Cashbook Verification
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                      <span><strong>Voucher Cross-Verification:</strong> Sequential inspection of debit and credit vouchers against supporting invoices.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                      <span><strong>Bank Reconciliation Statements (BRS):</strong> Identifying timing differences, uncleared deposits, and bank interest accruals.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                      <span><strong>Transposition Detection:</strong> Application of mathematical divisibility checks to catch inverted digits instantly.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-sm text-slate-900 mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-sky-600" />
                    Enterprise Value for Big 4 Firms
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 shrink-0" />
                      <span><strong>Deloitte / EY Audit Teams:</strong> Zero onboarding friction when reviewing trial balances and reconciling client ledgers.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 shrink-0" />
                      <span><strong>Accenture Operations:</strong> High accuracy in accounts receivable (AR) and accounts payable (AP) pipeline management.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 shrink-0" />
                      <span><strong>Google Vendor Management:</strong> Clean PO generation, receipt tracking, and vendor invoice reconciliation.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
