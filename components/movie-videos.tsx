import { API_URL } from "@/app/(home)/page";

interface IMovieVideo {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: Date;
  id: string;
}

// API
async function getVideos(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // !!!
  return (await fetch(`${API_URL}/${id}/videos`).then((res) =>
    res.json()
  )) as IMovieVideo[];
}

interface IMovieVideosProps {
  id: string;
}

export default async function MovieVideos({ id }: IMovieVideosProps) {
  const videos = await getVideos(id);

  return <h6>{JSON.stringify(videos)}</h6>;
}
