import React, { Component } from 'react';

const Button = function (props){
	return(
		<button onClick={props.handleClick}>Generate Quote</button>
	)
}

export default Button;