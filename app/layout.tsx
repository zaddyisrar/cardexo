import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CARDEXO",
  description: "Premium access cards",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}