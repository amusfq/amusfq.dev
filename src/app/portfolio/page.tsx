import {Metadata} from "next";
import {PortfolioProps} from "@/components/portfolio/card";
import {collection, getDocs, getFirestore} from "@firebase/firestore";
import {firebaseApp} from "../../../firebase-app-config";
import Link from "next/link";
import {Pencil} from "@phosphor-icons/react/dist/ssr";
import {getUserSS} from "firebase-nextjs/server/auth";
import PortfolioTab from "@/components/portfolio/Tab";

export const metadata: Metadata = {
  title: 'Portfolio',
  description: "Portfolio - Personal Portfolio",
};

async function getData() {
  const db = getFirestore(firebaseApp);
  let query = await getDocs(collection(db, "portfolio"));
  const data: PortfolioProps[] = [];
  query.forEach((doc) => {
    const docData = doc.data();
    data.push({
      id: doc.id,
      order: docData.order,
      type: docData.type,
      title: docData.title,
      description: docData.description,
      images: JSON.parse(docData.images),
      stacks: JSON.parse(docData.stacks),
    });
  });
  data.sort((a, b) => {
    return a.order - b.order;
  });
  return data;
}

export default async function Portfolio() {
  const data = await getData();
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
