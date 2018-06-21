import React, { Component } from 'react';

import List from "./components/List";
import ItemStore from "./store/ItemStore";
import { ListProvider } from "./provider/ListContext";
import ListUsingConsumer from "./components/ListUsingConsumer";
import VersionOne from "./components/VersionOne";
import VersionTwo from "./components/VersionTwo";
import VersionThree from "./components/VersionThree";
import {DenuxStore} from "./store/DenuxStore";
import { listReducer } from "./reducer/ListReducer";
import { Denux } from "./Denux";
import DenuxList from "./components/DenuxList";
import DenuxValue from "./components/DenuxValue";

class App extends Component {
	constructor(props){

		super(props);

		const items = ["ONE", "TWO", "THREE"];

		this.itemStore = new ItemStore(items);
		
		// When the store changes, itemStoreUpdate() will be called
		this.itemStore.subscribe( this.itemStoreUpdate.bind(this) );

		//this.denuxStore = new DenuxStore( ListReducer )

		// initial state
		this.state = {
			items:this.itemStore.getData(),

		}

	}


	itemStoreUpdate(){
		this.forceUpdate();
	}


	render(){

		return (
			
			<div className="App" >
				
				{/*<VersionOne items={this.itemStore.getData()} />*/}
				{/*<VersionTwo/>*/}
				{/*<VersionThree/>*/}

				<Denux reducer={listReducer} state={this.state}>
					<DenuxValue/>
					<DenuxList/>
				</Denux>

			</div>
		);
	}
}

export default App;
