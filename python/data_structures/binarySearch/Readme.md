# Binary Search

## Problem Domain

- Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the value of the search key, or -1 if the element is not in the array.

- NOTE: The search algorithm used in your function should be a binary search.
Check the Resources section for details

## Whiteboard Process

![BinarySearch](https://user-images.githubusercontent.com/120413183/230295037-ba57e919-60ce-4f69-8667-9c367f0beb47.png)

## Approach and Efficiency

- Read and try to solve problem on how I understand it.

## Solution

- function binarySearch(sortedArray, searchKey)



		let start = 0;

		let end = sortedArray.length -1



while (start <= end) {

		let middleOfArray((start + end)/2)
