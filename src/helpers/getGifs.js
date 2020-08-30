export const getGifs = async( category ) => {

  const url = `http://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&api_key=8d0PlfemXeGBt9FYN1Q7MNvtfqW7jYiw`;
  const resp = await fetch( url );
  const { data } = await resp.json();
  const gifs = data.map( img => { 
    return {
      id   : img.id, 
      title: img.title,
      url  : img.images?.downsized_medium.url 
    }
  });

  return gifs; 
}