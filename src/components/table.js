import React, { Component } from 'react';

class Table extends Component{
    render(){
        console.log(this.props.data)
        return(
            <div className="container">
	                <div className="row">
                    <h4>Bootstrap Snipp for Datatable</h4>
                        <div className="col-md-12">
                            <div className="table-responsive">                                
                                <table id="mytable" className="table table-bordred table-striped">                                    
                                    <thead>                   
                                        <tr>                        
                                            <th>First Name </th>
                                            <th>Last Name </th>
                                            <th>Address </th>
                                            <th>Email Address</th>
                                            <th>Contact Numbre </th>                    
                                        </tr>
                                    </thead>                    
                                    <tbody>
                                        {
                                            this.props.data.map((item, key) => {                                               
                                                return(<tr key={key}>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.username}</td>
                                                    <td>{item.email}</td>
                                                </tr>)                                                                                          
                                            })
                                        }                                       
                                    </tbody>
        
                                </table>                    
                            </div>            
                        </div>
	                </div>
                </div>
        )
    }
}
export default Table;