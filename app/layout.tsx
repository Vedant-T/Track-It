import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { ClerkProvider } from '@clerk/nextjs'
import 'remixicon/fonts/remixicon.css';
import { auth } from "@clerk/nextjs/server";

const nunito = Nunito({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "TrackIt",
  description: "Track Your Tasks",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {userId} = await auth();

  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`nunito.className antialiased flex`}
        >
          { userId &&<Sidebar />}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
