import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Ethan Rohman: Data Scientist and Full Stack Developer",
  description: "This is a portfolio website showcasing my skills as a Data Scientist and Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="safe-top">
          {children}
        </div>
      </body>
    </html>
  );
}
