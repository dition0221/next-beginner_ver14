import type { Metadata, Viewport } from "next";
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
  // favicon
  manifest: "/favicon/site.webmanifest",
  icons: {
    icon: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  // Open-Graph
  openGraph: {
    title: "Next Movies by dition0221",
    description: "Begin NextJS ver.14 by dition0221",
    url: "https://dition0221-next-beginner-ver14.vercel.app",
    images: {
      url: "https://dition0221-next-beginner-ver14.vercel.app/thumbnail.png",
      width: 1280,
      height: 720,
    },
    type: "website",
  },
  twitter: {
    title: "Next Movies by dition0221",
    description: "Begin NextJS ver.14 by dition0221",
    images: {
      url: "https://dition0221-next-beginner-ver14.vercel.app/thumbnail.png",
      width: 1280,
      height: 720,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-neutral-900 text-white">
        <Nav />
        {children}
      </body>
    </html>
  );
}
