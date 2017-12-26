import React from 'react';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom'
import Index from './../view'
import List from './../view/list' 
import Info from './../view/info' 
let RouterList = () => (
    <Router>
        <Switch id='App'>
            <Route path="/" exact={true} component={Index} /> 
            <Route path="/index" exact={true} component={Index} /> 
            <Route path='/lists/:id' exact={true} component={List} /> 
            <Route path='/info/:id' exact={true} component={Info} /> 
        </Switch>
    </Router>
)
export default RouterList();