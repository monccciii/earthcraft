//@ts-nocheck
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../../components/navbar' 
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AllBusinesses() {
  const [businessList, setBusinessList] = useState();
  var getcompanyforarray = []
  function getBusinesses() {
    const url = `http://localhost:3002/getbusinesses`
    axios.get(url)
    .then(res => {
        console.log(res);
        setBusinessList(res.data);
    })
    .catch(err => console.log(err));
  }

  function ifIsloggedin() {

  }
  function getParentCompanyName(idx) {

  }


  useEffect(() => {
    getBusinesses();
  }, [])
  useEffect(() => {
    if (businessList) {
      setTimeout(() => {
        for (let i = 0; i < businessList[1].length; i++) {
          if (businessList[1][i].PARENT_COMPANY) {
            getcompanyforarray.push(i)
          }
        }
      }, 1000)
    }
  }, [businessList])

  useEffect(()=>console.log(getcompanyforarray))

  return (
    <>
      <Head>
        <title>Join an existing nation - EarthCraft</title>
        <meta name="description" content="Earthcraft" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-[#292929]'>
    <Navbar />
    <p className='mt-[5vh] bg-mcbg1 bg-fixed bg-no-repeat bg-cover py-1 text-center text-white text-7xl tracking-widest' style={{fontFamily:"'Minecraftia', sans-serif"}}>BUSINESSES</p>
    {businessList ? 
      businessList[0].map((business, index) => {
        return (
            <div className='mb-[5vh] p-5' key={index}>
            
                  <div className='sm:flex items-center' key={index}>
                    <div>
                <p className='text-white text-center mx-auto text-2xl mb-2' style={{fontFamily:"'Minecraftia', sans-serif"}}>{business.BUSINESS_NAME}</p>
            <Image src={business.LOGO_URL} width={500} height={200} alt=''></Image>
                </div>
                <div >
                <p className='text-white w-[60vw] text-center mx-auto text-2xl mb-2' style={{fontFamily:"'Minecraftia', sans-serif"}}>
                <span>
                      Owner:<br/>
                      Headquarters:<br/>
                      Parent Company: {getcompanyforarray.includes(index) ? '' : 'N/A'}
                      <br/>
                      Type: {businessList[1][index].TYPE}
                    </span>
                </p>
                <div className='flex'>
                <button className='mx-auto bg-white p-5 rounded'>View Page</button>
                </div>
                </div>
                    
                    </div>
                    
          
            </div>
        )
      })
      : ''}
    </div>
    </>
  )
}
