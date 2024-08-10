import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import HeaderComponent from "@/components/Header/HeaderComponent";
import FooterComponent from "@/components/Footer/FooterComponent";
import Animate from "@/components/AOS/Animate";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <HeaderComponent />
          <Animate>{children}</Animate>
          <FooterComponent />
        </ThemeProvider>
      </body>
    </html>
  );
}
