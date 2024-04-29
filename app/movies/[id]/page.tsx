// COMPONENTS
import MovieVideos from "@/components/movie-videos";
import { Suspense } from "react";

interface IProps {
  params: {
    id: string;
  };
}

export default function MovieDetail({ params: { id } }: IProps) {
  return (
    <Suspense
      fallback={
        <section className="grid gap-3 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="w-[300px] aspect-video bg-neutral-800 rounded-lg left-0 right-0 m-auto animate-pulse"
            />
          ))}
        </section>
      }
    >
      <MovieVideos id={id} />
    </Suspense>
  );
}
