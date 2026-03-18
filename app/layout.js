import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Panhandle Pressure Equipment and Trailers LLC",
  description: "Panhandle Pressure Equipment and Trailers LLC.",
  keywords: "panhandle pressure equipment and trailers llc, pressure equipment, trailers, panhandle",
  authors: [{ name: "Panhandle Pressure Equipment and Trailers LLC" }],
  creator: "Panhandle Pressure Equipment and Trailers LLC",
  publisher: "Panhandle Pressure Equipment and Trailers LLC",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
