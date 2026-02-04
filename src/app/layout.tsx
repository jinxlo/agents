import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "World App Console",
  description: "Professional console for World App Technologies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
