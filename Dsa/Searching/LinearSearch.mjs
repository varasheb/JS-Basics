export function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

let arr = [3, 6, 8, 2, 9, 1];
console.log(`Linear Search of target in  ${arr} : found at index `,linearSearch(arr, 8)); 
