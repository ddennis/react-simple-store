/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 21-05-2018.
 */
import React, { Component } from 'react'
import dispatcher from "../dispatcher";

export default class List extends Component {

	constructor(props){
		super(props)
	}

	deleteItem = (index) =>{
		const action = {
			type:"REMOVE_ITEM",
			payload:{index:index}
		}

		dispatcher.dispatch(action)
	};

	render(){


		console.log (" List.js > this.props.items = " , this.props.items);
		
		const contents = this.props.items.map((item, index) =>{

			return (
				<div key={index}>
					<h1>{item}</h1>
					<p onClick={() =>{
						this.deleteItem(index)
					} } style={{ cursor:"pointer"}}>delete</p>
				</div>

			)
		});

		return (
			<div style={{width:"50%"}}>
				{contents ? contents : 'no items'}
			</div>


		)
	}

}



