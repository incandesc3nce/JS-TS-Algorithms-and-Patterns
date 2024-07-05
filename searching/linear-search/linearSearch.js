/**
 * Linear search is a search algorithm that finds sequentially checks each element of the array until
 * a match is found or the whole array has been searched.
 * How does it work:
 * 1. Check if arr[i] equals to target.
 * 2. If they are not equal, increase i by 1.
 * 3. If they are equal, return position of the item (i).
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }

  return null;
}
