/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 26-06-2018.
 */
import React, { Component } from 'react'
import Denux from "denux";

export default class NestedValue extends Component {

	constructor(props){
		super(props)
	}


	render(){
		return (

			<Denux.Consumer>
				{
					(context) =>{
						return (
							<div>
								<h1>Is it cool: {context.alive ? 'Hell yiiir' : 'Not really'}</h1>
								<button onClick={() =>{
									context.dispatch({type:"TOGGLE"})
								}}>toggle</button>
								<hr/>
								<p>Getting outerContext value: {this.props.amount}</p>

							</div>
						)
					}
				}

			</Denux.Consumer>
		)
	}

}



