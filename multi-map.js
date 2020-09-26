function multiMap(inputArr, actionsArr) {
    for (let i = 0; i < inputArr.length; i++) {
        actionsArr[i](inputArr[i]);
    }
}