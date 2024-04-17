interface IProps {
  children: React.ReactNode;
}

export default function MenuBar({ children }: IProps) {
  return (
    <div className="my-4 py-4 px-8 bg-gray-700 w-fit mx-auto left-0 right-0 rounded-full">
      {children}
    </div>
  );
}
