// Implement function "after" that takes the number of times the callback can be executed as the first parameter and the callback function as the second parameter.

function after(timesToCall, callback) {
    // write your code here
    let count = 0;
    function inner() {
        if (count < timesToCall) {
            count++;
            callback();
        }
    }
    return inner;
}


const myAfterFunc = after(3, () => console.log('test'));

