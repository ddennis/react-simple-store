/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 02-03-2018.
 */


import {AbstractStore} from '../store/AbstractStore'

export default class ItemStore extends AbstractStore {

	constructor(_contentArr){
		super(_contentArr)
	}

	// is called from super, when the store is updated.
	// this is the place to convert/transform data
	updateData(action){

		var payload = action.payload;
		var type = action.type;
		
		if(type === "REMOVE_ITEM" ){
			this.deleteItem(payload)
		}

		if(action.type === "ADD_ITEM" ){
			this.addItem(payload)
		}
	}



	deleteItem (payload){

		const index = payload.index;
		const newArr = [...this.contentArr];
		newArr.splice(index, 1);
		this.contentArr = newArr;
		this.update();
	}


	addItem (payload){
		// doing a simple push works sometimes, but its preferred to not mutate data
		//this.contentArr = [payload];

		// this should generate a new array without modifying the old
		this.contentArr  = this.contentArr.concat([payload]);
		this.update();
	}


}



