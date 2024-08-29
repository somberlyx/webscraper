import Navbar from '@/components/Navbar'
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const SpaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['300','400', '500','600', '700']})

export const metadata: Metadata = {
  title: "PriceSweeper",
  description: "Save money online by tracking the prices of products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-10xl mx-auto">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
