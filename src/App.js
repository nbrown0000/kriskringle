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
    // this.setState({submitDisabled:true});

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
    // console.log(list1.length)
    // var count = list1.length
    // while(count >= 1) {
    //   const random1 = Math.floor(Math.random() * list1.length)
    //   const random2 = Math.floor(Math.random() * list2.length)
    //   if(list1[random1]!==list2[random2]) {
    //     //output.push(`${list1.splice(random1,1)} => ${list2.splice(random2,1)}`)
    //     const item1 = list1.splice(random1,1)
    //     const item2 = list2.splice(random2,1)
    //     output.push(`${item1} => ${item2}`)
    //     count--;
    //   }
    // }
    
    this.setState({result: output})
    // this.setState({submitDisabled:false});
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
