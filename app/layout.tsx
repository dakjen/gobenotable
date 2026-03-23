import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Ticker from "@/components/Ticker";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Notable — Go Be Notable. We'll Do The Rest.",
  description:
    "Notable by DakJen Creative LLC. Brand, platform, and revenue buildout for high-performing women founders and executives.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Notable — Go Be Notable. We'll Do The Rest.",
    description:
      "Brand, platform, and revenue buildout for high-performing women founders and executives.",
    url: "https://gobenotable.com",
    siteName: "Notable",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-ink">
        <Nav />
        <Ticker />
        <main className="pt-[58px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
