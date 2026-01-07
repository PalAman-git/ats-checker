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
    <div className="border p-6 rounded-lg space-y-4">
      <h2 className="text-2xl font-bold">ATS Score: {score}%</h2>

      <div>
        <h3 className="font-semibold">Matched Keywords</h3>
        <p className="text-green-600">{matchedKeywords.join(', ')}</p>
      </div>

      <div>
        <h3 className="font-semibold">Missing Keywords</h3>
        <p className="text-red-600">{missingKeywords.join(', ')}</p>
      </div>
    </div>
  );
}
