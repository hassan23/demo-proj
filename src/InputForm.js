import React, { useState } from 'react';

const InputForm = ({ dispatch }) => {
  const [replaceBy, updateReplaceBy] = useState('');
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch({ type: 'REPLACE', replaceBy });
      }}
    >
      <input
        value={replaceBy}
        onChange={e => updateReplaceBy(e.target.value)}
      />
      <button
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: 'REPLACE', replaceBy });
        }}
      >
        Replace
      </button>
    </form>
  );
};

export default InputForm;
