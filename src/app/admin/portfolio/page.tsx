'use client';

import {PortfolioProps} from "@/components/portfolio/card";
import {collection, getDocs, getFirestore} from "@firebase/firestore";
import {firebaseApp} from "../../../../firebase-app-config";
import {useEffect, useState} from "react";
import PortfolioTabs from "@/components/portfolio/Tab";

export default function AdminPortfolio() {
  const tabItems = ['all', 'web-development', 'mobile-development']
  const [data, setData] = useState<PortfolioProps[]>([])

  async function getData() {
    const db = getFirestore(firebaseApp);
    let query = await getDocs(collection(db, "portfolio"));
    const portfolios: PortfolioProps[] = [];
    query.forEach((doc) => {
      const docData = doc.data();
      portfolios.push({
        id: doc.id,
        order: docData.order,
        type: docData.type,
        title: docData.title,
        description: docData.description,
        images: JSON.parse(docData.images),
        stacks: JSON.parse(docData.stacks),
      });
    });
    portfolios.sort((a, b) => {
      return a.order - b.order;
    });
    setData(portfolios);
  }

  useEffect(() => {
    getData()
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
