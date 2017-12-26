import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Index from './../view'
import List from './../view/list' 
let RouterList = () => (
    <Router>
        <div id='App'>
            <Route path="/" exact={true} component={Index} /> 
            <Route path="/index" component={Index} /> 
            <Route path='/lists/:id' component={List} /> 
        </div>
    </Router>
)
export default RouterList();