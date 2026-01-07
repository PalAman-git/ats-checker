const STOP_WORDS = new Set([
  'the', 'and', 'with', 'for', 'from', 'that', 'this',
  'looking', 'required', 'requirements', 'knowledge',
  'experience', 'skills', 'skill', 'ability',
  'strong', 'good', 'hands', 'hands-on',
  'plus', 'like', 'familiar', 'frameworks'
]);

export function calculateAtsScore(resumeText: string, jdText: string) {
  const resumeTokens = new Set(
    resumeText
      .toLowerCase()
      .split(/\W+/)
      .filter(word => word.length > 2)
  );

  const jdTokens = jdText
    .toLowerCase()
    .split(/\W+/)
    .filter(
      word =>
        word.length > 2 &&
        !STOP_WORDS.has(word)
    );

  const uniqueKeywords = [...new Set(jdTokens)];

  const matchedKeywords = uniqueKeywords.filter(word =>
    resumeTokens.has(word)
  );

  const missingKeywords = uniqueKeywords.filter(
    word => !resumeTokens.has(word)
  );

  const score = uniqueKeywords.length
    ? Math.round((matchedKeywords.length / uniqueKeywords.length) * 100)
    : 0;

  return {
    score,
    matchedKeywords,
    missingKeywords,
  };
}
