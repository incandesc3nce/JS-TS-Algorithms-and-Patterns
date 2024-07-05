/**
 * Binary search is a search algorithm that finds the position of a target value within a sorted array.
 * How does it work:
 * 1. Binary search compares the target value to the middle element of the array. 
 * 2. If they are not equal, the half in which the target cannot lie is eliminated and the search continues 
 * on the remaining half, again taking the middle element to compare to the target value.
 * 3. Repeat until the target is found or start is higher than end (meaning, the value wasn't found in the array)
 * 
 * Time complexity: O(log(n))
 * Space complexity: O(1) 
 */

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) return mid;

    if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return null;
}
