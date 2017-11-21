import { combineReducers } from 'redux';


function dummyReducer(state=[], action) {
    return state;
}

export default combineReducers({
    user: dummyReducer
})

