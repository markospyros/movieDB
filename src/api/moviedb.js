export const callAPI = (term) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=d9a7ec3d48109bd87cbeb494108e21f9&query=${encodeURIComponent(
    term
  )}`;

  console.log(url);

  return url;
};
