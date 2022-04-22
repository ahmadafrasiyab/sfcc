/**
* Description of the Controller and the logic it provides
*
* @module  controllers/libsecure
*/

'use strict';

// HINT: do not put all require statements at the top of the file
// unless you really need them for all functions

/**
* Description of the function
*
* @return {String} The string 'myFunction'
*/
// var myFunction = function(){
//     return 'myFunction';
// }

/* Exports of the controller */
///**
// * @see {@link module:controllers/libsecure~myFunction} */
//exports.MyFunction = myFunction;

var util = require('dw/util/SecureEncoder');
function htmlEncode(tainted)
{
	return util.forHtmlContent(tainted);
}


exports.htmlEncode = htmlEncode;
