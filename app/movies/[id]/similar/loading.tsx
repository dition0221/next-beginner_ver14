export default function MovieSimilarLoading() {
  return (
    <section
      className="grid gap-x-5 gap-y-9 md:gap-y-11 xl:gap-y-[3.25rem]
        grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
    >
      {[...Array(20)].map((_, i) => (
        <article key={i} className="w-full flex flex-col gap-y-2 animate-pulse">
          <div className="aspect-[2/3] bg-neutral-800 rounded-xl" />
          <div className="space-y-1 *:bg-neutral-800 *:rounded-md">
            <p className="h-[22px]" />
            <p className="h-[18px]" />
          </div>
        </article>
      ))}
    </section>
  );
}
