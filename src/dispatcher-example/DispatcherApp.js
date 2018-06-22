import React, { Component } from 'react';

import ListWithDispatcher from "./ListWithDispatcher";
import ItemStore from "./ItemStore";


class App extends Component {
	constructor(props){

		super(props);

		const items = ["🙈", "⚽", "🍔", "💩"];

		this.itemStore = new ItemStore(items);
		
		// When the store changes, itemStoreUpdate() will be called
		this.itemStore.subscribe( this.itemStoreUpdate.bind(this) );

		// initial state
		/*this.state = {
			items:this.itemStore.getData(),
		}*/


	}


	itemStoreUpdate(){

		// it's possible to use forceUpdate, otherwise just use state
		this.forceUpdate();

		//this.setState({items:this.itemStore.getData()})

	}


	render(){

		return (
			
			<div className="App" >

				<div className="headline">A simple dispacther and store</div>
				<h1 style={{color:"red"}}>{ this.itemStore.getData().length }</h1>
				<h1></h1>
				<ListWithDispatcher items={this.itemStore.getData()} />
			</div>
		);
	}
}

export default App;
