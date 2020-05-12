## closure

- What is a closure?<br>
  **when function is able to access variable from an outer function that has already returned.** <br>
- List two reasons why closures are useful<br>
  **create a "private variable," or a variable that can not be accessed directly (and overwritten).** <br>

- What is a module?<br>
  **a piece of code that is encapsulated and can be reused quite easily.**<br>
- What is the arguments array-like object?<br>
  **Every single time that a function is called, we get access to a special keyword called arguments which looks like an array (it is not EXACTLY an array, but we will cover the reason why a bit later) and can be accessed using [] notation** <br>
- Why do we call arguments an array-like-object?<br>
  **The reason this is happening is because even though the arguments keyword looks like an array and even has a length property, it is actually not an array. It is a special kind of object.Manipulating this arguments array-like object can be useful, for instance, when you don't know how many arguments someone will pass in to your function** <br>

- Write a function called createCounter. This function should contain a variable count that is initialized to 0. This function should return another function that when invoked, increments the counter by 1 and returns the count variable. You should be able to create multiple counters with the createCounter function and they should all have their own private variable called count.<br>
