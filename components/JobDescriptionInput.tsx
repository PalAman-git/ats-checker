'use client';

interface Props {
  value: string;
  onTextChange: (text: string) => void;
}

export default function JobDescriptionInput({ value, onTextChange }: Props) {
  return (
    <textarea
      className="w-full h-40 p-4 border rounded-lg"
      placeholder="Paste job description here..."
      value={value}
      onChange={(e) => onTextChange(e.target.value)}
    />
  );
}
