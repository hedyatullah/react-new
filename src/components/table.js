import React, { Component } from 'react';

class Table extends Component{
    render(){        
        //debugger;
        // console.log(this.props.data);
        // console.log(this.props.theader);
        return(
            <div className="table-responsive">                                
                <table id="mytable" className="table table-bordred table-striped">                                    
                    <thead>                   
                        <tr>
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