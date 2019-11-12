import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios';

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

function getNews(newsId) {
  return axios.get(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json?print=pretty`);
}

async function getTopNews() {
  const response = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
  const topsNewsIdArr = response.data.slice(0, 15);
  const topNewsPromises = topsNewsIdArr.map(async (newsId) => {
    const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json?print=pretty`);
    return response.data;
  });
  const value = await Promise.all(topNewsPromises)
  return value
}
