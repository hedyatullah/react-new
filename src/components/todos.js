import React, { Component } from 'react';
import { connect } from 'react-redux';

import Table from './table';
import Filter from './filter';
import Pagination from './pagination';
import Search from './search';

class Todo extends Component{
    constructor(){
        super();

        this.state = {
            tableHeader : [
                {'key':'userId', 'label':'User ID'},
                {'key':'id', 'label':'ID'},
                {'key':'title', 'label':'Todo Title',isSortable: true},
                {'key':'completed', 'label':'Completed', isSortable: true, sortClass: 'asc'}            
            ]
        }

        this.updateData = this.updateData.bind(this);
        this.searching = this.searching.bind(this);
        this.isSorting = this.isSorting.bind(this);
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => this.updateData(json))
    }
    isSorting(val,order){
        console.log(val)
        console.log(order)
        console.log(this.props.backupData)
        let data = this.props.backupData;
        let columns = this.state.tableHeader;
        columns = columns.map((columnItem) => {
            let item = columnItem;
            if (item.key == val) {
                item.sortClass = (item.sortClass == 'asc') ? 'desc' : 'asc';
            } else {
                delete item.sortClass;
            }
            return item;
        });        
        this.setState({
            tableHeader: columns
        });
        this.props.dispatch({type:'SORT_DATA', sortbyKey:val})
        // if(order == 'asc'){
        //     data.sort(function(a,b){
        //         return a.completed == b.completed ? 0 : +(a.completed < b.completed) || -1;
        //     })
        //     console.log(data);
        //     this.setState({
        //         tableHeader.sortClass: 'desc'
        //     })
        // }
         
    }
    updateData(data){
        let todoData = data;
        //console.log(this.props.dataFromBkend)        
        this.props.dispatch({type:'APPEND_DATA', 'dataFromBkend':todoData, default: window.defaultFilterParams})
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
        
        return(
            <div className="">
                <h4>Todo Data</h4>
                <div className="row">
                    <div className="col-md-2">
                        <Filter />
                    </div>
                    <div className="col-md-offset-8">
                        <Search 
                            theader={this.state.tableHeader}
                            searching={this.searching}
                        />
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <Table 
                                theader={this.state.tableHeader}
                                data={this.props.dataFromBkend}
                                isSorting={this.isSorting}
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
        dataFromBkend: state.commonData,
        backupData: state.backupData
    }
}
export default connect(mapStattoProps)(Todo);