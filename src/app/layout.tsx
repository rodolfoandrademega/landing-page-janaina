import type { Metadata } from "next";
import { DM_Sans, Lora } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Lora({ subsets: ["latin"], variable: "--font-editorial", display: "swap" });

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
        className={`${sans.variable} ${serif.variable} antialiased bg-[#fcfbf9] min-h-screen`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
