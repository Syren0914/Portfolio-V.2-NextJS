import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://localhost:3000"),

	title: "Erdene Portfolio",
	authors: {
		name: "Erdene Batbayar",
	},

	description:
		"Based in Virginia. I'm a Fullstack developer passionate about building a modern web application that user love.",
	openGraph: {
		title: "Erdene Portfolio",
		description:
			"Based in Virginia. I'm a Fullstack developer passionate about building a modern web application that user love.",
		url: "https://localhost:3000",
		siteName: "Erdene Portfolio",
		images: "/og.png",
		type: "website",
	},
	keywords: ["syren0914", "Erdene", "portfolio"],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
