import React, { Component } from 'react';

class Search extends Component {
    render(){
        //console.log(this.props.theader)
        return(
            <div className="input-group">
                <select className="form-control" ref='select_val' style={{width:'120px'}}>
                {
                    this.props.theader.map(item => {
                        return <option value={item.key} key={item.key}>{item.label}</option>
                    })
                }                                                                            
                </select>
                
                <input type="text" ref='search_input' className="form-control" placeholder="Search term..." style={{width:'230px'}} onKeyPress={(e)=> {
                    
                    if(e.key == 'Enter'){
                        this.props.searching(e.target.value,this.refs.select_val.value)
                        e.target.value = '';
                    }
                }}/>
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button" onClick={ ()=> {
                        this.props.searching(this.refs.search_input.value,this.refs.select_val.value)
                    }}><span className="glyphicon glyphicon-search"></span></button>
                </span>
            </div>
        )
    }
}
export default Search;