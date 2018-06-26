/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 25-06-2018.
 */

// Example of handing async data, like loading data

const CUSTOM_LOAD_START = "LIST_LOAD_START";
const CUSTOM_LOAD_COMPLETED = "LIST_LOAD_COMPLETED";
const CUSTOM_UPDATE_DATA = "LIST_ADD_MANY";

export function fetchSomeData (dispatch, user ){ {

		// show loader/spinner
		dispatch({type:CUSTOM_LOAD_START});

		return fetch('https://api.github.com/users/'+user  )
			.then(
				response => response.json(),
				// Do not use catch, because that will also catch
				// any errors in the dispatch and resulting render,
				// causing a loop of 'Unexpected batch number' errors.
				// https://github.com/facebook/react/issues/6895
				error => console.log('An error occurred.', error)

			).then(
				(json) =>{

					// hide loader
					dispatch({type:CUSTOM_LOAD_COMPLETED});

					// update data
					dispatch({type:CUSTOM_UPDATE_DATA, data:[json.blog , json.login, json.location]})
				}
			)
	}


}

