import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import QuestionBox from './screens/Questionnaire/components/QuestionBox';
import UserProfile from './screens/UserProfile/components/UserProfile';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/qa" component={QuestionBox}></Route>
          <Route path="/userprofile" component={UserProfile}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

