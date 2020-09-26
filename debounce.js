function debounce(action, interval) {
    if (interval < 1000) {
        throw new Error('too fast: must be at least 1000');
    }
    let canRun = true;

    function inner() {
        if (canRun) {
            action();
            canRun = false;
            setTimeout(() => canRun = true, interval);
        }
        else {
            console.log('too fast');
        }
        return inner;
    }
}