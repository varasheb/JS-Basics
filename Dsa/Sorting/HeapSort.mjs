//! Heap Sort
  function heapSort(arr) {
    let n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
    heapify(arr, n, i);
     
    for (let i = n - 1; i >= 0; i--) {
      swap(arr, 0, i);
      heapify(arr, i, 0);
    }
  
    return arr;
  }
  function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
  
    if (left < n && arr[left] > arr[largest])
      largest = left;
  
    if (right < n && arr[right] > arr[largest])
      largest = right;
  
    if (largest != i) {
      swap(arr, i, largest);
      heapify(arr, n, largest);
    }
  }
  function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
  let arr = [12, 11, 13, 5, 6, 7];
  console.log("Heap Sort :", heapSort(arr)); 
  