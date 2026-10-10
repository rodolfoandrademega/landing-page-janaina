import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Janaína Andrade | Esteticista & Cosmetóloga",
  description: "Especialista em saúde da pele, tratamentos faciais e bem-estar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body 
        className={`${inter.className} antialiased bg-[#fcfbf9] min-h-screen`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
