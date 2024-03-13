import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../styles/globals.sass";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gabriel Melo | Portfólio",
  description: "Este site é um portfólio para apresentar o trabalho do programador full stack Gabriel Melo",
  keywords: ['gabriel melo', 'desenvolvedor full stack', 'programador'],
};

{/* <meta
property='og:title'
content='Site de Gabriel Melo'
/>
<meta
property='og:description'
content='Este site é um portfólio sobre Gabriel Melo'
/>
<meta
property='og:image'
content='https://github.com/gabrielmelogm.png'
/> */}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
