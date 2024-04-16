// LIBS
import { API_URL } from "@/libs/constants";

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
  return (await fetch(`${API_URL}/${id}/videos`).then((res) =>
    res.json()
  )) as IMovieVideo[];
}

interface IMovieVideosProps {
  id: string;
}

export default async function MovieVideos({ id }: IMovieVideosProps) {
  const videos = await getVideos(id);

  return (
    <section className="grid gap-3 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
      {videos.map((video) => (
        <iframe
          className="rounded-lg left-0 right-0 m-auto"
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          title={video.name}
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ))}
    </section>
  );
}
