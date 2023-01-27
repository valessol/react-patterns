import {createContext, useState} from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({children}) => {
  const [listTodos, setListTodos] = useState({});

  const handleSubmit = inputValue => {
    setListTodos({
      ...listTodos,
      [inputValue]: {name: inputValue, isDone: false},
    });
  };

  const toogleTodo = ({target: {name}}) => {
    setListTodos({
      ...listTodos,
      [name]: {
        ...listTodos[name],
        isDone: !listTodos[name].isDone,
      },
    });
  };

  const getTodoValues = () => Object.values(listTodos);

  return (
    <TodoContext.Provider
      value={{
        handleSubmit,
        toogleTodo,
        getTodoValues,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
