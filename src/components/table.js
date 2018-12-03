import React, { Component } from 'react';

class Table extends Component{
    constructor(){
        super();
        //this.parentChecked = this.parentChecked.bind(this);
    }
    render(){        
        //debugger;
        // console.log(this.props.data);
        // console.log(this.props.theader);
        return(
            <div className="table-responsive">                                
                <table id="mytable" className="table table-bordred table-striped">                                    
                    <thead>                   
                        <tr>
                            <th>
                                <input type="checkbox" onChange={ (e) => {
                                    this.props.checkboxChecked(e.target.checked)
                                } } checked={this.props.parentChkStatus}></input>
                            </th>
                            {
                                this.props.theader.map((item,key) => {
                                    return <th key={key}>{item.label}</th>
                                    
                                })
                            }                                                                                                              
                        </tr>
                    </thead>                    
                    <tbody>
                        {
                            this.props.data.map((user, i) => {
                                return <tr key={i}>
                                        <td><input type="checkbox" checked={user.checked} onChange={(e) => {
                                            this.props.childCheckboxChecked(e.target.checked, i)
                                        }}></input></td>
                                    {
                                        this.props.theader.map((item,key) => {
                                            return(
                                                <td key={key}>{user[item.key]}</td>
                                            )
                                        })
                                    }
                                </tr>
                            })
                        }                            
                    </tbody>

                </table>                    
            </div>
        )
    }
}
export default Table;