import React from 'react';
import {Switch,Route} from 'react-router-dom'
import GamesList from './GamesList'
import NewGame from './ConnectedNewGame'

export  function Games() {

    return(
        <Switch>
            <Route exact path="/games/new" component={NewGame}/>
            <Route path="/games" component={GamesList}/>
        </Switch>
    )
}

export default Games;
