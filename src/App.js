import React, { Component } from 'react';

import List from "./components/List";
import ItemStore from "./store/ItemStore";
import { ListProvider } from "./provider/ListContext";
import ListUsingConsumer from "./components/ListUsingConsumer";
import VersionOne from "./components/VersionOne";
import VersionTwo from "./components/VersionTwo";
import VersionThree from "./components/VersionThree";

class App extends Component {
	constructor(props){

		super(props);

		const items = ["ONE", "TWO", "THREE"];

		this.itemStore = new ItemStore(items);
		
		// When the store changes, itemStoreUpdate() will be called
		this.itemStore.subscribe( this.itemStoreUpdate.bind(this) );

		// initial state
		/*this.state = {
			items:this.itemStore.getData()
		}*/

	}


	itemStoreUpdate(){
		this.forceUpdate();
	}


	render(){

		return (
			
			<div className="App" style={{display:"flex"}}>
				
				<VersionOne items={this.itemStore.getData()} />
				{/*<VersionTwo/>*/}
				{/*<VersionThree/>*/}

			</div>
		);
	}
}

export default App;
