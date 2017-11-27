import React, { Component } from 'react';

const Filters = function (props){
	return props.topics.map(function (ele) {
		return (
			<button onClick={props.switchTopic}>{ele}</button>
		)
	})
}

export default Filters;