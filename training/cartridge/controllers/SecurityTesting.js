/**
* Description of the Controller and the logic it provides
*
* @module  controllers/SecurityTesting
*/

'use strict';

var guard = require('storefront_controllers/cartridge/scripts/guard');
var ISML = require('dw/template/ISML');


function start() {
	try
	{
	//var q = request.
	response.getWriter().println('<b>Whatsup</b>');
		//ISML.renderTemplate('checkout/cart/security');
		ISML.renderTemplate('content/home/homepage');
		//ISML.renderTemplate('storefront_core/cartridge/templates/default/testing/security'); 
	}catch(e)
	{
		response.getWriter().println(e);
		
	}
	
};

exports.Start = guard.ensure(['get'], start);


