//=======IF STATEMENT=======
// syntax
/*
    if (condition){
        code block
        }
*/

const age: number = 20;

if (age >= 17) {
  console.log("Anda bisa buat KTP");
}

//======= ELSE STATEMENT=======
// backup plan dari if statement

const age2: number = 10;

if (age2 >= 17) {
  console.log("Anda bisa buat KTP");
} else {
  console.log("Anda belum bisa buat KTP");
}

// shift + alt + F -> ngerapiin 

//======= ELSE IF STATEMENT=======

const grade: string = "A";

if (grade === "A") {
    console.log("Nilai bagus");
}   else if (grade === "B")) {
    console.log("Nilai lumayan");
}   else if (grade === "C") {
    console.log("Nilai buruk");
}   else {
        console.log("Nilai tidak diketahui");
    }

//======= SWITCH CASE=======
// syntax
/*
    switch(value){
        case "value":
            // add code here
            break;
        case "value2":
            // add code here
            //break;
        case "value3":
            // add code here
            //break;
        default:
            // add code here
            break;   
        }
*/

const day: string = "senin";

switch (day) {
    case "senin":
        console.log("Hari senin");
        break;
    case "selasa":
        console.log("Hari selasa");
        break;
    case "rabu":
        console.log("Hari rabu");
        break;
    default:
        console.log("hari tidak ditemukan");
        break;
}

//======= LOGICAL OPERATOR=======
// && -> and
// || -> or
// ! -> not

// AND -> harus kedua kondisinya bernilai true agar menghasilkan nilai true
const umur: number =20;
const punyaSIM: boolean = true;

if (umur >=17 && punyaSIM === true) {
    console.log("boleh bawa kendaraan");
} else {
    console.log("bolum boleh bawa kendaraan");
}

// OR -> kalau salah satu ada yang nilainya true, akan menghasilkan nilai true
const car: string = "mercy";

if (car === "mercy" || car === "bmw") {
    console.log("mobil eropa");
} else {
    console.log("mobil jepang");
}

// NOT -> membalikkan nilai boolean
const isSunny: boolean = false;
const isRaining : boolean = !isSunny;

console.log(isSunny);
console.log(isRaining);

//======= TERNARY OPERATOR=======
// shorcut untuk if else condition
// condition ? true : true

const str: string = "javascript";

// cara panjang
if(str === "javascript") {
    console.log("javascript");
}   else {
    console.log("not javascript");
}

//cara pendek
console.log(str === "javascript" ? "javascript" : "not javascript");


str === "javascript" 
? "javascript" 
: str === "typescript" 
    ? "typescript" 
    : "not typescript / javascript";


//======= LOOP STATEMENT (perulangan)=======
//tipe loop : for loop, while loop, do while loop

// FOR LOOP -> punya 3 statement
// statement 1 -> menginisialisasikan variable dari looping itu sendiri
// statement 2 -> mendifine kondisi dari looping tsb
// statement 3 -> kode yang akan diekskusi di akhir setiap iterasi

/*
    for(statement1;statement2;statement3){
        code block yang akna diulang
    }
*/

//looping 1x
for (let i = 0; i < 10; i++) {
    console.log("hello");
    }

//nested loop
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log("hello");
    }
}

for (let k:number = 10; k >= 0; k--) {
    console.log(k);
    }


//WHILE LOOP -> melakukan pengecekan terlebih dahulu

/*
    while(condition){
        code block yang akan diulang
    }
*/

let i:number = 1;

while (i < 10) {
    console.log(i);

    i++;
}


//DO WHILE LOOP -> melakukan pengecekan diakhir3
/*
    do {
        code block yang akan diulang
    } while (condition)
*/

let count: number=100;

do { 
    console.log(count);
    count++;
}   while (count <= 5);


//BREAK -> menghentikan looping

let sum:number =0;

while(true) {
    console.log(sum);

    if (sum >= 5) {
        break;
    }

// kalo if nya cuma satu baris bisa disingkat jadi-> if (sum >= 5) break;

    sum++; // -> kalo tidak ada akan terjadi infinite looping
}

//CONTINUE -> skip looping

for (let i=0; i < 5; i++) {
    if(i === 2) {
        continue;
    }

    console.log(i);
}