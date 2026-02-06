// ===Exercise 1===

function triangle(height) {
  let n = 1;

  for (let row = 1; row <= height; row++) {
    let line = "";

    for (let col = 1; col <= row; col++) {
      line += (n < 10 ? "0" : "") + n;

      if (col < row) line += " ";
      n++;
    }

    console.log(line);
  }
}

triangle(4);

// Hasil Pembahasan
function trianglePattern(height) {
  let count = 1;
  let result = "";

  for (let row = 1; row <= height; row++) {
    for (let col = 1; col <= row; col++) {
      const twoDigit = count < 10 ? `0${count}` : `${count}`;
      result += twoDigit + (col < row ? " " : "");
      count++;
    }
    if (row < height) result += "\n";
  }

  console.log(result);
}

trianglePattern(5);



// Exersice 2

function fizzBuzz(n) {
  let result = []; 

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }

  return result.join(", ");
}

console.log(fizzBuzz(6));
console.log(fizzBuzz(15));

// Hasil Pembahasan
function fizzBuzz(n) {
  let result = ""; 
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) result += "FizzBuzz";
    else if (i % 3 === 0) result += "fizz";
    else if (i % 5 === 0) result += "buzz";
    else result += `${i}`;

    result += i === n ? "" : ",";
    }
    console.log(result);
  }

  fizzBuzz(15);



// Exercise 3

function calculateBMI(weight, height) {
  const bmi = weight / (height **2);

  if (bmi < 18.5) console.log ("less weight");
  else if (bmi >= 18.5 && bmi <= 24.9) console.log ("ideal");
  else if (bmi >= 25.0 && bmi <= 29.9) console.log ("overweight");
  else if (bmi >= 30.0 && bmi <= 39.9) console.log ("very overweight");
  else console.log ("obesity");
}

calculateBMI(66, 1.8); 



// Exercise 4

function removeOdd(numbers) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) result.push(numbers[i]);
    }
  
console.log(result);

}

removeOdd([1, 2, 4, 3, 7, 12, 24]); 



// Exercise 5
function splitString(str) {
  const result = [];
  let temp = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " " ) {
      result.push(temp);
      temp = "";
    } else temp += str[i];
  }

  result.push(temp);

  console.log(result);
  
}
console.log(splitString("Hello World"));

const str = "budi";
console.log(str[3]);