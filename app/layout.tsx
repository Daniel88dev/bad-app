import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Shop",
  description: "Shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Head>
          <link
            rel="preload"
            href="/fonts/Inter_Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>
        <header className="header">
          <div className="container">
            <nav style={{ display: "flex", gap: "20px" }}>
              <Link href="/">Home</Link>
              <Link href="/products">Products</Link>
              <Link href="/about">About</Link>
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer className="footer">
          <div className="container">
            <p>© 2024 Shop</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
