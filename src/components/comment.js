import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from './table';
import Filter from './filter';
import Pagination from './pagination';
import Search from './search'


class Comment extends Component{
    constructor(){
        super();
        this.updateData = this.updateData.bind(this);
        this.searching = this.searching.bind(this);
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(json => this.updateData(json))
    }

    searching(selectval,val){
        console.log(val,selectval)
        let colval = val;
        let searchval = selectval;
        
        console.log(this.props)
        this.props.dispatch({
            type: 'SEARCH',
            colval: colval,
            searchval: searchval
        })
    }

    updateData(data){
        let commentData = data;
        console.log(this.props.dataFromBkend)
        this.props.dispatch({type:'APPEND_DATA', 'dataFromBkend':commentData, default: window.defaultFilterParams})
    }

    render(){
        let tableHeader = [
            {'key':'postId', 'label':'Post ID'},
            {'key':'id', 'label':'ID'},
            {'key':'name', 'label':'Name'},
            {'key':'email', 'label':'Email'},
            {'key':'body', 'label':'Body Data'}            
        ]   
        return(
            <div className="">
                <h4>Comment Data</h4>
                <div className="row">
                    <div className="col-md-2">
                        <Filter />
                    </div>
                    <div className="col-md-offset-8">
                        <Search 
                            theader={tableHeader}
                            searching={this.searching}
                        />
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <Table 
                                theader={tableHeader}
                                data={this.props.dataFromBkend}
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
        dataFromBkend: state.commonData
    }
}
export default connect(mapStatetoProps)(Comment);