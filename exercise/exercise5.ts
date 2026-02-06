// N0.1  Write a function to get the lowest, highest and average value in the array (with and without sort function).



// No.2
const arr = ["apple", "banana", "cherry", "date"];

function joinWords(words: string[]) {
  const arr = [...words];          
  const last = arr.splice(-1)[0];  

  if (!last) return "";            
  if (arr.length === 0) return last;                
  if (arr.length === 1) return arr[0] + " and " + last; 

  return arr.join(",") + ", and " + last;           
}
console.log(joinWords(arr)); 
    


// No.3
const numbers: number[] = [5, 3, 1, 7, 2, 6];

const sort = [...numbers].sort((a, b) => a-b);
const secondSmallest = sort[1];

console.log(secondSmallest);




// No.4




// No.5
function element(arr: number[], newElement: number) {
    if(!arr.includes(newElement)) arr.push(newElement);
    return arr;
}

const a = [1, 2, 3, 4];
console.log(element(a, 4));

const b = [1, 2, 3, 4];
console.log(element(b, 7));



//No.6



//No.7



//No.8
function combine(arr1: number[], arr2: number[]) {
    return arr1.concat(arr2);
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5];
console.log(combine(arr1, arr2));



//No.9
function findDuplicates(arr: number[]): number[] {
  const d = arr.filter((n, i) => arr.indexOf(n) !== i);
  return d
    .filter((n, i) => d.indexOf(n) === i)
    .sort((a, b) => a - b);
}

console.log(findDuplicates([1, 2, 2, 2, 3, 3, 4, 5, 5])); 



//No.10

const a1: number[] = [1, 2, 3, 4, 5];
const a2: number[] = [3, 4, 5, 6, 7];

const onlyInArr1 = a1.filter((n) => {
  return !a2.includes(n);
});

const onlyInArr2 = a2.filter((n) => {
  return !a1.includes(n);
});

const result = onlyInArr1.concat(onlyInArr2);

console.log(result); 



// No.11



// No.12
// const arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];

// function sumDuplicate(nums: number[]) { 
//   const freq = new Map <numbers, number>();
  
//   for (const n of nums) {
//     freq.set(n, (freq.get(n) ?? 0) + 1);
//   }

//   let sum = 0;
//   for (const n of nums) {
//     if ((freq.get(n) ?? 0) > 1){
//       sum += n;
//     }
//   }

//   return sum;
// }


// No.13




