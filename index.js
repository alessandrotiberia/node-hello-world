/**
 * Creiamo la prima applicazione con NodeJs e inizializziamola con pnpm init --init-type=module,
Scriviamo un file index.js che dovrà stampare nel terminale “Hello World”. Proviamo ad eseguirlo dal terminale stesso usando i comandi di node base.,
Impostiamo ora uno script "start" in package.json e facciamo in modo di lanciare il nostro script con pnpm start,
Impostiamo un nuovo script "watch" in package.json che possa essere lanciato con pnpm watch e
 che aggiorni in tempo reale le modifiche ai nostri file. Lanciamolo
  e proviamo a cambiare il nostro codice in modo che stampi nel terminale “Hello Boolean”. 
  Dovremmo vedere il terminale senza fermare e rilanciare il server.
 */

  console.log("hello world");

  // punto 3 pnpm start va su package json e legge start dentro "scripts" e dice:
  //leggi il file index js 

  //punto 4 pnpm watch resta in aggiornamento per eventuali modifiche
  //package json scrivi: "watch": "node --watch index.js"
  
console.log("hello boolean");

//bonus, process.argv è un array che inserisci cosa scrivo nel terminale?
const tabella = process.argv;
console.log(tabella);

//nel terminale aggiungi node index.js e tabella lui mette questi 3 elementi insieme



