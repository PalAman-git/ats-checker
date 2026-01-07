'use client';

interface Props {
  score: number;
  matchedKeywords: string[];
  missingKeywords: string[];
}

export default function MatchScoreCard({
  score,
  matchedKeywords,
  missingKeywords,
}: Props) {
  return (
    <div className="bg-white/70 dark:bg-slate-800/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 
                    p-8 rounded-3xl shadow-2xl shadow-slate-200/50 dark:shadow-slate-900/50">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-black mb-2">ATS Score</h2>
        <div className="text-6xl font-black bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent">
          {score}%
        </div>
        <div className="w-full bg-slate-200/60 dark:bg-slate-700/60 rounded-full h-4 mt-4 overflow-hidden">
          <div 
            className="h-4 bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 shadow-lg rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${Math.min(score, 100)}%` }}
          />
        </div>
        <p className={`text-sm font-semibold mt-2 ${
          score >= 80 ? 'text-emerald-600' : score >= 60 ? 'text-amber-600' : 'text-red-600'
        }`}>
          {score >= 80 ? 'Excellent - Ready to submit!' : score >= 60 ? 'Good - Minor improvements needed' : 'Needs work'}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-bold text-emerald-700 dark:text-emerald-400 mb-4">
            ✓ Matched Keywords ({matchedKeywords.length})
          </h3>
          <div className="flex flex-wrap gap-2">
            {matchedKeywords.length ? (
              matchedKeywords.map((kw) => (
                <span
                  key={kw}
                  className="px-4 py-2 bg-emerald-100/80 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 
                           rounded-full text-sm font-medium border border-emerald-200/50 shadow-sm hover:scale-105 transition-transform"
                >
                  {kw}
                </span>
              ))
            ) : (
              <p className="text-slate-500 italic">No matches found</p>
            )}
          </div>
        </div>

        <div>
          <h3 className="flex items-center gap-2 text-lg font-bold text-red-600 dark:text-red-400 mb-4">
            ✗ Missing Keywords ({missingKeywords.length})
          </h3>
          <div className="flex flex-wrap gap-2">
            {missingKeywords.length ? (
              missingKeywords.map((kw) => (
                <span
                  key={kw}
                  className="px-4 py-2 bg-red-100/80 dark:bg-red-900/50 text-red-800 dark:text-red-200 
                           rounded-full text-sm font-medium border border-red-200/50 shadow-sm hover:scale-105 transition-transform"
                >
                  {kw}
                </span>
              ))
            ) : (
              <p className="text-emerald-500 font-semibold">All keywords matched! 🎉</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
