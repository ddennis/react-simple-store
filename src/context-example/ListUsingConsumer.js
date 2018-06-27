import React, { Component } from 'react'
import { ListConsumer } from "./ListContext";

export default class ListUsingConsumer extends Component {


	deleteItem = (index) =>{
		console.log (" ListUsingConsumer.js > whwta = ", index );
	};


	render(){

		return (
			<ListConsumer>

				{
					(context) =>{


						const items = context.items.map((item, index) =>{
							return (
								<div className="item" key={index}>
									<h1>{item}</h1>
									<button onClick={() =>{
										context.actions.deleteItem(index)
									}} style={{cursor:"pointer"}}>delete</button>
								</div>
							)
						});
						
						
						return (
							<div>
								{items}
							</div>
						)
					}
				}
			</ListConsumer>

		)
	}

}



