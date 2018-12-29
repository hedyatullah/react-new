import React, { Component } from 'react';

class Table extends Component{
    constructor(){
        super();
        //this.parentChecked = this.parentChecked.bind(this);
        //this.sortingData = this.sortingData.bind(this);
    }
    // sortingData(){
    //     console.log(this.props);
    // }

    render(){        
        //debugger;
        //console.log(this.props.data);
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
                                    if(item.isSortable) {
                                        let sortElement = '';
                                        if ('sortClass' in item) {
                                            sortElement = (item.sortClass === 'asc') ? <i className="glyphicon glyphicon-glyphicon-sort-by-alphabet" data-unicode="e151"></i> : <i class="glyphicon glyphicon-glyphicon-sort-by-alphabet-alt" data-unicode="e152"></i>;
                                        }
                                        
                                        return <th key={key}><a href="#"  onClick={ () => {
                                            this.props.isSorting(item.key,item.sortClass)
                                        }}>{sortElement}{item.label}</a></th>
                                    }
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
                                            var displayval = user[item.key]
                                            if(item.key == 'completed'){
                                                displayval = (user[item.key]) ? <i className="glyphicon glyphicon-glyphicon-ok" data-unicode="e013"></i> : <i className="glyphicon glyphicon-glyphicon-remove" data-unicode="e014"></i>
                                            }
                                            return(
                                                                                               
                                                <td key={key}>{displayval}</td>
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