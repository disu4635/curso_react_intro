import React from 'react';
import './App.css'
import { AppUi } from './AppUi';
import { TodoProvider } from '../TodoContext';
 
function App() {
  return (
    <TodoProvider>
      <AppUi/>
    </TodoProvider>
  );
}

export default App;
