import React, { Component } from 'react';

import DenuxList from "./DenuxList";
import {DenuxValue} from "./DenuxValue";
//import  Denux  from "./Denux";
import  Denux from "denux";

import { listReducer } from "./reducers/listReducer";
import { filterReducer } from "./reducers/filterReducer";


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

		// name your reducers so they match the part of the state object the handle
		this.appReducers = Denux.combineReducers({
			// the list reducer should be named list
			list:listReducer,
			itemFilter:filterReducer
		});
	};


	render(){
		return (
			<div className="App" >
				<div className="headline">Denux.js - 🙈  a taste of the furture</div>
				<Denux
					// pass the combined reduceres or single reducer
					reducer={this.appReducers}
					// pass in the initial state object
					state={this.myStateObj}
				>
					<DenuxValue/>
					<DenuxList/>
				</Denux>
			</div>
		);
	}
}
