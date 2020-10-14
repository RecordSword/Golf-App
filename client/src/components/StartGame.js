import React, { useRef }  from 'react';
import { useStoreContext } from "../utils/GlobalState";
import { ADD_POST, LOADING } from "../utils/actions";
import API from "../utils/API";

export  function StartGame() {

    return(
        <div>
            <h1>Start Game</h1>
        </div>
    )
}

export default StartGame;
