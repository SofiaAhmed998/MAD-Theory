//map : creates a new array with the results of calling a function for every element in the array.
const array1 = [1, 2, 3, 4, 5];
const doubledArr = array1.map((num) => num * 2);
console.log(doubledArr); 

//filter : creates a new array with all elements that pass the test implemented by the provided function.
const array2 = [1, 2, 3, 4, 5];
const evenArr = array2.filter((num) => num % 2 === 0);
console.log(evenArr); 


//concat : used to join arrays
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8];
const concatArray= arr1.concat(arr2);
console.log(concatArray); 

//slice :    Creates a new Array by slicing some values from the old array
const array = [1, 2, 3, 4, 5];
const slicedArr = array.slice(2, 4);
console.log(slicedArr); 

//Splice   :Takes 3 arguments (Starting index ,Number of element you wish to remove ,What ypu want to add)
const arr = [1, 2, 3, 4, 5];
const splicedArr = arr.splice(2, 2, 6, 7);
console.log(arr); 
console.log(splicedArr); 

//push : adds one or more elements to the end of an array and returns the new length of the array.
const a = [1, 2, 3];
const newlength = a.push(4, 5);
console.log(newlength); 
console.log(a); 

//pop : removes the last element from an array and returns that element.
const Arr = [1, 2, 3, 4, 5];
const lastElement = Arr.pop();
console.log(lastElement); 
console.log(Arr); 
// sort : sorts the elements of an array in place.
const Array = [3, 2, 5, 1, 4];
Array.sort();
console.log(Array);

//shift : removes the first element from an array and returns that element.
const arr4 = [1, 2, 3, 4, 5];
const firstElement = arr4.shift();
console.log(firstElement); 
console.log(arr4); 

//unshift: adds one or more elements to the beginning of an array and returns the new length of the array.
const arr5 = [1, 2, 3];
const newLength = arr.unshift(-1, 0);
console.log(newLength); 
console.log(arr5); 

//isArray : check whether each of these values is an array or not.
const ar = [1, 2, 3];
console.log(Array.isArray(ar)); 
const obj = {a: 1, b: 2};
console.log(Array.isArray(obj)); 

//reverse : reverses the order of the elements in an array in place.
const arra = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arra); 


//indexOf : to check the index of a value
const b = [1, 2, 3, 4, 5];
const index =  b.indexOf(3);
console.log(index); 

//Array Join :  Joins all arrays element
const A = ['apple', 'banana', 'orange'];
const joinedString = A.join(', ');

console.log(joinedString); 




































