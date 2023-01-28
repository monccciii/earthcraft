//@ts-nocheck

import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar' 
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';

export default function MyBusinesses() {
  const [businessList, setBusinessList] = useState();
  const router = useRouter();
  const url = process.env.NEXT_PUBLIC_APIURL

  const [cookie, setCookie, removeCookie] = useCookies(["id", "username", "discriminator", "avatar", "access_token", "refresh_token", "expires_in", "expires_at"]);

  useEffect(() => {
    if (!cookie.id) {
      router.push('/')
    }
  })

  function getMyBusinesses() {
    axios.post(url + 'myBusinesses', {
      ownerid: cookie.id
    })
    .then(res => {
        console.log(res);
        setBusinessList(res.data);
    })
    .catch(err => console.log(err));
  }

 


  useEffect(() => {
    getMyBusinesses();
  }, [])
  
  useEffect(()=>console.log(businessList))

  return (
    <>
      <Head>
        <title>My Businesses - EarthCraft</title>
        <meta name="description" content="Earthcraft" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-[#292929]'>
    <Navbar />
    <p className='mt-[5vh] bg-mcbg1 bg-fixed bg-no-repeat bg-cover py-1 text-center text-white text-4xl sm:text-7xl tracking-widest' style={{fontFamily:"'Minecraftia', sans-serif"}}>MY BUSINESSES</p>
    {businessList && businessList.length > 0 ? 
      businessList.map((business, index) => {
        return (
            <div className='mb-[5vh] p-5' key={index}>
            
                  <div className='sm:flex items-center' key={index}>
                    <div>
                <p className='text-white text-center mx-auto text-2xl mb-2' style={{fontFamily:"'Minecraftia', sans-serif"}}>{business.BUSINESS_NAME}</p>
            <Image className='mx-auto w-[20vw] sm:w-full' src={business.LOGO_URL} width={300} height={200} alt=''></Image>
                </div>
                <div >
                <p className='text-white w-[60vw] text-center mx-auto text-2xl mb-2' style={{fontFamily:"'Minecraftia', sans-serif"}}>
                <span>
                      Owner: {cookie.username}<br/>
                      Headquarters: {business.HEADQUARTERS ? `${business.HEADQUARTERS}` : 'N/A'}<br/> 
                      Parent Company: {business.PARENT_COMPANY ? `${business.PARENT_COMPANY}` : 'N/A'}
                      <br/>
                      Type: {business.TYPE}
                    </span>
                </p>
                <div className='flex'>
                <button className='mx-auto bg-white p-5 rounded'>View Business</button>
                </div>
                </div>
                    
                    </div>
                    
          
            </div>
        )
      })
      : <div><p className='text-center text-2xl mt-[10vh] text-white'>You have no businesses.</p></div>}
          <div className='pb-[500px]'></div>

    </div>
    </>
  )
}
