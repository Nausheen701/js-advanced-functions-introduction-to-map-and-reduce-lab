// Your code here

// my own map-like methods
// mapToNegativize returns an array with all values made negative
//   1) transforms correctly

function mapToNegativize(array) {
    let n = []
    for (let i = 0; i < array.length; i++ ) {
      n.push(-1 * array[i])
    }
    return n
  }

//   mapToNoChange returns an array with the original values
//     2) transforms correctly

function mapToNoChange(array) {
    let n = []
    for (let i = 0; i < array.length; i++ ) {
      n.push(array[i])
    }
    return n
  }

//   mapToDouble returns an array with the original values multiplied by 2
//     3) transforms correctly

function mapToDouble(array) {
    let n = []
    for (let i = 0; i < array.length; i++ ) {
      n.push(2 * array[i])
    }
    return n
  }

//   mapToSquare returns an array with the original values squared
//     4) transforms correctly

function mapToSquare(array) {
    let n = []
    for (let i = 0; i < array.length; i++ ) {
      n.push( array[i] * array[i] )
    }
    return n
  }

//   my own reduce-like methods
//   reduceToTotal returns a running total when not given a starting point
//     1) reduces correctly

function reduceToTotal(array, initVal=0) {
        let total = initVal
        for (let i = 0; i < array.length; i++ ) {
          total = total + array[i]
        }
        return total   }


//   reduceToTotal returns a running total when given a starting point
//     2) reduces correctly

// function reduceToTotal(array) {
//     let total = initVal
//     for (let i = 0; i < array.length; i++ ) {
//       total = total + array[i]
//     }
//     return total   }

//   reduceToAllTrue returns true when all values are truthy
//     3) reduces correctly

function reduceToAllTrue(array) {
    for (let i = 0; i < array.length; i++ ) {
      if (!array[i]) return false
    }
    return true
  }
//   reduceToAllTrue returns false when any value is falsy
//     4) reduces correctly
//   reduceToAnyTrue returns true when a true value is present
//     5) reduces correctly

function reduceToAnyTrue(array) {
    for (let i = 0; i < array.length; i++ ) {
      if (array[i]) return true
    }
    return false
  }

//   reduceToAnyTrue returns false when no true value is present
//     6) reduces correctly
