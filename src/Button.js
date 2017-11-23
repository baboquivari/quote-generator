import React, { Component } from 'react';

const Button = function (props){
	return(
		<button onClick={props.generateQuote}>Generate Quote</button>
	)
}

export default Button;