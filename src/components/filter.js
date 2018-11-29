import React, { Component } from 'react';


class Filter extends{
    render(){
        return(
            <div>
                <select className="form-control">                    
                        <option value="2">2</option>
                        <option value="5">5</option>        
                        <option value="10">10</option>
                        <option value="1000">All Record</option>                               
                </select>
            </div>
        )
    }
}