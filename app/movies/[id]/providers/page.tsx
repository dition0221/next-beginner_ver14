/* eslint-disable @next/next/no-img-element */
import { Suspense } from "react";
// LIBS
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
    <Suspense fallback={<h1>Loading movie provider..</h1>}>
      {Object.keys(providers).length !== 0 ? (
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-2 2xl:grid-cols-3">
          {Object.entries(providers).map(([country, providers]) => (
            <a
              key={country}
              href={providers.link}
              target="_blank"
              className="bg-gray-900 p-3 border-2 rounded-lg shadow-lg shadow-gray-800 space-y-4 sm:space-y-6 pb-6 hover:bg-gray-800"
            >
              <h1 className="font-bold text-center text-lg sm:text-xl md:text-2xl">
                - {country} -
              </h1>

              <div className="grid grid-cols-2 divide-x-2 *:text-xs md:*:text-sm">
                <div className="space-y-4">
                  <h2 className="text-base font-semibold text-center">
                    &lt; BUY &gt;
                  </h2>
                  <div className="grid grid-cols-2 gap-x-2 gap-y-4">
                    {providers.buy.map((provider) => (
                      <div key={provider.provider_id} className="space-y-1">
                        <img
                          src={provider.logo_path}
                          alt="provider logo"
                          className="size-12 m-auto"
                        />
                        <p className="text-center">{provider.provider_name}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-base font-semibold text-center">
                    &lt; RENT &gt;
                  </h2>
                  <div className="grid grid-cols-2 gap-x-2 gap-y-4">
                    {providers.rent?.map((provider) => (
                      <div key={provider.provider_id} className="space-y-1">
                        <img
                          src={provider.logo_path}
                          alt="provider logo"
                          className="size-12 m-auto"
                        />
                        <p className="text-center">{provider.provider_name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </section>
      ) : (
        <h1 className="text-center font-semibold text-base sm:text-xl md:text-2xl">
          No Providers
        </h1>
      )}
    </Suspense>
  );
}
