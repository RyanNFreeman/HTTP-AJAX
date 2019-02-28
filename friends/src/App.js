import React, { Component } from 'react';
import Friends from './components/Friends'
import './App.css';

const style={
  'fontSize': '75px',
  'textAlign': 'center'
}
const button={
  'margin': '50px',
  'background': 'white',
  'border': '1px solid red',
  'width': '300px',
  'height': '100px',
  'cursor': 'pointer',
  'fontSize': '25px'
}

class App extends Component {
  constructor(){
    super();
  }

  render() {
    

    return (
      <div className="App">
        <header className="App-header">
          <p style={style}>
            LOOK AT YOU MR. POPULAR
            <hr/>
          </p>

          <input
            className="App-input"
            type="text"
            value="Add more friends..."
            style={style}
          />
          <Friends />
          {/* <FriendForm /> */}
          <button style={button}>Add a new friend!</button>
        </header>
      </div>
    );
  }
}

export default App;
