import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editQuestions } from '../actionCreators/EditQuestion';
import { formWrapper, inputWrapper } from '../css/GlobalCss';

const EditQuestion = (props) => {
    const [enteredValue, setOutputValue] = useState('');
    const dispatch = useDispatch();
    const { button_id, button_content } = props.location;
    const handleEdit = (enteredText) => {
        setOutputValue(enteredText.target.value);
    }
    /*const handleSubmit = (e) => {
        e.preventDefault()
    }*/

    return (
        <div className="questionEdit">
            <form className={formWrapper} onSubmit={() => dispatch(editQuestions(button_id, enteredValue))}>
                <input className={inputWrapper} type="text"
                    placeholder={button_content}
                    onChange={handleEdit}
                    value={enteredValue}>
                </input>
                <input className={inputWrapper} type="submit"></input>
            </form>
        </div>
    );
};

export default EditQuestion;