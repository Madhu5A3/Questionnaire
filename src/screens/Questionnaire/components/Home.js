import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import QuestionBox from './QuestionBox';
import EditQuestion from './EditQuestion';
import QuestionList from './QuestionList';

const Home = () => {
    return (
        <BrowserRouter>
            <div className="homeRouterContainer">
                <Navbar />
                <Switch>
                    <Route path="/home/qa" component={QuestionBox}></Route>
                    <Route path="/home/edit/:edit_id" component={EditQuestion}></Route>
                    <Route path="/home/list" component={QuestionList}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default Home;