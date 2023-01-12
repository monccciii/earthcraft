//@ts-nocheck

import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Sidebar from './sidebar';
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
        <li onClick={() => router.push('/getting-started')}>Getting Started</li>
        <li onClick={() => router.push('/businesses')}>Businesses BE</li>
        <li onClick={() => router.push('/nations')}>Nations BE</li>
        <li onClick={() => router.push('/discord')}>Link to Discord </li>
        <li onClick={() => router.push('/about')}>About</li>
        {userAccessToken ? <li onClick={() => router.push('/myearthcraft')}>My EarthCraft</li> :         <li onClick={() => router.push('/login')}>Login</li>}




       </ul>
       
    </div>
  )
}
