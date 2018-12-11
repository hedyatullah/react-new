import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from './table';
import Filter from './filter';
import Pagination from './pagination';

class Post extends Component {
    constructor(){
        super();
        this.updateData = this.updateData.bind(this);
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => this.updateData(json))
    }
    updateData(data){
        let postData = data;
        console.log(this.props)
        this.props.dispatch({type:'POST_DATA', 'post_list':postData})
    }

    render(){
        let tableHeader = [
            {'key':'userId', 'label':'User ID'},
            {'key':'id', 'label':'ID'},
            {'key':'title', 'label':'Post Title'},
            {'key':'body', 'label':'Post Data'}            
        ]   
        return(
            <div className="container">
                <h4>Post Data</h4>
                <div className="row">
                    <div className="col-md-2">
                        <Filter />
                    </div>
                    
                    <div className="row">
                        <div className="col-md-12">
                            <Table 
                                theader={tableHeader}
                                data={this.props.post_list}
                            />
                        </div>
                    </div>
                    <div><Pagination /></div>
                </div>
            </div>
        )
    }
}
const mapStatetoProps = (state) => {
    return{
        post_list: state.post_list
    }
}
export default connect(mapStatetoProps)(Post);