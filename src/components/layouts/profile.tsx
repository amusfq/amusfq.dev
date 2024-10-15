import me from '@/assets/me.jpg';
import Image from "next/image";
import {ReactNode} from "react";

const Profile = () => {
  const contacts = [
    {
      label: 'EMAIL',
      value: 'mail@amusfq.dev',
      url: 'mailto:mail@amusfq.dev',
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/>
      </svg>
    },
    {
      label: 'PHONE',
      value: '+62 896-1289-0670',
      url: 'https://wa.me/6289612890670',
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"/>
      </svg>
    },
    {
      label: 'WEBSITE',
      value: 'amusfq.dev',
      url: 'https://amusfq.dev',
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"/>
      </svg>
    },
    {
      label: 'ADDRESS',
      value: 'Rajeg, Kab Tangerang, Banten, Indonesia',
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"/>
      </svg>
    }
  ]
  return (
    <nav className='w-full md:w-2/6 xl:w-1/6'>
      <div className='bg-dark px-8 py-12 rounded-xl shadow shadow-gray-950'>
      <div className='space-y-4 divide-y divide-gray-600'>
        <div className='space-y-4'>
          <Image src={me} alt="Me" priority className='bg-lighten w-40 h-40 rounded-3xl mx-auto shadow shadow-gray-950' width={150} height={150}/>
          <div className="flex flex-col items-center space-y-2">
            <h3 className='text-center text-white text-2xl font-bold'>Achmad Musyaffa</h3>
            <div className='rounded-md text-white inline-block bg-lighten py-2 px-3 text-xs shadow shadow-gray-950'>Fullstack Developer</div>
          </div>
        </div>
        <div className='space-y-4 pt-4'>
          {
            contacts.map((item, idx) => (
              <Contact item={item} key={idx}/>
            ))
          }
        </div>
      </div>
      </div>
    </nav>
  )
}

type ContactProps = {
  item: {
    label: string,
    value: string,
    url?: string;
    icon: ReactNode
  }
}

const Contact = ({item}: ContactProps) => {
  return (
    <div className='flex flex-row space-x-4 items-start'>
      <div
        className='flex-1 aspect-square bg-lighten shadow rounded-xl flex items-center justify-center text-blue-500 shadow shadow-gray-950'
      >
        {item.icon}
      </div>
      <div className='w-3/4'>
        <p className='text-sm text-gray-400'>{item.label}</p>
        {item.url ? <a href={item.url} className='text-white hover:text-blue-500' target='_blank'
                       rel='noopener'>{item.value}</a> :
          <p className='text-white'>{item.value}</p>}
      </div>
    </div>
  )
}

export default Profile;
