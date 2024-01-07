import MovieDetails from "@/components/MovieDetails";

async function getMovie(movie_id) {
  const res = await fetch(
    `http://www.omdbapi.com/?i=${movie_id}&apikey=dcd710eb`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export default async function Page({ params }) {
  const movie = await getMovie(params.movie_id);
  return (
    <section className="section__container">
      {movie.Title ? (
        <MovieDetails movie={movie} />
      ) : (
        <center>
          <h2>
            <code>404</code>
          </h2>
        </center>
      )}
    </section>
  );
}
