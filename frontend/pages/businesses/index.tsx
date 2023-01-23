//@ts-nocheck

import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../../components/navbar' 
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';


export default function AllBusinesses() {
  const [businessList, setBusinessList] = useState();
  const [cookie, setCookie, removeCookie] = useCookies(["id", "username", "discriminator", "avatar", "access_token", "refresh_token", "expires_in", "expires_at"]);
  const [modalOpen, setmodalOpen] = useState();

  

  const url = 'http://localhost:3002/'
  function getBusinesses() {
    axios.get(url + 'getBusinesses')
    .then(res => {
        console.log(res);
        setBusinessList(res.data);
    })
    .catch(err => console.log(err));
  }

  


  useEffect(() => {
    getBusinesses();
  }, [])
  
  useEffect(()=>console.log(businessList))

  return (
    <>
      <Head>
        <title>Businesses - EarthCraft</title>
        <meta name="description" content="Earthcraft" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-[#292929]'>
    <Navbar />
    <p className='mt-[5vh] bg-mcbg1 bg-fixed bg-no-repeat bg-cover py-1 text-center text-white text-4xl sm:text-7xl tracking-widest' style={{fontFamily:"'Minecraftia', sans-serif"}}>BUSINESSES</p>
    {businessList ? 
      businessList.map((business, index) => {
        return (
            <div className='mb-[5vh] p-5' key={index}>
               {modalOpen === index ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#292929] outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  
                  <h3 className="text-3xl text-white font-light">
                    {business.BUSINESS_NAME}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setmodalOpen()}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className='text-white text-center'>
                    Owner: {business.OWNER_ID}
                    <br/>
                    Headquarters: {business.HEADQUARTERS}
                    <br/>
                    Parent Company: {business.PARENT_COMOANY}
                    <br/>
                    Type: {business.TYPE}
                  </p>
                  
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setmodalOpen()}
                  >
                    Close
                  </button>
                
                </div>

              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
                  <div className='sm:flex items-center' key={index}>
                    <div>
                <p className='text-white text-center mx-auto text-2xl mb-2' style={{fontFamily:"'Minecraftia', sans-serif"}}>{business.BUSINESS_NAME}</p>
            <Image className='mx-auto w-[20vw] sm:w-full' src={business.LOGO_URL} width={300} height={200} alt=''></Image>
                </div>
                <div >
                <p className='text-white w-[60vw] text-center mx-auto text-2xl mb-2' style={{fontFamily:"'Minecraftia', sans-serif"}}>
                <span>
                      Owner: {business.OWNER_ID}<br/>
                      Headquarters: {business.HEADQUARTERS ? `${business.HEADQUARTERS}` : 'N/A'}<br/> 
                      Parent Company: {business.PARENT_COMPANY ? `${business.PARENT_COMPANY}` : 'N/A'}
                      <br/>
                      Type: {business.TYPE}
                    </span>
                </p>
                <div className='flex'>
                <button className='mx-auto bg-white p-5 rounded'  onClick={() => {
                  setmodalOpen(index)
                }}>View Nation</button>                </div>
                </div>
                    
                    </div>
                    
          
            </div>
        )
      })
      : ''}
          <div className='pb-[200px]'></div>

    </div>
    </>
  )
}
