import React, { Component } from 'react';

const Filters = function (props){
	return(
		<div>
			<button onClick={props.switchTopic}>All</button>
			<button onClick={props.switchTopic}>Football</button>
			<button onClick={props.switchTopic}>Life</button>
		</div>
	)
}

export default Filters;