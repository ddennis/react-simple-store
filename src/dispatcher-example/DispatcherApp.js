import React, { Component } from 'react';

import ListWithDispatcher from "./ListWithDispatcher";
import ItemStore from "./ItemStore";


class App extends Component {
	constructor(props){

		super(props);

		const items = ["ONE", "TWO", "THREE", "💩"];

		this.itemStore = new ItemStore(items);
		
		// When the store changes, itemStoreUpdate() will be called
		this.itemStore.subscribe( this.itemStoreUpdate.bind(this) );

		// initial state
		/*this.state = {
			items:this.itemStore.getData(),
		}*/

	}


	itemStoreUpdate(){

		// it's possible to use forceUpdate, if you do not want to use setState
		this.forceUpdate();
	}


	render(){

		return (
			
			<div className="App" >
				<div className="headline">A simple dispacther and store</div>
				<ListWithDispatcher items={this.itemStore.getData()} />
			</div>
		);
	}
}

export default App;
