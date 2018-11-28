import React, { Component } from 'react';
import { connect } from 'react-redux';

class User extends Component {
    constructor(){
        super();
        this.changeName = this.changeName.bind(this);
    }

    componentDidMount(){
        let self = this;
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(function(response){
            response.json().then(function(data) {
                self.props.dispatch({type:'APPEND_USER', data:data})
            })
        })
    }
    changeName(){
        this.props.dispatch({type:'USER_CHANGE', 'username': 'Hedyat Ullah'})
    }

    render(){
        console.log(this.props)
        return(
            <div>
                <h2>ID: {this.props.userid}</h2>
                <h2>Name : {this.props.username}</h2>
                <button onClick={this.changeName()}>Change Name</button>
            </div>
        )
    }
}
const mapStatetoProps = (state) => {
    return{
        userid: state.userid,
        username: state.username
    }
}
export default connect(mapStatetoProps)(User);