import { Modal } from "./Modal";
import { useState } from "react";

export function Card({ movie }) {
  const [show, setShow] = useState(false);
  const [movieData, setMovieData] = useState();

  return (
    <div className="flex flex-col  ">
      <h1 className="text-center text-3xl font-semibold text-white mt-10">
        {show ? "" : "Filmes Populares"}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3  gap-20 md:gap-32 m-auto sm:ml-8 lg:m-auto">
        {movie.map((movie) => {
          if (show) {
            return null;
          }
          return (
            <div
              key={movie.id}
              className="md:mb-10 mb-5 mt-10 md:flex flex-col gap-2 relative"
            >
              <img
                className="w-[160px] h-auto  sm:w-[200px] rounded-md "
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt=""
              />
              <p className="text-white text-base text-start w-[200px] ">
                {movie.title}
              </p>
              <p className="text-gray-400  ">Nota: {movie.vote_average}</p>
              <a
                className="bg-red-500 p-2 cursor-pointer rounded-md hover:bg-red-800 text-white absolute -bottom-12"
                onClick={() => {
                  setShow(true), setMovieData(movie);
                }}
              >
                Saiba mais...
              </a>
            </div>
          );
        })}
      </div>
      <Modal item={movieData} onClose={() => setShow(false)} show={show} />
    </div>
  );
}
