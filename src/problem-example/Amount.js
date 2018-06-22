/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 21-06-2018.
 */
import React, { Component } from 'react'

export default class Amount extends Component {

	constructor(props){
		super(props)
	}


	render(){
		return (

			<h3>Items: {this.props.myValue}</h3>

		)
	}

}



