## Recursion

Recursion is a programming pattern that is useful in situations when a task can be naturally split
into several tasks of the same kind, but simpler. Or when a task can be simplified into an easy
action plus a simpler variant of the same task.Or, as we’ll see soon, to deal with certain data structures.

> **When a function solves a task, in the process it can call many other functions. 
> A partial case of this is when a function calls itself. That’s called recursion.**


### Two ways of thinking

* For something simple to start with – let’s write a function pow(x, n) that raises x to a natural power of n. 
In other words, multiplies x by itself n times

1. Iterative thinking
```
function pow(x, n) {
     let result = 1;
   
     // multiply result by x n times in the loop
     for (let i = 0; i < n; i++) {
       result *= x;
     }
   
     return result;
   }
   
   alert( pow(2, 3) ); // 8
```
2. Recursive thinking
```
function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

alert( pow(2, 3) ); // 8
```
> **_NOTE:_** The maximal number of nested calls (including the first one) is called recursion depth.
> In our case, it will be exactly `n`.The maximal `recursion depth` is limited by JavaScript engine.
> We can rely on it being 10000, some engines allow more, but 100000 is probably out of limit for the majority of them.
> There are automatic optimizations that help alleviate this (“tail calls optimizations”)
 
### The execution context and stack

The information about the process of execution of a running function is stored in its `execution context`.
The **execution context** is an internal data structure that contains details about the execution of a function:
where the control flow is now, the current variables,
the value of this (we don’t use it here) and few other internal details.


> **_NOTE:_** One function call has exactly one execution context associated with it

When a function makes a nested call, the following happens:
* The current function is paused.
* The execution context associated with it is remembered in a special data structure called execution context stack.
* The nested call executes ( The new context is created for the subcall ).
* After it ends, function execution context is not needed anymore,
 so it’s removed from the memory(retrieved from the stack), and the outer function is resumed from where it stopped.

> **_NOTE:_** Note the memory requirements. Contexts take memory.
> In our case, raising to the power of `n` actually requires the memory for `n` contexts,
> for all lower values of `n`
> Loop-based algorithm is more memory-saving. Its memory requirements are small, 
> fixed and do not depend on `n`

**Any recursion can be rewritten as a loop. The loop variant usually can be made more effective**

### Recursive structures

A recursive (recursively-defined) data structure is a structure that replicates itself in parts.
The idea of recursive structure came into its own with the advent of computer science (that is, software science) in the 1950s. 
The hardest problem in software is controlling the tendency of software systems to grow incomprehensibly complex.
Recursive structure helps convert impenetrable software rainforests into French gardens — still (potentially) vast and complicated,
but much easier to traverse and understand than a jungle.
