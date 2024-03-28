import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/output.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "iBUYPOWER",
  description: "Front-End-Developer-Exam-main",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
