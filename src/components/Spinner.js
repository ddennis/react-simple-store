/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 25-06-2018.
 */
import React, { Component } from 'react'

export default class Spinner extends Component {

	constructor(props){
		super(props)
	}


	render(){
		return (
			<div className="spinner-container">
				<div className="spinner">
					<div className="bounce1"></div>
					<div className="bounce2"></div>
					<div className="bounce3"></div>
				</div>
			</div>

		)
	}

}



