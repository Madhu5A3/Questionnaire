import { combineReducers } from 'redux';
import UserReducer from '../UserProfile/Reducer/UserReducer';
import QuestionnaireReducer from '../Questionnaire/Reducer/QuestionnaireReducer';

const ReduxReducer = combineReducers({
    UserReducer,
    QuestionnaireReducer
})

export default ReduxReducer;