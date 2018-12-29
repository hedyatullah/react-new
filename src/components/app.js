import React from 'react';


import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RootReducer from './reducer/index'

import User from './user'; 
import Post from './post';
import Comment from './comment';
import Album from './album';
import Photo from './photo';
import Todo from './todos'

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
                            }}>User |</a></div>&nbsp;
                            <div><a href="#" onClick={() => {
                                this.setState({
                                    componentName: 'post'
                                });
                            }}>Post |</a></div>&nbsp;
                            <div><a href="#" onClick={ () => {
                                this.setState({
                                    componentName: 'comment'
                                })
                            }}>Comment |</a></div>&nbsp;
                            <div><a href="#" onClick={ () => {
                                this.setState({
                                    componentName: 'album'
                                })
                            }}>Album |</a></div>&nbsp;
                            <div><a href="#" onClick={ () => {
                                this.setState({
                                    componentName: 'photo'
                                })
                            }}>Photo |</a></div>&nbsp;
                            <div><a href="#" onClick={ () => {
                                this.setState({
                                    componentName: 'todo'
                                })
                            }}>Todo</a></div>
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
        else if(this.state.componentName == 'post'){
            return <Post />
        }
        else if(this.state.componentName == 'comment'){
            return <Comment />
        }
        else if(this.state.componentName == 'photo'){
            return <Photo />
        }
        else if(this.state.componentName == 'Album'){
            return <Album />
        }
        return <Todo />
    }
}
export default App;