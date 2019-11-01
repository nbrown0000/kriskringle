import React, {Component} from 'react';
import './App.css';
// import { Stack } from './Stack';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      data: [],
      result: [],
      submitDisabled: false,
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

    // do stuff
       
    this.setState({result: output})
    event.preventDefault();
  }


  render() {

    return (
      <div className="App">

        <h1 className='column'>Kris Kringle randomizer</h1>
        <h2 className='column'>Assign each of your guests a different Kris Kringle.</h2>
      <div className='content'>
        <form onSubmit={this.handleSubmit} className="column">
          <label>
            <p>Enter names below:</p>
            <textarea onChange={this.handleChange} cols="25" rows="20" />
          </label>
          <p><input type="submit" name='submitButton' disabled={this.state.submitDisabled} value="Generate Pairings" /></p>
        </form>

        <div className="column">
          <label>
            <p>Results:</p>
            <div className='box'>
              {
                this.state.result
                ?
                this.state.result.map((item,i) => {
                  return <li key={i}>{item}</li>
                })
                :
                <li>Empty</li>
              }
            </div>
          </label>
        </div>
        </div>
        
      </div>
    );
  }
}

export default App;
