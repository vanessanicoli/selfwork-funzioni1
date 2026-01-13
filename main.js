// Scrivi una funzione che simuli un gioco di dadi tra due utenti, partendo da un prompt che richieda quanti tiri sono da effettuarsi.  
// •	Stampare il giocatore che ha totalizzato più punti, tenendo conto che:
// •	ogni dado ha 6 facce
// •	ogni giocatore tirerà il dado n volte
// •	Per ogni giocatore:
// •	generare un numero casuale per ogni tiro che effettuera’,
// •	ed ogni tiro sarà sommato ai precedenti per calcolare il punteggio finale del giocatore rispettivo.
// TIPS: Usiamo questa formula per generare un numero random → Math.floor(Math.random() * (6 - 1) + 1);

let numTiri = Number(prompt('Quanti tiri si vogliono effettuare? '));

function tiraDado(){
    return Math.floor(Math.random() * (6 - 1) + 1);
}

function calcPunteggio(numeroTiri){
    let tiro;
    let punteggio = 0;
    
    for(let i=1; i<=numeroTiri; i++){
        tiro = tiraDado();
        punteggio += tiro;
    }
    return punteggio;
}

let player1 = calcPunteggio(numTiri);
let player2 = calcPunteggio(numTiri);

if(player1>player2){
    console.log(`Il giocatore 1 ha totalizzato più punti!\nPunteggio: ${player1}`);
}
else if(player1=player2){
    console.log(`I giocatori hanno totalizzato lo stesso punteggio!\nPunteggio: ${player1}`);
}
else{
    console.log(`Il giocatore 2 ha totalizzato più punti!\nPunteggio: ${player2}`);
}