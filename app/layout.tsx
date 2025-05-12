import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shop",
  description: "Shop",
};

const styles = `
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    background-color: #f0f0f0;
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  .header {
    background-color: #333;
    color: #fff;
    padding: 1rem;
  }
  .footer {
    background-color: #333;
    color: #fff;
    padding: 1rem;
    margin-top: 2rem;
  }
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <header className="header">
          <div className="container">
            <nav>
              <a href="/">Home</a>
              <a href="/products">Products</a>
              <a href="/about">About</a>
            </nav>
          </div>
        </header>
        <main className="container">
          {children}
        </main>
        <footer className="footer">
          <div className="container">
            <p>© 2024 Shop</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
