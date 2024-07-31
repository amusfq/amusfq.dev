import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Contact',
  description: "Contact - Personal Portfolio",
};

export default function Contact() {
  return (
    <div>
      <div className='space-y-1'>
        <h1 className='font-bold text-white text-3xl'>Contact</h1>
        <div className='border-2 border-blue-500 w-12'/>
      </div>
    </div>
  );
}
