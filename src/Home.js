import React from 'react';
import { css } from 'emotion';

const homeWrapperContainer = css`
    width: '80%';
    margin: 20px;
    text-align: center;
    padding: 10px;
    border-radius: 2px;
`;
const buttonWrapperContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: '10%';
    padding-left: 10px;
    border-radius: 2px;
    margin-left: 10px;
`;
const Home = (props) => {
    return (
        <div className={homeWrapperContainer}>
            <code>Welcome to Questionnaire Website</code>
            <div className={buttonWrapperContainer}>
                <button title="QUESTIONNAIRE" onClick={() => props.history.push('/home/qa')}>QUESTIONNAIRE</button>
                <button title="USER PROFILE" onClick={() => props.history.push('/userprofile')}>UserProfile</button>
            </div>
        </div>
    );
}

export default Home;