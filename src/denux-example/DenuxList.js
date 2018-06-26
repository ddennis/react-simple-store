/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 21-06-2018.
 */
import React, { Component } from 'react'
import Denux  from "denux";
import {Spinner} from "../components/Spinner";


import * as fetchData from "./fetchData";
import {visibilityFilter} from './visibilityFilter'

export default class DenuxList extends Component {


	constructor(props){
		super(props);
		this.counter = 0;
	}

	render(){
		return (

			<Denux.Consumer>
				{
					(context) =>{
						const visibleItems = visibilityFilter(context.list.items, context.itemFilter)
						const items = visibleItems.map((item, index) =>{
							return (
								<div className="item" key={index}>
									<h1>{item}</h1>
									<button onClick={() =>{
										context.dispatch({type:"DELETE", index:index})
									}} >delete</button>
								</div>
							)
						});

						return (
							<div>

								{/* RENDER SPINNER IF DATA IS LOADING */}
								{context.list.isFetching ? <Spinner/> : null }

								{items}

								<div style={{display:"flex"}}>
									<button onClick={() =>{
										this.counter++;
										context.dispatch({type:"ADD", item:"item " + this.counter})
									}}>
										Add new

									</button>


									<button className="filter" onClick={() =>{

										context.dispatch({type:"SHOW_ALL"})
									}}>
										show all
									</button>

									<button className="filter" onClick={() =>{
										context.dispatch({type:"SHOW_FIRST"})
									}}>
										show first
									</button>

									<button className="load" onClick={() =>{

										fetchData.fetchSomeData(context.dispatch, "ddennis")

									}}>
										load
									</button>
								</div>
							</div>
						)
					}
				}

			</Denux.Consumer>

		)
	}

}



