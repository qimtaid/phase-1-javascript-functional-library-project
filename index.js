// Collection Functions (Arrays or Objects)

// myEach
const myEach = (collection, callback) => {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else {
    for (const key in collection) {
      if (collection.hasOwnProperty(key)) {
        callback(collection[key]);
      }
    }
  }
  return collection;
};

// myMap
const myMap = (collection, callback) => {
  const result = [];
  myEach(collection, (item) => {
    result.push(callback(item));
  });
  return result;
};

// myReduce
const myReduce = (collection, callback, acc) => {
  myEach(collection, (item) => {
    acc = callback(acc, item);
  });
  return acc;
};

// myFind
const myFind = (collection, predicate) => {
  let result;
  myEach(collection, (item) => {
    if (predicate(item) && result === undefined) {
      result = item;
    }
  });
  return result;
};

// myFilter
const myFilter = (collection, predicate) => {
  const result = [];
  myEach(collection, (item) => {
    if (predicate(item)) {
      result.push(item);
    }
  });
  return result;
};

// mySize
const mySize = (collection) => {
  return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
};

// Array Functions

// myFirst
const myFirst = (array, n = 1) => {
  return n === 1 ? array[0] : array.slice(0, n);
};

// myLast
const myLast = (array, n = 1) => {
  return n === 1 ? array[array.length - 1] : array.slice(-n);
};

// BONUS: mySortBy
const mySortBy = (array, callback) => {
  return array.slice().sort((a, b) => {
    const aValue = callback(a);
    const bValue = callback(b);
    if (aValue < bValue) return -1;
    if (aValue > bValue) return 1;
    return 0;
  });
};

// BONUS: myFlatten
const myFlatten = (array, shallow = false, newArr = []) => {
  myEach(array, (item) => {
    if (Array.isArray(item) && !shallow) {
      myFlatten(item, false, newArr);
    } else {
      newArr.push(item);
    }
  });
  return newArr;
};

// Object Functions

// myKeys
const myKeys = (object) => {
  return Object.keys(object);
};

// myValues
const myValues = (object) => {
  return myMap(myKeys(object), (key) => object[key]);
};
