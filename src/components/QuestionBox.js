import React, { useEffect, useState } from 'react';
import AddThunkQuestion from '../actionCreators/AddThunkQuestion';
import { useSelector, useDispatch } from 'react-redux';
<<<<<<< HEAD
=======
// import { css } from 'emotion';
>>>>>>> 1cafc2cb72a8877cd935a88d31d567664bdc9a8c
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
        <div className="questionContainer">
            {questions}
            <div className={containerWrapper}>
                <button className={buttonWrapper} onClick={thunkDispatcher}>Ask Me A Question</button>
            </div>
        </div>
    )
}

export default QuestionBox;
