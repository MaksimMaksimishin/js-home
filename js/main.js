////// getMin - getMax, getSum;

const array = [1, 0 - 2, -1, 58, -4];

let max = array[0], min = array[0];
for (let i = 0; i < array.length; i++) {

    if (array[i] > max) { max = array[i]; }

    if (array[i] < min) { min = array[i]; }
}

let sum = array.reduce(function (a, b) {
    return a + b;
});

console.log("Max element from array is: " + max);

console.log("Min element from array is: " + min);

console.log("Sum element from array is: " + sum);
///////////

