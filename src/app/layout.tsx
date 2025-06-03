
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { PostHogProvider } from "./Components/PostHogProvider";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Kayla Richard's Portfolio",
  description: "A portfolio for Kayla Richard",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} antialiased`}>
        {/* Wrap the entire app in PostHogProvider to initialize analytics */}
        <PostHogProvider>
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}
