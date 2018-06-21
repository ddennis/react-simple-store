/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 20-06-2018.
 */


import React, { Component } from 'react'

const Context = React.createContext();

const reducer = (state, action) => {
	if (action.type === "DELETE") {
		const index = action.index;
		const newArr = [...state.items];

		newArr.splice(index, 1);
		return { ...state, items: newArr };
	}

	// else just return state
	return state;

};

export const DenuxConsumer = Context.Consumer;

export class Denux extends Component {

	state = {

		items:["DENUX ONE", "DENUX TWO", "DENUX THREE"],

		dispatch: ( action )=> {

			console.log (" Denux.js > state = " , this.state);
			const k = reducer(this.state, action)
			console.log (" Denux.js > k = " , k);

			this.setState(
				state => reducer(state, action)
			);
		}
	};

	render() {
		const { state, props: { children } } = this;
		return <Context.Provider value={state}>{children}</Context.Provider>;
	}

}



