/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 21-06-2018.
 */

export const itemReducer = (state = {} , action) => {


	if (action.type === "DELETE") {
		const index = action.index;
		const newArr = [...state.items];
		newArr.splice(index, 1);
		return { ...state, items: newArr };
	}


	if (action.type === "ADD") {
		console.log (" ListReducer.js > ADD = " , state);
		const newArr = [...state.items];
		newArr.push(action.item);
		return { ...state, items: newArr };
	}


	if (action.type === "LOAD_START") {
		return {...state, isFetching:true};
	}


	if (action.type === "LOAD_COMPLETED") {
		return {...state, isFetching:false};
	}


	if (action.type === "ADD_MANY") {
		const newArr = [...state.items];
		return { ...state, items: newArr.concat(action.data)};
	}


	// else just return state
	return state;

};

