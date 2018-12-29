import React, { Component } from 'react';
import { connect } from 'react-redux';

import Table from './table';
import Filter from './filter';
import Pagination from './pagination';
import Search from './search';

class Photo extends Component{
    constructor(){
        super();
        this.updateData = this.updateData.bind(this);
        this.searching = this.searching.bind(this);
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(json => this.updateData(json))
    }
    updateData(data){
        let photoData = data;
        console.log(this.props.dataFromBkend)        
        this.props.dispatch({type:'APPEND_DATA', 'dataFromBkend':photoData, default: window.defaultFilterParams})
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
    render(){
        //console.log(this.props.dataFromBkend)
        let tableHeader = [
            {'key':'albumId', 'label':'Album ID'},
            {'key':'id', 'label':'ID'},
            {'key':'title', 'label':'Album Title'},
            {'key':'url', 'label':'Data URL'},
            {'key':'thumbnailUrl', 'label':'Thumbnail URL'}            
        ]   
        return(
            <div className="">
                <h4>Photo Data</h4>
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
const mapStattoProps = (state) => {
    return{
        dataFromBkend: state.commonData
    }
}
export default connect(mapStattoProps)(Photo);