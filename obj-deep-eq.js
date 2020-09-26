const compareObjs = (obj1, obj2) => {
    const isObject = obj1 && obj2 === typeof 'object' ? true : false;
    if (!isObject) {
        throw new Error('inputs are not objects');
    }

    const key1 = Object.keys(obj1);
    const key2 = Object.keys(obj2);
    if (key1.length !== key2.length) {
        return false;
    }

    for (const key of key1 && key2) {
        const val1 = obj1[key];
        const val2 = obj2[key];
        return (val1 === val2 ? true : false);
    }
};