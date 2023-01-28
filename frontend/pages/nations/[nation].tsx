//@ts-nocheck

import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../../components/navbar' 
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
import Link from 'next/link';


export default function Nation() {
  const [cookie, setCookie, removeCookie] = useCookies(["id", "username", "discriminator", "avatar", "access_token", "refresh_token", "expires_in", "expires_at"]);
  const [currentNation, setCurrentNation] = useState();
  const router = useRouter();
  const id = router.query.nation;

  const url = process.env.NEXT_PUBLIC_APIURL

  function getNation(nationid){
    axios.post(url + 'nationGet', {
      nid: nationid
    }).then(res => {
      console.log(res);
      setCurrentNation(res.data)
  })
  }


  useEffect(() => {
    if(!id) {
      return;
    }
    getNation(id)
  }, [id])


  return (
    <>
      <Head>
        <title>Nation - EarthCraft</title>
        <meta name="description" content="Earthcraft" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-[#292929]'>
    <Navbar />
    <p className='mt-[5vh] bg-mcbg1 bg-fixed bg-no-repeat bg-cover py-1 text-center text-white text-4xl sm:text-7xl tracking-widest' style={{fontFamily:"'Minecraftia', sans-serif"}}>{currentNation?.[0]?.FULL_NAME}</p>
    <div className='mt-[5vh] sm:mt-[0px] flex'>
      <div className='mx-auto sm:w-[40vw] '>
      <Image src={currentNation?.[0]?.FLAG_URL} width={500} height={200} alt=''></Image>
      </div>
    </div>
    <div className='mt-[5vh] text-2xl text-white text-center'>
        <p>Short Name: {currentNation?.[0]?.SHORT_NAME}</p>
        <p>Abbreviation: {currentNation?.[0]?.ABBREVIATION}</p>
        <p>Government System: {currentNation?.[0]?.GOVERNMENT_SYSTEM}</p>
        <p>Religion: {currentNation?.[0]?.RELIGION}</p>
        <p>Main Country: {currentNation?.[0]?.MAIN_COUNTRY}</p>
        <p>Religion: {currentNation?.[0]?.DISCORD_SERVER_ID}</p>
        <p>Anthem: <br/> <Link href={`${currentNation?.[0]?.ANTHEM}`} className='text-blue-500 underline'>{currentNation?.[0]?.ANTHEM}</Link></p>


      </div>
          <div className='pb-[200px]'></div>

    </div>
    </>
  )
}
