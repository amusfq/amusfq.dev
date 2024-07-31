import {Metadata} from "next";
import {Tab, TabContent, TabItem, TabList} from "keep-react";

export const metadata: Metadata = {
  title: 'Portfolio',
  description: "Portfolio - Personal Portfolio",
};

export default function Portfolio() {
  const tabItems = ['all', 'web-development', 'mobile-development']
  return (
    <div className='space-y-8'>
      <div className='space-y-1'>
        <h1 className='font-bold text-white text-3xl'>Portfolio</h1>
        <div className='border-2 border-blue-500 w-12'/>
      </div>
      <div className='space-y-4'>
        <Tab activeLabel="startup" itemType="link">
          <TabList>
            {
              tabItems.map((item) => (
                <TabItem label={item} key={`tabItem-${item}`}>{item.toUpperCase().replace('-', ' ')}</TabItem>
              ))
            }
          </TabList>
          {
            tabItems.map((item) => (
              <TabContent key={`tabContent-${item}`} value={item}>
                Startup Content
              </TabContent>
            ))
          }
        </Tab>
      </div>
    </div>
  );
}
