import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="questionList">
            <nav className="navbarContainer">
                <ul className="listContainer">
                    <li>
                        <Link to="/">
                            QuestionBox
                        </Link>
                    </li>
                    <li>
                        <Link to="/edit/:edit_id">
                            EditQuestion
                        </Link>
                    </li>
                    <li>
                        <Link to="/list">
                            Question List
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default withRouter(Navbar);