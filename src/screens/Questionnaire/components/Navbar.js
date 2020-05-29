import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { unlistWrapper, listWrapper, linkWrapper } from '../css/GlobalCss';

const Navbar = () => {
    return (
        <div data-test="questionList">
            <nav className="navbarContainer">
                <ul className={unlistWrapper}>
                    <li className={listWrapper}>
                        <Link className={linkWrapper} to="/home/qa">
                            QuestionBox
                        </Link>
                    </li>
                    <li className={listWrapper}>
                        <Link className={linkWrapper} to="/home/edit/:edit_id">
                            EditQuestion
                        </Link>
                    </li>
                    <li className={listWrapper}>
                        <Link className={linkWrapper} to="/home/list">
                            Question List
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default withRouter(Navbar);