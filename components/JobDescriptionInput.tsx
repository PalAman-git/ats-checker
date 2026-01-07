'use client';
import { File } from "lucide-react";

interface Props {
  value: string;
  onTextChange: (text: string) => void;
}

export default function JobDescriptionInput({ value, onTextChange }: Props) {
  return (
    <div className="space-y-3">
      <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
        <File className="h-4 w-4 text-orange-500" />
        Job Description
      </label>
      <textarea
        className="w-full h-48 p-6 border-2 border-slate-200 dark:border-slate-700 rounded-2xl resize-vertical
                  focus:ring-4 focus:ring-orange-400/30 focus:border-orange-400/50
                  shadow-sm bg-white/80 dark:bg-slate-800/70 backdrop-blur-sm
                  transition-all duration-300 placeholder:text-slate-400
                  hover:border-slate-300 dark:hover:border-slate-600
                  focus:outline-none"
        placeholder="Paste the full job description here to analyze required keywords, skills, and qualifications..."
        value={value}
        onChange={(e) => onTextChange(e.target.value)}
        rows={8}
        maxLength={5000}
        aria-label="Job description text area"
      />
      <div className="flex justify-between text-xs text-slate-500">
        <span>Pro tip: Include full job posting for best results</span>
        <span>{value.length}/5000</span>
      </div>
    </div>
  );
}
