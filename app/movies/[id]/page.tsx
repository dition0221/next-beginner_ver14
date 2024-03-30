interface IMovieDetailProps {
  params: {
    id: string;
  };
}

export default function MovieDetail({ params: { id } }: IMovieDetailProps) {
  console.log(id);

  return <div>Movies {id}</div>;
}
