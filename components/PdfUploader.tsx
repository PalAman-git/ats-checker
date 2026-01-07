'use client';

import { Upload } from 'lucide-react';

interface PdfUploaderProps {
  onFileSelect: (file: File | null) => void;
  file: File | null;
}

export default function PdfUploader({ onFileSelect, file }: PdfUploaderProps) {
  return (
    <div className="group">
      <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 
                      p-10 rounded-3xl text-center hover:border-orange-400 
                      transition-all duration-300 hover:shadow-xl hover:shadow-orange-400/20
                      bg-gradient-to-b from-slate-50/60 to-white/80 dark:from-slate-800/60 dark:to-slate-900/80
                      cursor-pointer relative overflow-hidden">
        
        <input
          type="file"
          accept="application/pdf"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
          onChange={(e) => {
            const selectedFile = e.target.files?.[0] || null;
            onFileSelect(selectedFile);
          }}
          id="pdf-upload"
          aria-label="Upload resume PDF"
        />
        
        <label htmlFor="pdf-upload" className="cursor-pointer block h-full flex flex-col items-center justify-center z-10">
          <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center 
                          shadow-lg group-hover:scale-110 transition-all duration-300 mb-6">
            <Upload className="h-10 w-10 text-white drop-shadow-md" />
          </div>
          
          <div className="space-y-1">
            <p className="font-bold text-xl text-slate-700 dark:text-slate-200 group-hover:text-orange-600 transition-colors">
              {file ? '✅ File Selected' : 'Drop your PDF here'}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {file ? `📄 ${file.name}` : 'Click to browse or drag & drop'}
            </p>
            <p className="text-xs text-slate-400 font-medium">Max 10MB • PDF only</p>
          </div>
        </label>
        
        {file && (
          <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white px-4 py-2 rounded-tl-2xl text-xs font-bold shadow-lg">
            Ready
          </div>
        )}
      </div>
      
      {file && (
        <button
          onClick={() => onFileSelect(null)}
          className="mt-3 w-full py-2 px-4 border border-slate-200 dark:border-slate-700 
                   rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300
                   hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
        >
          Change File
        </button>
      )}
    </div>
  );
}
