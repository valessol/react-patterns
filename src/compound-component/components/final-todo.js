import PropTypes from 'prop-types';
import {TodoProvider} from './final-todo/context/todoContext.js';
import {TodoTitle, TodoForm, TodoList} from './final-todo/index.js';

export const FinalTodo = ({children}) => {
  return (
    <div
      style={{
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        transition: '0.3s',
        borderRadius: '5px',
        padding: '8px',
      }}
    >
      <TodoProvider>{children}</TodoProvider>
    </div>
  );
};

FinalTodo.Title = TodoTitle;
FinalTodo.Form = TodoForm;
FinalTodo.List = TodoList;

FinalTodo.propTypes = {
  children: PropTypes.node.isRequired,
};
