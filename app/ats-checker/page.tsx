'use client';

import { useState, useCallback } from 'react';
import { Loader2 } from 'lucide-react';

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
    <div className="max-w-4xl mx-auto p-8 space-y-6">
      <h1 className="text-4xl font-bold text-center">
        ATS Resume Checker
      </h1>

      <PdfUploader onFileSelect={setResumeFile} />
      <JobDescriptionInput value={jdText} onTextChange={setJdText} />

      <button
        onClick={handleAnalyze}
        disabled={loading}
        className="w-full bg-black text-white py-3 rounded-lg"
      >
        {loading ? (
          <span className="flex justify-center items-center gap-2">
            <Loader2 className="animate-spin" /> Analyzing...
          </span>
        ) : (
          'Calculate ATS Score'
        )}
      </button>

      {result && <MatchScoreCard {...result} />}
    </div>
  );
}
