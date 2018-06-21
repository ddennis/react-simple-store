/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 20-06-2018.
 */
import React, { Component } from 'react'
import { ListProvider } from "../provider/ListContext";
import ListUsingConsumer from "./ListUsingConsumer";

export default class VersionTwo extends Component {

	state = {
		items:["ONE CONTEXT", "TWO CONTEXT", "THREE CONTEXT"]
	}

	render(){

		return (
			<ListProvider style={{width:"50%"}}
						  value={{
							  items:this.state.items,
							  actions:{
								  deleteItem:(index) =>{
									  const newArr = [...this.state.items];
									  newArr.splice(index, 1);
									  this.setState({items:newArr })
								  }
							  }
						  }}>

				<ListUsingConsumer/>

			</ListProvider>
		)
	}

}



