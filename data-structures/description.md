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
