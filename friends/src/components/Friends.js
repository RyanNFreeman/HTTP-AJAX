import React from 'react'
import Axios from 'axios'
import '../App.css';


const wrapper = {
    'display': 'flex',
    'flexWrap': 'wrap',
    'width': '100%'
}
const h1 = {
    'width': '100%',
    'fontSize': '30px'
}
const box = {
    'display': 'flex',
    'flexWrap': 'wrap',
    'width': '100%',
    'justifyContent': 'center',
}
const indBox = {
    'width': '30%',
    'margin': '10px',
    'border': '5px solid white',
    'fontSize': '16px',
    'overflow': 'auto',
    'background': 'yellow',
    'color': 'black'
}
const button={
    'margin': '50px',
    'background': 'white',
    'border': '1px solid black',
    'width': '150px',
    'height': '50px',
    'cursor': 'pointer',
    'fontSize': '25px'
  }




class Friends extends React.Component {
    constructor() {
        super();
        this.state = {
            friends: []
        }
    }

    componentDidMount() {
        Axios
            .get('http://localhost:5000/friends')
            .then(res => {
                this.setState({friends: res.data});
                console.log(res)
            })
            .catch(err => console.log(err));
    }
    
    render() {
        return (
        <div style={wrapper}>
            <h1 style={h1}>Your friends are listed below</h1>
            <div style={box}>
                {this.state.friends.map(friend => 
                <div 
                    style={indBox}
                    key={friend.id}>
                    <h1>{friend.name}</h1>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                    <button style={button}>Delete</button>
                </div>
                )}  
            </div>
        </div>
        )
    }
}

export default Friends;