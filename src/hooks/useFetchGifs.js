import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  // HOOK useState
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  // HOOK useEffect
  useEffect(() => {
    // COMENTARIO Helper
    getGifs(category).then((imgs) => {
      setTimeout(() => {
        setState({
          data: imgs,
          loading: false,
        });
      }, 2000);
    });
  }, [category]);

  return state;
};
