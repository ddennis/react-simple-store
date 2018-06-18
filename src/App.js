import React, { Component } from 'react';

import List from "./components/List";
import ItemStore from "./store/ItemStore";
import { ListProvider } from "./provider/ListContext";
import ListUsingConsumer from "./components/ListUsingConsumer";

class App extends Component {
	constructor(props){

		super(props);

		const items = ["ONE", "TWO", "THREE"];
		const contextItems = ["ONE CONTEXT", "TWO CONTEXT", "THREE CONTEXT"];

		this.itemStore = new ItemStore(items);
		// When the store changes, itemStoreUpdate() will be called
		this.itemStore.subscribe( this.itemStoreUpdate.bind(this) );

		// initial state
		this.state = {

			items:this.itemStore.getData(),
			texItems:contextItems,
			profile:{
				firstName: 'Sally',
				lastName: 'Anderson'
			}
		}

	}

	itemStoreUpdate(){
		this.setState({items:this.itemStore.getData()})
	}


	render(){
		return (

			<div className="App" style={{display:"flex"}}>

				<List  items={this.state.items}/>

				<ListProvider style={{width:"50%"}}
							  value={{
							  	state:this.state,
								  actions:{
							  		deleteItem:(index) =>{
										console.log (" App.js > what = " , index);
										const newArr = [...this.state.texItems];
										newArr.splice(index, 1);
										this.setState({texItems:newArr })
									}
								  }
							  }}>
					<ListUsingConsumer/>
				</ListProvider>
			</div>
		);
	}
}

export default App;
