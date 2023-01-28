//@ts-nocheck

import Head from 'next/head'
import Image from 'next/image'
import Router, { useRouter } from 'next/router'
import { useEffect, useReducer, useState } from 'react';
import Sidebar from './sidebar';
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import classNames from 'classnames';
import Link from 'next/link';
import { useCookies } from 'react-cookie';
import axios from 'axios';

export default function Navbar() {
  const router = useRouter()
  const [cookie, setCookie, removeCookie] = useCookies(["id", "username", "discriminator", "avatar", "access_token", "refresh_token", "expires_in", "expires_at"]);
  const url = process.env.NEXT_PUBLIC_APIURL
  const [isLoggedIn, setIsLoggedIn] = useState();

  useEffect(() => {
    if (cookie.id) {
      setIsLoggedIn(true);
    }
  }, [cookie.id]);


  return (
    <div className='bg-black opacity-90 sticky top-0 p-5 text-white font-extralight text-xl flex items-center justify-between'>
    
        <div className='flex items-center ml-2 gap-2'>
        <div className='lg:hidden'>
        <Sidebar />
            </div>
    
            <Image src='/EarthCraftLogo.png' alt='' width={50} height={50}></Image>
       <p className='invisible sm:visible' onClick={() => router.push('/')}>EarthCraft</p>
       </div>
       <ul className='hidden ml-5 list-none text-base lg:gap-5 items-center lg:flex '>
        <li onClick={() => router.push('/')}>Home</li>
        <li onClick={() => router.push('/rules')}>Rules</li>
        <li onClick={() => router.push('/faq')}>FAQ</li>
        <li onClick={() => router.push('/map')}>Map</li>
        <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md text-white  ">
        <span onClick={() => router.push('/getting-started')}>Getting Started</span>
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-black shadow-lg focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/getting-started/create"
                  className={classNames(
                    active ? ' text-slate-200' : 'text-white',
                    'block bg-black px-4 py-2 text-sm'
                  )}
                >
                  Create A Nation
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/getting-started/join"
                  className={classNames(
                    active ? ' text-slate-200' : 'text-white',
                    'block bg-black px-4 py-2 text-sm'
                  )}
                >
                  Join A Nation
                </Link>
              )}
            </Menu.Item>
           
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
        <li onClick={() => router.push('/businesses')}>Businesses</li>
        <li onClick={() => router.push('/nations')}>Nations</li>
        <li onClick={() => router.push('/discord')}>Link to Discord </li>

        <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button  className="inline-flex w-full justify-center rounded-md text-white">
          <span onClick={() => router.push('/about')}>About</span>
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-black shadow-lg focus:outline-none">
          <div className="py-1">
            <Menu.Item >
              {({ active }) => (
                <Link
                  href="/about/staff"
                  className={classNames(
                    active ? ' text-slate-200' : 'text-white',
                    'block bg-black px-4 py-2 text-sm'
                  )}
                >
                  Staff
                </Link>
              )}
            </Menu.Item>
           
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
    
        {isLoggedIn ? (
         <Menu as="div" className="relative inline-block text-left">
         <div>
           <Menu.Button  className="inline-flex w-full justify-center rounded-md text-white">
             <span onClick={() => router.push('/myearthcraft')}>My Earthcraft</span>
             <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
           </Menu.Button>
         </div>
   
         <Transition
           as={Fragment}
           enter="transition ease-out duration-100"
           enterFrom="transform opacity-0 scale-95"
           enterTo="transform opacity-100 scale-100"
           leave="transition ease-in duration-75"
           leaveFrom="transform opacity-100 scale-100"
           leaveTo="transform opacity-0 scale-95"
         >
           <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-black shadow-lg focus:outline-none">
             <div className="py-1">
             <Menu.Item >
                 {({ active }) => (
                   <Link
                     href="/mybusinesses"
                     className={classNames(
                       active ? ' text-slate-200' : 'text-white',
                       'block bg-black px-4 py-2 text-sm'
                     )}
                   >
                     My Businesses
                   </Link>
                 )}
               </Menu.Item>
               <Menu.Item >
                 {({ active }) => (
                   <Link
                     href="/mynations"
                     className={classNames(
                       active ? ' text-slate-200' : 'text-white',
                       'block bg-black px-4 py-2 text-sm'
                     )}
                   >
                     My Nations
                   </Link>
                 )}
               </Menu.Item>
               <Menu.Item >
                 {({ active }) => (
                   <p
                   onClick={()=>{
                    document.cookie = null;
                    console.log('removed')
                    if (cookie) for (const key of Object.keys(cookie)) removeCookie(key, { path: "/" });
                    window.location.reload();
                   }}
                     className={classNames(
                       active ? ' text-slate-200' : 'text-white',
                       'block bg-black px-4 py-2 text-sm'
                     )}
                   >
                     Logout
                   </p>
               )}
               </Menu.Item>
              
             </div>
           </Menu.Items>
         </Transition>
       </Menu> ) : (        <li onClick={() => router.push('/auth/login')}>Login</li> ) }




       </ul>
       
    </div>
  )
}
