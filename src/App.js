/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 21-06-2018.
 */
import React, { Component } from 'react'

import './app.css'
import Amount from "./components/Amount";
import List from "./components/List";
import Wrapper from "./components/Wrapper";
import ItemStore from "./dispatcher-example/ItemStore";

export default class App extends Component {

	constructor(props){
		super(props);

	}


	render(){
		return (
			<div className="app">
				<div className="headline">How to fix Prop drilling </div>

				<Amount myValue={0}></Amount>
				<hr/>

				<Wrapper/>


			</div>
		)
	}

}



