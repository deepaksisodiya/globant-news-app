import axios from 'axios';

export function getNews(newsId) {
  return axios.get(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json?print=pretty`);
}

export async function getTopNews() {
  const response = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
  const topsNewsIdArr = response.data.slice(0, 15);
  const topNewsPromises = topsNewsIdArr.map(async (newsId) => {
    const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json?print=pretty`);
    return response.data;
  });
  const topNews = await Promise.all(topNewsPromises)
  return topNews;
}
