import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  BookOpen, 
  Cpu, 
  Award, 
  CheckCircle2, 
  Sparkles,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);

  const iconMap: Record<string, typeof FileSpreadsheet> = {
    'FileSpreadsheet': FileSpreadsheet,
    'BookOpen': BookOpen,
    'Cpu': Cpu,
    'Award': Award
  };

  const categories = PORTFOLIO_DATA.skillCategories;
  const currentCategory = categories[activeCategoryIdx];

  return (
    <section id="skills" className="py-20 relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-sky-600" />
            Core Competency Breakdown
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Enterprise Skills & Practical Capabilities
          </h2>
          <p className="mt-2 text-slate-600 text-base">
            Detailed breakdown of technical, computational, and interpersonal capabilities with practical business execution value.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat, idx) => {
            const Icon = iconMap[cat.iconName] || Layers;
            const isSelected = activeCategoryIdx === idx;
            return (
              <button
                key={cat.title}
                onClick={() => setActiveCategoryIdx(idx)}
                className={`inline-flex items-center gap-2 px-4 sm:px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-sky-400' : 'text-slate-400'}`} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
          <div className="mb-8 pb-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                Category Focus
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">
                {currentCategory.title}
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                {currentCategory.description}
              </p>
            </div>
            <div className="text-xs bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-slate-600 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sky-500" />
              <span>Verified against real enterprise assignments</span>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentCategory.skills.map((skill, sIdx) => (
              <div 
                key={sIdx}
                className="p-5 rounded-2xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/80 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-base text-slate-900">
                      {skill.name}
                    </h4>
                    <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 font-mono">
                      {skill.level}% Competence
                    </span>
                  </div>

                  {/* Level progress bar */}
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden mb-3">
                    <div 
                      className="h-full bg-gradient-to-r from-sky-600 to-blue-600 rounded-full transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  <div className="text-xs font-semibold text-sky-900 mb-2 bg-sky-50 p-2 rounded-lg border border-sky-100">
                    <span className="text-slate-500 font-normal">Core Toolkit: </span>
                    {skill.highlight}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200/70 text-xs text-slate-600 flex items-start gap-1.5 mt-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    <strong className="text-slate-800">Business Utility:</strong> {skill.practicalUse}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
