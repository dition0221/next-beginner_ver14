import type { Metadata } from "next";
// CSS: Tailwind
import "@/styles/globals.css";
// COMPONENTS
import Nav from "@/components/nav";

export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Next Movies",
  },
  description: "Begin NextJS ver.14 by dition0221",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-black text-white">
        <Nav />
        {children}
      </body>
    </html>
  );
}
