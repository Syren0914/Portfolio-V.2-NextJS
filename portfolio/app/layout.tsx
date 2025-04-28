import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from '@vercel/analytics/react';
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	metadataBase: new URL("https://erdene.dev"),

	title: "Erdene Batbayar Portfolio",
	authors: {
		name: "Erdene Batbayar",
	},

	description:
		"Based in Virginia. I'm a Fullstack developer passionate about building a modern web application that user love.",
	openGraph: {
		title: "Erdene Portfolio",
		description:
			"Based in Virginia. I'm a Fullstack developer passionate about building a modern web application that user love.",
		url: "https://erdene.dev",
		siteName: "Erdene Batbayar - Portfolio 2025",
		images: "/og.png",
		type: "website",
	},
	keywords: ["syren0914", "Erdene", "portfolio","Erdene Batbayar","Designer","Front End devoloper", "Fullstack Developer", "portfolio"],
};
<link rel="icon" href="/favicon.ico" sizes="any" />


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
		<head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon.png" />
      </head>
      <body className={spaceGrotesk.className}>
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
