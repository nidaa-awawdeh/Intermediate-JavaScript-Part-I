#### Debugging Exercises

What does the throw keyword do? <br>
**throw the error and put amessage to errors and return it** <br>
What does the finally keyword do?<br>
**we can write finlly block at the end of errors block to end**
What is the difference between a TypeError and ReferenceError?<br>
**TypeErrors occur when JavaScript is unable to perform a certain operation on a data type (invoking something that is not a function, accessing properties on something that is not an object). ReferenceErrors occur when JavaScript does not have a reference to the variable in memory (accessing a variable that is not defined or not in the current or outer scope)** <br>
How do you create a snippet in the Chrome dev tools?<br>
**from dev tools in google chrome and open source and creat folder in snippet choice and write the code beside the window** <br>
In the Chrome dev tools, on the right hand side of the sources tab, there is a "pause" button which allows you to "pause on caught exceptions." What is an exception? <br>
**An exception is an error that occurs in your program. Caught exceptions are errors that are evaluated in a try/catch block** <br>
How do we "catch" errors in JavaScript? Give an example with code for what that might look like. <br>

       ```ruby
       try {

}
catch {
console.log(that is okay not error)

```


### Part I
1.person; ReferenceError becuase we are accessing a variable that has not been defined <br>
2.
```

var data = {};
data.displayInfo()

```

 Type of error , The value of data.displayInfo is undefined, so we are invoking undefined which we can not do. Undefined is not a function<br>
 3.
```

var data = {};
data.displayInfo.foo = "bar";

```

 TypeError We are trying to assign a property of foo on undefined. Undefined is not an object so we can not do that.  <br>

 4.
```

function data(){
var thing = "foo";
}
data();
thing;

```
ReferenceError  The thing variable is only available in the scope of the data function. We are trying to access it out of scope and JavaScript does not have a reference to it   <br>



  #### Part II
  1.
```

for(var i=0; i > 5; i++){
console.log(i);
}

````

fix :
  ```for(var i=0; i < 5; i++){
            console.log(i);
       }```


2.

````

function addIfEven(num){
if(num % 2 = 0){
return num + 5;
}
return num;}

```

fix:
```

       function addIfEven(num){
    if(num % 2 === 0){
        return num + 5;
    }
    return num;
               }

```

 3.

```

function loopToFive(){
for(var i=0, i < 5, i++){
console.log(i);
}
}

```

fix :

```

function loopToFive(){
for(var i=0, i < 5, i++){
console.log(i);
}
}

```


 4.
```

function displayEvenNumbers(){
var numbers = [1,2,3,4,5,6,7,8];
var evenNumbers = [];
for(var i=0; i<numbers.length-1; i++;){
if(numbers % 2 = 0); {
evenNumbers.push(i);
}
return evenNumbers;
}
}
displayEvenNumbers(); // should return [2,4,6,8]

```

fix :

```

function displayEvenNumbers(){
var numbers = [1,2,3,4,5,6,7,8];
var evenNumbers = [];
for(var i=0; i<numbers.length; i++){
if(numbers % 2 === 0); {
evenNumbers.push(i);
}
return evenNumbers;
}
}
displayEvenNumbers();

```

```
