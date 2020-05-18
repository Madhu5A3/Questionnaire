import React from 'react';
import QuestionBox from './components/QuestionBox';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={QuestionBox}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
