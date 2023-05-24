import axios from "axios";

const KEY_TO_API = '35129314-12d9f6cafbe4df38ad9bc5f6b';
// let currentPage = 1;

export async function fetchImages(term) {
    const baseURL = 'https://pixabay.com/api/';
    const searchURL = `?q=${term}`;
    const pageURL = '&page=1';
    const keyhURL = `&key=${KEY_TO_API}`;
    const backURL = '&image_type=photo&orientation=horizontal&per_page=12';
  const url = baseURL + searchURL + pageURL + keyhURL + backURL;

    const response = await axios.get(url);
    const images = await response.data.hits;

  // currentPage += 1;

    return images;
}

export function restartPage() {
  // currentPage = 1;
}