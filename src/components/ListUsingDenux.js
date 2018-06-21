/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 20-06-2018.
 */
import React, { Component } from 'react'
import { Denux } from "../Denux";

export default class ListUsingDenux extends Component {

	constructor(props){
		super(props)
	}


	render(){
		return (

			<Denux.Consumer>
				{
					(denuxState) => {

						const dispatch = denuxState.dispatch

						const contents = denuxState.items.map((item, index) =>{

							return (
								<div key={index}>
									<h1>{item}</h1>
									<p onClick={() =>{
										dispatch({type: "DELETE", index:index})
									} } style={{ cursor:"pointer"}}>delete</p>
								</div>
							)

						})


						return (
							<div>
								{contents}

							</div>
						);

					}
				}
			</Denux.Consumer>



		)
	}

}



