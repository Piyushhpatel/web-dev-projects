import axios from "axios";
import React, {useEffect, useState, useTransition} from "react"

const api_key = process.env.API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`;

const useGif = (tag) => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(true);

  async function fetchData(){
    setLoading(true);
    const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  }

  useEffect( () => {
    fetchData('tom and jerry');
  }, [])


  return {gif, loading, fetchData};
};

export default useGif;
