/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 02-03-2018.
 */

import dispatcher from '../dispatcher'

export class AbstractStore {

	constructor(_contentArr){

		this.contentArr = [].concat(_contentArr);

		this.changelisteners = [];

		dispatcher.register( (action) => {

			console.log (" BaseStore.js > action = " , action);
			
			var type = action.type;
			var payload = action.payload;

			// simple error handling
			if(!type || !payload ){
				throw new Error("SOMETHING WAS NOT DEFINED")
			}

			this.updateData(action)

		})
	}


	/**
	 * @override this should be overriddeb
	 * @private
 	 */
	updateData(payload){
		console.log (" BaseStore.js > THIS MUST BE EXTENDED  ");
	}

	getData(){
		return this.contentArr
	}


// the pub sub part of the store
//---------------------------------------------------------------------------------------

	subscribe(func){
		this.changelisteners.push(func)
	}

	update(){

		var len = this.changelisteners.length;

		for (var i = 0; i < len; i++) {
			const listner = this.changelisteners[i]
			listner()
		}
	}


}
