import { Suspense } from "react";
// API
import { getMovie } from "@/components/movie-info";
// COMPONENTS
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
    <Suspense fallback={<h1>Loading movie videos..</h1>}>
      <MovieVideos id={id} />
    </Suspense>
  );
}
