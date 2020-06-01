import React, { useEffect, useState } from 'react';
import AddThunkQuestion from '../actionCreators/AddThunkQuestion';
import { useSelector, useDispatch } from 'react-redux';
import { questionWrapper, containerWrapper, buttonWrapper } from '../css/GlobalCss';

const QuestionBox = () => {
    const dispatch = useDispatch();
    const [questions, setQuestions] = useState([]);
    useEffect(() => dispatch(AddThunkQuestion()), [dispatch])
    const questionsSelector = useSelector(state => state.QuestionnaireReducer.questions);

    console.table(questionsSelector);
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
