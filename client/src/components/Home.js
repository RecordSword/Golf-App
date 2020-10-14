import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import Games from './Games'

export  function Home() {

    return(
        <Switch>
            <Route path="/games" component={Games}/>
            <Route path="/" component={Dashboard}/>
        </Switch>
    )
}

export default Home;
