/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 21-05-2018.
 */
import React, { Component } from 'react'
import dispatcher from "./dispatcher";

export default class List extends Component {

	constructor(props){
		super(props)
	}


	deleteItem = (index) =>{
		const action = {
			type:"DELETE",
			payload:index
		};
		dispatcher.dispatch(action)
	};


	render(){

		const contents = this.props.items.map((item, index) =>{
			return (
				<div className="item" key={index}>
					<h1>{item}</h1>
					<button onClick={() =>{
						this.deleteItem(index)
					}} >delete</button>
				</div>
			)
		});

		return (
			<div >
				{contents ? contents : 'no items'}
			</div>


		)
	}

}



