function majority(inputArr, callback) {
    let trueCount = 0;
    let falseCount = 0;
    for (let i = 0; i < inputArr.length; i++) {
        if (callback(inputArr[i])) {
            trueCount++;
        }
        else {
            falseCount++;
        }
    }
    return trueCount > falseCount;
}