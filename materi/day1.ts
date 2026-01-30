// versi JS
const message = "hello";

// versi TS
const message2: string = "hello2";

// =====STRING BUILD IN METHOD ======
const name : string = "BuBdi";
const hello : string = "Hello World";

console.log(name.toLowerCase());
console.log(name.toUpperCase());
console.log(name.replace("B", "P"));
console.log(name.replaceAll("B", "P"));
console.log(name.toLowerCase().replaceAll("b", "P"));
console.log(name.split(""));
console.log(hello.split(" "));
console.log(name.concat(" ").concat(hello));
console.log(name + " " + hello);
console.log(name.slice(1));
console.log(name.slice(0,3));

// ====== TEMPLATE LITERALS / TEMPLATE STRING =========
const welcome: string = "Hello";
const nama: string = "Budi";

console.log(welcome + " " + nama);
console.log(`${welcome} ${nama}`)

// ====== NUMBER BUILT IN METHOD =========
const angka: string = "4000";

console.log(angka);
console.log(Number(angka)); // convert tipe data str ke num
console.log(parseInt(angka)); // convert tipe data str ke num
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

//========== STRING CONVERSION ========
const angka2: number = 5000;

console.log(angka2);
console.log(String(angka2)); // convert tipe data num ke str
console.log(angka2.toString()); // convert tipe data num ke str

//========== BOOLEAN CONVERSION ========

console.log(Boolean(1));
console.log(Boolean(0)); //false hanya angka 0
console.log(Boolean(-10));
console.log(Boolean(0.836483));
console.log(Boolean(""));
console.log(Boolean(" ")); // selama string ada isinya maka akan true
console.log(Boolean("true"));

// ======== DATE =======
const now: Date = new Date();
console.log(now);

console.log(now.getFullYear());
console.log(now.getMonth()+1);
console.log(now.getDate());

now.setDate(10);
now.setMonth(2);
now.setFullYear(1998);

console.log(now); 


// ======== BASIC OPERATOR =======

/*
    + -> pertambahan
    - -> pengurangan
    * -> perkalian
    / -> pembagian
    % -> modulo (sisa bagi)
    ** -> pangkat
*/

console.log(1+1);
console.log(4-2);
console.log(4*2);
console.log(4/2);
console.log(9 % 2);
console.log(3 ** 2);

// ======== MODIFY IN PLACE =======
let n: number = 4;

n +=2; // -> n = n + 2
console.log(n); // -> n = n + 2

// ======== INCREMENT & DECREMENT =======
let counter: number = 3;

counter ++;
counter --;

console.log(counter);

// ======== POSTFIX & PREFIX =======

let counter2: number= 2;

console.log(counter2++); // postfix -> ditampilkan dulu baru ditambahkan
console.log(++counter2); //prefix -> ditambahkan dulu baru ditampilkan

// console.log(counter2);


// ======== COMPARISON OPERATOR =======
/*
    ==  -> hanya mengecek value
    === -> mengecek value dan tipe data
    <
    >
    <=
    >=
*/
console.log(2 == "2");
console.log(2 === "2");
console.log( 2 < 5);
console.log( 2 > 5);
console.log( 5 < 5);
console.log( 5 <= 5);
console.log( 5 >= 5);
console.log( 5 != 5);

// ======== MATH  =======
// Math ceil -> membulatkan angka keatas
console.log(Math.ceil(4.2));

//Math floor -> membulatkan angka kebawah
console.log(Math.floor(4.7));

//Math round -> membulatkan angka ke bilangan bulat terdekat
console.log(Math.round(4.7));
console.log(Math.round(4.3));

//Math max -> mengembalikan angka terbesar dari sekumpulan angka
console.log(Math.max(10, 17, 8, 60, 100));

//Math min -> mengembalikan angka terkecil dari sekumpulan angka
console.log(Math.min(10, 17, 8, 60, 100));

//Math abs -> menghilangkan tanda negatif
console.log(Math.abs(-700));

//Math random -> menghasilkan angka acak dari 0-1
console.log(Math.random());

// angka random dari 1-100
console.log(Math.floor(Math.random() * 100) + 1);

//angka random min value-max value
const min: number = 10;
const max: number = 27;
console.log(Math.floor(Math.random() * (max - min +1)) + min);

console.log("hello");