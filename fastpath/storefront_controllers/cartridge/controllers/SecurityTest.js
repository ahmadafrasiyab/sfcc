/**
* Description of the Controller and the logic it provides
*
* @module  controllers/SecurityTest
*/

'use strict';

var guard = require('storefront_controllers/cartridge/scripts/guard');
var ISML = require('dw/template/ISML');

function start() {
	//ISML.renderTemplate('/templates/security.isml', {myparametersinISML:"Hello from Controllers"});
};

exports.Start = guard.ensure(['get'], start);


