/** @license Apache-2.0 */

'use strict';

/**
* Create an iterator which generates a nonpositive integer sequence.
*
* @module @stdlib/math-iter-sequences-nonpositive-integers
*
* @example
* var iterNonPositiveIntegersSeq = require( '@stdlib/math-iter-sequences-nonpositive-integers' );
*
* var iter = iterNonPositiveIntegersSeq();
*
* var v = iter.next().value;
* // returns 0
*
* v = iter.next().value;
* // returns -1
*
* v = iter.next().value;
* // returns -2
*
* // ...
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
