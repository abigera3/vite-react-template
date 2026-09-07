import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const avantt = localFont({
  src: "../public/font/AvanttVF.woff2",
  variable: "--font-avantt",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Help and support centre | Starling",
  description:
    "If money worries are getting in the way, you’re navigating a big life change or you’re in a good place to start saving, we’re here to help at every stage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${avantt.variable} ${avantt.className}`}>
      <body>{children}</body>
    </html>
  );
}
