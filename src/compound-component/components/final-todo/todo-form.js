import {useContext} from 'react';
import {useState} from 'react';
import {TodoContext} from './context/todoContext.js';

export const TodoForm = () => {
  const [inputValue, setInputValue] = useState('');

  const {handleSubmit} = useContext(TodoContext);

  const handleInputChange = ({target: {value}}) => {
    setInputValue(value);
  };

  const _handleSubmit = e => {
    e.preventDefault();
    handleSubmit(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={_handleSubmit}>
      <label>
        New todo:
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          required
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};
