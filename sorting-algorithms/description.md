# what is sorting

Built in sort - unicode !! number vs string

**Sorting algorithms**
* [Bubble sort](#bubble-sort)


# Bubble sort

Bubble sort, sometimes referred to as `sinking sort`, is a simple sorting algorithm that repeatedly steps through the list
, compares adjacent elements and swaps them if they are in the wrong order.
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
