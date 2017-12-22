import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom' 
import Board from '../component/one'
import headers from '../component/tow'
 let RouterList = () => ( 
    <Router>
        <div className="app"> 
            <Route exact path="/" component={Board}/>    
            <Route exact path="/hader" component={headers}/>    
        </div> 
    </Router>
) 
export default RouterList();