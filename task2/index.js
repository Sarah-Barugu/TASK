// created a variable with array values 
let arr  = [2, 5, 3, -4, 8]
// created a variable largest  
let largest = arr[0];
// alert the largest number in the array
for(let index = 0; index < arr.length; index++) {
  if (arr[index] > largest) {
    largest = arr[index] 
  }

}

alert(largest)

