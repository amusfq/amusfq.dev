'use client';

import Link from "next/link";
import {usePathname} from "next/navigation";
import clsx from "clsx";
import {getUserCS} from "firebase-nextjs/client/auth";
import {LogoutButton} from "firebase-nextjs/client/components";

const Navbar = () => {
  const {currentUser} = getUserCS();
  const pathname = usePathname();
  const items = [
    {label: 'About', url: '/'},
    {label: 'Resume', url: '/resume'},
    {label: 'Portfolio', url: '/portfolio'},
    {label: 'Contact', url: '/contact'},
  ]

  const handleLogout = () => {
    // auth
    //   .signOut()
    //   .then(() => {
    //     deleteCookie('token');
    //     logout();
    //   })
    //   .catch((error) => console.error(error))

  }

  return (
    <div
      className='fixed md:absolute left-0 md:left-auto top-0 right-0 flex shadow shadow-gray-950 flex-row space-x-8 justify-center md:justify-end bg-lighten px-8 py-4 md:rounded-tr-xl md:rounded-bl-3xl'>
      {
        items.map((item, idx) => (
          <Link
            href={item.url}
            key={`${idx}-${item}`}
            className={clsx(pathname === item.url ? 'text-blue-500' : 'text-white', 'hover:text-blue-500 font-bold')}
          >
            {item.label}
          </Link>
        ))
      }
      {
        currentUser && (
          <LogoutButton>
            <button
              className='text-white hover:text-blue-500 font-bold'
            >
              Logout
            </button>
          </LogoutButton>
        )
      }
    </div>
  )
}

export default Navbar;
