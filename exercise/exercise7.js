// 1
function majorityElement(nums) {
    const counts = {};
    const limit = Math.floor(nums.length / 2);

    for (const num of nums) {
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] > limit) return num;
    }

    return n;
}
console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));



// 2
function romanToInt(s) {
    const nilai = {
        I:1, V: 5, X: 10, L: 50, 
        C: 100, D: 500, M: 1000 
    };
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        const sekarang = nilai[s[i]];
        const berikutnya = i + 1 < s.length ? nilai[s[i + 1]] : 0;
        if (sekarang < berikutnya) {
            total -= sekarang;
        } else {
            total += sekarang;
        }
    }
    return total;
}

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));



//3
function generatePascal(numRows) {
    const triangle = [];

    for (let row = 0; row < numRows; row++) {
        const currentRow = [];

        for (let col = 0; col <= row; col++) {
            if (col === 0 || col === row) {
                currentRow.push(1);
            } else {
                const atasKiri = triangle[row - 1][col - 1];
                const atasKanan = triangle[row - 1][col];
                currentRow.push(atasKiri + atasKanan);
            }
        }

        triangle.push(currentRow);
        }

        return triangle;
}
console.log(generatePascal(5));
console.log(generatePascal(1));



//4
function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (const price of prices){
        if (price < minPrice) {
            minPrice = price;
        } else {
            const profit = price - minPrice;
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
