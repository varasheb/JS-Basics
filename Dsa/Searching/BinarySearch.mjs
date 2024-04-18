import { bubbleSort } from "../Sorting/bublesort.mjs";


export function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1
}

let arr = [8, 2, 3, 6, 1, 9];

arr = bubbleSort(arr);
console.log(arr);

console.log(binarySearch(arr, 8)); // Output: 4
