/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 21-06-2018.
 */
import React, { Component } from 'react'

export default class TestList extends Component {

	constructor(props){
		super(props)
		this.state = {
			items:["ONE", "TWO", "THREE", "💩"]
		}
	}



	deleteIt = (index) => {
		const newArr = [...this.state.items];
		newArr.splice(index, 1);
		this.setState({items:newArr})
	};



	render(){
		const items = this.state.items.map((item, index) =>{
			return (
				<div className="item" key={index}>
					<h1>{item}</h1>

					<button onClick={() =>{
						this.deleteIt(index)
					}}>delete</button>

				</div>
			)
		});

		return (
			<div>
				{items}
			</div>
		)

	}

}



