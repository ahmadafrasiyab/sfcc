/**
* Description of the Controller and the logic it provides
*
* @module  controllers/SecurityTesting
*/

'use strict';

var guard = require('storefront_controllers/cartridge/scripts/guard');
var ISML = require('dw/template/ISML');
var libsecure = require('training/cartridge/controllers/libsecure');


function start() {
	try
	{
	//var q = request.
	response.getWriter().println(libsecure.htmlEncode('<b>Whatsup</b>'));
	response.getWriter().println(request.httpParameterMap.redirect.value);
	response.getWriter().write('Testing');
	response.getWriter().print('Testing');
		//ISML.renderTemplate('checkout/cart/security');
		//ISML.renderTemplate('content/home/test');
		//ISML.renderTemplate('storefront_core/cartridge/templates/default/testing/security'); 
	}catch(e)
	{
		response.getWriter().println(e);
		
	}
	
};
function redirect()
{
	try
	{
	//var q = request.
	var red = request.httpParameterMap.redirect.value;
	response.redirect(red);
	response.redirect(request.httpParameterMap.redirect.value);
		//ISML.renderTemplate('checkout/cart/security');
		ISML.renderTemplate('content/home/test');
		//ISML.renderTemplate('storefront_core/cartridge/templates/default/testing/security'); 
	}catch(e)
	{
		response.getWriter().println(e);
		
	}
	}

exports.Start = guard.ensure(['get'], start);
exports.Redirect = guard.ensure(['get'], redirect);


