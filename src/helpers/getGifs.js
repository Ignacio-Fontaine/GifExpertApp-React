export const getGifs = async (category) => {
  // SECCION HTTPS REQUEST
  const url = `https://api.giphy.com/v1/gifs/search?api_key=PI927AaSsrFFHD8BFC9YoP6bkjBYEggv&q=${encodeURI(
    category
  )}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  // SECCION API REQUEST
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });
  return gifs;
};
