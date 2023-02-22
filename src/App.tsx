import React from 'react';
import Todo from './Todo/Todo'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Todo/>}/>
    </Routes>
  );
}

export default App;
