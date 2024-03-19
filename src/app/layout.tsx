import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BurgerDream | Tu destino para hamburguesas irresistibles",
  description: "En BurgerDream, nos dedicamos a ofrecerte la experiencia gastronómica más deliciosa. Con nuestras jugosas hamburguesas artesanales, ingredientes frescos y sabores auténticos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
