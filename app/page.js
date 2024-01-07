import { promises as fs } from "fs";
import style from "./page.module.css";
import MovieList from "@/components/MovieList";
import Link from "next/link";

export default async function Home() {
  const movies = JSON.parse(
    await fs.readFile(process.cwd() + "/app/movies.json", "utf8"),
  );
  const genres = [
    "Drama",
    "Crime",
    "Action",
    "Adventure",
    "Biography",
    "History",
    "Romance",
    "Sci-Fi",
    "Western",
    "Fantasy",
    "Family",
    "Animation",
    "Mystery",
    "Thriller",
    "War",
    "Comedy",
    "Music",
    "Horror",
  ];
  return (
    <section className="section__container">
      <div className={style.hero__container}>
        <div className={style.hero__image__container}>
          <img
            src="/hero.webp"
            alt="Hero Image"
            className={style.hero__image}
            width="1920"
            height="1080"
          />
        </div>
        <h2 className={style.hero__title}>
          Find the Movies that you{" "}
          <a href="#movies" className={style.hero__link}>
            need to watch
          </a>
          !
        </h2>
        <div className={style.movie__genres}>
          Genres:
          <Link href="/" className={style.movie__genre}>
            All
          </Link>
          {genres.map((genre: string) => (
            <Link
              key={genre}
              href={`/?genre=${genre}`}
              className={style.movie__genre}
            >
              {genre}
            </Link>
          ))}
        </div>
      </div>
      <article id="movies" className={style.article__container}>
        <MovieList movies={movies} />
      </article>
    </section>
  );
}
