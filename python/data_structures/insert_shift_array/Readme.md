# Insert Shift Array

## Problem Domain

- Write a function called insertShiftArray which takes in an array and a value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

## Whiteboard Process

<img width="551" alt="insertShiftArray" src="https://user-images.githubusercontent.com/120413183/229999759-c45e88d0-59ad-4452-9343-ebc97131b337.png">

## Approach & Efficiency

- Check for array and parameter and place/shift parameter in the middle of old array list. Return original array with parameter in the middle.

## Example

- Array [1, 2, 3, 4]     Parameter -10
- Array [1. 2. -10, 3, 4]

## Solution

- insertShiftArray(array, parameter)
    array = shift parameter in the middle of array
    
    return(array);
