/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Suspense } from "react";
// COMPONENTS
import MenuBar from "@/components/menu-bar";
import MovieInfo, { getMovie } from "@/components/movie-info";

interface IProps {
  params: {
    id: string;
  };
  children: React.ReactNode;
}

export default async function MovieDetailLayout({
  params: { id },
  children,
}: IProps) {
  const movie = await getMovie(id);

  return (
    <main className="pb-10 w-5/6 sm:w-3/4 left-0 right-0 m-auto space-y-14">
      <Suspense fallback={<h1>Loading movie info..</h1>}>
        <MovieInfo movie={movie} />
      </Suspense>
      <MenuBar>
        <ul className="flex space-x-4">
          <li className="hover:underline">
            <Link href={`/movies/${id}`}>Videos</Link>
          </li>
          <li className="hover:underline">
            <Link href={`/movies/${id}/credits`}>Credits</Link>
          </li>
          <li className="hover:underline">
            <Link href={`/movies/${id}/providers`}>Providers</Link>
          </li>
          <li className="hover:underline">
            <Link href={`/movies/${id}/similar`}>Similar</Link>
          </li>
        </ul>
      </MenuBar>
      {children}
      {/* <Suspense fallback={<h1>Loading movie videos..</h1>}>
        <MovieVideos id={id} />
      </Suspense> */}
    </main>
  );
}
