import React, { useReducer, useEffect } from 'react';
import './App.css';

import InputForm from './InputForm';
import templateReducer from './templateReducer';
import { fetchRandomText } from './util';

const initState = [];
function App() {
  const [templateStr, dispatch] = useReducer(templateReducer, initState);
  useEffect(() => {
    fetchRandomText(dispatch);
  }, []);
  return (
    <div className='App'>
      <InputForm dispatch={dispatch} />
      {templateStr.map(({ text, highlight }, i) => (
        <div
          key={Math.random()}
          onClick={() => dispatch({ type: 'HIGHLIGHT', text })}
          style={{ color: highlight ? 'red' : '', float: 'left' }}
        >
          &nbsp;&nbsp;
          {text}
        </div>
      ))}
    </div>
  );
}

export default App;
