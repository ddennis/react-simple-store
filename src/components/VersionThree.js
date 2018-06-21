/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 20-06-2018.
 */
import React, { Component } from 'react'
import ListUsingDenux from "./ListUsingDenux";
import { Denux } from "../Denux";

export default class VersionThree extends Component {


	constructor(props){
		super(props)
	}

	render(){

		return (
			<Denux>
				<ListUsingDenux/>
			</Denux>

		)
	}

}



