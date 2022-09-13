import * as api from "../api/usersApi";
// import { call, fork, put, takeEvery } from "react-saga/effects";
import * as actions from "../actions/userActionTypes";
import { call, fork, put, takeEvery } from "redux-saga/effects";

// import { takeEvery } from "redux-saga";

function* getUsers() {
  try {
    const result = yield call(api.getUsers);
    console.log(result);
    yield put(actions.getUserSuccess(result.data.data));
  } catch (err) {
    console.log(err);
  }
}

function* watchGetUsersrequest() {
  yield takeEvery(actions.Types.GET_USER_REQUEST, getUsers);
}

const userSaga = [fork(watchGetUsersrequest)];
export default userSaga;
