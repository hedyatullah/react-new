import React, { Component } from 'react';
import { connect } from 'react-redux';

class Pagination extends Component{
    constructor(){
        super();
        this.numberofPage = this.numberofPage.bind(this);
    }
    numberofPage(){
        let pagination = [];
        let totalRecord = this.props.numberofPages
        for(let i=0;i<totalRecord;i++){
            pagination.push(<li><a href="#">{i+1}</a></li>)
        }
        return pagination;
    }
    render(){
        return(
            <div>
                <div className="clearfix"></div>
                <ul className="pagination pull-right">
                    <li className="disabled"><a href="#">
                        <span className="glyphicon glyphicon-chevron-left"></span></a>
                    </li>
                    {this.numberofPage()}
                    
                    <li><a href="#"><span className="glyphicon glyphicon-chevron-right"></span></a></li>
                </ul>
            </div>
        )
    }
}
const mapStatetoProps = (state) => {
    return{
        perPageRecord: state.perPageRecord,
        numberofPages: state.numberofPages
    }
}
export default connect(mapStatetoProps)(Pagination);