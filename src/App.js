import React, { Component } from 'react';
import quoteList from './quotes.json';
import Button from './Button.js';
import Filters from './topics.js';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    //set statess
    this.state = {
      quoteList: quoteList,
      topic: 'All',
      topics: Array.from(new Set(quoteList.map(function (ele) {
        return ele.topic
      }))),
      currentQuote: 'no generated quote'
    }
    //setuping your own custom functions
    this.generateQuote = this.generateQuote.bind(this);
    this.switchTopic = this.switchTopic.bind(this); 
  }

  generateQuote(element){
    var randomItem = Math.floor(Math.random() * this.state.quoteList.length);
    this.setState({
      currentQuote: this.state.quoteList[randomItem].quote
    })
  }

  switchTopic(event){
    var topic = event.target.innerHTML;
    console.log(topic);


    if (topic == 'All'){
      this.setState({
        quoteList : quoteList
      })
      return
    }
    var topicArray = quoteList.filter(function (quote) {
      return quote.topic.includes(topic)
    });  
    this.setState({
      topic : topic,
      quoteList : topicArray
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the quote generator</h1>
        </header>
        <Button generateQuote={this.generateQuote}/>
        {this.state.currentQuote}

        <button onClick={this.switchTopic}>All</button>
        <Filters switchTopic={this.switchTopic} topics={this.state.topics}/>
      </div>
    );
  }
}

export default App;
