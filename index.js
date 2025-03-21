// myEach
function myEach(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < values.length; i++) {
        callback(values[i]);
    }
    return collection;
}

// myMap
function myMap(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    let newArray = [];
    for (let i = 0; i < values.length; i++) {
        newArray.push(callback(values[i]));
    }
    return newArray;
}

// myReduce
function myReduce(collection, callback, acc) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    let accumulator = acc !== undefined ? acc : values[0];
    let startIndex = acc !== undefined ? 0 : 1;

    for (let i = startIndex; i < values.length; i++) {
        accumulator = callback(accumulator, values[i], collection);
    }
    return accumulator;
}

// myFind
function myFind(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
            return values[i];
        }
    }
    return undefined;
}

// myFilter
function myFilter(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    let result = [];
    for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
            result.push(values[i]);
        }
    }
    return result;
}

// mySize
function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

// myFirst
function myFirst(array, n) {
    return n ? array.slice(0, n) : array[0];
}

// myLast 
function myLast(array, n) {
    return n ? array.slice(-n) : array[array.length - 1];
}

// mySortBy
function mySortBy(array, callback) {
    return [...array].sort((a, b) => {
        let valA = callback(a);
        let valB = callback(b);
        return valA > valB ? 1 : valA < valB ? -1 : 0;
    });
}

// myFlatten
function myFlatten(array, shallow = false, newArr = []) {
    for (let element of array) {
        if (Array.isArray(element)) { 
            if (shallow) {
                newArr.push(...element);
            } else {
                myFlatten(element, false, newArr);
            }
        } else {
            newArr.push(element);
        }
    }
    return newArr;
}


function myKeys(object) {
    return Object.keys(object);
}


function myValues(object) {
    return Object.values(object);
}
