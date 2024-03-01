import Header from "@devdanny/components/shared/Header";
import type { Metadata } from "next";
import "./globals.css";
import { towFonts } from "@devdanny/lib/fonts";
import { Providers } from "@devdanny/components/shared/Provider";
import { SFooter } from "@devdanny/components/sections";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Free Tow & Roadside Assistance App: TowGency",
  description:
    "TowGency finds nearby tow trucks to help you with tire changes, jump starts, lock outs, gas delivery and towing services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={towFonts.className}>
        <Providers>
          <main>
            <Header />
            {children}
            <SFooter />
          </main>
        </Providers>
      </body>
    </html>
  );
}
