import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Providers } from "./Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SwiftShop",
  description: "Your one-stop shop for all things tech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers> {/* ✅ Wrap everything in SessionProvider */}
          <Navbar />
          <main className="container mx-auto min-h-[calc(100vh-130px)] px-1">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}