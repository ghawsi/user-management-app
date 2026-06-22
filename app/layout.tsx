import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/layout/sidebar/Sidebar";


export const metadata: Metadata = {
  title: "User Management App",
  description: "Create by Mohammad Mansoor Ghawsi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        {children}
        </body>
    </html>
  );
}
