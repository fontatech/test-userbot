import { processFile } from './fileProcessor';
import * as readline from 'readline';
import * as fs from 'fs';
import axios from 'axios';

// Interfaccia per l'input dell'utente
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Richiesta del percorso del file all'utente
rl.question('Inserisci il percorso del file o l\'URL: ', async (path) => {
  try {
    let fileContent: string;
    
    // Controllo se il percorso è un URL o un percorso locale
    if (path.startsWith('http://') || path.startsWith('https://')) {
      const response = await axios.get(path);
      fileContent = response.data;
    } else {
      fileContent = fs.readFileSync(path, 'utf-8');
    }

    // Elaborazione del file e stampa dei risultati
    const result = processFile(fileContent);
    console.log('Numero totale di parole:', result.totalWords);
    console.log('Numero totale di lettere:', result.totalLetters);
    console.log('Numero totale di spazi:', result.totalSpaces);
    console.log('Parole ripetute più di 10 volte:', result.repeatedWords);

    rl.close();
  } catch (error: any) {
    console.error('Errore:', error.message);
    rl.close();
  }
});
