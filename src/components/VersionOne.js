/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 20-06-2018.
 */
import React, { Component } from 'react'
import List from "./List";

export default class VersionOne extends Component {

	constructor(props){
		super(props)
	}


	render(){
		return (
			<List  items={this.props.items}/>
		)
	}

}



