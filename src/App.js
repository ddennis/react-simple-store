/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 21-06-2018.
 */
import React, { Component } from 'react'

import './app.css'
import Amount from "./components/Amount";
import List from "./components/List";
import Wrapper from "./components/Wrapper";
import ItemStore from "./dispatcher-example/ItemStore";

export default class App extends Component {

	constructor(props){
		super(props);

		this.itemStore = new ItemStore(	["ONE", "TWO", "THREE", "💩"] )
		this.itemStore.subscribe(this.storeUpdated.bind(this))

		this.state = {
			items:this.itemStore.getData()
		}
	}


	storeUpdated(){
		this.setState({items:this.itemStore.getData()})
	}


	deleteIt = (index) => {
		const newArr = [...this.state.items];
		newArr.splice(index, 1);
		this.setState({items:newArr})
	};


	render(){
		return (
			<div className="app">
				<div className="headline">How to fix Prop drilling </div>
				<Amount myValue={this.state.items.length}></Amount>
				<hr/>

				<Wrapper items={this.state.items} deleteIt={this.deleteIt}/>


			</div>
		)
	}

}



