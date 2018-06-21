/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 21-06-2018.
 */
import React, { Component } from 'react'
import { Denux, DenuxConsumer } from "../Denux";

export default class DenuxList extends Component {

	constructor(props){
		super(props)
		this.counter = 0
	}


	render(){
		return (

			<Denux.Consumer>
				{
					(context) =>{

						const items = context.items.map((item, index) =>{
							return (
								<div key={index}>
									<h1>{item}</h1>
									<p onClick={() =>{

										context.dispatch({type:"DELETE", index:index})
									}} style={{cursor:"pointer"}}>delete</p>
								</div>
							)
						});

						return (
							<div>
								{items}
								<hr/>
								<div onClick={() =>{
									this.counter++
									context.dispatch({type:"ADD", item:"item " + this.counter})
								}}>
									Add new
								</div>

							</div>
						)
					}
				}

			</Denux.Consumer>

		)
	}

}



