import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HabariDOC",
  description: "HabariDOC telemedcine app for creating healthy nation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#f1f5f9] dark:bg-[#1a222c] `}>
        <ThemeProvider>
          <ToastContainer />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
