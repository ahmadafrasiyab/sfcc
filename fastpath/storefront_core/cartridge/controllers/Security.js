/**
* Description of the Controller and the logic it provides
*
* @module  controllers/SecurityTesting
*/

'use strict';

var guards = require('storefront_controllers/cartridge/scripts/guard');
var ISML = require('dw/template/ISML');


function start() {
	//var q = request.gethttpQueryString()
	//response.getWriter().println(q);
	try
	{
		//ISML.renderTemplate('checkout/cart/security');
		//ISML.renderTemplate('testing/security');
		ISML.renderTemplate('testing/security'); 
	}catch(e)
	{
		response.getWriter().println(e);
		
	}
	
};

function csrftest(){
	try{
	response.getWriter().println('Called');
	}catch(e)
	{
		response.getWriter().println(e);
		
	}
}

exports.Start = guards.ensure(['get'], start);
exports.CSRFTest = guards.ensure(['post', 'loggedin'], csrftest)


