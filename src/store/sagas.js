import { call, put, takeEvery } from 'redux-saga/effects'

import { getNews, getTopNews } from './../api';

function* fetchNews(action) {
  try {
    const news = yield call(getNews, action.payload);
    yield put({ type: 'NEWS_FETCH_SUCCEEDED', payload: news.data });
  } catch (e) {
    yield put({ type: 'NEWS_FETCH_FAILED', message: e.message });
  }
}

function* fetchTopNews() {
  try {
    const topNews = yield call(getTopNews);
    yield put({ type: 'TOPNEWS_FETCH_SUCCEEDED', payload: topNews });
  } catch (e) {
    yield put({ type: 'TOPNEWS_FETCH_FAILED', message: e.message });
  }
}

export default function* newsSaga() {
  yield takeEvery('NEWS_FETCH_REQUESTED', fetchNews);
  yield takeEvery('TOPNEWS_FETCH_REQUESTED', fetchTopNews);
}
