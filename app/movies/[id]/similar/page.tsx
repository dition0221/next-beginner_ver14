/* eslint-disable @next/next/no-img-element */
// LIBS
import { API_URL } from "@/libs/constants";
import Link from "next/link";
import { Suspense } from "react";

/* API */
interface IMovieSimilar {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

async function getMovieSimilar(id: string) {
  return (await fetch(`${API_URL}/${id}/similar`).then((res) =>
    res.json()
  )) as IMovieSimilar[];
}

/* Page */
interface IProps {
  params: {
    id: string;
  };
}

export default async function MovieSimilar({ params: { id } }: IProps) {
  const similarMovies = await getMovieSimilar(id); // API

  return (
    <Suspense fallback={<h1>Loading movie credits..</h1>}>
      <section className="grid gap-5 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {similarMovies.map((movie) => (
          <Link
            key={movie.id}
            href={`/movies/${movie.id}`}
            className="pb-4 md:pb-6 xl:pb-8 flex flex-col items-center text-center"
          >
            {movie.poster_path ? (
              <img
                src={movie.poster_path}
                alt="profile image"
                className="rounded-xl shadow-xl shadow-gray-900"
              />
            ) : (
              <div className="flex justify-center items-center w-full aspect-[2/3] bg-gray-900 rounded-xl">
                <span className="text-xl font-semibold">Not Found</span>
              </div>
            )}
            <p className="mt-2 font-semibold text-sm sm:text-base">
              {movie.title}
            </p>
            <p className="text-gray-400 text-xs sm:text-sm">
              {movie.release_date + ""}
            </p>
          </Link>
        ))}
      </section>
    </Suspense>
  );
}
