import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Auth from './Components/Auth/Auth';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Post from './Components/Post/Post';
import Nav from './Components/Nav/Nav';

export default (

    <div>
        
        <Route component={ Nav } path='/'/>
        
        <br />
        <Switch>
            <Route component={Auth} exact path='/' />
            <Route component={Dashboard} path='/dashboard' />
            <Route component={Form} path='/new' />
            <Route component={Post} path='/post/:postid' />
        </Switch>
    </div>
)