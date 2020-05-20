import React from 'react';
import QuestionBox from './components/QuestionBox';
import EditQuestion from './components/EditQuestion';
import QuestionList from './components/QuestionList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={QuestionBox}></Route>
          <Route path="/edit/:edit_id" component={EditQuestion}></Route>
          <Route path="/list" component={QuestionList}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

