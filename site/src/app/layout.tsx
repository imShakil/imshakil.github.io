import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Navigation from '@/components/Navigation';
import RouteLoader from '@/components/RouteLoader';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import HireMe from '@/components/HireMe';
import { profile } from '@/data/profile';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: `${profile.fullName} - Cloud & DevOps Engineer | SysAdmin | IAM | Technical Support`,
  description: `Portfolio of ${profile.name}, a DevOps Engineer specializing in cloud infrastructure, CI/CD pipelines, and system administration.`,
  keywords: ['DevOps', 'Cloud', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'AWS', 'Azure'],
  authors: [{ name: profile.name }],
  creator: profile.name,
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  metadataBase: new URL('https://mhosen.com'),
  alternates: {
    canonical: 'https://mhosen.com',
  },
  openGraph: {
    title: `${profile.name} - DevOps Engineer`,
    description: profile.summary,
    type: 'website',
    url: 'https://mhosen.com',
    siteName: profile.name,
    images: [
      {
        url: '/logo.png',
        width: 200,
        height: 200,
        alt: `${profile.name} Logo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} - DevOps Engineer`,
    description: profile.summary,
    images: ['/logo.png'],
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
        <meta name="google-adsense-account" content="ca-pub-2449944472030683" />
        <link rel="icon" href="/logo.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: profile.name,
              url: 'https://mhosen.com',
              jobTitle: profile.title,
              image: 'https://mhosen.com/logo.png',
              sameAs: [profile.github, profile.linkedin],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <GoogleAnalytics />
        <RouteLoader />
        <Navigation />
        <HireMe />
        {children}
      </body>
    </html>
  );
}
