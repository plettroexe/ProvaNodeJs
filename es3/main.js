const fs = require('fs');
const readline = require('readline');

// Funzione per caricare il vocabolario da un file
function caricaVocabolario(file) {
  try {
    const data = fs.readFileSync(file, 'utf-8');
    return data.trim().split('\n');
  } catch (error) {
    console.error('Errore durante il caricamento del vocabolario:', error.message);
    return [];
  }
}

// Funzione per trovare le rime di una parola nel vocabolario
function trovaRime(parola, vocabolario) {
    const ultimeTreLettereInserite = parola.slice(-3);
    const rime = vocabolario.filter((parolaVocabolario) =>
      parolaVocabolario.endsWith(ultimeTreLettereInserite) && parolaVocabolario !== parola
    );
    return rime;
  }
  
// Funzione principale
function main() {
  const vocabolario = caricaVocabolario('./es3/vocabolario.txt');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Inserisci una parola: ', (parolaInserita) => {
    const rime = trovaRime(parolaInserita.trim().toLowerCase(), vocabolario);

    if (rime.length > 0) {
      console.log('Rime trovate:', rime.join(', '));
    } else {
      console.log('Nessuna rima trovata per la parola inserita.');
    }

    rl.close();
  });

  rl.on('close', () => {
    console.log('Programma terminato.');
  });
}

// Esegui il programma
main();
