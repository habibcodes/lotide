# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @habib.codes/lotide`

**Require it:**

`const _ = require('@habib.codes/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(a, b)`: assert test of deep equality between two arrays
* `assertEqual(actual, expected)`: asserts strict equality between two values
* `assertObjectsEqual(actual, expected)`: assert test of deep equality between two objects
* `countLetters(string)`: counts the total number of each letter's occurance in a string
* `countOnly(allItems, itemsToCount)`: counts the total number of times an item appears in an array
* `eqArrays(a, b)`: asserts deep equality between two arrays
* `eqObjects(object1, object2)`: asserts deep equality between two objects
* `findKey(object, callback)`: finds and returns keys from object based on condition of callback
* `findKeyByValue(object, value)`: finds key by value passed in to second parameter
* `head(array)`: returns an array's element at index zero
* `letterPositions(string)`: returns the position of letters in a string based on their indexed location
* `map(array, callback)`: uses a callback to map and return values to input array
* `middle(array)`: finds the exact middle value in an unsorted array
* `tail(array)`: returns all elements after index zero
* `takeUntil(array, callback)`: creates a new array from all values upto the value that satisfies the callback condition
* `without(source, itemsToRecover)`: returns a subset of a given array, removing unwanted elements

## Description
A Mini-Lodash library that simplifies 16 functions as well as automating robut tests.

## Author
{
    "author": "Zai <habib.codes@gmail.com>"
}

## Version
"1.0.0"