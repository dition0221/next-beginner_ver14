/* eslint-disable @next/next/no-img-element */
// LIBS
import { API_URL } from "@/libs/constants";

/* API */
interface IMovieDetail {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: Date;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface Genre {
  id: number;
  name: string;
}

interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export async function getMovie(id: string) {
  return (await fetch(`${API_URL}/${id}`).then((res) =>
    res.json()
  )) as IMovieDetail;
}

/* Component */
interface IMovieInfoProps {
  id: string;
}

export default async function MovieInfo({ id }: IMovieInfoProps) {
  const movie = await getMovie(id); // API

  return (
    <section className="grid grid-cols-2">
      <img
        src={movie.poster_path}
        alt="movie poster"
        className="w-3/4 max-w-[500px] rounded-lg"
      />
      <article className="space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base">
        <div>
          <h1 className="font-semibold text-base sm:text-xl md:text-2xl">
            {movie.title}
          </h1>
          <small className="text-gray-300">{movie.release_date + ""}</small>
        </div>
        <div className="space-x-4">
          <span>⭐ {movie.vote_average.toFixed(1)}</span>
          <span>🕒 {movie.runtime} mins</span>
        </div>
        {movie.homepage ? (
          <a
            href={movie.homepage}
            target="_blank"
            className="inline-block px-2 py-0.5 rounded-md bg-gray-600 hover:bg-gray-700 hover:underline focus:underline focus:bg-gray-700 focus:outline-none focus:ring-1 md:focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white transition-all"
          >
            Homepage &rarr;
          </a>
        ) : null}
        <p>{movie.overview}</p>
        <div className="flex flex-wrap space-x-4">
          {movie.genres.map((g) => (
            <span key={g.id}>#{g.name}</span>
          ))}
        </div>
      </article>
    </section>
  );
}
