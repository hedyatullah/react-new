import React from "react";
import ReactDOM from "react-dom";
import App from './components/app';


export default class Index extends React.Component{
  render(){
    return(
      <div>
        <App />
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById("index"));