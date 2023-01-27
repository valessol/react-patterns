import React from 'react';
import {Player} from './player.js';
import {PlayerReducer} from './player-reducer.js';

export const StateReducerPage = () => (
  <>
    <h2>Ejemplo sin State Reducer</h2>
    <Player />

    <hr />
    <h2>Ejemplo con State Reducer</h2>
    <PlayerReducer />
  </>
);
