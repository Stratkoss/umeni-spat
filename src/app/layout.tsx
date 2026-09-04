import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nadační fond Umění spát",
  description: "Spánek mění život. Nadační fond pro zdraví, výkon a bezpečnost.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="cs" data-scroll-behavior="smooth"><body>{children}</body></html>;
}
