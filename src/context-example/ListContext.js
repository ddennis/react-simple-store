import { createContext } from 'react'

const ListContext = createContext({
	firstName: 'default name',
	lastName: 'default lastname'
});

export const ListProvider = ListContext.Provider;

export const ListConsumer = ListContext.Consumer;


