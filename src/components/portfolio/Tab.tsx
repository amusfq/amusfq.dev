import {Tab, TabContent, TabItem, TabList} from "keep-react";
import Card, {PortfolioProps} from "@/components/portfolio/card";
import AddCard from "@/components/portfolio/AddCard";

export type PortfolioTabProps = {
  tabItems: string[];
  data: PortfolioProps[];
  edit?: boolean
}

const PortfolioTab = ({tabItems, data, edit = false}: PortfolioTabProps) => {
  return (
    <div className='space-y-4'>
      <Tab activeLabel="all" itemType="link">
        <TabList>
          {
            tabItems.map((item) => (
              <TabItem label={item} key={`tabItem-${item}`}>{item.toUpperCase().replace('-', ' ')}</TabItem>
            ))
          }
        </TabList>
        {
          tabItems.map((item) => (
            <TabContent key={`tabContent-${item}`} value={item} className='w-full max-w-full'>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {edit && <AddCard/>}
                {data.filter((row) => item === 'all' ? true : row.type === item).map(item => (
                  <Card key={item.id} data={item}/>))}
              </div>
            </TabContent>
          ))
        }
      </Tab>
    </div>
  )
}

export default PortfolioTab;
