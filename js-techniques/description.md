# Closures
A closure is the combination of a function bundled together (enclosed) with references to its
surrounding state (the **lexical environment**).

In other words, a closure gives you access to an outer function’s scope from an inner function.
In JavaScript, closures are created every time a function is created, at function creation time.

Closures are useful because they let you associate data (the lexical environment) 
with a function that operates on that data. This has obvious parallels to object-oriented programming,
where objects allow you to associate data (the object's properties) with one or more methods.

Consequently, you can use a closure anywhere that you might normally use an object with only a single method.

#### Closure scope
  Every closure has three scopes:
  * Local Scope (Own scope)
  * Outer Functions Scope
  * Global Scope
 ```
    // global scope
    var e = 10;
    function sum(a){
      return function(b){
        return function(c){
          // outer functions scope
          return function(d){
            // local scope
            return a + b + c + d + e;
          }
        }
      }
    }
```

#### Closures in loops: A common mistake
```
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = function() {
      showHelp(item.help);
    }
  }
}

setupHelp();
```
> If you try this code out, you'll see that it doesn't work as expected.
> No matter what field you focus on, the message about your age will be displayed.

**This is because the variable `item` is declared with var and thus has function scope due to hoisting.**

The value of `item.help` is determined when the onfocus callbacks are executed.
Because the loop has already run its course by that time, the item variable object (shared by all three closures) has been left pointing to the last entry in the `helpText` list.

Solution for this problem is to simply use `let` and then we would have block scope variable, or to wrap calling into
another function (e.q IIFE)

---
# Currying

# Debounce

# Trampoline 

#### PTC or Proper Tail Calls
 
#### TCO or Tail Calls Optimizations
