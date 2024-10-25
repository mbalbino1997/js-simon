//creiamo l'array di numeri richiamando la funzione apposita
const randomNumbers = fiveRandomNumbers();
//prendiamo dal dom l'ul
const ul = document.getElementById("numbers-list");
//prendiamo il form che contiene i campi dove inserire i numeri
const answersForm = document.getElementById("answers-form");
//prendiamo l'elemento dove inserire il countdown
const countdown = document.getElementById("countdown");
//inizializiamo all'esterno il countdown a 30
let count = 30;
//inseriamo nell'elemento html il contatore
countdown.innerText = count;
//prendo l'elemento input-group
const inputGroup = document.getElementById("input-group");
//prendo tutti gli elementi di input-group
const inputs = inputGroup.querySelectorAll("input");
//inizializzo array che conterrà i valori degli input
let inputValues = [];
//valore numerico che rappresenta il numero di elementi in comune tra i due array
let numberScore = 0;
//array che conterrà i numeri indovinati
let arrayNumberScore= [];
//prendo l'elemento result
const result = document.getElementById("result");
//prendo l'elemento instructions
const instructions = document.getElementById("instructions");

//inseriamo i figli di ul nell html
for (let i = 0; i < randomNumbers.length; i++) {
    const li = document.createElement("li");
    li.textContent = randomNumbers[i];
    ul.appendChild(li);
}

//Decrementiamo il contatore ogni secondo fino a 0 ed aggiorniamo il valore del countdown
const intervalId = setInterval(function () {
    count--;
    if (count === 0) {
        clearInterval(intervalId);
        //se count è uguale a 0 aggiungiamo display none all'ul e togliamo display none ad answers-form
        answersForm.classList.remove("d-none");
        ul.classList.add("d-none");
    }

    countdown.innerText = count;
}, 1_000);


//ci mettiamo in ascolto del submit e preveniamo il default
answersForm.addEventListener("submit", function (event) {
    event.preventDefault();
    arrayNumberScore=[];

    //scorro gli input ed inserisco i valori nell array
    for (let i = 0; i < inputs.length; i++) {

        inputValues.push(parseInt(inputs[i].value));
    }
    console.log(inputValues);

    //utilizziamo la funzione che confronta due array e salviamo il risultato nella variabile numberScore
    numberScore = twoArrayComparison(inputValues, randomNumbers, arrayNumberScore);
    console.log(numberScore);

    //nascondiamo dal layout gli elementi che non ci servono
    answersForm.classList.add("d-none");
    countdown.classList.add("d-none");
    instructions.classList.add("d-none");

    //dopo aver inserito il contenuto nell elemento togliamo il display none
    result.innerText = `HAI INDOVINATO ${numberScore} NUMERI SU 5
    NUMERI INDOVINATI: ${arrayNumberScore}`;

    result.classList.remove("d-none");


})







//FUNZIONI:

//funzione che genera un array di 5 numeri random da 1 a 50
function fiveRandomNumbers() {
    let array = []
    for (let i = 0; i < 5; i++) {
        array[i] = Math.floor(Math.random() * 50) + 1;
    }
    return array;
}

//funzione che confronta due array e restituisce il numero di elementi in comune e gli elementi in comune
function twoArrayComparison(arrayOne, arrayTwo, arrayEquals) {
    let count = 0;
    for (let i = 0; i < arrayOne.length; i++) {
        if (arrayOne.includes(arrayTwo[i])) {
            arrayEquals.push(arrayTwo[i]);
            count++;
        }
    }
    return count;
}