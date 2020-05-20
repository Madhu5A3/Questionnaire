import React, { useEffect, useState } from 'react';
import AddThunkQuestion from '../actionCreators/AddThunkQuestion';
import { useSelector, useDispatch } from 'react-redux';
import { css } from 'emotion';

const QuestionBox = () => {
    const dispatch = useDispatch();
    const [questions,setQuestions] = useState([]);
    const questionsSelector = useSelector(state => state.questions);

    /*const thunkDispatcher = useCallback(
        () => dispatch(AddThunkQuestion()),
        [dispatch]
    )*/

    useEffect(() => dispatch(AddThunkQuestion()), [dispatch])

    const thunkDispatcher = () => {
        const questionList =
        questionsSelector.map(question => {
            return (
                <p className={css`
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius:4px; 
                font-size: 24px;
                border: 5px solid black;
            `}
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
            <div className={css`
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 70px;
        `}>
                <button className={css`
                    width: 300px;
                    margin: 100px;
                    text-align: center;
                    padding: 10px;
                    border-radius: 2px;
                `} onClick={thunkDispatcher}>Ask Me A Question</button>
            </div>
        </div>
    )
}

export default QuestionBox;