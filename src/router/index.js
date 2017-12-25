import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Index from './../view'
import ONE from './../component/one'
let RouterList = () => (
    <Router>
        <div id='App'>
            <Route path="/" component={Index}/>
            <Route path="/index" component={Index}/>
            <Route path='/index/:number' component={ONE}/>
        </div>
    </Router>
)
export default RouterList();