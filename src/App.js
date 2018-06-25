/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 21-06-2018.
 */
import React, { Component } from 'react'

import './app.css'
import ProblemApp from "./problem-example/ProblemApp";
import DenuxApp from "./denux-example/DenuxApp";
import DispatcherApp from "./dispatcher-example/DispatcherApp";
import ContextApp from "./context-example/ContextApp";

export default class App extends Component {

	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="app">

				{/*<ProblemApp/>*/}
				<DenuxApp/>
				{/*<DispatcherApp/>*/}
				{/*<ContextApp/>*/}
			</div>
		)
	}

}



