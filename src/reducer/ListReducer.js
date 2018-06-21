/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 21-06-2018.
 */

export const listReducer = (state, action) => {

	if (action.type === "DELETE") {
		
		const index = action.index;
		console.log (" ListReducer.js > index = " , index);
		const newArr = [...state.items];

		newArr.splice(index, 1);
		return { ...state, items: newArr };
	}


	if (action.type === "ADD") {

		const newArr = [...state.items];
		newArr.push(action.item)
		return { ...state, items: newArr };
	}


	// else just return state
	return state;

};

