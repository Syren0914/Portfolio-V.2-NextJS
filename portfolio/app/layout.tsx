import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from '@vercel/analytics/react';
import { cn } from "@/lib/utils";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://erdene.dev"),
  title: "Erdene Batbayar – Fullstack Developer Portfolio",
  description: "I'm Erdene Batbayar, a Fullstack Developer based in Virginia, building modern, user-focused web apps using Next.js, AI, and cutting-edge technologies.",
  authors: [{ name: "Erdene Batbayar", url: "https://erdene.dev" }],
  keywords: [
    "Erdene Batbayar", "portfolio", "Fullstack Developer", "Next.js", "Virginia Developer",
    "frontend developer", "web development", "JavaScript", "React", "TypeScript"
  ],
  openGraph: {
    title: "Erdene Batbayar – Fullstack Developer Portfolio",
    description: "Explore Erdene's portfolio featuring fullstack web applications, UI/UX projects, and software built with Next.js, TypeScript, and AI integrations.",
    url: "https://erdene.dev",
    siteName: "Erdene.dev",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Erdene Batbayar Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Erdene Batbayar – Fullstack Developer Portfolio",
    description: "Modern, fast, and user-focused apps by Erdene. Check out projects and contact me at erdene.dev.",
    images: ["/og.png"],
    creator: "@Syren091444", // Optional
  },
};

<link rel="icon" href="/favicon.ico" sizes="any" />


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth")} suppressHydrationWarning>

		<head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Erdene Batbayar",
            "url": "https://erdene.dev",
            "sameAs": [
              "https://github.com/syren0914",
              "https://linkedin.com/in/erdene-batbayar"
            ],
            "jobTitle": "Fullstack Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance"
            }
          })
        }} />

      </head>
      <body className={cn(spaceGrotesk.className, "bg-background text-foreground")}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
			<Analytics/>
          </ThemeProvider>
      </body>
    </html>
  );
}
