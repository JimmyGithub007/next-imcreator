import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import { StoreProvider } from "@/store/StoreProvider";
import "./globals.css";

const inter = Ubuntu({ subsets: ["latin"], weight: '400' });

export const metadata: Metadata = {
  title: "IMCREATOR",
  description: "IMCREATOR LANDING PAGE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<StoreProvider>
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  </StoreProvider>);
}
