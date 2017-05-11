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

import {browserHistory} from 'react-router';


class FirstPage extends Component {
    render(){
       return(
         <Link to={'/secondpage'}>link to second page</Link>
       );
    }
}


class SecondPage extends Component {
    render(){
        return (
             <Link to={'/'}>link to first page</Link>
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
