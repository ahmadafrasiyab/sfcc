/**
* Description of the Controller and the logic it provides
*
* @module  controllers/SecurityTesting
*/

'use strict';

var guard = require('storefront_controllers/cartridge/scripts/guard');
var ISML = require('dw/template/ISML');


function start() {
	//var q = request.gethttpQueryString()
	//response.getWriter().println(q);
	try
	{
		//ISML.renderTemplate('checkout/cart/security');
		//ISML.renderTemplate('testing/security');
		ISML.renderTemplate('storefront_core/cartridge/templates/default/testing/security'); 
	}catch(e)
	{
		response.getWriter().println(e);
		
	}
	
};

function csrftest(){
	response.getWriter().println('Called');
}

exports.Start = guard.ensure(['get'], start);
exports.CSRFTest = guard.ensure(['post', 'csrf'], csrftest)


