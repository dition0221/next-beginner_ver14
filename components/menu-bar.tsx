interface IProps {
  children: React.ReactNode;
}

export default function MenuBar({ children }: IProps) {
  return (
    <div className="my-4 py-3 md:py-4 px-4 md:px-6 bg-gray-700 w-fit mx-auto left-0 right-0 rounded-full font-medium text-xs sm:text-sm md:text-base shadow-md shadow-gray-900">
      {children}
    </div>
  );
}
