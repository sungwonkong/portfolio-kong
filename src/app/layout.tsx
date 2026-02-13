import type { Metadata } from "next";
import "./globals.css";
import { SITE_META } from "@/shared/config/meta";

export const metadata: Metadata = {
  title: SITE_META.title,
  description: SITE_META.description
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

