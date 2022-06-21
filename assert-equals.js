//if expect is an array, then check if actual is also an array.
//if not throw an error

//if both are arrays, check that they are both the same.  Iterate through both using forEach?
//if they are different, throw an error

// check if actual and expect are the same data type.
// if not, then throw an error.

//if actual and expect are the same data type, check if they match.  if not, throw an error.


function assertEquals(expect, actual) {

    //check datatype
    if (typeof actual !== typeof expect) {
        throw new Error(`FAIL : Expected ${typeof expect}, received ${typeof actual}`)

    // check if array    
    } else if (Array.isArray(expect) !== Array.isArray(actual)) {
        throw new Error(`FAIL : Expected an array, returned ${typeof actual}`) 

    // if expect is not an array and the values don't match
         } else if (!Array.isArray(expect) && expect !== actual) {
        throw new Error(`FAIL : Expected ${expect}, received ${actual}`)

    //If both are arrays, loop through to see if arrays match
    } else if(Array.isArray(expect) && Array.isArray(actual)){
        expect.forEach((el,index) => {
            if(actual[index] != el) {
                throw new Error(`FAIL : Expected ${el}, received ${actual[index]}`)
            }
        })
    }
}

module.exports = assertEquals