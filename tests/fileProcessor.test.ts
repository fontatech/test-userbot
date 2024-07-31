import { processFile } from '../src/fileProcessor';

describe('Elaborazione File', () => {
  it('dovrebbe elaborare correttamente il contenuto del file', () => {
    const content = 'Ciao mondo! Ciao a tutti. Ciao mondo mondo mondo mondo mondo mondo mondo mondo mondo mondo.';
    const result = processFile(content);

    expect(result.totalWords).toBe(16);
    expect(result.totalLetters).toBe(73);
    expect(result.totalSpaces).toBe(15);
    expect(result.repeatedWords['mondo']).toBe(11);
  });
});
