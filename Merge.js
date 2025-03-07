// Create a random array of numbers
function randomArray() {
    let array = []
    for(let i = 0; i <= 5; i++) {
        array.push(Math.floor(Math.random() * 10))
    }
    return array;
}

// Merge function: Merges two sorted arrays into one sorted array.
function merge(left, right) {
    const sorted = [];
    
    // Compare the elements of both arrays and push the smaller one to 'sorted'
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        sorted.push(left.shift());
      } else {
        sorted.push(right.shift());
      }
    }
    
    // If there are any remaining elements, append them
    return sorted.concat(left, right);
  }
  
  // Merge sort function: Recursively sorts an array.
  function mergeSort(array) {
    // Base case: arrays with fewer than 2 elements are already sorted.
    if (array.length < 2) {
      return array;
    }
    
    // Divide the array into two halves.
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
    
    // Recursively sort both halves and merge them.
    return merge(mergeSort(left), mergeSort(right));
  }
  
  // Example usage:
  const unsortedArray = randomArray();
  const sortedArray = mergeSort(unsortedArray);
  console.log("Unsorted:", unsortedArray);
  console.log("Sorted:", sortedArray);