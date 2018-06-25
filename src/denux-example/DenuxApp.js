import React, { Component } from 'react';



import { itemReducer } from "./itemReducer";
import DenuxList from "./DenuxList";
import {DenuxValue} from "./DenuxValue";
import { Denux } from "./Denux";
import { filterReducer } from "./filterReducer";

export default class DenuxApp extends Component {

	constructor(props){
		super(props);

		this.myStateObj = {
			list:{
					isFetching:false,
					items:["ONE", "TWO", "THREE"]
				},
			itemFilter:"SHOW_ALL"
		};

		this.appReducers = Denux.combineReducers({
			list:itemReducer,
			itemFilter:filterReducer
		});

	};


	render(){

		return (
			<div className="App" >
				<div className="headline">Denux.js - 🙈  a taste of the furture</div>
				<Denux reducer={this.appReducers} state={this.myStateObj}>
					<DenuxValue/>
					<DenuxList/>
				</Denux>
			</div>
		);
	}
}
