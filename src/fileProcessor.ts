import { countWords, countLetters, countSpaces, findRepeatedWords } from './utils';

export interface FileProcessingResult {
  totalWords: number;
  totalLetters: number;
  totalSpaces: number;
  repeatedWords: Record<string, number>;
}

export function processFile(content: string): FileProcessingResult {
  const totalWords = countWords(content);
  const totalLetters = countLetters(content);
  const totalSpaces = countSpaces(content);
  const repeatedWords = findRepeatedWords(content);

  return {
    totalWords,
    totalLetters,
    totalSpaces,
    repeatedWords
  };
}
