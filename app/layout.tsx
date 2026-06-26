import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import Content from "@/components/layout/content/Content";
import Header from "@/components/layout/header/Header";
export const metadata: Metadata = {
  title: "User Management App",
  description: "Create by Mohammad Mansoor Ghawsi",
};

  const user = {
    id: "1",
    name: "admin",
    email: "admin@ghawsi.solutions",
    image: "Image",
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
        <Content>
          <Header user={user} />
        {children}
        </Content>
        </body>
    </html>
  );
}
