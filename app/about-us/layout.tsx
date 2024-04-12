export default function AboutUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <footer>&copy; NextJS is good</footer>
    </>
  );
}
