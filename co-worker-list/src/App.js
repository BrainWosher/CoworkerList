import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Toolbar from './components/Toolbar';
import Home from './pages/Home';
import List from './pages/List';
import Add from './pages/Add';
import Settings from './pages/Settings';

function App() {  
  return (
    <Router>
      <main>
        <Toolbar />
        
        <Route exact path="/" component={Home}/>
        <Route path="/list" component={List} />
        <Route path="/add" component={Add} />
        <Route path="/settings" component={Settings} />
      </main>
    </Router>
  );  
}

export default App;
