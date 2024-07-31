import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";
import Profile from "@/components/layouts/profile";
import clsx from "clsx";
import Navbar from "@/components/layouts/navbar";
import {GlobalStoreProvider} from "@/providers/store";
import {FirebaseNextJSProvider} from "firebase-nextjs/client/auth";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: {
    template: '%s | amusfq.dev',
    default: 'amusfq.dev'
  },
  description: "amusfq.dev - Personal Portfolio",
};

type RootProps = Readonly<{ children: ReactNode }>

export default function RootLayout({children}: RootProps) {
  return (
    <html lang="en">
    <FirebaseNextJSProvider>
      <body
        className={clsx(inter.className, 'p-4 md:p-8 flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 pt-20 md:pt-8')}>
      <GlobalStoreProvider>
        <>
          <Profile/>
          <main className='md:relative w-full md:w-4/6 xl:w-5/6 bg-dark p-8 rounded-xl shadow shadow-gray-950'>
            <Navbar/>
            {children}
          </main>
        </>
      </GlobalStoreProvider>
      </body>
    </FirebaseNextJSProvider>
    </html>
  );
}
