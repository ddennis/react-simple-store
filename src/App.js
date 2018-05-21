import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./components/List";
import ItemStore from "./store/ItemStore";

class App extends Component {
	constructor(props){

		super(props)
		const items = ["ONE", "TWO", "THREE"];

		this.itemStore = new ItemStore(items);
		this.itemStore.subscribe( this.itemStoreUpdate.bind(this) );

		this.state = {items:this.itemStore.getData()}
	}



	itemStoreUpdate(){
		this.setState({items:this.itemStore.getData()})
	}


	render(){
		return (
			<div className="App">

				<List items={this.state.items}/>

			</div>
		);
	}
}

export default App;
