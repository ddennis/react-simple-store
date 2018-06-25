/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 21-06-2018.
 */
import React, { Component } from 'react'
import { Denux } from "./Denux";

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

								<div style={{display:"flex"}}>
									<button onClick={() =>{
										this.counter++;
										context.dispatch({type:"ADD", item:"item " + this.counter})
									}}>
										Add new

									</button>


									<button className="filter" onClick={() =>{

										context.dispatch({type:"SHOW_ALL"})
									}}>
										show all
									</button>

									<button className="filter" onClick={() =>{
										context.dispatch({type:"SHOW_FIRST"})
									}}>
										show first
									</button>

									<button className="load" onClick={() =>{
										context.dispatch({type:"START_LOAD"})
									}}>
										load
									</button>
								</div>
							</div>
						)
					}
				}

			</Denux.Consumer>

		)
	}

}



