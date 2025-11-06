import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
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
  title: "Mobarak Hosen - DevOps Engineer & Technical Support Specialist",
  description: "Portfolio of Mobarak Hosen, a DevOps Engineer specializing in cloud infrastructure, CI/CD pipelines, and system administration.",
  keywords: ["DevOps", "Cloud", "Docker", "Kubernetes", "Terraform", "CI/CD"],
  authors: [{ name: "Mobarak Hosen" }],
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Mobarak Hosen - DevOps Engineer",
    description: "Portfolio showcasing DevOps expertise and projects",
    type: "website",
    images: [
      {
        url: "/logo.svg",
        width: 200,
        height: 200,
        alt: "Mobarak Hosen Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-100`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
