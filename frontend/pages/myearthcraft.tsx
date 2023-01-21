//@ts-nocheck
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function MyEarthcraft() {
  const [userInfo, setUserInfo] = useState();
  const router = useRouter();
  function getUserInfo(userID) {
    axios
        .get(
          `https://discord.com/api/users/@me`, 
          {headers:{ authorization: 'Bearer ' + userID}})
          .then(res => {
          console.log(res);
          setUserInfo(res.data);
      })
      .catch(err => console.log(err));
  }
  useEffect(() => {
    if (localStorage.getItem('userid')) {
      getUserInfo(localStorage.getItem('userid'))

    } else {
      router.push('/')
    }
  })
  
  return (
    <>
      <Head>
        <title>My Earthcraft - EarthCraft</title>
        <meta name="description" content="Earthcraft" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-[#292929] h-screen'>
    <Navbar />
    <p className='mt-[5vh] text-center text-white text-4xl sm:text-7xl tracking-widest' style={{fontFamily:"'Minecraftia', sans-serif"}}>My Earthcraft</p>

    </div>
    </>
  )
}
