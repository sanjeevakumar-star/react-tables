import React from 'react'  
import ReactDOM from 'react-dom';
import { Route,BrowserRouter as Router,NavLink } from 'react-router-dom' 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import app from './App';
import Main from './Main';
import Home from './Home';
import Data from './Data';
import wel from './Wel.css';

const routing = (  
  <Router className='demo'>  
    <div>  
       <h2 className="demo4">Hello welcome to my Firstreact Table</h2>
     <ul>
      <li>
          <NavLink to="/Data" exact activeStyle={{color:'green'}}>Hello</NavLink>
        </li>
        <li>
          <NavLink to="/Main" exact activeStyle={{color:'green'}}>Main</NavLink>
        </li>
        <li>
          <NavLink to="/home" exact activeStyle={{color:'green'}}>home</NavLink>
        </li>
       
       
        <li>
          <NavLink to="/App" exact activeStyle={{color:'green'}}>Table</NavLink>
        </li>
        
        </ul>
        
         <Route path="/data" component={Data} />
         <Route path="/home" component={Home} />
         <Route path="/main" component={Main} />
      <Route path="/app" component={app} />
    
 
    </div>  
  </Router>  
) 
ReactDOM.render(routing, document.getElementById('root'));        