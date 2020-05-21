import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
<<<<<<< HEAD
=======
// import { addQuestions } from '../actionCreators/AddQuestion';
>>>>>>> 1cafc2cb72a8877cd935a88d31d567664bdc9a8c
import { editQuestions } from '../actionCreators/EditQuestion';
import { formWrapper, inputWrapper } from '../css/GlobalCss';

const EditQuestion = (props) => {
    const [enteredValue, setOutputValue] = useState('');
    const dispatch = useDispatch();
    const { button_id, button_content } = props.location;
<<<<<<< HEAD
=======
    // const questionList = useSelector(state => state.questions);
>>>>>>> 1cafc2cb72a8877cd935a88d31d567664bdc9a8c
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