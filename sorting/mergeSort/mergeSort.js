/**
 * Merge sort is a divide-and-conquer sorting algorithm.
 * How it works:
 * 1. Divide the unsorted list into n sublists, each containing one element (a list of one element is considered sorted).
 * 2. Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.
 * 
 * Time complexity: O(n*log(n))
 * Space complexity: O(n)
*/


function merge(left, right) {
  let mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      mergedArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return [...mergedArray, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}