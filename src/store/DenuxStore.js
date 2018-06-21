import React from "react";

/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 21-06-2018.
 */




const Context = React.createContext();

export const DenuxConsumer = Context.Consumer;
export const DenuxProvider = Context.Provider;

export const DenuxStore = (reducer) => {

	let state;
	let listeners = [];

	const getState = () => state;

	const dispatch = (action) => {
		state = reducer(state, action);
		listeners.forEach(listener => listener());
	};

	const subscribe = (listener) => {
		listeners.push(listener);
		return () => {
			listeners = listeners.filter(l => l !== listener);
		};
	};

	dispatch({});

	return { getState, dispatch, subscribe };
};

