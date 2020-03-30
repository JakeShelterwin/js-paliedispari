// Chiedo a utente di inserire come input una parola
// tramite una funzione (creata da te) verifico se la parola inserita è palindroma o meno;
// do output a utente dicendogli che ho verificato;

var parola, parolaInserita, isPalindromaRisultato, parolaRovesciata;

// input parola utente
parola = document.getElementById('parola');

// bottone genera e bottone annulla
var bottoneGenera = document.getElementById('genera');
var bottoneAnnulla = document.getElementById('annulla');

//questa funzione mi dice se una parola è palindroma
function isPalindroma(){
  //dichiaro una variabile di appoggio da ritornare
  var boolean=false;

  // Salvo i valori degli input e se ci sono lettere maiuscole le trasformo
  // in minuscole altrimenti potrei sballare il confronto di stringhe
  parolaInserita = parola.value.toLowerCase();

  // split rende la stringa un array, reverse inverte l'ordine degli elementi di questo array
  // e join li riunisce in una stringa. "" sono necessari in split e join perché indicano da cosa
  // saranno separati gli elementi una volta splittati e joinati, "" indica stringa vuota
  parolaRovesciata = parolaInserita.split("").reverse().join("");

  //Debug: stampo in console
  console.log("parola inserita dall'utente: " + parolaInserita) ;
  console.log("parola inserita invertita è: " + parolaRovesciata) ;

  if (parolaInserita===parolaRovesciata){
    boolean=true;
  } else {
    boolean=false;
  }
  return boolean;
}

// gestisco gli effetti al click sul bottone genera
bottoneGenera.addEventListener("click",
  function(){
    if (isPalindroma()){
      console.log("la parola è palindroma") ;
      document.getElementById('isPalindroma').innerHTML = "Si, lo è";
    } else {
      console.log("la parola non è palindroma") ;
      document.getElementById('isPalindroma').innerHTML = "No, non lo è";
    }
    //gestisco la casella a scomparsa
    isPalindromaRisultato = document.getElementById("risultatoPalindroma");
    isPalindromaRisultato.style.display="block";
  }
);

// gestisco gli effetti al click sul bottone annulla
bottoneAnnulla.addEventListener("click",
  function(){
    //svuoto gli elementi input riempiti dall'utente se è cliccato il bottone annulla
    parola.value = "";

    //gestisco la casella a scomaprsa che, se è visibile, deve nascondersi quando clicco su annulla
    isPalindromaRisultato = document.getElementById("risultatoPalindroma");
    isPalindromaRisultato.style.display="none";

    // resetto il documento
    document.getElementById('isPalindroma').innerHTML = "";
  }
);
