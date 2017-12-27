import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Index from './../view'
import List from './../view/list'
import Info from './../view/info' 
let RouterList = () => (
    <Router>
        <Switch id='App'>
            <Route path="/" exact={true} component={Index} />
            <Route path="/index" component={Index} />
            <Route path='/lists' component={List} />
            <Route path='/info/:id' component={Info} />
        </Switch>
    </Router>
)
export default RouterList();