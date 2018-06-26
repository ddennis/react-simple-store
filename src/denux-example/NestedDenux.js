/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 26-06-2018.
 */
import React, { Component } from 'react'

import Denux from 'denux'
import NestedValue from "./NestedValue";

export default class NestedDenux extends Component {

	constructor(props){
		super(props)

		this.stateObj = {
			alive:true
		}

	}

	simpleReducer = (state, action) =>{

		if(action.type === "TOGGLE" ){
			console.log (" NestedDenux.js > state = " , state);
			return {...state, alive:!state.alive}
		}
		return state
	}


	render(){
		return (

			<Denux.Consumer>
				{
					(outerContext) =>{
						return (
							<Denux reducer={this.simpleReducer} state={this.stateObj}>
								<div style={{backgroundColor:"lightgrey", padding:5}}>
									<h1>Nested</h1>
									<NestedValue amount={outerContext.list.items.length}/>
								</div>
							</Denux>
						)
					}
				}
			</Denux.Consumer>
		)
	}

}



