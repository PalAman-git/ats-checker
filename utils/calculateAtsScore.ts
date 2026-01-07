export function calculateAtsScore(resumeText: string, jdText: string) {
  const resumeWords = resumeText.toLowerCase();
  const jdWords = jdText.toLowerCase().split(/\W+/);

  const uniqueKeywords = Array.from(new Set(jdWords)).filter(
    word => word.length > 3
  );

  const matched = uniqueKeywords.filter(word =>
    resumeWords.includes(word)
  );

  const score = Math.round(
    (matched.length / uniqueKeywords.length) * 100
  );

  return {
    score,
    matchedKeywords: matched,
    missingKeywords: uniqueKeywords.filter(w => !matched.includes(w)),
  };
}
