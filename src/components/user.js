import React, { Component } from 'react';
import { connect } from 'react-redux';

import Table from './table'
import Filter from './filter'
import Pagination from './pagination'
import Search from './search'

class User extends Component {
    constructor(){
        super();
        this.changeName = this.changeName.bind(this);
        this.updataData = this.updataData.bind(this)
        this.checkboxChecked = this.checkboxChecked.bind(this)
        this.childCheckboxChecked = this.childCheckboxChecked.bind(this)
        this.searching = this.searching.bind(this)
    }
    componentDidMount(){
        let self = this;
        //debugger;
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => this.updataData(json))
    }
    
    searching(selectval,val){
        //console.log(val,selectval)
        let colval = val;
        let searchval = selectval;
        
        this.props.dispatch({
            type: 'SEARCH',
            colval: colval,
            searchval: searchval
        })
    }

    checkboxChecked(chk){
        
            this.props.dispatch({
                type:'PARENT_CHECKED',
                checked: chk
            })
        
    }
    childCheckboxChecked(chk, position){
        console.log(chk);
        this.props.dispatch({
                    type:'CHILD_CHECKED',
                    childChecked: 'checked',
                    position: position,
                    chkStatus: chk
                });
        //console.log(user);
        // if(chk == true){
        //     this.props.dispatch({
        //         type:'CHILD_CHECKED',
        //         childChecked: 'checked',
        //         userId: userid
        //     })
        // }    
        // else{
        //     this.props.dispatch({
        //         type:'CHILD_CHECKED',
        //         childChecked: '',
        //         userId: userid
        //     })
        // }    
    }

    updataData(data){        
        let userdata = data;        
        this.props.dispatch({type: 'APPEND_DATA', 'dataFromBkend': userdata, default: window.defaultFilterParams})
    }

    changeName(){
        //console.log(this.props.username)
        this.props.dispatch({type:'USER_CHANGE', 'newname': 'Hedyat Ullah'})
    }

    render(){     
        let tableHeader = [
                        {'key':'id', 'label':'ID'},
                        {'key':'name', 'label':'Full Name'},
                        {'key':'username', 'label':'User Name'},
                        {'key':'email', 'label':'Email'}
                    ]   
        return(
            <div>
                            
            <div className="">
                <h4>User Data</h4>
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
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <h4>Bootstrap Snipp for Datatable</h4>
                    <Table 
                        theader={tableHeader}
                        data={this.props.dataFromBkend} 
                        checkboxChecked={this.checkboxChecked}
                        childCheckboxChecked={this.childCheckboxChecked}
                        parentChkStatus={this.props.parentChkStatus}

                    />                                    
                    </div>
                </div><Pagination />
                <div>

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
        dataFromBkend: state.commonData,
        parentChkStatus: state.parentChkStatus
    }
}
export default connect(mapStatetoProps)(User);