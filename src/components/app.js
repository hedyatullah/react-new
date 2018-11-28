import React from 'react';
import Table from './table'

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RootReducer from './reducer/index'

import User from './user';

let store = createStore(RootReducer, {'userid': 100, 'username': 'shahi', 'user_list':[]})

class App extends React.Component{
    
    render(){
        return(
            <Provider store={store}>
                <div>
                    <User />
                </div>
            </Provider>
        )
    }
}
export default App;