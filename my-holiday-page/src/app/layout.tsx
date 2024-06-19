import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="holidays, US holidays, Next.js, Holiday API, React, TypeScript" />
        <meta name="author" content="Santiago Quintero" />
        <title>Holiday Page</title>
        <meta name="description" content="A practice project to display US holidays using Next.js and Holiday API." />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
