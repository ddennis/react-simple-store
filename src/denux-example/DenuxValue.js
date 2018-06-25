import React, { Component } from 'react'
import { Denux } from "./Denux";

export const DenuxValue = () => (
	<Denux.Consumer>
		{
			(context) =>{
				return (
					<div>
						<h1>{context.list.items.length}</h1>
						<hr/>
					</div>
				)
			}
		}
	</Denux.Consumer>
);
