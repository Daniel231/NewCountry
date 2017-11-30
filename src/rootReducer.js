import { combineReducers } from 'redux';
import groups from './components/group/group.reducer';
import selectedGroup from './components/group/selected_group.reducer';
import user from './components/user/Profile/profile.reducer';


function dummyReducer(state=[], action) {
    return state;
}

export default combineReducers({
    groups,
    selectedGroup,
    user
});

