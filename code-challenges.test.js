// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest



// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("colorHouse", () => {

    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

    it("Create a function name colorHouse, colorHouse will return different array length of colors, the first color in the array will be removed, the rest will get placed in random order", () => {

        expect(colorHouse(colors1)).toEqual(("can be a different order") ["yellow", "blue", "pink", "green"])
  })
})


// b) Create the function that makes the test pass.

// Create a function colorHouse
// colors1 and colors2, first index will be dropped
// The rest of colors1 and colors2 will return in an array in random order    

function colorHouse (array) {
    let chopped = array.slice(1)
    let choppedNscrewed = chopped.sort((a, b) => 0.5 - Math.random())
    return choppedNscrewed
}

console.log(swisherHouse(colors1))
// My Output: [ 'yellow', 'blue', 'green', 'pink' ]
console.log(swisherHouse(colors2))
// My Output: [ 'indigo', 'periwinkle', 'saffron', 'ochre', 'aquamarine' ]



// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

describe("minMax", () => {

    const nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
const nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]

    it("Create a function name minMax that will take nums1 and nums2 and return the minimum and maximum numbers in the order", () => {

        expect(minMax(nums1)).toEqual([-8, 90])
  })
})


// b) Create the function that makes the test pass.

// create a function minMx
// sort array from lowest to highest nane it min
// sort array from lowest to highest, than reverse it name it max
// return both arrays zeroth index 

function minMax (array) {
    let min = array.sort((a, b) => a - b)
    let max = array.sort((a, b) => a - b)
     return [min[0], max.reverse()[0]]       
}
console.log(minMax(nums1))
// My Output: [ -8, 90 ]
console.log(minMax(nums2))
// My Output: [ 5, 109 ]



// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.


describe("twoArrays", () => {

    const testArray1 = [3, 7, 10, 5, 4, 3, 3]
    const testArray2 = [7, 8, 2, 3, 1, 5, 4]
    // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]  

    it("create a function name twoArrays that will take testArray1 and testArray2 at the same time and return new array with no duplicate values", () => {

        expect(twoArrays(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
  })
})


// b) Create the function that makes the test pass.

// Create a function name twoArrays
// use function new Set to create a new array with all the numbers from both arrays, no duplicate values

function twoArrays (arr1, arr2) {
    //let arr3 = arr1.concat(arr2)
    let arr3 = [...new Set([...arr1,...arr2])]
    return arr3
}
console.log(twoArrays(testArray1, testArray2))
// My Output: [3, 7, 10, 5, 4, 8, 2, 1]