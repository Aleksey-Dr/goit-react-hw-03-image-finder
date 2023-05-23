import axios from "axios";

const KEY_TO_API = '35129314-12d9f6cafbe4df38ad9bc5f6b';
// let currentPage = 1;

export async function fetchImages(term) {
    const baseURL = 'https://pixabay.com/api';
    const searchURL = `?q=${term}`;
    const pageURL = '&page=1';
    const keyhURL = `&key=${KEY_TO_API}`;
    const backURL = '&image_type=photo&orientation=horizontal&per_page=12';
  const url = baseURL + searchURL + pageURL + keyhURL + backURL;
  
  console.log(url);

    const response = await axios.get(url);
    const images = await response.data.hits;

  // currentPage += 1;

    return images;
}

export function restartPage() {
  // currentPage = 1;
}

// https://pixabay.com/api/?key=35129314-12d9f6cafbe4df38ad9bc5f6b&q=cat&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=1

// https://pixabay.com/api/q=/?key=35129314-12d9f6cafbe4df38ad9bc5f6b&q=cat&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=1

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12