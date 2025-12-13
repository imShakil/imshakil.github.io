import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import RouteLoader from "@/components/RouteLoader";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import HireMe from "@/components/HireMe";
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
  title: "Mobarak Hosen Shakil - Cloud & DevOps Engineer | SysAdmin | IAM | Technical Support",
  description: "Portfolio of Mobarak Hosen, a DevOps Engineer specializing in cloud infrastructure, CI/CD pipelines, and system administration.",
  keywords: ["DevOps", "Cloud", "Docker", "Kubernetes", "Terraform", "CI/CD", "AWS", "Azure"],
  authors: [{ name: "Mobarak Hosen" }],
  creator: "Mobarak Hosen",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  metadataBase: new URL("https://mhosen.com"),
  alternates: {
    canonical: "https://mhosen.com",
  },
  openGraph: {
    title: "Mobarak Hosen - DevOps Engineer",
    description: "Portfolio showcasing DevOps expertise and projects",
    type: "website",
    url: "https://mhosen.com",
    siteName: "Mobarak Hosen",
    images: [
      {
        url: "/logo.png",
        width: 200,
        height: 200,
        alt: "Mobarak Hosen Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobarak Hosen - DevOps Engineer",
    description: "Portfolio showcasing DevOps expertise and projects",
    images: ["/logo.png"],
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
        <link rel="icon" href="/logo.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mobarak Hosen",
              url: "https://mhosen.com",
              jobTitle: "DevOps Engineer",
              image: "https://mhosen.com/logo.png",
              sameAs: [
                "https://github.com/imshakil",
                "https://linkedin.com/in/mobarak-hosen",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-100`}
      >
        <GoogleAnalytics />
        <RouteLoader />
        <Navigation />
        <HireMe />
        {children}
      </body>
    </html>
  );
}
