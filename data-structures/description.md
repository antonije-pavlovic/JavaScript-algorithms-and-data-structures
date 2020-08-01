# Data structures

### Boundary conditions

**Empty data structure**

- what if we have empty data structure
- if we trying to remove element from data structure and it is empty what we gonna do?
- If we want to add something, how does it change addition if data structure is empty vs when something is already there 

**Single element in the data structure**

- what if there is single element in data structure
- if we removing something, that means we are ending with empty list
- if we are adding something, what we need to do

**Adding / removing from the beginning of data structure**

- we need to be aware of head pointer and how we gonna handle it

**Adding / removing from the end of data structure**

- we need to think about tail

**Working in the middle**

- most operations is handle here

# Singly linked list

Real life examples:

1. message delivery on network (message is broken into packets and each packet has a key of the next one so that at the receiver's end , it will be easy to club them)
2. Browser history (create a linked list of web-pages visited, so that when you check history (traversal of a list))

# Doubly linked list

Real life examples:

1. DNA molecules
2. Browser cache which allows to use BACK button.
3. Train coaches are connected with the next and the previous ones.
4. Roller chain of bicycle(doubly circular linked list)
5. Playlist

#  Stacks

Stack is an abstract data type(define rules) with a bounded(predefined) capacity.
It is a simple data structure that allows adding and removing elements
in a particular order. Every time an element is added, it goes on the top
of the stack and the only element that can be removed is the element that
is at the top of the stack, just like a pile of objects.


Stack can be easily implemented using an Array or a Linked List.
Arrays are quick, but are limited in size and Linked List requires overhead to allocate,
link, unlink, and deallocate, but is not limited in size.

`The simplest application of a stack is to reverse a word. You push a given word to stack - letter by letter - and then pop letters from the stack.`

Real life examples:

1. Managing functions invocations
2. Undo / Redo
3. Routing (the history object is treated like stack in many frameworks React, etc,)


#  Queues

Queue is an abstract data structure, somewhat similar to Stacks.
Unlike stacks, a queue is open at both its ends. One end is always used
to insert data (enqueue) and the other is used to remove data (dequeue).
Queue follows `First-In-First-Out` methodology, i.e., the data item stored
first will be accessed first.

Real life examples of queue are:

1. A queue of people at ticket-window: The person who comes first gets the ticket first.
The person who is coming last is getting the tickets in last.
Therefore, it follows first-in-first-out (FIFO) strategy of queue.

2. Vehicles on toll-tax bridge: The vehicle that comes first to the toll tax booth
leaves the booth first. The vehicle that comes last leaves last. Therefore,
it follows first-in-first-out (FIFO) strategy of queue.

3. Phone answering system: The person who calls first gets a response first
from the phone answering system. The person who calls last gets the response last.
Therefore, it follows first-in-first-out (FIFO) strategy of queue.

4. Luggage checking machine: Luggage checking machine checks the luggage first that comes first.
Therefore, it follows FIFO principle of queue.

5. Patients waiting outside the doctor's clinic: The patient who comes first visits
the doctor first, and the patient who comes last visits the doctor last. Therefore,
it follows the first-in-first-out (FIFO) strategy of queue.

### Big O

 - Insert: `O(1)`
 - Delete: `O(1)`
 - Space: `O(n)`
 - Search: `O(n)`

#  Hash table

A `hash table` (also called a `hash`, `hash map`,`unordered map` or `dictionary`) is a data structure that pairs keys to values.
Its a technique to convert a range of key values into a range of indexes of an array.
Its used to implement an associative array, a structure that can map keys to values.
A Hash Table uses a hash function to compute an index into an array of buckets or slots,
from which the desired value can be found.

#### Hash table operations are performed in two steps:
 * A key is converted into an integer index by using a hash function.
 * This index decides the where the key-value pair record belongs.

Real life examples:

1. Number of occurrences of each word in a book
2. Finding number of unique words
3. Given a log containing UserId, ProcessId, starTime, endTime and resource consumption, finding user with highest resource consumption
4. In a compiler, a hash table will likely be used for keyword and identifier storage because a compiler needs quick access to this information


Although hash tables provide fast insertion, deletion, and retrieval,
they perform poorly for operations that involve searching, such as finding the minimum and maximum values in a data set.
For these operations, other data structures such as the binary search tree are more appropriate.

> **_NOTE:_**
The Hash-function takes a key and converts it to a number which will be the index at which to store it.
>In my _hash() function below, I am computing a hash value by summing the ASCII value of each character of the string
>(the argument passed-in) using the JavaScript function charCodeAt() to return a character’s ASCII value after
> multiplying the ASCII value by a multiplier PRIME, which in this case, is an odd prime 31.
>And the reason to choose 31 being, by some empirical research,
> if we take over 50,000 English words (formed as the union of the word lists provided in two variants of Unix),
>using the constants 31, 33, 37, 39, and 41 will produce less than 7 collisions in each case,
>while creating a hashing function

#### Collision-Resolution
Even with an efficient hash function, it is possible for two keys to hash (the result of the hash function)
to the same value. This is called a `collision`, and we need a strategy for handling collisions when they occur.

 And this can be done in two ways - `separate chaining` and `linear probing `

#### **Hash vs Objects in JavaScript**
Fundamentally, every object in JavaScript IS a hash. This is a hash of object’s properties and methods.
Every time I call object’s method, property, or just reference any variable, I perform an internal hash lookup
