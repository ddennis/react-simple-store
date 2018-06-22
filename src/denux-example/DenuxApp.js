import React, { Component } from 'react';


import { listReducer } from "./ListReducer";
import DenuxList from "./DenuxList";
import DenuxValue from "./DenuxValue";
import { Denux } from "./Denux";

export default class DenuxApp extends Component {

	constructor(props){
		super(props);

		this.myStateObj = {
			items:["ONE", "TWO", "THREE"]
		}
	}

	render(){

		return (
			<div className="App" >
				<div className="headline">Denux.js - 🙈  a taste of the furture</div>
				<Denux reducer={listReducer} state={this.myStateObj}>
					<DenuxValue/>
					<DenuxList/>
				</Denux>
			</div>
		);
	}
}


