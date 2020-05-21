import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { unlistWrapper, listWrapper, linkWrapper } from '../css/GlobalCss';

const Navbar = () => {
    return (
        <div className="questionList">
            <nav className="navbarContainer">
                <ul className={unlistWrapper}>
                    <li className={listWrapper}>
                        <Link className={linkWrapper} to="/">
                            QuestionBox
                        </Link>
                    </li>
                    <li className={listWrapper}>
                        <Link className={linkWrapper} to="/edit/:edit_id">
                            EditQuestion
                        </Link>
                    </li>
                    <li className={listWrapper}>
                        <Link className={linkWrapper} to="/list">
                            Question List
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default withRouter(Navbar);