function cycleIterator(input) {
    let i = 0;

    function iterate() {
        console.log(input[i]);
        i++;
        if (i === input.length) {
            i = 0;
        }
    }
    return iterate;
}

const myIterator = cycleIterator(['brandon', 'liz', 'kevin', 'noah']);
myIterator();
myIterator();
myIterator();
myIterator();
myIterator(); // prints nothing