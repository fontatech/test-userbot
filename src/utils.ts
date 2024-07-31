function cleanText(text: string): string {
  return text
    .toLowerCase()                      // Converti il testo in minuscolo
    .replace(/[\p{P}\p{S}]/gu, '')      // Rimuovi la punteggiatura e simboli usando Unicode Property Escapes
    .trim();                            // Rimuovi spazi bianchi all'inizio e alla fine
}

export function countWords(content: string): number {
  const cleanedContent = cleanText(content);
  return cleanedContent.split(/\s+/).filter(word => word.length > 0).length;
}

export function countLetters(content: string): number {
  const cleanedContent = cleanText(content);
  return cleanedContent.replace(/[^a-z]/g, '').length; // Conta solo le lettere
}

export function countSpaces(content: string): number {
  const cleanedContent = cleanText(content);
  return (content.match(/\s/g) || []).length; // Conta gli spazi nel testo originale, non pulito
}

export function findRepeatedWords(content: string): Record<string, number> {
  const cleanedContent = cleanText(content);
  const words = cleanedContent.split(/\s+/).filter(word => word.length > 0);
  const wordCounts: Record<string, number> = {};

  words.forEach(word => {
    wordCounts[word] = (wordCounts[word] || 0) + 1;
  });

  const repeatedWords: Record<string, number> = {};
  for (const [word, count] of Object.entries(wordCounts)) {
    if (count > 10) {
      repeatedWords[word] = count;
    }
  }

  return repeatedWords;
}
