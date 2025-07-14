import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "./i18n/context";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maike Naysinger Borges",
  description: "Portfólio profissional de desenvolvimento full-stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <I18nProvider>
          {children}
        </I18nProvider>
        <Analytics />
      </body>
    </html>
  );
}
