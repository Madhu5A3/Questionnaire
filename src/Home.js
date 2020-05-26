import React from 'react';

const Home = (props) => {
    return (
        <div className="homeContainer">
            <div className="buttonContainer">
                <button title="QUESTIONNAIRE" onClick={() => props.history.push('/qa')}>QUESTIONNAIRE</button>
                <button title="USER PROFILE" onClick={() => props.history.push('/userprofile')}>UserProfile</button>
            </div>
        </div>
    );
}

export default Home;