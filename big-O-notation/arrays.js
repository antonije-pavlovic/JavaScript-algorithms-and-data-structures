/**
 *  Use them if you need order
 *  when you need fast insertion / access and removal
 *  it can bee complicated
 *
 *  Searching - O(n)
 *  Access - O(1) - by index arr[123]
 *  Insertion - It depends where are you inserting
 *              if you add on top of arrays it ok.
 *              but adding on beginning is costly
 *              Because we need to shift all elements
 *  Removal - It depends where are you inserting
 *            same as at insertion
 *
 *
 *   Method time complexity in JS
 *
 *   push O(1)
 *   pop O(1)
 *   shift O(N)
 *   unshift O(N)
 *   concat O(N)
 *   slice O(N)
 *   splice O(N)
 *   sort O(N * log N)
 *   forEach / map / filter / reduce / et - O(N)
 */

/**
 LOOP PERFORMANCE:
 1. Looping Over an Array
 Summing of random 10k items
     For Loop, average loop time: ~10 microseconds
     For-Of, average loop time: ~110 microseconds
     ForEach, average loop time: ~77 microseconds
     While, average loop time: ~11 microseconds
     Reduce, average loop time: ~113 microseconds

 2. Duplicating an Array
     Duplicate using Slice, average: ~367 microseconds
     Duplicate using Map, average: ~469 microseconds
     Duplicate using Spread, average: ~512 microseconds
     Duplicate using Concat, average: ~366 microseconds
     Duplicate using Array From, average: ~1,436 microseconds
     Duplicate manually, average: ~412 microseconds

 3. Iterating Objects
     Object iterate For-In, average: ~240 microseconds
     Object iterate Keys For Each, average: ~294 microseconds
     Object iterate Entries For-Of, average: ~535 microseconds
 */
