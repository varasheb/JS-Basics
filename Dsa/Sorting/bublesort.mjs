
//bublesort method
function bublesort(arr) {
    let n = arr.length;
    while (n > 0) {
        let swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
                swapped = true;
            }
        }
        if (!swapped) break;
        n--;
    }
    return arr;
}


//example
let arr = [5, 4, 3, 2, 1];
console.log(bublesort(arr))