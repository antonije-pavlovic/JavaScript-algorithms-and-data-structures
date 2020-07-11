# what is sorting

Built in sort - unicode !! number vs string

**Sorting algorithms**
* [Bubble sort](#bubble-sort)
* [Insertion sort](#insertion-sort)
* [Merge sort](#merge-sort)
* [Quick sort](#quick-sort)

# Bubble sort

Bubble sort, sometimes referred to as `sinking sort`, is a simple sorting algorithm that repeatedly steps through the list
,compares adjacent elements and swaps them if they are in the wrong order.
The pass through the list is repeated until the list is sorted. 
The algorithm, which is a comparison sort, is named for the way smaller or larger elements **"bubble"** to the top of the list.

This simple algorithm performs poorly in real world use and is used primarily as an educational tool.
More efficient algorithms such as `timsort`, or `merge sort` are used by the sorting libraries built into popular programming languages such as Python and Java

#### Performance
Bubble sort has a worst-case and average complexity of `О(n2)`, where n is the number of items being sorted.
Most practical sorting algorithms have substantially better worst-case or average complexity, often `O(n log n)`.
Even other `О(n2)` sorting algorithms, such as insertion sort, generally run faster than bubble sort,
and are no more complex. Therefore, bubble sort is not a practical sorting algorithm.

The only significant advantage that bubble sort has over most other algorithms, even `quicksort`,
but not insertion sort, is that the ability to detect that the list is sorted efficiently is built into the algorithm.
When the list is already sorted (best-case), the complexity of bubble sort is only `O(n)`.


#### Use
Although bubble sort is one of the simplest sorting algorithms to understand and implement,
its `O(n^2)` complexity means that its efficiency decreases dramatically on lists of more than a small number of elements.
Even among simple `O(n^2)` sorting algorithms, algorithms like insertion sort are usually considerably more efficient.

Bubble sort also interacts poorly with modern CPU hardware.
It produces at least twice as many writes as insertion sort, twice as many cache misses, and asymptotically more branch mispredictions

Bubble sort works well with large datasets where you know that items are almost sorted.
For example, you might have a school roll of 1000 children.
Each child belongs to a grade — which means that age-wise, they are already semi-sorted.

Another example may be a large company with employees put into different departments and roles ranking.
It’s expected that within these groups, there is already a pre-determined range of salaries.
So if you’re given the entire dataset to sort, they’ve already been pre-sorted based on department and roles

# Insertion sort
Insertion sort is a simple sorting algorithm that builds the final sorted array 
(or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as `quicksort`, `heapsort`, or `merge sort`

Insertion sort is the algorithm of choice either when the data is nearly sorted (because it is adaptive) or when the problem size is small (because it has low overhead).
For these reasons, and because it is also stable, insertion sort is often used as the recursive base case (when the problem size is small) 
for higher overhead divide-and-conquer sorting algorithms, such as `merge sort` or `quick sort`.

#### Performance
* worst-case performance of `O(n^2)`

* best-case performance of `O(n)`

* average case of `O(n^2)`.


# Merge sort

In computer science, merge sort (also commonly spelled `mergesort`) is an efficient, general-purpose,
comparison-based sorting algorithm. Most implementations produce a stable sort,
which means that the order of equal elements is the same in the input and output.
Merge sort is a divide and conquer algorithm that was invented by **John von Neumann** in 1945.

##### Conceptually, a merge sort works as follows:

1. Divide the unsorted list into n sublists, each containing one element (a list of one element is considered sorted).
2. Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.

# Quick sort
Quicksort is a `divide-and-conquer` algorithm. It works by selecting a `pivot` element from the array and
partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot.
The sub-arrays are then sorted recursively.
This can be done in-place, requiring small additional amounts of memory to perform the sorting.

Quicksort always go in synonymous with the “most efficient algorithm”. 
There are two reasons why `quicksort` is so popular,

1. Time Complexity
The performance of quicksort is in order of `nlogn` for most of the cases.
If the list of elements is already in sorted order or nearly sorted order then it takes n² comparisons to sort the array.

There are cases where Quicksort performs badly. If the list of elements is already in sorted order or 
nearly sorted then we might end up in an unbalanced sub-array,
to an extent where there is no element on the left greater than the pivot, hence on the righ

2. Space complexity
Quicksort has a space complexity of `O(logn)` even in the worst case when it is carefully implemented such that

---
>**NOTE:**

Quicksort has one bigger difference with merge sort, and this ends up being a key point between these otherwise 
similar algorithms. This is the fact that quicksort is an `unstable` algorithm, meaning that it won’t be guaranteed 
to preserve the order of elements as it reorders; two elements that are exactly the same in the unsorted array 
could show up in a reversed order in the sorted one! Stability ends up being what causes people to choose
merge sort over quicksort, and it’s the one area where merge sort appears as the obvious winner.

---
