/**
 * Bubble sort is a simple sorting algorithm that repeatedly steps through
 * the list, compares adjacent elements and swaps them if they are in the 
 * wrong order. The pass through the list is repeated until the list is
 * sorted.
 * 
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 */

export default function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}