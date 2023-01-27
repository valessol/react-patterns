import {useContext} from 'react';
import {TodoContext} from './context/todoContext.js';

export const TodoList = () => {
  const {toogleTodo, getTodoValues} = useContext(TodoContext);

  const list = getTodoValues();

  return (
    <ul>
      {list.map(({name, isDone}) => (
        <li key={name}>
          <label>
            <input
              name={name}
              type="checkbox"
              checked={isDone}
              onChange={toogleTodo}
            />
            <span style={{textDecoration: isDone ? 'line-through' : ''}}>
              {name}
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
};
