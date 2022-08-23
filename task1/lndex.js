'use strict'
// create a for loop that iterates from 1 to 15
for (let index = 1; index < 15; index++) {
// create an if statement
  if (index % 2 === 1) {
    const h1 = document.createElement("h1")
    h1.innerHTML = `${index} is odd` 
    document.body.appendChild("h1")
  } 
  
}