import { Suspense } from "react";
// COMPONENTS
import MovieInfo from "@/components/movie-info";
import MovieVideos from "@/components/movie-videos";

interface IMovieDetailProps {
  params: {
    id: string;
  };
}

export default function MovieDetail({ params: { id } }: IMovieDetailProps) {
  return (
    <main>
      <Suspense fallback={<h1>Loading movie info..</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos..</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </main>
  );
}
