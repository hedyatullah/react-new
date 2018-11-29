import React, { Component } from 'react';
import { connect } from 'react-redux';

import Table from './table'
import Filter from './filter'

class User extends Component {
    constructor(){
        super();
        this.changeName = this.changeName.bind(this);
        this.updataData = this.updataData.bind(this)
    }
    componentDidMount(){
        let self = this;
        //debugger;
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => this.updataData(json))
    }

    updataData(data){        
        let userdata = data;        
        this.props.dispatch({type: 'APPEND_USER', 'user_list': userdata})
    }

    changeName(){
        //console.log(this.props.username)
        this.props.dispatch({type:'USER_CHANGE', 'newname': 'Hedyat Ullah'})
    }

    render(){        
        return(
            <div>
                <h2>ID: {this.props.userid}</h2>
                <h2>Name : {this.props.username}</h2>
                <button onClick={this.changeName()}>Change Name</button>              
            
            <div className="container">
                <div className="row">            
                    <div className="col-md-2">
                        <Filter />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <h4>Bootstrap Snipp for Datatable</h4>
                    <Table 
                        theader={[
                            {'key':'id', 'label':'ID'},
                            {'key':'name', 'label':'Full Name'},
                            {'key':'username', 'label':'User Name'},
                            {'key':'email', 'label':'Email'}
                        ]}
                        data={this.props.user_list} 
                    />                                    
                    </div>
                </div>
            </div>
            </div>           
        )
    }
}
const mapStatetoProps = (state) => {
    return{
        userid: state.userid,
        username: state.username,
        user_list: state.user_list
    }
}
export default connect(mapStatetoProps)(User);