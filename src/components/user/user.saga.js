import { takeEvery, call, put } from 'redux-saga/effects';
import { FETCH_USER, dispatchUserDetails } from './user.actions';
import UserMock from '../../api/mockUserApi';

export function* getUser() {
    yield takeEvery(FETCH_USER, function*() {
        const userData = yield call(UserMock.getMyUser);
        yield put(dispatchUserDetails(userData));
    });
}