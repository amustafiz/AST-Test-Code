import { useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import ClassTest from './ClassTest.js';
import TestComp from './TestComp.js';

function App() {
  useEffect(() => {
    axios.get('/');
  })

  return (
    <div className="App">
      <TestComp />
      <ClassTest />
    </div>
  );
}

export default App;
