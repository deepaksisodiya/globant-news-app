import { call, put, takeEvery } from 'redux-saga/effects'

import { getNews, getTopNews } from './../api';
import * as constant from './type';

function* fetchNews(action) {
  try {
    const news = yield call(getNews, action.payload);
    yield put({ type: constant.NEWS_FETCH_SUCCEEDED, payload: news.data });
  } catch (e) {
    yield put({ type: constant.NEWS_FETCH_FAILED, message: e.message });
  }
}

function* fetchTopNews() {
  try {
    const topNews = yield call(getTopNews);
    yield put({ type: constant.TOPNEWS_FETCH_SUCCEEDED, payload: topNews });
  } catch (e) {
    yield put({ type: constant.TOPNEWS_FETCH_FAILED, message: e.message });
  }
}

export default function* newsSaga() {
  yield takeEvery(constant.NEWS_FETCH_REQUESTED, fetchNews);
  yield takeEvery(constant.TOPNEWS_FETCH_REQUESTED, fetchTopNews);
}
