import React, { Component } from 'react';
import { connect } from 'react-redux';


class Filter extends Component{
    render(){
        //console.log()
        return(
            <div>
                <select className="form-control" value={this.props.perPageRecord} onChange={ (e) => {
                    this.props.dispatch({
                        type:'OPTION_CHANGE_PERPAGE', 
                        value: e.target.value
                    })
                } }>                    
                        <option value="5">5</option>
                        <option value="10">10</option>        
                        <option value="50">50</option>        
                        <option value="1000">All</option>                                                      
                </select>
            </div>
        )
    }
}
const mapStatetoProps = (state) => {
    return{
        perPageRecord: state.perPageRecord
    }
}
export default connect(mapStatetoProps)(Filter);