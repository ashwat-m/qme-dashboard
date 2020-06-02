import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/navbar';
import { Campaigns } from './components/campaigns';
import { BrowseDatabase } from './components/browse';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Campaigns} />
        <Route path="/about" component={BrowseDatabase} />
      </Switch>
    </Router>
    
  );
}

export default App;
