import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editQuestions } from '../actionCreators/EditQuestion';
import { formWrapper, inputWrapper, buttonEditWrapper } from '../css/GlobalCss';
import { useHistory } from 'react-router-dom';

const EditQuestion = (props) => {
    const [enteredValue, setOutputValue] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();
    const { button_id, button_content } = props.location;
    const handleEdit = (enteredText) => {
        setOutputValue(enteredText.target.value);
    }
    const handleSubmit = (e) => {
        history.push('/');
        e.preventDefault()
    }
    const handleSubmitWrap = () => dispatch(editQuestions(button_id, enteredValue));
    return (
        <div className="questionEdit">
            <form className={formWrapper} onSubmit={handleSubmit}>
                <input className={inputWrapper} type="text"
                    placeholder={button_content}
                    onChange={handleEdit}
                    value={enteredValue}>
                </input>
                <button className={buttonEditWrapper} onClick={handleSubmitWrap}>Save</button>
            </form>
        </div>
    );
};

export default EditQuestion;