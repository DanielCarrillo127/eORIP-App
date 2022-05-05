import React from 'react';
// import './App.css';
import Home from './views/Home';
import GlobalStyle from './GlobalStyle';
import { RoutesTree } from './routes/Routes';

function App() {
  return (
    <>
      <GlobalStyle/>
      <RoutesTree/>
    </>
  );
}

export default App;
