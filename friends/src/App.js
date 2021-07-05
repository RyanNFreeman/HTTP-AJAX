import React, { Component } from 'react'
// import { Route, Link } from 'react-router-dom'
import Friends from './components/Friends'
import FriendForm from './components/FriendForm'
import './App.css';
import axios from 'axios';

const style={
  'fontSize': '55px',
  'textAlign': 'center',
  'margin': '5px'
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
    this.state = {
      friends: []
    }
  }

  addFriend = (e, friends) => {
    e.preventDefault();
    axios.post('http://localhost:5000/friends', friends)
    .then(res => {
        this.setState({friends: res.data});
        console.log(res)
  })
  .catch(err => console.log(err + 'wrong'));

}


  componentDidMount(){
    axios.get('http://localhost:5000/friends')
    .then(res => this.setState({friends: res.data}))
    .catch(err => console.log(err + 'wrong'))
  }


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <p style={style}>
            LOOK AT YOU MR. POPULAR
          </p>
          {/* <input
            className="App-input"
            type="text"
            value="Add more friends..."
            style={style}
          /> */}
          <Friends />
          <FriendForm addFriend={this.addFriend}/>
          {/* <Link to='/new-friend'><button style={button}>Add a new friend!</button></Link>
          <Route exact path='/new-friend' component={FriendForm}/> */}
        </header>
      </div>
    );
  }
}

export default App;
