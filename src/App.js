import React, {Component} from 'react';
import './App.css';
// import { Stack } from './Stack';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      result: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({input: event.target.value});
  }

  handleSubmit(event) {
    console.clear();
    if(!this.state.input) return

    var output = [];
    var list1 = this.state.input.split("\n");
    var list2 = this.state.input.split("\n");

    for(var i=0; i<list1.length; i++) {
      const random = Math.floor(Math.random() * list2.length)
      if(list1[i] !== list2[random]) {
        output.push(`${list1[i]} buys for ${list2.splice(random,1)}`)
      }
      else {
        if(list2[random+1]) {
          output.push(`${list1[i]} buys for ${list2.splice(random+1,1)}`)
        }
        else {
          output.push(`${list1[i]} buys for ${list2.splice(random-1,1)}`)
        }
      }
    }
       
    this.setState({result: output})
    event.preventDefault();
  }


  render() {

    return (
      <div className="App">

        <h1 className='column'>Kris Kringle Randomizer</h1>
        <h2 className='column'>Assign each of your guests a different Kris Kringle.</h2>
      <div className='content'>
        <form onSubmit={this.handleSubmit} className="column">
          <label>
            <p>Enter names below:</p>
            <textarea onChange={this.handleChange} cols="25" rows="20" />
          </label>
          <p><input type="submit" value="Generate Pairings" onChange={this.handleChange} /></p>
        </form>

        <div className="column">
          <label>
            <p>Results:</p>
            <div className='box'>
              {this.state.result.map((item,i) => {
                return <li>{item}</li>
              })}
            </div>
          </label>
        </div>
        </div>
        
      </div>
    );
  }
}

export default App;
