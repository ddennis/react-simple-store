import React, { Component } from 'react'
import { Denux } from "./Denux";

export default class DenuxValue extends Component {

	constructor(props){
		super(props)
	}


	render(){
		return (

			<Denux.Consumer>
				{
					(context) =>{

						console.log (" DenuxValue.js > context = " , context);
						
						return(
							<div>
								<h1>{context.items.length}</h1>
								<hr/>
							</div>


						)
					}
				}
			</Denux.Consumer>


		)
	}

}



