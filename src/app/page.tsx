import {Metadata} from "next";
import AboutMDX from '@/mdx/about.mdx'

export const metadata: Metadata = {
  title: 'About Me | amusfq.dev',
  description: "About Me - Personal About",
};

export default async function About() {
  return (
    <div className='space-y-8'>
      <div className='space-y-1'>
        <h1 className='font-bold text-white text-3xl'>
          <span>About Me</span>
        </h1>
        <div className='border-2 border-blue-500 w-12'/>
      </div>
      <div className='space-y-2 min-w-full text-white prose lg:prose-xl prose-strong:text-white'>
        <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-4/6">
            <AboutMDX/>
          </div>
        </div>
      </div>
    </div>
  );
}
