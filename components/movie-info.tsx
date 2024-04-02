import { API_URL } from "@/app/(home)/page";

interface IMovieDetail {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: Date;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface Genre {
  id: number;
  name: string;
}

interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

// API
async function getMovie(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return (await fetch(`${API_URL}/${id}`).then((res) =>
    res.json()
  )) as IMovieDetail;
}

interface IMovieInfoProps {
  id: string;
}

export default async function MovieInfo({ id }: IMovieInfoProps) {
  const movie = await getMovie(id);

  return <h6>{JSON.stringify(movie)}</h6>;
}
