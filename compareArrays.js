// Implement your own deep comparison function for arrays.
// Let’s limit them to only contain numbers or strings.
// One level deep is OK; however, if you have time you can try to make sure it can handle nested arrays. (Ping me on slack for a hint if you’re stuck)


function compareTwoArrays(arr1, arr2) {
    // write your code here

}

// Test cases to verify
console.log(compareTwoArrays([1, 2, 3], [1, 2, 3])); // true
console.log(compareTwoArrays([3, 3, 3], [1, 2, 3])); // false
console.log(compareTwoArrays([1, 2, 3, 4], [1, 2, 3])); // false
console.log(compareTwoArrays([1, 2, 3], [1, 2, 3, 4])); // false

// // If you decide to attempt nested arrays
// const a = [1,['a', 'b'],3,4];
// const b = [1,['a', 'b'],3,4];
// console.log(compareTwoArrays(a, b)); // true

// const a = [1,[‘z', ‘z'],3,4];
// const b = [1,['a', 'b'],3,4];
// console.log(compareTwoArrays(a, b)); // false