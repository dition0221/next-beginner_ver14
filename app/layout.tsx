import type { Metadata } from "next";
// CSS: Tailwind
import "@/app/globals.css";
import Nav from "@/components/nav";

export const metadata: Metadata = {
  title: "Next - Beginner_ver14",
  description: "Begin NextJS ver.14 by dition0221",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
