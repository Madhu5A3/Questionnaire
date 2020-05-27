import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import UserThunk from '../actionCreators/UserThunk';

const UserProfile = ({ userdata }) => {
    const dispatch = useDispatch();
    useEffect(() => dispatch(UserThunk()), [dispatch])
    //const userdataSelector = useSelector(state => state.userdata);
    console.log({ userdata });
    return (
        <code>UserProfile: </code>
    );
}

const mapStateToProps = (state) => {
    return {
        userdata: state.userdata
    }
}
export default connect(mapStateToProps)(UserProfile);