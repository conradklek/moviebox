"use client";

import style from "@/components/MovieList.module.css";
import AnimatedLink from "@/components/AnimatedLink";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function MovieList({ movies }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <section className={style.movie__list}>
      {movies.map((movie) => (
        <div key={movie.imdbID} className={style.movie__list__item} style={{ display: genre && !movie.Genre.includes(genre) ? "none" : "flex" }}>
          <div className={style.movie__title}>
            <Link
              href={`/movie/details/${movie.imdbID}`}
              className={style.movie__link}
            >
              {movie.Title} ({movie.Year})
            </Link>
          </div>
          <AnimatedLink href={`/movie/details/${movie.imdbID}`}>
            <div className={style.movie__poster__container}>
              <img
                src={movie.Poster}
                alt={movie.Title}
                className={style.movie__poster}
                width="300"
                height="450"
                loading="lazy"
              />
            </div>
          </AnimatedLink>
        </div>
      ))}
    </section>
  );
}
