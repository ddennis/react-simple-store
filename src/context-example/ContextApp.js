/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 20-06-2018.
 */
import React, { Component } from 'react'
import { ListProvider } from "./ListContext";
import ListUsingConsumer from "./ListUsingConsumer";

import '../app.css';

export default class ContextApp extends Component {

	state = {
		items:["ONE CONTEXT", "TWO CONTEXT", "THREE CONTEXT"]
	}

	render(){


		return (

			<ListProvider
						  value={{
							  items:this.state.items,
							  actions:{
								  deleteItem:(index) =>{
									  const newArr = [...this.state.items];
									  newArr.splice(index, 1);
									  this.setState({items:newArr})
								  }
							  }
						  }}>

				<div className="headline">ContextApp - simple example using consumer and provider</div>
				<ListUsingConsumer/>

			</ListProvider>
		)
	}

}



