// 1 Find area of Rectangle
// const lenght: number = 5;
// const width: number = 3;

// const area: number = 5 * 3;
// console.log(area);

//  =====HASIL PEMBAHASAN======
// let rectangle_length = 5;
// let rectangle_width = 3;

// const rectangle_area = rectangle_length * rectangle_width
// console.log(rectangle_area);


// 2. Find perimeter of Rectangle 
const length: number = 5;
const width: number =3;

const perimeter: number = 2*(5 + 3);
console.log(perimeter);

//  =====HASIL PEMBAHASAN======
// rectangle_length = 6;
// rectangle_width = 4;

// const rectangle_perimeter = 2 * (rectangle_length + rectangle_width);
// console.log(rectangle_perimeter);


// 3. Find diameter, circumference and area of a circle
const radius: number =5;

const diameter: number= 2* radius;
const circumference: number = 2* Math.PI * radius;
const area: number = Math.PI * radius * radius;
console.log(`diameter = ${diameter}, circumference = ${circumference.toFixed(4)}, area = ${area.toFixed(3)}`);

//  =====HASIL PEMBAHASAN======
// const circle_radius = 5;

// const circle_diameter = 2 * circle_radius;
// console.log(circle_diameter);

// const circle_circumference = Math.PI * circle_diameter;
// console.log(circle_circumference);

// const circle_area = Math.PI * circle_radius ** 2;
// console.log(circle_area);


// 4. Find angles of triangle if two angles are given
const a: number = 80;
const b: number = 65;

const c: number = 180 - (a + b);
console.log(c);


//5. Covert days to years, months and days
const totalDays: number = 400;

const years: number = Math.floor(totalDays / 365);
const remainingAfterYears: number = totalDays % 365;

const months: number = Math.floor(remainingAfterYears / 30);
const days: number = remainingAfterYears % 30;

console.log(`${years} year, ${months} month, ${days} days`);

//  =====HASIL PEMBAHASAN======
// const total_days = 400;
// const FIX_YEAR = 365;
// const FIX_MONTH = 30;

// const year = Math.floor(total_days / FIX_YEAR);
// let days_left = total_days % FIX_YEAR;

// const month = Math.floor(days_left / FIX_MONTH); => Math.ceil (pembulatan keatas) & Math.floor(pembulatan kebawah)
// days_left = days_left % FIX_MONTH;

// console.log(`${total_days} days => ${years} years, ${months} months, ${days_left} day`,);

//6. Code to get difference between dates in days

function parseDateUTC(isoDate: string): Date {
  return new Date(`${isoDate}T00:00:00Z`);
}

const date1: string = "2022-01-20";
const date2: string = "2022-01-22";

const d1: Date = parseDateUTC(date1);
const d2: Date = parseDateUTC(date2);

const msPerDay: number = 24 * 60 * 60 * 1000;
const diffDays: number = Math.abs((d2.getTime() - d1.getTime()) / msPerDay);

console.log(diffDays);

//  =====HASIL PEMBAHASAN======
// const from_date = new Date("2022-01-01");
// const to_date = new Date("2022-10-01");

// const FIX_MILISECOND_TO_DAY = 3600*24*1000;

// const date_difference = 
//     (to_date.getTime() - from_date.getTime()) / FIX_MILISECOND_TO_DAY;
// console.log(date_difference);