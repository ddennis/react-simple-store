import React, { Component } from 'react'
import Denux from "denux";



export const DenuxValue = () => (
	<Denux.Consumer>
		{

			(context) =>{
				console.log (" DenuxValue.js > context = " , context);
				return (
					<div>
						<h1>Items amount = {context.list.items.length}</h1>
						<hr/>
					</div>
				)
			}
		}
	</Denux.Consumer>
);
