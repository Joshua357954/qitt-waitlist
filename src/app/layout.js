import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: "Qitt - The Ultimate Academic Support Platform",
  description:
    "Connect, learn, and grow with Qitt – your go-to platform for students and aspirants.",
};

const atypDisplay = localFont({
  src: [
    { path: "./fonts/AtypDisplayTRIAL-Light.otf", weight: "300" },
    { path: "./fonts/AtypDisplayTRIAL-Regular.otf", weight: "400" },
    { path: "./fonts/AtypDisplayTRIAL-Medium.otf", weight: "500" },
    { path: "./fonts/AtypDisplayTRIAL-Semibold.otf", weight: "600" },
    { path: "./fonts/AtypDisplayTRIAL-Bold.otf", weight: "700" },
  ],
  variable: "--font-aeonik",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${atypDisplay.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
