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

    // do stuff

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
