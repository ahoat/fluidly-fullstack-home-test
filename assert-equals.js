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
         }
   else if(Array.isArray(expect) && Array.isArray(actual)){
        expect.forEach((el,index) => {
            if(actual[index] != el) {
                throw new Error(`FAIL : Expected ${el}, received ${actual[index]}`)
            }
        })
    }
}



//check if data is array
    // if(Array.isArray(expect) !== Array.isArray(actual)) {
    //     throw new Error(`FAIL : Expected an array, returned ${typeof actual}`)
    // }
    // if(
    //     //if both are arrays, check if they match
    //     JSON.stringify(expect) !== JSON.stringify(actual)){
    //             throw new Error(`FAIL : Expected ${expect}, received ${actual}`)
    //     }
    // }
    // //if actual and expected values do not match then throw an error.
    // if(expect !== actual) {
    //     throw new Error(`FAIL : Expected ${expect}, returned ${actual}`)
    // //otherwise, if actual and expected do match, check their types.  If types do not match, throw an error.
    // } else if (typeof expect !== typeof actual) {
    //     throw new Error(`FAIL : Expected ${typeof expect}, returned ${typeof actual}`)
    // } else if(Array.isArray(expect) && !Array(actual)) {
    //     throw new Error(`FAIL : Expected an array, returned ${typeof actual}`)
    // }


module.exports = assertEquals























// module.exports = function assertEquals(expect, actual) {

//     if (expect instanceof Array) {
    
//       if (!Array) {
    
//         throw new Error(`Expected an Array but instead found type ${typeof actual}`)
    
//     } else if (expect.length !== actual.length) {
    
//         throw new Error(`Expected array length ${expect.length} but found ${actual.length}`)
    
//     } else {
    
//         expect.forEach((el, i) => {
    
//        if (el != actual[i]) {
    
//         throw new Error(`Expected ${el} but found ${actual[i]}`)
    
//         }
//     })
    
//     }
    
//     } else if (expect != Array) {
    
//       if (typeof expect !== typeof actual) {
    
//         throw new Error(`Expected type ${typeof expect} but found type ${typeof actual}`)
//     }
//       else if (expect !== actual) {
    
//         throw new Error(`Expected ${expect} but found ${actual}`)
//     }
//     }
//     }





// function assertEquals(expect, actual) {

//     // Handle: strings, numbers, simple arrays

//     // Run tests using "npx jest"

//     if (expect === actual) {
//         // If expected and actual are strictly equal, don't throw an error (i.e. return undefined)
//         return;
//     } else {

//         // If expected and actual aren't strictly equal, first check if they have the same type:
//         if (typeof expect !== typeof actual) {

//             // If not, throw a "different type" error:
//             throw new Error(`Expected type ${typeof expect} but found type ${typeof actual}`);

//         } else {

//             // Types are the same, so throw different errors depending on the mismatch:

//             switch (typeof expect) {

//                 case 'string':
//                     throw new Error(`Expected "${expect}" but found "${actual}"`);

//                 case 'number':
//                     throw new Error(`Expected ${expect} but found ${actual}`);

//                 case 'object':
//                     // Handle flat arrays:
//                     if (expect.length !== actual.length) {
//                         throw new Error(`Expected array length ${expect.length} but found ${actual.length}`);
//                     } else {
//                         expect.forEach((element, index) => {
//                             if (actual[index] !== element) {
//                                 throw new Error(`Expected "${element}" but found "${actual[index]}"`);
//                             }
//                         });
//                     }
//                     return;

//                 default:
//                     throw new Error();

//             }

//         }

//     }

// }