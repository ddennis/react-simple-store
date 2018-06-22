/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 02-03-2018.
 */

import dispatcher from '../dispatcher-example/dispatcher'

export class AbstractStore {

	constructor(_contentArr){
		this.contentArr = [].concat(_contentArr);
		this.changelisteners = [];

		dispatcher.register( (action) => {
			var type = action.type;

			// simple error handling
			if(!type ){
				throw new Error("SOMETHING WAS NOT DEFINED")
			}

			this.updateData(action)

		})
	}


	/**
	 * @override this should be overridden
	 * @private
 	 */
	updateData(payload){
		console.log (" BaseStore.js > THIS MUST BE EXTENDED  ");
	}

	getData(){
		return this.contentArr
	}

	subscribe(func){
		this.changelisteners.push(func)
	}

	update(){
		this.changelisteners.forEach(listener => listener());
	}


}
