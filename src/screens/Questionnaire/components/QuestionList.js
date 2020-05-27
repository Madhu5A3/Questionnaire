import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { disQuestionListWrapper, buttonListContainer } from '../css/GlobalCss';

const QuestionList = () => {
    const questionList = useSelector(state => state.questions);
    const history = useHistory();
    const disQuestions = questionList.map(question => {
        return (
            <p className={disQuestionListWrapper} key={question.id}>{question.content}
                <button className={buttonListContainer}
                    onClick={() => history.push({
                        pathname: '/home/edit/:' + question.id,
                        button_id: question.id,
                        button_content: question.content
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