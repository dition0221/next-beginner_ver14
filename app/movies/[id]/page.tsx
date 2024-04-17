import { Suspense } from "react";
// COMPONENTS
import MovieVideos from "@/components/movie-videos";

interface IProps {
  params: {
    id: string;
  };
}

export default function MovieDetail({ params: { id } }: IProps) {
  return (
    <Suspense fallback={<h1>Loading movie videos..</h1>}>
      <MovieVideos id={id} />
    </Suspense>
  );
}
