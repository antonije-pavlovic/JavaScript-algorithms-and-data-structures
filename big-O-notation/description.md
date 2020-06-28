# Big O Notation
Big O notation is used in Computer Science to describe the performance or complexity of an algorithm.
Big O specifically describes the worst-case scenario, and can be used to describe
the execution time required or the space used (e.g. in memory or on disk) by an algorithm.
Simply put, Big O notation tells you the number of operations an algorithm will make.

What Big O notation doesn't tell you is the speed of the algorithm in seconds. 
There are way too many factors that influence the time an algorithm takes to run. 
Instead, you'll use Big O notation to compare different algorithms by the number of operations they make
### O(1)  - `constant time`
> f(n) = 1 <br/>
> function with input of size of n return 1;

O(1) describes an algorithm that will always execute in the same time (or space)
regardless of the size of the input data set.
Constant time is considered the best case scenario for a function
```
    function getFirstElement(array) {
        return array[0];
    }
```

### O(N) -  `linear time`
> f(n) = n <br/>
> function with input of size of n return n;

O(N) describes an algorithm whose performance will grow linearly and in direct proportion to the size of the input data set.
The example below also demonstrates how Big O favours the worst-case performance scenario;
a matching string could be found during any iteration of the for loop and the function would return early,
but Big O notation will always assume the upper limit where the algorithm will perform the maximum number of iterations.
```
    function checkIfIsInArray(array, value) {
        for(let i = 0; i < array.length; i ++){
            if(array[i] === value) {
                 return true;
            }          
        }
        return false;
    }
```

### O(N^2)  -  `square time`
> f(n) = n^2 <br/>
> function with input of size of n return n^2;

O(N^2) represents an algorithm whose performance is directly proportional to the square of the size of the input data set.
This is common with algorithms that involve nested iterations over the data set.
Deeper nested iterations will result in O(N3), O(N4) etc
```
    function checkIfThereAreSameValue(array) {
        for(let i = 0; i < array.length; i ++) {
            for (let j = 1; j < array.length - 1; j++){
                if(i === j) {
                    return true;
                }
            }
        }
        return false;
    }
```

### O(2^N)  -  `exponential time`
> f(n) = 2^n <br/>
> function with input of size of n return 2^n ;

O(2^N) denotes an algorithm whose growth doubles with each addition to the input data set.
The growth curve of an O(2^N) function is exponential - starting off very shallow, then rising meteorically. 
An example of an O(2^N) function is the recursive calculation of Fibonacci numbers
```
    function fibonacci(number) {
        if(number <= 1 ) {
            return number;
        } else {
         return fibonacci(number - 2) + fibonacci(number - 1)   
        }    
    }
```
## Time complexity

Time complexity is the number of operations an algorithm performs to complete its task (considering that each operation takes the same amount of time).
The algorithm that performs the task in the smallest number of operations is considered the most efficient one in terms of the time complexity.
However, the space and time complexity are also affected by  factors such as your operating system and hardware, but we are not including them in this discussion

## Space complexity
The term Space Complexity is misused for Auxiliary Space at many places. Following are the correct definitions of Auxiliary Space and Space Complexity.

**Auxiliary Space** is the extra space or temporary space used by an algorithm(not including space taken up by the inputs).

**Space Complexity** of an algorithm is total space taken by the algorithm with respect to the input size.
Space complexity includes both Auxiliary space and space used by input.

### Rules of Thumb in JavaScript
  * Most primitive(booleans, numbers, undefined, null) are `constant space`
  * Strings require O(N) space, where N is the string length
  * Reference types are generally O(N), where N is the length (for arrays) or the number of keys(for objects)
