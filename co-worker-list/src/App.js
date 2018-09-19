import React from 'react';

import Toolbar from './components/Toolbar';
import Home from './pages/Home';
import List from './pages/List';
import Add from './pages/Add';

function App() {  
  return (
    <main>
      <Toolbar />
      <Home />
      <List />
      <Add />
    </main>
  );  
}

export default App;
