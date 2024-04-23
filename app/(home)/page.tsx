import { Metadata } from "next";
// LIBS
import { API_URL } from "@/libs/constants";
// COMPONENTS
import Movie from "@/components/movie";

export const metadata: Metadata = {
  title: "Home",
};

interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

async function getMovies() {
  return (await fetch(API_URL).then((res) => res.json())) as IMovie[];
}

export default async function Home() {
  const movies = await getMovies();

  return (
    <main>
      <ul
        className="mx-8 grid gap-x-4 gap-y-10
        grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
      >
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
          />
        ))}
      </ul>
    </main>
  );
}
