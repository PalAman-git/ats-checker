'use client';

interface PdfUploaderProps {
  onFileSelect: (file: File | null) => void;
}

export default function PdfUploader({ onFileSelect }: PdfUploaderProps) {
  return (
    <div className="border-2 border-dashed p-6 rounded-lg">
      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => {
          const file = e.target.files?.[0] || null;
          onFileSelect(file);
        }}
      />
    </div>
  );
}
