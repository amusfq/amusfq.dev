'use client';

import {PortfolioProps} from "@/components/portfolio/card";
import {collection, getDocs, getFirestore} from "@firebase/firestore";
import {firebaseApp} from "../../../../firebase-app-config";
import {useEffect, useState} from "react";
import PortfolioTabs from "@/components/portfolio/Tab";
import { getPortfolio } from "@/services/portfolio";

export default function AdminPortfolio() {
  const tabItems = ['all', 'web-development', 'mobile-development']
  const [data, setData] = useState<PortfolioProps[]>([])

  useEffect(() => {
    // anonymouse async function
    const getData = async () => {
      const portfolios = await getPortfolio();
      setData(portfolios);
    }

    getData();
  }, [])

  return (
    <div className='space-y-8'>
      <div className='space-y-1'>
        <h1 className='font-bold text-white text-3xl'>
          <span>Admin: Portfolio</span>
        </h1>
        <div className='border-2 border-blue-500 w-12'/>
      </div>
      <PortfolioTabs tabItems={tabItems} data={data} edit/>
    </div>
  );
}
