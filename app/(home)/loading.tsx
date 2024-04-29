export default function HomeLoading() {
  return (
    <main className="mb-8">
      <ul
        className="mx-8 grid gap-x-4 gap-y-10
          grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
      >
        {[...Array(20)].map((v, i) => (
          <li
            key={i}
            className="w-full space-y-2 *:bg-neutral-800 *:rounded-lg *:animate-pulse"
          >
            <div className="aspect-[2/3]" />
            <div className="h-[30px]" />
          </li>
        ))}
      </ul>
    </main>
  );
}
