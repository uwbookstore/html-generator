import { useState } from 'react';
function App() {
  const [inputText, setInputText] = useState('');
  const [listItems, setListItems] = useState([]);

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setListItems([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setListItems([...listItems, inputText]);
    setInputText('');
  };

  return (
    <div className='prose'>
      <h1>HTML Generator</h1>
      <div className='callout callout-info center'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit!
      </div>
      <form className='prose' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='listItem'>List item text</label>
          <input
            onChange={handleInput}
            type='text'
            id='listItem'
            value={inputText}
            required
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
      {listItems.length > 0 && (
        <>
          <ul>
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <button type='button' onClick={handleReset}>
            Reset
          </button>
        </>
      )}
    </div>
  );
}

export default App;
