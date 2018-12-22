import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from './table';
import Filter from './filter';
import Pagination from './pagination';
import Search from './search'

class Post extends Component {
    constructor(){
        super();
        this.updateData = this.updateData.bind(this);
        this.searching = this.searching.bind(this);
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
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
        let postData = data;
        console.log(this.props)
        this.props.dispatch({type:'APPEND_DATA', 'dataFromBkend':postData, default: window.defaultFilterParams})
    }

    render(){
        let tableHeader = [
            {'key':'userId', 'label':'User ID'},
            {'key':'id', 'label':'ID'},
            {'key':'title', 'label':'Post Title'},
            {'key':'body', 'label':'Post Data'}            
        ]   
        return(
            <div className="">
                <h4>Post Data</h4>
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
export default connect(mapStatetoProps)(Post);