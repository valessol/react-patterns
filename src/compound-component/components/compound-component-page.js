import React from 'react';
import {Todo} from './normal-todo.js';
import {FinalTodo} from './final-todo.js';

export const CompoundComponentPage = () => (
  <>
    <h2>Ejemplo sin Compound Component</h2>
    <Todo title="Sin Compound Pattern :o" />
    <hr />

    <h2>Ejemplo con Compound Component</h2>
    <FinalTodo>
      <FinalTodo.Title>
        <h1>Compound Pattern :D</h1>
      </FinalTodo.Title>
      <FinalTodo.Form />
      <FinalTodo.List />
    </FinalTodo>
  </>
);
