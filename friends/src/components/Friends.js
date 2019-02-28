import React from 'react'
import Axios from 'axios';

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
            <div>
                <h1>FRIENDSSS!</h1>
                {this.state.friends.map(friend => <h1>{friend.name}</h1>)}
            </div>
        )
    }
}

export default Friends;