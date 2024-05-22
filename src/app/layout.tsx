import type { Metadata } from "next";
import "@/styles/globals.css";
import { exampleFont } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "NextJS Template Generated By https://github.com/armangohari",
  keywords: [],
  openGraph: {
    type: "website",
    url: "https://example.com",
    title: "My Website",
    description: "My Website Description",
    siteName: "My Website",
    images: [{
      url: "https://example.com/og.png",
    }],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${exampleFont.className}`}>{children}</body>
    </html>
  );
}
