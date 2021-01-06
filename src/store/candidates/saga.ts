import { call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import { homeActions } from './slice';
import { Candidate } from './types';

export function* loadCandidates() {
  const requestURL = `https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json`;
  try {
    // Call our request helper (see 'utils/request')
    const candidates: Candidate[] = yield call(request, requestURL);
    if (candidates?.length > 0) {
      yield put(homeActions.candidatesLoaded(candidates));
    } else {
      yield put(homeActions.candidatesLoadError('Load Error'));
    }
  } catch (err) {
    yield put(homeActions.candidatesLoadError('Load Error'));
  }
}

export function* homeSaga() {
  yield takeLatest(homeActions.loadCandidates.type, loadCandidates);
}
