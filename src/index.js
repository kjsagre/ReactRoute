import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import Button from 'react-button'

import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter
} from 'react-router-dom'


class FirstPage extends Component {
    render(){
       return(
          <Button title="page 2"
                style={{
                  width:200,
                  backgroundColor : "#CCC",
                  height : 30
                }}
                 onClick = { ()=> { window.location.href = "./secondpage"}}
                label = "Go to Second Page"
              />
       );
    }
}


class SecondPage extends Component {
    render(){
        return (
            <div>
              <Button title="page 1"
                style={{
                  width:200,
                  backgroundColor : "#CCC",
                  height : 30
                }}
                onClick = { ()=> { window.location.href = "./"}}
                label = "Go to First Page"
              />
            </div>
        );
    }
}

ReactDOM.render(
  <Router>
   <div>
      <Route exact path="/" component={FirstPage}/>
      <Route path="/secondpage" component={SecondPage}/>
    </div>
  </Router>,
  document.getElementById('root')
);
