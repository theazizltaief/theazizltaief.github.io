import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const siteUrl = "https://azizltaief.me";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aziz Ltaief — Fullstack Developer · .NET & Rails",
    template: "%s | Aziz Ltaief",
  },
  description:
    "Mohamed Aziz Ltaief — Fullstack developer based in Tunis. Building production-grade web apps with ASP.NET Core, Ruby on Rails, Angular, and Next.js. AI integration with Ollama & RAG. 3 live e-commerce platforms, 50,000+ monthly visits.",
  keywords: [
    "Aziz Ltaief",
    "Mohamed Aziz Ltaief",
    "Fullstack Developer",
    "Ruby on Rails Developer",
    ".NET Developer",
    "ASP.NET Core Developer",
    "Angular Developer",
    "Next.js Developer",
    "Tunisia Developer",
    "Tunis Developer",
    "Freelance Developer Tunisia",
    "Rails 8",
    "RAG AI",
    "Ollama",
    "E-commerce Developer",
    "Web Developer Tunisia",
    "azizltaief",
    "theazizltaief",
  ],
  authors: [{ name: "Mohamed Aziz Ltaief", url: siteUrl }],
  creator: "Mohamed Aziz Ltaief",
  publisher: "Mohamed Aziz Ltaief",
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Aziz Ltaief — Fullstack Developer · .NET & Rails",
    description:
      "Building production-grade web apps and AI-powered solutions. 3 live e-commerce platforms, 50,000+ monthly visits.",
    url: siteUrl,
    siteName: "Aziz Ltaief",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aziz Ltaief — Fullstack Developer · .NET & Rails",
    description:
      "Building production-grade web apps and AI-powered solutions.",
    creator: "@theazizltaief",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
};

// JSON-LD Structured Data — schema.org Person
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohamed Aziz Ltaief",
  alternateName: "Aziz Ltaief",
  url: siteUrl,
  image: `${siteUrl}/profile.jpg`,
  jobTitle: "Fullstack Developer",
  description:
    "Fullstack developer specialised in ASP.NET Core, Ruby on Rails, and AI integration. Building production-grade web apps.",
  email: "aziz.ltaief6040@istic.ucar.tn",
  telephone: "+21651153180",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Radès",
    addressRegion: "Tunis",
    addressCountry: "TN",
  },
sameAs: [
  "https://github.com/theazizltaief",
  "https://www.linkedin.com/in/aziz-ltaief-b93517197/",
],
  knowsAbout: [
    "ASP.NET Core",
    "Ruby on Rails",
    "Angular",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Docker",
    "RAG AI",
    "Ollama",
    "Software Architecture",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "ISTIC — University of Carthage",
    url: "https://www.istic.rnu.tn/",
  },
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} font-sans bg-[#080808] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}