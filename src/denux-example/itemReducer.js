/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 21-06-2018.
 */

export const itemReducer = (state = {} , action) => {


	if (action.type === "DELETE") {
		const index = action.index;
		const newArr = [...state];
		newArr.splice(index, 1);
		return  newArr ;
	}


	if (action.type === "ADD") {
		console.log (" ListReducer.js > ADD = " , state);
		const newArr = [...state];
		newArr.push(action.item);
		return newArr;
	}


	if (action.type === "START_LOAD") {
		console.log (" ListReducer.js > ADD = " , state);

		return state;
	}




	// else just return state
	return state;

};

