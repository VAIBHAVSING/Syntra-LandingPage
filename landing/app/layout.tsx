import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ico from '@/app/favicon.ico'
// Custom local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for the Next.js app
export const metadata: Metadata = {
  title: "Syntra", // Update the title as needed
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Syntra</title>
        {/* Favicon link */}
        <link rel="icon" href={ico.src} sizes="any" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
