import "./globals.css";
import type { Metadata } from "next";
import { ClientBody } from "./ClientBody";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "CentralAxis - Data Center Management Software",
  description: "Advanced Load Balancing, Power and Cooling, and Data Center Operations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark">
        <ClientBody>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ClientBody>
      </body>
    </html>
  );
}
