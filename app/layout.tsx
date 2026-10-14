import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gabriel Barros Advogado | Direito de Família, Previdenciário, Saúde e Consumidor",
  description:
    "Escritório de advocacia em Direito de Família, Previdenciário, Saúde e do Consumidor. Sede na Região Metropolitana do Recife, atuação em todo o Brasil.",
  icons: {
    icon: "/favicon.ico",
    apple: "/assets/img/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-full bg-off-white text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
