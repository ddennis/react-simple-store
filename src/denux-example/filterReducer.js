/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 21-06-2018.
 */

export const filterReducer = (state , action) => {

	console.log (" filterReducer.js > FILTER = " , state);

	if (action.type === "SHOW_ALL") {

		//const newArr = [...state.items];
		return action.type //{ ...state, items: state.items };
	}


	if (action.type === "SHOW_FIRST") {
		console.log (" filterReducer.js > state = " , state);
		/*const newArr = [...state.items];
		newArr.slice(0, 1)
		return { ...state, items: newArr };*/
		return action.type;
	}


	// else just return state
	return state;

};

