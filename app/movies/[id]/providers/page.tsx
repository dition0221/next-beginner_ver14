import { API_URL } from "@/libs/constants";

/* API */
interface IMovieProvider {
  [country: string]: Country;
}

interface Country {
  link: string;
  buy: Buy[];
  rent?: Buy[];
  flatrate?: Buy[];
}

interface Buy {
  logo_path: string;
  provider_id: number;
  provider_name: string;
  display_priority: number;
}

async function getMovieProviders(id: string) {
  return (await fetch(`${API_URL}/${id}/providers`).then((res) =>
    res.json()
  )) as IMovieProvider;
}

/* Page */
interface IProps {
  params: { id: string };
}

export default async function MovieProviders({ params: { id } }: IProps) {
  const providers = await getMovieProviders(id);

  return (
    <div className="space-y-4">
      {Object.entries(providers).map(([country, v]) => (
        <div key={country}>
          <p>{JSON.stringify(v)}</p>
        </div>
      ))}
    </div>
  );
}
