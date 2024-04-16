import { Suspense } from "react";
// COMPONENTS
import MovieInfo, { getMovie } from "@/components/movie-info";
import MovieVideos from "@/components/movie-videos";

interface IParams {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default function MovieDetail({ params: { id } }: IParams) {
  return (
    <main className="pb-10 w-5/6 sm:w-3/4 left-0 right-0 m-auto space-y-14">
      <Suspense fallback={<h1>Loading movie info..</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos..</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </main>
  );
}
