# Searching Algorithms
Searching Algorithms are designed to check for an element or retrieve an element from any data structure where it is stored.
Based on the type of search operation, these algorithms are generally classified into two categories.

1. **Sequential Search** In this, the list or array is traversed sequentially and every element is checked. For example: `Linear Search`

2. **Interval Search**  These algorithms are specifically designed for searching in sorted data-structures.
These type of searching algorithms are much more efficient than Linear Search as they repeatedly target the center of the search structure
and divide the search space in half. For Example: `Binary Search`.

<br>

##### Searching Algorithms :
1. [Linear Search](#linear-search)
2. [Binary Search](#binary-search)
3. Jump Search
4. Interpolation Search
5. Exponential Search
6. Sublist Search (Search a linked list in another list)
7. Fibonacci Search
8. The Ubiquitous Binary Search
9. Recursive program to linearly search an element in a given array
10. Recursive function to do substring search
11. Unbounded Binary Search Example (Find the point where a monotonically increasing function becomes positive first time)

# Linear search
Linear search is a very simple search algorithm. In this type of search,
a sequential search is made over all items one by one. Every item is checked and if a match
is found then that particular item is returned, otherwise the search continues till the end of the data collection.

In theory other search algorithms may be faster than linear search but in practice even on medium-sized arrays 
(around 120 items or less) it might be infeasible to use anything else. On larger arrays,
it is advised to use faster search methods as if the data is large enough,
the initial time to prepare the data is comparable to many linear searches
<br/>
<br/>

**Complexity**
      
   * Worst case time complexity: `O(N)`
   * Average case time complexity: `O(N)`
   * Best case time complexity: `O(1)`
   * Space complexity: `O(1)`

# Binary Search

In computer science, binary search, also known as `half-interval search`, `logarithmic search`, or `binary chop`,
is a search algorithm that finds the position of a target value within a sorted array.
Binary search compares the target value to the middle element of the array. If they are not equal,
the half in which the target cannot lie is eliminated and the search continues on the remaining half, 
again taking the middle element to compare to the target value, and repeating this until the target value is found.
If the search ends with the remaining half being empty, the target is not in the array.
<br/>
<br/>

Sorted arrays with binary search are a very inefficient solution when insertion and deletion operations are
interleaved with retrieval, taking  `O(N)` time for each such operation. In addition,
sorted arrays can complicate memory use especially when elements are often inserted into the array.
There are other data structures that support much more efficient insertion and deletion. 
Binary search can be used to perform exact matching and set membership (determining whether a target value is in
a collection of values). There are data structures that support faster exact matching and set membership.
However, unlike many other searching schemes, binary search can be used for efficient approximate matching,
usually performing such matches in `O(log N)` time regardless of the type
or structure of the values themselves. In addition, there are some operations, like finding the smallest
and largest element, that can be performed efficiently on a sorted array.

**Complexity**
      
   * Worst case time complexity:` O(log N)`
   * Average case time complexity: `O(log N)`
   * Best case time complexity:` O(1)`
   * Space complexity: `O(log N)`
