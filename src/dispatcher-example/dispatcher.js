/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 08-12-2017.
 */

// there can be only one!! - highlander
const listners = [];


// This module should act as a singleton, meaning that everyone who imports it should get the same copy
//---------------------------------------------------------------------------------------
export default {

	register:function (callback){
		listners.push(callback);
	},

	dispatch:function (action){
		listners.forEach(listener => listener(action));
	}

}