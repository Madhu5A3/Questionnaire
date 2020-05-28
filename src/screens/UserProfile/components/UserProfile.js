import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserThunk from '../actionCreators/UserThunk';
import { userProfileContainer } from "../css/UserCss";

const UserProfile = () => {
    const dispatch = useDispatch();
    useEffect(() => dispatch(UserThunk()), [dispatch])
    const userdataSelector = useSelector(state => state.UserReducer.userdata);

    const userIterator = userdataSelector.map((user) => {
        return (
            <div key={user.Name}>
                <h1>{user.Name}</h1>
                <h2>{user.Designation}</h2>
                <h3>{user.Location}</h3>
            </div>
        );
    })
    return (
        <div className={userProfileContainer}>
            <code>UserProfile: </code>
            {userIterator}
        </div>
    );
}

export default UserProfile;