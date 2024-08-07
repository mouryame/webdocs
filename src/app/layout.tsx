import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, HeadingPane, NavPane } from "./components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Docs",
  description: "An open-source app to build your documentation on web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} body`}>{children}</body>
    </html>
  );
}
