import fetch from 'node-fetch';
import { createRequire } from "module";
const require = createRequire(import.meta.url);
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Funzione per salvare la chiave e il valore nella cache remota
async function salvaInCacheRemota(key, value) {
  const url = 'https://ws.progettimolinari.it/cache/set'; // Sostituisci con l'URL reale del tuo servizio di cache

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      key: '56ba61b3-a7cf-4a2d-be49-911579750e38'
    },
    body: JSON.stringify({ key: key, value: value })
  })
    .then((response) => {
      if (response.ok) {
        console.log('Dati salvati nella cache remota con successo.');
      } else {
        console.error('Errore durante il salvataggio nella cache remota:', response.statusText);
      }
    })
    .catch((error) => {
      console.error('Errore nella richiesta:', error.message);
    });
}

// Richiedi all'utente la chiave e il valore
rl.question('Inserisci la chiave: ', (key) => {
  rl.question('Inserisci il valore: ', (value) => {
    // Chiama la funzione per salvare nella cache remota
    salvaInCacheRemota(key, value);
    // Chiudi l'interfaccia di input
    rl.close();
  });
});

// Gestisci l'evento di chiusura dell'interfaccia di input
rl.on('close', () => {
  console.log('Grazie per aver inserito la chiave e il valore.');
});
