// === Write a code to check whether the number is odd or even ===

const N: number = 25;

if (N % 2 === 0) {
  console.log(`${N} => even number`);
} else {
  console.log(`${N} => odd number`);
}



// === Write a code to check whether the number is prime number or not ===

const primeN: number = 6;
let isPrime: boolean = true;

if (primeN === 1) {
  isPrime = false;
} else {
  for (let i = 2; i < primeN; i++) {
    if (primeN % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(`${primeN} => prime number`);
} else {
  console.log(`${primeN} => not a prime number`);
}



// === Write a code to find the sum of the numbers 1 to N ===

const sumN: number = 5;
let sum: number = 0;
const parts: string[] = [];

for (let i = 1; i <= sumN; i++) {
  sum += i;
  parts.push(i.toString());
}

console.log(`${parts.join(" + ")} = ${sum}`);



// === Write a code to find factorial of a number ===

const factorial: number = 4;
let fact: number = 1;

for (let i = 1; i <= factorial; i++) {
  fact = fact * i;
}

console.log(fact);



// === Write a code to print the first N fibonacci numbers ===

const n: number = 15;

let a: number = 0;
let b: number = 1;

for (let i = 0; i < n; i++) {
  const angkaBerikutnya = a + b;
  a = b;
  b = angkaBerikutnya;
}

console.log(a);

// Hasil Pembahasan 
// const n: number = 15;

// let n1: number = 0;
// let n2: number = 1;
// let sum: number = 0;

// for (let i: number = 2; i <= n; i++) {
//   sum = n1 + n2;
//   n1 = n2;
//   n2 = sum;
// }

// console.log(n2);



// Hasil Pembahasan no 3 dan 4

// const n: number = 5;

// Pesan untuk jumlah 1 sampai n
// let sumMessage: string = `${n} -> `;
// let sum: number = 0;

// for (let i = 1; i <= n; i++) {
//   sum += i;
//   sumMessage += (i === n) ? `${i} = ${sum}` : `${i} + `;
// }

// console.log(sumMessage);

// Pesan untuk faktorial n
// let factMessage: string = `${n} -> `;
// let fact: number = 1;

// for (let i = n; i >= 1; i--) {
//   fact *= i;
//   factMessage += (i === n) ? `${i}` : ` x ${i}`;
// }

// factMessage += ` = ${fact}`;
// console.log(factMessage);
