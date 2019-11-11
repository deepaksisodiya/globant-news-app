import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios';

// worker Saga: will be fired on STUDENTS_FETCH_REQUESTED actions
function* fetchNews(action) {
  try {
    // const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${this.state.newsId}.json?print=pretty`);
    const news = yield call(getNews, action.payload);
    yield put({ type: 'NEWS_FETCH_SUCCEEDED', payload: news.data });
  } catch (e) {
    yield put({ type: 'NEWS_FETCH_FAILED', message: e.message });
  }
}

/*
  Starts fetchStudents on each dispatched `STUDENTS_FETCH_REQUESTED` action.
  Allows concurrent fetches of student.
*/
export default function* newsSaga() {
  yield takeEvery('NEWS_FETCH_REQUESTED', fetchNews);
}

function getNews(newsId) {
  return axios.get(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json?print=pretty`);
}
