// JAVASCRIPT: MERGE SORT

// This algorithm consists of two distinct steps:

// 1. Splitting the input array – The algorithm recursively splits the input array until each element is in its own array.
// 2. Merging sorted arrays – The algorithm compares and combines the elements of arrays until the input array is sorted.

const mergeSort = (array) => {
    if (array.length === 1) return array;
    const midIndex = Math.floor(array.length / 2);
    const leftArray = array.slice(0, midIndex);
    const rightArray = array.slice(midIndex, array.length);

    return merge(mergeSort(leftArray), mergeSort(rightArray));
}

const merge = (leftArray, rightArray) => {
    const sortedArray = [];
    while (leftArray.length && rightArray.length) {
        sortedArray.push(leftArray[0] < rightArray[0] ? leftArray.shift() : rightArray.shift());
    }
    return sortedArray.concat(leftArray, rightArray);
};

const array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const array3 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

console.log(mergeSort(array3))