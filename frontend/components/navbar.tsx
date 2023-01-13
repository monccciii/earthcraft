//@ts-nocheck

import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import classNames from 'classnames';


export default function Navbar() {
const router = useRouter()
const [userAccessToken, setUserAccessToken] = useState();


useEffect(() => {
    if (typeof window !== 'undefined') {
        setUserAccessToken(localStorage.getItem('userAccessToken'));
    } 
}, [])
  return (
    <div className='bg-black opacity-90 sticky top-0 p-5 text-white font-extralight text-xl flex items-center justify-between'>
    
        <div className='flex items-center ml-2 gap-2'>
        <div className='lg:hidden'>
        <Sidebar />
            </div>
    
            <Image src='/EarthCraftLogo.png' alt='' width={50} height={50}></Image>
       <p className='invisible sm:visible' onClick={() => router.push('/')}>EarthCraft</p>
       </div>
       <ul className='hidden list-none text-base lg:gap-5 lg:flex '>
        <li onClick={() => router.push('/')}>Home</li>
        <li onClick={() => router.push('/rules')}>Rules</li>
        <li onClick={() => router.push('/faq')}>FAQ</li>
        <li onClick={() => router.push('/map')}>Map</li>
        <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md text-white  ">
          Getting Started
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
                <a
                  href="#"
                  className={classNames(
                    active ? ' text-slate-200' : 'text-white',
                    'block bg-black px-4 py-2 text-sm'
                  )}
                >
                  Create A Nation
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? ' text-slate-200' : 'text-white',
                    'block bg-black px-4 py-2 text-sm'
                  )}
                >
                  Join A Nation
                </a>
              )}
            </Menu.Item>
           
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
        <li onClick={() => router.push('/businesses')}>Businesses BE</li>
        <li onClick={() => router.push('/nations')}>Nations BE</li>
        <li onClick={() => router.push('/discord')}>Link to Discord </li>

        <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md text-white">
          About
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
                <a
                  href="#"
                  className={classNames(
                    active ? ' text-slate-200' : 'text-white',
                    'block bg-black px-4 py-2 text-sm'
                  )}
                >
                  Staff
                </a>
              )}
            </Menu.Item>
           
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
        {userAccessToken ? <li onClick={() => router.push('/myearthcraft')}>My EarthCraft</li> :         <li onClick={() => router.push('/login')}>Login</li>}




       </ul>
       
    </div>
  )
}
