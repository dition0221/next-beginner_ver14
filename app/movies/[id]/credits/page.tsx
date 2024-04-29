/* eslint-disable @next/next/no-img-element */
import { Suspense } from "react";
// LIBS
import { API_URL } from "@/libs/constants";

/* API */
interface IMovieCredits {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: "Acting" | "Directing";
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

async function getMovieCredits(id: string) {
  return (await fetch(`${API_URL}/${id}/credits`).then((res) =>
    res.json()
  )) as IMovieCredits[];
}

/* Page */
interface IProps {
  params: {
    id: string;
  };
}

export default async function MovieCredits({ params: { id } }: IProps) {
  const credits = await getMovieCredits(id);

  return (
    <Suspense fallback={<h1>Loading movie credits..</h1>}>
      <section>
        <ul className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(185px,1fr))]">
          {credits.map((credit) => (
            <li
              key={credit.id}
              className="pb-4 flex flex-col items-center text-center text-sm
                sm:text-base"
            >
              {credit.profile_path ? (
                <img
                  src={credit.profile_path}
                  alt="profile image"
                  className="rounded-xl shadow-xl shadow-gray-900"
                />
              ) : (
                <div
                  className="flex justify-center items-center w-[185px] h-[278px]
                    bg-gray-800 rounded-xl"
                >
                  <span className="text-xl font-semibold">Not Found</span>
                </div>
              )}
              <p className="mt-2 font-semibold">{credit.character}</p>
              <p className="text-gray-200">{credit.name}</p>
            </li>
          ))}
        </ul>
      </section>
    </Suspense>
  );
}
