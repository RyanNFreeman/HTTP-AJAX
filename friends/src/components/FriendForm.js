import React from 'react'

class FriendForm extends React.Component {
    constructor() {
        super();
        this.state={
            friend: {
                name: '',
                age: '',
                email: ''
            }
        }
    }

    changeHandle = (e) => {
        this.setState({
            friend: {
            [e.target.name]: e.target.value}
        })
    }

    render() {
    return (
        <div>
            <h2>Would you like to have more friends?</h2>
            <form>
                <input 
                    name='name' 
                    type='text' 
                    onChange={this.changeHandle} 
                    placeholder='Name' 
                    value={this.state.friend.name} 
                    />
                <input 
                    name='age' 
                    type='text' 
                    onChange={this.changeHandle} 
                    placeholder='Age' 
                    value={this.state.friend.age} 
                    />
                <input 
                    name='email' 
                    type='text' 
                    onChange={this.changeHandle} 
                    placeholder='Email'
                    value={this.state.friend.email} 
                    />
                <button onClick={e => this.props.addFriend(e, this.state.friend)}>Add Friend</button>
            </form>
        </div>
        )
    }
}

export default FriendForm;