import React, {Component} from 'react';
import './App.css';
// import { Stack } from './Stack';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      result: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    
    var output = [];
    var list1 = this.state.value.split("\n")
    var list2 = this.state.value.split("\n")

    while(list1.length && list2.length) {
      var random1 = Math.floor(Math.random() * list1.length)
      var random2 = Math.floor(Math.random() * list2.length)

      if(list1[random1] !== list2[random2]) {
        const removed1 = list1.splice(random1,1)
        const removed2 = list2.splice(random2,1)
        output.push(`${removed1} => ${removed2}`)
      }
    }

    this.setState({result: output})
    event.preventDefault();
  }


  render() {

    return (
      <div className="App">

        <h1 className='column'>Kris Kringle generator</h1>
        <h2 className='column'>Assign each of your guests a different Kris Kringle.</h2>
      <div className='content'>
        <form onSubmit={this.handleSubmit} className="column">
          <label>
            <p>Enter names below:</p>
            <textarea onChange={this.handleChange} cols="25" rows="20" />
          </label>
          <p><input type="submit" value="Generate Pairings" /></p>
        </form>

        <div className="column">
          <label>
            <p>Results:</p>
            <div className='box'>
              {this.state.result.map((item,i) => (<li key={i}>{item}</li>))}
            </div>
          </label>
        </div>
        </div>
        
      </div>
    );
  }
}

export default App;
