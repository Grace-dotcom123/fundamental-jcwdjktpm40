// Exercise 1

// function calculateStudentData(student) {
//     if (!student?.length) throw new Error("Array students tidak boleh kosong");

//     const today = new Date();

//     let scoreHigh = -Infinity, scoreLow = Infinity, scoreSum = 0;
//     let ageHigh = -Infinity, ageLow = Infinity, ageSum = 0;

//     for (const i in student) {
//         const s = student[i];

//         const score = s.score;

//         let age = today.getFullYear() - s.age.getFullYear();
//         const monthDiff = today.getMonth() - s.age.getMonth();
//         if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < s.age.getDate())) {
//             age--;
//         }

//         if (score > scoreHigh) scoreHigh = score;
//         if (score < scoreLow) scoreLow = score;
//         scoreSum += score;

//         if (age > ageHigh) ageHigh = age;
//         if (age < ageLow) ageLow = age;
//         ageSum += age;
//     }

//     return {
//         score: { highest: scoreHigh, lowest: scoreLow, average: scoreSum / student.length },
//         age: { highest: ageHigh, lowest: ageLow, average: ageSum / student.length},
//     };
// }

// const students = [
//     { name: "marry", email: "marry@mail.com", age: new Date("2002-02-10"), score: 97 },
//     { name: "jack", email: "jack@mail.com", age: new Date("2003-08-01"), score: 85 },
//     { name: "bill", email: "bill@mail.com", age: new Date("2004-12-05"), score: 70 },
// ];

// console.log(calculateStudentData(students));


// --- Versi pake Class -----

class Student {
  constructor(name, email, birthDate, score) {
    this.name = name;
    this.email = email;
    this.age = birthDate; // sesuai soal: Age = Date (tanggal lahir)
    this.score = score;
  }

  getAgeInYears() {
    const today = new Date();
    let ageYears = today.getFullYear() - this.age.getFullYear();

    const monthDiff = today.getMonth() - this.age.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < this.age.getDate())) {
      ageYears--;
    }

    return ageYears;
  }
}


class StudentReport {
  constructor(students) {
    this.students = students;
  }

  calculate() {
    if (!this.students?.length) throw new Error("Array students tidak boleh kosong");

    let scoreHigh = -Infinity, scoreLow = Infinity, scoreSum = 0;
    let ageHigh = -Infinity, ageLow = Infinity, ageSum = 0;

    // pakai for...in sesuai catatan
    for (const i in this.students) {
      const s = this.students[i];

      const score = s.score;
      const ageYears = s.getAgeInYears();

      // update score stat
      if (score > scoreHigh) scoreHigh = score;
      if (score < scoreLow) scoreLow = score;
      scoreSum += score;

      // update age stat (umur dalam tahun)
      if (ageYears > ageHigh) ageHigh = ageYears;
      if (ageYears < ageLow) ageLow = ageYears;
      ageSum += ageYears;
    }

    return {
      score: {
        highest: scoreHigh,
        lowest: scoreLow,
        average: scoreSum / this.students.length,
      },
      age: {
        highest: ageHigh,
        lowest: ageLow,
        average: ageSum / this.students.length,
      },
    };
  }
}


const students = [
  new Student("marry", "marry@mail.com", new Date("2002-02-10"), 90),
  new Student("jack", "jack@mail.com", new Date("2003-08-01"), 80),
  new Student("bill", "bill@mail.com", new Date("2004-12-05"), 70),
];

const report = new StudentReport(students);
console.log(report.calculate());



// Exercise 2

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  constructor() {
    this.total = 0;
    this.products = [];
  }

  addToCart(product, qty) {
    if (qty <= 0) {
      console.log("Qty harus lebih dari 0");
      return;
    }

    let found = false;

    
    for (const i in this.products) {
      if (this.products[i].product.name === product.name) {
        this.products[i].qty += qty;
        found = true;
        break;
      }
    }

    if (!found) {
      this.products.push({ product, qty });
    }

    this.total += product.price * qty;
  }

  showTotal() {
    console.log("Total saat ini : ", this.total);
    return this.total;
  }

  checkout() {
    const transactionData = {
      total: this.total,
      products: this.products,
    };

    this.total = 0;
    this.products = [];
    return transactionData;
  }
}

const p1 = new Product("Laptop", 2000000);
const p2 = new Product("Ipad", 1000000);

const trx = new Transaction();

trx.addToCart(p1, 2);
trx.addToCart(p2, 2);
trx.addToCart(p1, 1);

trx.showTotal();

const result = trx.checkout();
console.log("Hasil Checkout : ", result);

trx.showTotal();


