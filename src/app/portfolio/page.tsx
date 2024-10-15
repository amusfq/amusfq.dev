import {Metadata} from "next";
import {PortfolioProps} from "@/components/portfolio/card";
import {collection, getDocs, getFirestore} from "@firebase/firestore";
import {firebaseApp} from "../../../firebase-app-config";
import Link from "next/link";
import {Pencil} from "@phosphor-icons/react/dist/ssr";
import {getUserSS} from "firebase-nextjs/server/auth";
import PortfolioTab from "@/components/portfolio/Tab";
import { getPortfolio } from "@/services/portfolio";

export const metadata: Metadata = {
  title: 'Portfolio',
  description: "Portfolio - Personal Portfolio",
};

export default async function Portfolio() {
  const data = await getPortfolio();
  const user = await getUserSS()
  const tabItems = ['all', 'web-development', 'mobile-development']

  return (
    <div className='space-y-8'>
      <div className='space-y-1'>
        <div className='flex flex-row space-x-3 items-center'>
          <h1 className='font-bold text-white text-3xl'>
            <span>Portfolio</span>
          </h1>
          {user && <Link href='/admin/portfolio'><Pencil size={24} color="#ffffff"/></Link>}
        </div>
        <div className='border-2 border-blue-500 w-12'/>
      </div>
      <PortfolioTab tabItems={tabItems} data={data}/>
    </div>
  );
}
