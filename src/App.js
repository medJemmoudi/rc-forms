import React from 'react';
import './App.css';
import FormArea from './components/FormArea';

function App() {
  return (
    <div className="App">
      <FormArea
        config={{
          id: 'a-simple-form',
          className: 'form-area',
          fields: [
            {
              type: 'text',
              name: 'email',
              placeholder: 'your email please...',
            }
          ]
        }}
      />
    </div>
  );
}

export default App;
