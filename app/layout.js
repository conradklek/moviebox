import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { promises as fs } from "fs";
import MovieSearch from "@/components/MovieSearch";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MovieBox",
  description: "Built with Next.js and TypeScript",
};

export default async function RootLayout({
  children,
}) {
  const movies = JSON.parse(
    await fs.readFile(process.cwd() + "/app/movies.json", "utf8"),
  );
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="main__container">
          <header className="header__container">
            <h1 className="header__logo">
              <Link href="/" className="logo__link">
                MovieBox
              </Link>
            </h1>
            <nav className="header__nav">
              <MovieSearch movies={movies} />
            </nav>
          </header>
          {children}
          <footer className="footer__container">
            <p className="footer__text">
              Made with <span className="footer__icon">❤️</span> by{" "}
              <a href="https://conradklek.vercel.app" className="footer__link">
                Conrad Klek
              </a>{" "}
              for{" "}
              <a href="https://xcentium.com/" className="footer__link">
                XCentium
              </a>
            </p>
          </footer>
        </main>
      </body>
    </html>
  );
}
