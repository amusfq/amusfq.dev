import {Metadata} from "next";
import {Tab, TabContent, TabItem, TabList} from "keep-react";
import Card, {PortfolioProps} from "@/components/portfolio/card";
import {collection, getDocs, getFirestore} from "@firebase/firestore";
import {firebaseApp} from "../../../firebase-app-config";
import dayjs from "dayjs";

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
  const tabItems = ['all', 'web-development', 'mobile-development']
  return (
    <div className='space-y-8'>
      <div className='space-y-1'>
        <h1 className='font-bold text-white text-3xl'>Portfolio</h1>
        <div className='border-2 border-blue-500 w-12'/>
      </div>
      <div className='space-y-4'>
        <Tab activeLabel="all" itemType="link">
          <TabList>
            {
              tabItems.map((item) => (
                <TabItem label={item} key={`tabItem-${item}`} >{item.toUpperCase().replace('-', ' ')}</TabItem>
              ))
            }
          </TabList>
          {
            tabItems.map((item) => (
              <TabContent key={`tabContent-${item}`} value={item} className='w-full max-w-full'>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {data.filter((row) => item === 'all' ? true : row.type === item).map(item => (<Card key={item.id} data={item}/>))}
                </div>
              </TabContent>
            ))
          }
        </Tab>
      </div>
    </div>
  );
}
