import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import HomeQA from './screens/Questionnaire/components/Home';
import UserProfile from './screens/UserProfile/components/UserProfile';

function App() {
  return (
    <BrowserRouter>
      <div data-test="App">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/home/qa" component={HomeQA}></Route>
          <Route path="/userprofile" component={UserProfile}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

