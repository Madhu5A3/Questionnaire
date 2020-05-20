import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const QuestionList = () => {
    const questionList = useSelector(state => state.questions);
    const history = useHistory();
    const disQuestions = questionList.map(question => {
        return (
            <p key={question.id}>{question.content}
                <button onClick={() => history.push({
                    pathname: '/edit/:' + question.id,
                    button_id: question.id
                })}>Edit</button>
            </p>
        );
    });
    return (
        <div className="questionList">
            {disQuestions}
        </div>
    );
};

export default QuestionList;