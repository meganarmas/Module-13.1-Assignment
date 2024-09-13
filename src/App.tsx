import React from 'react';
import logo from './logo.svg';
import TypeScriptFunctions from './Component/DefineBasic';
import ColorList from './Component/ColorList';
import EvenNumbersList from './Component/FilterNumbers';
import UserList from './Component/UserList';
import './App.css';

function App() {
  return (
    <div className="App">
      <TypeScriptFunctions a={23} b={42} />
      <ColorList />
      <EvenNumbersList />
      <UserList />
    </div>
  );
}

export default App;
