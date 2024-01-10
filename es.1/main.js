const fetch = require('node-fetch');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Funzione per salvare la chiave e il valore nella cache remota
async function salvaInCacheRemota(key, value) {
  const url = 'https://ws.progettimolinari.it'; // Sostituisci con l'URL reale del tuo servizio di cache

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ key, value })
    });

    if (response.ok) {
      console.log('Dati salvati nella cache remota con successo.');
    } else {
      console.error('Errore durante il salvataggio nella cache remota:', response.statusText);
    }
  } catch (error) {
    console.error('Errore nella richiesta:', error.message);
  }
}

// Richiedi all'utente la chiave e il valore
rl.question('Inserisci la chiave: ', (key) => {
  rl.question('Inserisci il valore: ', (value) => {
    // Chiudi l'interfaccia di input
    rl.close();

    // Chiama la funzione per salvare nella cache remota
    salvaInCacheRemota(key, value);
  });
});

// Gestisci l'evento di chiusura dell'interfaccia di input
rl.on('close', () => {
  console.log('Grazie per aver inserito la chiave e il valore.');
});
