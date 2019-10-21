import React, {Component} from 'react';
import './App.css';
import { Stack } from './Stack';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      result: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // convert textarea input to array of name
    const list = this.state.value.split("\n")

    // push names onto a stack
    var stack = new Stack();
    list.forEach(item => stack.push(item))
    console.log(stack.pop())
    console.log(stack.pop())
    console.log(stack.pop())


    // console.log(list)
    // console.log(list.length)
    // console.log(Math.floor(Math.random() * list.length))
    
    event.preventDefault();
  }


  render() {

    return (
      <div className="App content">

          <form onSubmit={this.handleSubmit} className="column">
            <label>
              <p>Enter names below:</p>
              <textarea onChange={this.handleChange} cols="25" rows="20" />
            </label>
            <p><input type="submit" value="Submit" /></p>
          </form>

          <div className="column">
            <label>
              <p>Results:</p>
              <textarea value={this.state.result} onChange={() => true} cols="25" rows="20" />
            </label>
          </div>


        
      </div>
    );
  }
}

export default App;
