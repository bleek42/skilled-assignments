function makeHistory() {
    const history = [];

    function historyActions(action) {
        if (action === 'undo') {
            return history.pop() + ' - undone';
        }
        else {
            return 'history is empty';
        }
        else {
            history.push(action);
            return 'action done';
        }
    }
    return historyActions;
}