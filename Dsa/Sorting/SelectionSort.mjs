//!  Selection sort

export function selectionSort(arr){
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

let  arr = [5, 4, 3, 2, 10];
console.log(" Selection Sort :",selectionSort(arr))