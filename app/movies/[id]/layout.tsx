/* eslint-disable @next/next/no-img-element */
import { Suspense } from "react";
// COMPONENTS
import MovieInfo, { getMovie } from "@/components/movie-info";
import MovieMenu from "@/components/movie-menu";

/* Metadata */
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

/* Layout */
interface IProps extends IParams {
  children: React.ReactNode;
}

export default async function MovieDetailLayout({
  params: { id },
  children,
}: IProps) {
  return (
    <main className="pb-10 w-5/6 sm:w-3/4 left-0 right-0 m-auto space-y-14">
      <Suspense fallback={<h1>Loading movie info..</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <MovieMenu id={id} />
      {children}
    </main>
  );
}
