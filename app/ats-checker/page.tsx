'use client';

import { useState, useCallback } from 'react';
import { Loader2, Upload, File } from 'lucide-react';  // ✅ Changed FileText to File
import PdfUploader from '@/components/PdfUploader';
import JobDescriptionInput from '@/components/JobDescriptionInput';
import MatchScoreCard from '@/components/MatchScoreCard';

import { extractPdfText } from '@/utils/extractPdfText';
import { calculateAtsScore } from '@/utils/calculateAtsScore';

export default function ATSCheckerPage() {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jdText, setJdText] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = useCallback(async () => {
    if (!resumeFile || !jdText.trim()) return;

    setLoading(true);
    try {
      const resumeText = await extractPdfText(resumeFile);
      const score = calculateAtsScore(resumeText, jdText);
      setResult(score);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [resumeFile, jdText]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black 
                    py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-2xl">
            ATS Resume Checker
          </h1>
          <p className="text-xl text-slate-300/90 max-w-2xl mx-auto leading-relaxed">
            Upload your resume and job description to get instant ATS compatibility score
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <PdfUploader onFileSelect={setResumeFile} file={resumeFile} />
          <JobDescriptionInput value={jdText} onTextChange={setJdText} />
        </div>

        <button
          onClick={handleAnalyze}
          disabled={!resumeFile || !jdText.trim() || loading}
          className={`
            group relative w-full py-6 px-8 rounded-2xl font-bold text-xl text-white
            bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:from-orange-600 hover:via-amber-600 hover:to-yellow-600
            shadow-2xl shadow-orange-500/40 hover:shadow-3xl hover:shadow-orange-600/60
            transition-all duration-400 ease-out hover:scale-[1.02] hover:-translate-y-1 active:scale-[0.98]
            focus:outline-none focus:ring-4 focus:ring-orange-400/60 focus:ring-offset-4 focus:ring-offset-slate-900/50
            disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-lg disabled:scale-100 disabled:translate-y-0
            ${loading ? 'opacity-80' : ''}
          `}
          aria-label="Calculate ATS Score"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-3">
              <Loader2 className="h-6 w-6 animate-spin" />
              <span>Analyzing your resume...</span>
            </span>
          ) : (
            <span className="flex items-center justify-center gap-3">
              <File className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span>Calculate ATS Score</span>
            </span>
          )}
        </button>

        {result && <MatchScoreCard {...result} />}
        
        {/* Empty state */}
        {!result && !loading && (
          <div className="text-center py-16 opacity-60">
            <File className="h-16 w-16 text-slate-500 mx-auto mb-4" />
            <p className="text-lg text-slate-400">Upload files and click analyze to see your ATS score</p>
          </div>
        )}
      </div>
    </div>
  );
}
