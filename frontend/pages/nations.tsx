//@ts-nocheck
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

export default function Nations() {
  const [nationList, setNationList] = useState();
  const [modalOpen, setmodalOpen] = useState();
  const url = `http://localhost:3002/`
  const [cookie, setCookie, removeCookie] = useCookies(["id", "username", "discriminator", "avatar", "access_token", "refresh_token", "expires_in", "expires_at"]);

 
    if (cookie) {
      const {
        id,
        username,
        discriminator,
        avatar
      } = cookie;
  
    }  

  function getNations() {
    axios.get(url + 'getnations')
    .then(res => {
        console.log(res);
        setNationList(res.data);
    })
    .catch(err => console.log(err));
  }

 
  function ifIsloggedin() {

  }


  useEffect(() => {
    getNations();
  }, [])
  useEffect(() => {
    console.log(nationList)
  }) 
  return (
    <>
      <Head>
        <title>Nations - EarthCraft</title>
        <meta name="description" content="Earthcraft" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-[#292929]'>
    <Navbar />
    <p className='mt-[5vh] mb-[10vh] bg-mcbg1 bg-fixed bg-no-repeat bg-cover py-1 text-center text-white text-7xl tracking-widest' style={{fontFamily:"'Minecraftia', sans-serif"}}>NATIONS</p>
    <div className=''>
      {nationList ? 
      nationList.map((nation, index) => {
        
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
                    Join {nation.FULL_NAME}!
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
                  
                  <input
                          className='ml-[25%] bg-white text-black shadow text-center'
                          /> 
                  
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
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={()=>{
                      const data = new FormData();
                      data.append('userid', cookie.id);
                      data.append('nationid', nation.id);
                      axios.post(`${url}addMember`, data)          
                    }}
                    
                  >
                    Join Nation
                  </button>
                
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
              <div className='sm:flex items-center'>
                <div>
                <p className='text-white text-center mx-auto text-2xl mb-2' style={{fontFamily:"'Minecraftia', sans-serif"}}>{nation.FULL_NAME}</p>
            <Image src={nation.FLAG_URL} width={500} height={200} alt=''></Image>
                </div>
                <div >
                <p className='text-white w-[60vw] text-center mx-auto text-2xl mb-2' style={{fontFamily:"'Minecraftia', sans-serif"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
                <div className='flex'>
                <button className='mx-auto border-white border-2 text-white p-5 rounded' onClick={() => setmodalOpen(index)}>Apply</button>
                <button className='mx-auto bg-white p-5 rounded'>View Page</button>
                </div>
                </div>
                </div>
            </div>
        )
      })
      : ''}
    </div>
    <div className='p-[5vh]'></div>
    </div>
    </>
  )
}
