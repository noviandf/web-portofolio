import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Novian Dwi Fernanda — IT Support & Internal Tools & Operations',
  description: 'Portofolio profesional Novian Dwi Fernanda. Berfokus pada keandalan infrastruktur IT support, otomatisasi sistem, dan pengembangan backend.',
  openGraph: {
    title: 'Novian Dwi Fernanda — IT Support & Internal Tools & Operations',
    description: 'Portofolio profesional Novian Dwi Fernanda.',
    url: 'https://noviandf.web.id',
    siteName: 'Novian Dwi Fernanda Portfolio',
    images: [
      {
        url: 'https://noviandf.web.id/images/profile.webp',
        width: 800,
        height: 800,
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white text-black dark:bg-gray-950 dark:text-white transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}