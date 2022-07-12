import { useEffect, useState } from "react";
import { Card } from "./Card";

export function Filme() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => setMovie(data.results))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return <Card movie={movie} />;
}
