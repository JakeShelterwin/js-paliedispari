// Creo gioco pari o dispari;
// L’utente sceglie pari o dispari e un numero da 1 a 5 (non è vero, come abbiam detto tutti e 2 i numeri vengono generati) quindi pc gioca contro se stesso.
// Generiamo un numero random (sempre da 1 a 5) per il computer.
//  Sommiamo i due numeri e dichiariamo chi ha vinto.

var numero, numeroScelto, pariOdispari, pariOdispariScelto, numeroComputer, somma, vincitoreScomparsa;

// inizializzazioni varie
numero = document.getElementById('numero');
pariOdispari = document.getElementById('pariOdispari');
somma=0;

// bottone genera e bottone annulla
var bottoneGenera = document.getElementById('genera');
var bottoneAnnulla = document.getElementById('annulla');

//questa funzione dice se un numero è pari
function isEven(x){
  if (x%2===0){
    return true;
  } else {
    return false;
  }
}

// gestisco gli effetti al click sul bottone genera
bottoneGenera.addEventListener("click",
  function(){
    // sul click salvo i valori degli input e se ci sono lettere maiuscole le trasformo in minuscole
    numeroScelto = parseInt(numero.value);
    pariOdispariScelto = pariOdispari.value;

    //genero un numero per il computer da 1 a 5
    numeroComputer = Math.floor(Math.random()*5 +1);

    // sommo i valori dell'utente e del computer
    somma=numeroScelto+numeroComputer;

    //Debug: stampo in console
    console.log("numero scelto dall'utente: " + numeroScelto);
    console.log("il numero del computer è: " + numeroComputer);
    console.log("la somma dei 2 numeri è: " + somma);
    console.log("L'utente ha scelto che vincerà: " + pariOdispariScelto);

    // stabilisco il vincitore richiamando la funzione di prima
    if ( isEven(somma) && pariOdispariScelto==="Pari"){
      console.log("Complimenti hai Vinto!") ;
      document.getElementById('chiVince').innerHTML = "Hai scelto di vincere se usciva " + pariOdispariScelto + " e hai scelto il numero " + numeroScelto + ".<br> Il computer ha il numero "+ numeroComputer + ", la somma dei vostri numeri fa " + somma + ". <br> Complimenti, Hai vinto!";
    } else if ( !isEven(somma) && pariOdispariScelto==="Dispari"){
      console.log("Complimenti hai Vinto!") ;
      document.getElementById('chiVince').innerHTML = "Hai scelto di vincere se usciva " + pariOdispariScelto + " e hai scelto il numero " + numeroScelto + ".<br> Il computer ha il numero "+ numeroComputer + ", la somma dei vostri numeri fa " + somma + ". <br> Complimenti, Hai vinto!";
    } else {
      console.log("Purtroppo hai perso!") ;
      document.getElementById('chiVince').innerHTML = "Hai scelto di vincere se usciva " + pariOdispariScelto + " e hai scelto il numero " + numeroScelto + ".<br> Il computer ha il numero "+ numeroComputer + ", la somma dei vostri numeri fa " + somma + ". <br> Purtroppo hai perso!";
    }

    //gestisco la casella a scomaprsa
    vincitoreScomparsa = document.getElementById("vincitore");
    vincitoreScomparsa.style.display="block";
  }
);

// gestisco gli effetti al click sul bottone annulla
bottoneAnnulla.addEventListener("click",
  function(){
    //gestisco la casella a scomaprsa che, se è visibile, deve nascondersi quando clicco su annulla
    vincitoreScomparsa = document.getElementById("vincitore");
    vincitoreScomparsa.style.display="none";

    // resetto il documento
    document.getElementById('chiVince').innerHTML = "";
  }
);
