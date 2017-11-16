import React, { Component } from 'react';
import quoteList from './quotes.json';
import Button from './Button.js';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    //set statess
    this.state = {
      quoteList: quoteList,
      //quoteList : quoteList,
      quoteShown: false,
      currentQuote: 'no generated quote'
    }
    //setuping your own custom functions
    this.generateQuote = this.generateQuote.bind(this); 
  }
  generateQuote(element){
    var randomItem = Math.floor(Math.random() * this.state.quoteList.length);
    this.setState({
      currentQuote: this.state.quoteList[randomItem].quote,
      quoteShown: true
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the quote generator</h1>
        </header>
        <Button handleClick={this.generateQuote}/>
        {this.state.currentQuote}
      </div>
    );
  }
}

export default App;
