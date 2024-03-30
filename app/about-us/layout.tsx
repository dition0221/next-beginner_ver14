export default function AboutUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <span>&copy; NextJS is good</span>
    </>
  );
}
