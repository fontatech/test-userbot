"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileProcessor_1 = require("../src/fileProcessor");
describe('Elaborazione File', () => {
    it('dovrebbe elaborare correttamente il contenuto del file', () => {
        const content = 'Ciao mondo! Ciao a tutti. Ciao mondo mondo mondo mondo mondo mondo mondo mondo mondo mondo.';
        const result = (0, fileProcessor_1.processFile)(content);
        expect(result.totalWords).toBe(16);
        expect(result.totalLetters).toBe(73);
        expect(result.totalSpaces).toBe(15);
        expect(result.repeatedWords['mondo']).toBe(11);
    });
});
