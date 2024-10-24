//creiamo l'array di numeri richiamando la funzione apposita
const randomNumbers = fiveRandomNumbers();
//prendiamo dal dom l'ul
const ul = document.getElementById("numbers-list");
//prendiamo l'elemento dove inserire il countdown
const countdown = document.getElementById("countdown");
//inizializiamo all'esterno il countdown a 30
let count = 30;
//inseriamo nell'elemento html il contatore
countdown.innerText = count;

//inseriamo i figli di ul nell html
for (let i = 0; i < randomNumbers.length; i++) {
    const li = document.createElement("li");
    li.textContent = randomNumbers[i];
    ul.appendChild(li);
}

//Decrementiamo il contatore ogni secondo fino a 0 ed aggiorniamo il valore del countdown
const intervalId = setInterval(function () {
    if (count === 1) {
        clearInterval(intervalId);
    }
    count--;
    countdown.innerText = count;
}, 1_000);


//funzione che genera un array di 5 numeri random da 1 a 50
function fiveRandomNumbers() {
    let array = []
    for (let i = 0; i < 5; i++) {
        array[i] = Math.floor(Math.random() * 50) + 1;
    }
    return array;
}