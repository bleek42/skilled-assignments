function rollCall(namesArr) {
    let i = 0;
    function isPresent() {
        if (namesArr > i) {
            console.log(namesArr[0]);
            i++;
        }
        else {
            console.log('all present');
        }
    }
    return isPresent;
}