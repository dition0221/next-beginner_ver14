import Link from "next/link";

interface IMovieProps {
  id: number;
  title: string;
  poster_path: string;
}

export default function Movie({ id, title, poster_path }: IMovieProps) {
  return (
    <Link
      href={`/movies/${id}`}
      className="pb-4 flex flex-col justify-between space-y-2 hover:underline"
    >
      <img
        src={poster_path}
        alt={title}
        className="rounded-lg hover:scale-105 transition-all"
      />
      <span className=" font-semibold text-center text-xs sm:text-sm md:text-base lg:text-lg">
        {title}
      </span>
    </Link>
  );
}
