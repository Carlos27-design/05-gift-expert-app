import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('Kimetsu no yaiba');

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;

    //De esta forma no se tendria que hacer
    //setCategories((categories) => [inputValue, ...categories]);

    setInputValue('');
    onNewCategory(inputValue);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Buscar Gift'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
