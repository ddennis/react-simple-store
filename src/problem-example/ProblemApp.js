/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 21-06-2018.
 */
import React, { Component } from 'react'


import Amount from "./Amount";
import List from "./List";
import Wrapper from "./Wrapper";

export default class ProblemApp extends Component {

	constructor(props){
		super(props);
	}


	render(){
		return (
			<div className="app">
				<div className="headline">How to fix Prop drilling </div>

				{/*How do we get the state from inside List into the Amount component*/}
				<Amount myValue={0}></Amount>

				<hr/>
				<Wrapper/>
			</div>
		)
	}

}



