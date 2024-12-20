import axios from 'axios';

const unsplashApi = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${process.env.UNSPLASH_API_KEY}`
  }
});

export async function searchImages(query) {
  try {
    const response = await unsplashApi.get('/search/photos', {
      params: {
        query: `${query} horns`,
        per_page: 1
      }
    });
    return response.data.results[0]?.urls?.regular;
  } catch (error) {
    console.error('Error fetching from Unsplash:', error);
    return null;
  }
}