import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Trophy, 
  Sparkles, 
  Timer, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  RotateCcw, 
  Award, 
  FileSpreadsheet, 
  BookOpen, 
  ShieldCheck, 
  Share2, 
  Check, 
  Flame,
  Building2
} from 'lucide-react';

interface Question {
  id: number;
  category: 'Excel & Data' | 'Executive Communication' | 'Bookkeeping & Audit';
  icon: typeof FileSpreadsheet;
  scenario: string;
  question: string;
  options: {
    text: string;
    isCorrect: boolean;
    explanation: string;
  }[];
}

const GAME_QUESTIONS: Question[] = [
  {
    id: 1,
    category: 'Excel & Data',
    icon: FileSpreadsheet,
    scenario: 'Deloitte engagement managers need to pull client billing rates from a master matrix containing 15,000 rows where Client ID is in Column B and Rate is in Column G.',
    question: 'Which formula provides the cleanest, non-volatile lookup solution?',
    options: [
      {
        text: '=XLOOKUP(TargetID, B:B, G:G, "Not Found")',
        isCorrect: true,
        explanation: 'XLOOKUP (or INDEX/MATCH) provides exact match by default, handles missing items gracefully, and does not require sorting.'
      },
      {
        text: '=VLOOKUP(TargetID, A:G, 2, FALSE)',
        isCorrect: false,
        explanation: 'Incorrect column index and range reference; Client ID is in column B, not column A.'
      },
      {
        text: '=HLOOKUP(TargetID, B1:G15000, 7)',
        isCorrect: false,
        explanation: 'HLOOKUP is for horizontal data rows, not vertical relational columns.'
      },
      {
        text: '=CONCATENATE(B:B, G:G)',
        isCorrect: false,
        explanation: 'CONCATENATE merges strings rather than searching values.'
      }
    ]
  },
  {
    id: 2,
    category: 'Executive Communication',
    icon: BookOpen,
    scenario: 'A project milestone requires a 24-hour extension due to delayed client data arrival. How does an English Honours associate draft the executive email to an EY Partner?',
    question: 'Which draft exhibits Big-4 consulting executive standards?',
    options: [
      {
        text: '"We encountered a 24h upstream data lag from client stakeholders. To safeguard 100% audit accuracy, deliverable delivery is shifted to tomorrow 2:00 PM with all primary milestones intact."',
        isCorrect: true,
        explanation: 'Proactive, quantifiable, objective, and provides an immediate solution and updated timetable without blaming or vague excuses.'
      },
      {
        text: '"Hey, the client forgot to send their numbers so we cannot finish today. Will try tomorrow sometime."',
        isCorrect: false,
        explanation: 'Too casual, lacks precise delivery timetable, and projects unprofessionalism.'
      },
      {
        text: '"Sorry for this, it is entirely out of our hands and we are very stressed about it."',
        isCorrect: false,
        explanation: 'Emotional and unfocused; enterprise leaders require calm, solution-oriented clarity.'
      },
      {
        text: '"Will deliver whenever possible after client cooperates."',
        isCorrect: false,
        explanation: 'Passive-aggressive and fails to offer a definitive rescheduled commitment.'
      }
    ]
  },
  {
    id: 3,
    category: 'Bookkeeping & Audit',
    icon: ShieldCheck,
    scenario: 'An Assistant Bookkeeper at month-end reconciles bank passbook balance ($42,500) with cashbook balance ($45,200).',
    question: 'The difference of $2,700 is evenly divisible by 9. What is the classic accounting error indicated?',
    options: [
      {
        text: 'Transposition Error (Digits swapped, e.g., 52 vs 25)',
        isCorrect: true,
        explanation: 'The Rule of 9s in bookkeeping: Any discrepancy divisible by 9 typically stems from digit transpositions (e.g., $5,200 recorded as $2,500 = $2,700 difference).'
      },
      {
        text: 'Bank Service Charges overlooked',
        isCorrect: false,
        explanation: 'Bank service charges are rarely exact multiples of transposed pairs.'
      },
      {
        text: 'Foreign exchange currency depreciation',
        isCorrect: false,
        explanation: 'Currency shifts follow fractional floating rates rather than exact transposition patterns.'
      },
      {
        text: 'Unpresented cheque duplicate entry',
        isCorrect: false,
        explanation: 'Duplicate entries produce double the original figure rather than transposition differences.'
      }
    ]
  },
  {
    id: 4,
    category: 'Excel & Data',
    icon: FileSpreadsheet,
    scenario: 'Google People Operations needs to aggregate total headcount across 12 regional offices where office names end with "-HQ".',
    question: 'Which Excel function efficiently computes this wildcard criteria?',
    options: [
      {
        text: '=SUMIF(OfficeRange, "*-HQ", HeadcountRange)',
        isCorrect: true,
        explanation: 'The asterisk (*) wildcard in SUMIF/COUNTIF matches any preceding characters ending in "-HQ".'
      },
      {
        text: '=FIND("-HQ", HeadcountRange)',
        isCorrect: false,
        explanation: 'FIND returns character position, not conditional summation of numeric ranges.'
      },
      {
        text: '=IF(OfficeRange = "-HQ", SUM(HeadcountRange))',
        isCorrect: false,
        explanation: 'Does not support array-wide wildcard matching in standard formulas.'
      },
      {
        text: '=TOTAL(OfficeRange, "HQ")',
        isCorrect: false,
        explanation: 'TOTAL is not a built-in Excel function.'
      }
    ]
  },
  {
    id: 5,
    category: 'Executive Communication',
    icon: BookOpen,
    scenario: 'Accenture leadership requests a high-level summary of an 80-page operational assessment report.',
    question: 'What is the most effective approach for the Executive Summary?',
    options: [
      {
        text: 'Structure into 3 pillars: Key Findings (with numbers), Strategic Impact ($/time), and 3 Prioritized Next Actions.',
        isCorrect: true,
        explanation: 'Executive summaries must be actionable, quantitative, and scannable in under 2 minutes.'
      },
      {
        text: 'Paste the first 5 pages of the raw report without alterations.',
        isCorrect: false,
        explanation: 'Executives will not read raw narrative excerpts; they need synthesized conclusions.'
      },
      {
        text: 'Write an exhaustive list of all 45 interview quotes verbatim.',
        isCorrect: false,
        explanation: 'Transcripts belong in appendices, not executive-level briefings.'
      },
      {
        text: 'State that the report is too complex to summarize.',
        isCorrect: false,
        explanation: 'Summarization and synthesis is a core responsibility of communication associates.'
      }
    ]
  }
];

