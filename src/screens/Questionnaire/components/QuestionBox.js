import React, { useEffect, useState } from 'react';
import EditQuestion from './EditQuestion'
import QuestionList from './QuestionList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import AddThunkQuestion from '../actionCreators/AddThunkQuestion';
import { useSelector, useDispatch } from 'react-redux';
import { questionWrapper, containerWrapper, buttonWrapper } from '../css/GlobalCss';

const QuestionBox = () => {
    const dispatch = useDispatch();
    const [questions, setQuestions] = useState([]);
    const questionsSelector = useSelector(state => state.questions);
    useEffect(() => dispatch(AddThunkQuestion()), [dispatch])

    const thunkDispatcher = () => {
        const questionList =
            questionsSelector.map(question => {
                return (
                    <p className={questionWrapper}
                        key={question.id}>
                        {question.content}
                    </p>
                );
            });

        let displayRandomQuestion = questionList[Math.floor(Math.random() * questionList.length)];
        setQuestions(displayRandomQuestion);
    }

    return (
        <BrowserRouter>
            <Navbar />
            <div className="questionContainer">
                {questions}
                <div className={containerWrapper}>
                    <button className={buttonWrapper} onClick={thunkDispatcher}>Ask Me A Question</button>
                </div>
            </div>
            <Switch>
                <Route path="/edit/:edit_id" component={EditQuestion}></Route>
                <Route path="/list" component={QuestionList}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default QuestionBox;
