import React from 'react';


import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RootReducer from './reducer/index'

import User from './user';
import Post from './post';

let store = createStore(RootReducer, {'post_list':[] , 'user_list':[], 'perPageRecord': 5, currentPage:0, parentChkStatus: false})

class App extends React.Component{
    
    render(){
        return(
            <Provider store={store}>
                <div>
                    <Post />
                    <User />                    
                </div>
            </Provider>
        )
    }
}
export default App;