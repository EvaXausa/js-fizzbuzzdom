console.log("JS OK");
/*
Scrivi un programma che stampi in console i numeri da 1 a 100, 
- per i multipli di 3 stampa “Fizz”
- per i multipli di 5 stampa “Buzz”
 Per i numeri che sono sia multipli di 3 che di 5 stampa “FizzBuzz”.
 */

const list = document.getElementById("numbers-list");
let items = "";

for (let i = 1; i <= 100; i++) {
  let content = i;

  if (i % 15 === 0) {
    content = `FizzBuzz`;
  } else if (i % 5 === 0) {
    content = `Buzz`;
  } else if (i % 3 === 0) {
    content = `Fizz`;
  }

  items += `<li>${content}</li>`;
}

list.innerHTML = items;
