//Substring
let c="Hello World "
c=c.substring(3,7)
console.log(c)
//trim (removes extra space from start and end)
let a=" I Love Pakistan"
console.log(a.trim())
console.log(a.trimStart())
console.log(a.trimEnd())

//UpperCase
a=a.toUpperCase()
console.log(a)
//LowerCase
a=a.toLowerCase()
console.log(a)


//replace 
a=a.replace("Love ","Like")
console.log(a)

//include
a=a.includes("Like")
console.log(a)

//padStart()

let str2 = '12345';
console.log(str2.padStart(5, '0')); 


//String to Array
let str3= '1234543';
const arr = str3.split(' ');

console.log(arr); let str="Maha"
//concat with template literal
console.log(`Hello ${str}`)
//to show string on new line
console.log(`Hello \n ${str}`)
//to print backclash
console.log(`Hello \\${str}`)
//to pritn "
console.log(`Hello \" ${str}`)
//length of string
console.log("length is "+str.length)
//to access a character at a special index
console.log(str.charAt(2))
    



