import React, { Component } from 'react'
import List from "./List";

export default class Wrapper extends Component {

	constructor(props){
		super(props)
	}


	render(){
		return (
			<div>
				<List items={this.props.items} deleteIt={this.props.deleteIt}/>
			</div>
		)
	}

}



