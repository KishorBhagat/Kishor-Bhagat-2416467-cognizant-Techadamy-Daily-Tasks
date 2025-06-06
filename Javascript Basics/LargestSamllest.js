let arr = [7, 2, 10, 4, 8];

function findMinMax(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) 
        min = arr[i];
    if (arr[i] > max) 
        max = arr[i];
  }

  console.log("Largest:", max);
  console.log("Smallest:", min);
}

findMinMax(arr);
