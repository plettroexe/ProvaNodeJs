import fetch from 'node-fetch';
import { createRequire } from "module";
const require = createRequire(import.meta.url);
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
const fs= require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const json = JSON.parse(fs.readFileSync("./conf.json"));
const token = json.key;
console.log(json);
function salvaInCacheRemota(key, value, token) {
  const url = 'https://ws.progettimolinari.it/cache/set';

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      key: token
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

rl.question('Inserisci la chiave: ', (key) => {
  rl.question('Inserisci il valore: ', (value) => {
   
    salvaInCacheRemota(key, value, token);
   
    rl.close();
  });
});

rl.on('close', () => {
  console.log('Grazie per aver inserito la chiave e il valore.');
});
