// create a for loop that iterates from 1 to 15
console.log(22);
for (let index = 1; index <= 15; index++) {
// create an if statement
  if (index % 2 === 1) {
    //
    const h1 = document.createElement("h1")
    h1.innerHTML = `${index} is odd` 
    //appending h1 to document
    document.body.appendChild(h1)
  } //create an else statement
    // 
  else{
    //creating element with createElement
    const h1 = document.createElement("h1")
    h1.innerHTML = `${index} is even`
    document.body.appendChild(h1)
  }
  
}