//@ts-nocheck

import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../../components/navbar' 
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';


export default function Business() {
  const [cookie, setCookie, removeCookie] = useCookies(["id", "username", "discriminator", "avatar", "access_token", "refresh_token", "expires_in", "expires_at"]);
  const [currentBiz, setCurrentBiz] = useState();
  const router = useRouter();
  const id= router.query.business
  const url = process.env.NEXT_PUBLIC_APIURL
  const [bizUser, setBizUser] = useState();
  function getBusiness(bizid){
    axios.post(url + 'business', {
      bid: bizid
    }).then(res => {
      console.log(res);
      setCurrentBiz(res.data)
  })
  .catch(err => console.log(err));
  }


   function fetchUser(uid) {
    try {
        axios.get(`https://discordlookup.mesavirep.xyz/v1/${uid}`)
        .then(res => {
            console.log(res.data);
            setBizUser(res.data.tag)
        });
    } catch (err) {
        console.log(err);
    }
}


 
  useEffect(() => {
    if(!id) {
      return;
    }
    getBusiness(id)
  }, [id])

  useEffect(() => console.log(currentBiz))

  return (
    <>
      <Head>
        <title>Business - EarthCraft</title>
        <meta name="description" content="Earthcraft" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-[#292929]'>
    <Navbar />
    <p className='mt-[5vh] bg-mcbg1 bg-fixed bg-no-repeat bg-cover py-1 text-center text-white text-4xl sm:text-7xl tracking-widest' style={{fontFamily:"'Minecraftia', sans-serif"}}>{currentBiz?.[0]?.BUSINESS_NAME}</p>
    <div className='mt-[5vh] sm:mt-[0px] flex'>
      <div className='mx-auto sm:w-[40vw] '>
      <Image src={currentBiz?.[0]?.LOGO_URL} width={500} height={200} alt=''></Image>
      </div>
    </div>
    <div className='mt-[5vh] text-2xl text-white text-center'>
        <p>Owner: {fetchUser(currentBiz?.[0]?.OWNER_ID)} {bizUser}</p>
        <p>Type: {currentBiz?.[0]?.TYPE}</p>
        <p>Parent Company: {currentBiz?.[0]?.PARENT_COMPANY ? currentBiz?.[0].PARENT_COMPANY : 'N/A'}</p>
        <p>Headquarters: {currentBiz?.[0]?.HEADQUARTERS ? currentBiz?.[0]?.HEADQUARTERS : 'N/A'}</p>
        <p>Type: {currentBiz?.[0]?.TYPE}</p>
        <p>Founded: {currentBiz?.[0]?.FOUNDING_DATETIME ? currentBiz?.[0]?.FOUNDING_DATETIME.slice(0, 10) : 'Unknown'}</p>

      </div>
          <div className='pb-[200px]'></div>

    </div>
    </>
  )
}
