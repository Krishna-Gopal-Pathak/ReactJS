## CallBack Hell?
- The callback hell in JavaScript is referred to as a situation where an excessive amount of nested callback functions are being executed.

```bash
setTimeout(()={
	console.log("ONE");
	setTimeout(()={
		console.log("TWO");
		setTimeout(()={
			console.log("THREE");
		},1000)
	},1000)
},1000)
```

## Function Currying?
- Function currying is a method of breaking down a function that takes multiple arguments into a series of functions, each taking one argument. 
```bash

function sum(a){
	return function(b){
		return function(c){
			console.log(a+b+c)
		}
	}
}
```

## Synchronous
- The program waits for each task to finish before moving on to the next one.

```bash
const fun2=()=>{
	console.log("SECOND");
}
const fun1=()=>{
	console.log("First");
	fun();
	console.log("Third");
}
fun1();
```

## Asynchronous
- This allows the program to continue executing other tasks without waiting for a specific task to finish.

```bash
const fun2=()=>{
	setTimeout(()=>{
		console.log("SECOND");
	},2000);
}
const fun1=()=>{
	console.log("FIRST");
	fun2();
	console.log("THIRD");
}
fun1();
```

## Closures? [Lexial Scoping]
- Closuser gives access to an outer function function's scope from an inner function.

```bash
const outerfun=()={
	let a=5;
	let b=10;
	const innerfun=()=>{
		let sum=a+b;
		console.log(`Sum is ${sum}`);
	}
	innerfun();
}
outerfun();
```

## Scope Chain?
- The scope chain determines which value a variable will have and where it can be accessed. 

## Hoisting?
- We have creation phase and execution phase.
- Variable declaration and function declaration are moved to the top of their scope before the code execution.

```bash
var myName;
myName="Krishna";
console.log(myName);
```

## Destructuring ES6?
- Extract only what is needed.
  - Array Destructuring 
  - Object Destructuring 

**Array Destructuring**
```bash
const myBioData={
	myFname="Krishna",
	myLname="Pathak",
	age=26
}
let [myFname, myLname, age] = myBioData;
console.log(myFname);
```

**Object Destructuring**
```bash
const myBioData={
	myFname="Krishna",
	myLname="Pathak",
	age=26
}
let {myFname, myLname, age} = myBioData;
console.log(myFname);
```

## Object Properties
```bash
let myName="Krishna";
const myBio={
	[myName]:"How are you",
	26:"is my age"
}
console.log(myBio);
```

## Spread Operator
```bash
const colors = ['red','green','yellow'];
const mycolors = [...colors, black];
console.log(mycolors);
```

## ECMA Script 2016/ES7
- Array.prototype.includes
- Exponential Operator

**Array includes**
```bash
const colors = ['red','green','yellow'];
const isPresent = colors.includes('red');
console.log(isPresent);
```

**Exponential Operator**
```bash
console.log(2**3);
```

## ECMA Script 2017/ES8
- String padding
- Object.values()
- Object.entries()

**String padding**
```bash
let myName="Krishna".padStart(7);
console.log(myName);
```

**Object.values() || Object.entries()**
```bash
const person=[name:"krishna0", age:23];
console.log(Object.values(person));       //['krishna', 23]
console.log(Object.entries(person));      //['name','krishna'] ['age',23]
```

## Data types in Javascript?
- undefined
- Boolean
- Number
- String 
- BigInt
- Symbol


## ECMA Script 2015/ES6?
- let and const
- Template Strings
- Default Arguments
- Rest Operators
- Destructuring
- Object Properties
- Arrow function
- Spread Operator





















