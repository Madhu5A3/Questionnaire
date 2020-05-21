import React, { useEffect, useState } from 'react';
import AddThunkQuestion from '../actionCreators/AddThunkQuestion';
import { useSelector, useDispatch } from 'react-redux';
// import { css } from 'emotion';
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

        //return displayRandomQuestion;
        setQuestions(displayRandomQuestion);
    }

    return (
        <div className="questionContainer">
            {questions}
            <div className={containerWrapper}>
                <button className={buttonWrapper} onClick={thunkDispatcher}>Ask Me A Question</button>
            </div>
        </div>
    )
}

export default QuestionBox;
