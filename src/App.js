import React from 'react';

import GlobalStyle from './style/global';

import Header from './components/Header';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
        <GlobalStyle/>
        
        <Header/>
        <Form/>
    </div>
  );
}

export default App;
