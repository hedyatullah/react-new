import React from 'react';


import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RootReducer from './reducer/index'

import User from './user';
import Post from './post';
window.defaultFilterParams = {'perPageRecord': 5, currentPage:0};

let store = createStore(RootReducer, {'commonData':[], 'perPageRecord': defaultFilterParams.perPageRecord, currentPage:defaultFilterParams.currentPage, parentChkStatus: false, searchval: ''})

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            componentName: 'user'
        };
    }
    render(){
        return(
            <Provider store={store}>
                <div className="container">
                    <div>
                        <div style={{display: 'flex'}}>
                            <div><a href="#" onClick={() => {
                                this.setState({
                                    componentName: 'user'
                                });
                            }}>User</a></div>&nbsp;
                            <div><a href="#" onClick={() => {
                                this.setState({
                                    componentName: 'post'
                                });
                            }}>Post</a></div>
                        </div>
                    </div>
                    {this.getComponent()}                    
                </div>
            </Provider>
        )
    }
    getComponent() {
        if(this.state.componentName == 'user') {
            return <User />
        }
        return <Post />
    }
}
export default App;