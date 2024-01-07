"use client";

import style from "@/components/MovieDetails.module.css";

export default function MovieDetails({ movie }: { movie: any }) {
  const details = [
    "Genre",
    "Actors",
    "Director",
    "Plot",
    "Awards",
    "BoxOffice",
  ];
  return (
    <div className={style.movie__details__container}>
      <div className={style.movie__title}>
        {movie.Title} <span className={style.movie__year}>({movie.Year})</span>
      </div>
      <div className={style.movie__details}>
        <div className={style.movie__poster__container}>
          <img
            src={movie.Poster}
            alt={movie.Title}
            className={style.movie__poster}
            width="300"
            height="450"
          />
        </div>
        <table className={style.details__table}>
          <tbody>
            {details.map((detail) => (
              <tr key={detail}>
                <td>{detail}:</td>
                <td>{movie[detail]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
