"use client";

import { useState } from "react";
import styles from "./MovieSearch.module.css";
import Link from "next/link";

export default function MovieSearch({ movies }) {
  const [search, setSearch] = useState("");
  function filterMovies() {
    return movies.filter((movie) => movie.Title.toLowerCase().includes(search.toLowerCase())).slice(0, 6);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (search.length >= 1) {
      if (filterMovies().length >= 1) {
        window.location.href = `/movie/details/${filterMovies()[0].imdbID}`;
      }
    }
    setSearch("");
  }
  return (
    <form className={styles.search__container} onSubmit={handleSubmit}>
      <input type="text" placeholder="Search..." className={styles.search__input} onChange={(e) => setSearch(e.target.value)} value={search} />
      <ul className={styles.search__results}>
        {search.length >= 1 && filterMovies().map((movie) => (
          <li className={styles.search__result} key={movie.imdbID}>
            <Link href={`/movie/details/${movie.imdbID}`} className={styles.search__link} onClick={() => setSearch("")}>{movie.Title}</Link>
          </li>
        ))}
      </ul>
    </form>
  );
}