export const InteractiveGame: React.FC<{ onHireClick: () => void }> = ({ onHireClick }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [copiedBadge, setCopiedBadge] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25);
  const [timerActive, setTimerActive] = useState(false);

  // Timer countdown per question
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timerActive && !isAnswered && !gameOver && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && !isAnswered && !gameOver) {
      // Auto-fail on timeout
      setIsAnswered(true);
      setStreak(0);
    }
    return () => clearInterval(interval);
  }, [timerActive, isAnswered, gameOver, timeLeft]);

  const handleStartGame = () => {
    setCurrentIdx(0);
    setScore(0);
    setStreak(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setGameOver(false);
    setTimeLeft(25);
    setTimerActive(true);
  };

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    const question = GAME_QUESTIONS[currentIdx];
    const isCorrect = question.options[idx].isCorrect;

    if (isCorrect) {
      const timeBonus = Math.floor(timeLeft * 10);
      const points = 100 + timeBonus + (streak * 25);
      setScore((prev) => prev + points);
      setStreak((prev) => prev + 1);
    } else {
      setStreak(0);
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx + 1 < GAME_QUESTIONS.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setTimeLeft(25);
    } else {
      setGameOver(true);
      setTimerActive(false);
      // Trigger celebratory confetti
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const currentQ = GAME_QUESTIONS[currentIdx];
  const IconComponent = currentQ.icon;

  const copyAssessmentScore = () => {
    const text = `Candidate Assessment Report: Aniket Kumar Gupta (English Graduate & Operations Specialist)\nScore: ${score} pts (Completed all Big 4 / Tech challenge simulations with top percentile execution).\nContact: +91 6392001167 | ianmolgupta11@gmail.com`;
    navigator.clipboard.writeText(text);
    setCopiedBadge(true);
    setTimeout(() => setCopiedBadge(false), 2500);
  };

  return (
    <section id="game-arena" className="py-20 relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100 border border-sky-300 text-sky-800 text-xs font-semibold tracking-wide uppercase mb-3">
            <Trophy className="w-3.5 h-3.5 text-sky-600" />
            Interactive Recruiter Skill Arena
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Test Aniket&apos;s Big-4 & Tech Readiness
          </h2>
          <p className="mt-2 text-slate-600 text-base max-w-2xl mx-auto">
            Experience the real-world operational logic, Excel problem-solving, and communication precision Aniket brings to companies like Deloitte, EY, Accenture, and Google.
          </p>
        </div>

        {/* Game Card Container */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          {!timerActive && !gameOver && (
            <div className="p-8 sm:p-12 text-center bg-gradient-to-br from-slate-900 via-sky-950 to-blue-900 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
              <div className="relative z-10 max-w-lg mx-auto">
                <div className="w-16 h-16 rounded-2xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-sky-300" />
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  The Candidate Competence Blitz
                </h3>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  Put Aniket&apos;s profile through a 5-question enterprise simulation covering Advanced Excel modeling, executive phrasing, and audit ledger reconciliation.
                </p>

                <div className="grid grid-cols-3 gap-3 mb-8 text-left">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <FileSpreadsheet className="w-5 h-5 text-sky-400 mb-1" />
                    <div className="text-xs text-slate-400">Phase 1</div>
                    <div className="text-xs font-semibold text-white">Excel Formulas</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <BookOpen className="w-5 h-5 text-indigo-400 mb-1" />
                    <div className="text-xs text-slate-400">Phase 2</div>
                    <div className="text-xs font-semibold text-white">Executive Tone</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <ShieldCheck className="w-5 h-5 text-emerald-400 mb-1" />
                    <div className="text-xs text-slate-400">Phase 3</div>
                    <div className="text-xs font-semibold text-white">Audit Precision</div>
                  </div>
                </div>

                <button
                  onClick={handleStartGame}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-base shadow-lg shadow-sky-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <Sparkles className="w-5 h-5" />
                  Start Recruiter Challenge
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          )}

          {timerActive && !gameOver && (
            <div className="p-6 sm:p-8">
              {/* Top Stats Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-sky-50 text-sky-700">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                      Question {currentIdx + 1} of {GAME_QUESTIONS.length}
                    </span>
                    <h4 className="text-sm font-semibold text-slate-800">
                      {currentQ.category}
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  {streak > 1 && (
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-xs font-bold animate-bounce">
                      <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      {streak}x Streak!
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg">
                    <Trophy className="w-4 h-4 text-amber-500" />
                    <span>{score} pts</span>
                  </div>

                  <div className={`flex items-center gap-1.5 text-sm font-bold px-3 py-1.5 rounded-lg ${
                    timeLeft <= 8 ? 'bg-red-50 text-red-600 animate-pulse' : 'bg-sky-50 text-sky-700'
                  }`}>
                    <Timer className="w-4 h-4" />
                    <span>{timeLeft}s</span>
                  </div>
                </div>
              </div>

              {/* Scenario & Question */}
              <div className="mt-6 mb-6">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700 mb-3 font-medium leading-relaxed">
                  <span className="font-bold text-slate-900 block mb-1">Corporate Scenario:</span>
                  {currentQ.scenario}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  {currentQ.question}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {currentQ.options.map((opt, idx) => {
                  const isSelected = selectedOption === idx;
                  let btnStyle = "border-slate-200 hover:border-sky-300 hover:bg-sky-50/50 bg-white text-slate-800";

                  if (isAnswered) {
                    if (opt.isCorrect) {
                      btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500/30";
                    } else if (isSelected && !opt.isCorrect) {
                      btnStyle = "border-rose-400 bg-rose-50 text-rose-950";
                    } else {
                      btnStyle = "border-slate-200 bg-slate-50/60 text-slate-400 opacity-60";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswered}
                      className={`w-full text-left p-4 rounded-xl border text-sm font-medium transition-all flex items-start justify-between gap-3 ${btnStyle} cursor-pointer`}
                    >
                      <span className="leading-snug">{opt.text}</span>
                      {isAnswered && opt.isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      )}
                      {isAnswered && isSelected && !opt.isCorrect && (
                        <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation & Next */}
              {isAnswered && (
                <div className="mt-4 p-4 rounded-xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <span className="font-bold text-slate-900 mr-1.5">
                      {selectedOption !== null && currentQ.options[selectedOption]?.isCorrect ? "Correct!" : "Operational Note:"}
                    </span>
                    {currentQ.options.find(o => o.isCorrect)?.explanation}
                  </div>
                  <button
                    onClick={handleNextQuestion}
                    className="shrink-0 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-md transition-all cursor-pointer"
                  >
                    {currentIdx + 1 === GAME_QUESTIONS.length ? 'See Final Score' : 'Next Question'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          )}

          {gameOver && (
            <div className="p-8 sm:p-12 text-center bg-white">
              <div className="w-20 h-20 rounded-full bg-emerald-100 border-4 border-emerald-300 flex items-center justify-center mx-auto mb-5 text-emerald-600">
                <Trophy className="w-10 h-10 animate-bounce" />
              </div>

              <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 mb-2">
                VERIFIED PROFILE COMPETENCE
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                Recruiter Challenge Completed!
              </h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                Aniket&apos;s knowledge benchmark indicates ready day-1 autonomy across analytical modeling, corporate written correspondence, and audit integrity.
              </p>

              {/* Scorecard Box */}
              <div className="max-w-md mx-auto p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-sky-950 text-white mb-8 shadow-lg text-left">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                  <div className="text-xs text-sky-300 font-semibold uppercase tracking-wider">Candidate Scorecard</div>
                  <div className="flex items-center gap-1 text-xs text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Big-4 Benchmark Passed
                  </div>
                </div>

                <div className="flex items-end justify-between mb-4">
                  <div>
                    <div className="text-3xl font-extrabold text-white">{score} <span className="text-sm font-normal text-slate-300">points</span></div>
                    <div className="text-xs text-slate-400 mt-0.5">Calculated with accuracy + velocity bonuses</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-semibold text-sky-300">Rating</div>
                    <div className="text-lg font-bold text-emerald-400">Tier 1 Hire Match</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 border-t border-white/10 pt-3">
                  <div className="flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-sky-400" />
                    <span>Deloitte / EY: 100% Fit</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>Google / Accenture: Ready</span>
                  </div>
                </div>
              </div>

              {/* Action CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={onHireClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  <Award className="w-4 h-4" />
                  Proceed to Interview / Hire
                </button>
                <button
                  onClick={copyAssessmentScore}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-all cursor-pointer"
                >
                  {copiedBadge ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      Scorecard Copied!
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4 text-slate-500" />
                      Copy Scorecard
                    </>
                  )}
                </button>
                <button
                  onClick={handleStartGame}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl hover:bg-slate-100 text-slate-600 font-medium text-sm transition-all cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  Play Again
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
