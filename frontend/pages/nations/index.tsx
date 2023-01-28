//@ts-nocheck
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../../components/navbar'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';


export default function Nations() {
  const [nationList, setNationList] = useState();
  const [modalOpen, setmodalOpen] = useState();
  const router = useRouter();
  const url = process.env.NEXT_PUBLIC_APIURL
  const [cookie, setCookie, removeCookie] = useCookies(["id", "username", "discriminator", "avatar", "access_token", "refresh_token", "expires_in", "expires_at"]);
  const [servRes, setServRes] = useState();
  const [isOver13, setIsOver13] = useState(false);
  const [nationInfo, setNationInfo] = useState();
  function getNations() {
    axios.get(url + 'getNations')
    .then(res => {
        console.log(res);
        setNationList(res.data);
    })
    .catch(err => console.log(err));
  }

  function getAllNationInfo(nid) {
    axios.post(url + 'getAllNationInfo', {
      nationid: nid
    })
    .then(res => {
        console.log(res);
        setNationInfo(res.data);
    })
    .catch(err => console.log(err));
  }


  useEffect(() => {
    getNations();
    
  }, [])

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
         
              <div className='sm:flex items-center'>
                <div>
                <p className='text-white text-center mx-auto text-2xl mb-2' style={{fontFamily:"'Minecraftia', sans-serif"}}>{nation.FULL_NAME}</p>
            <Image src={nation.FLAG_URL} width={500} height={200} alt=''></Image>
                </div>
                <div >
                <p className='text-white w-[60vw] text-center mx-auto text-2xl mb-2' style={{fontFamily:"'Minecraftia', sans-serif"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
                <div className='flex'>
                  {cookie.id ?                 <button className='mx-auto border-white border-2 text-white p-5 rounded' onClick={() => setmodalOpen(index)}>Apply</button>
: ''}
                <button className='mx-auto bg-white p-5 rounded'  onClick={() => {
                  router.push(`/nations/${nation.id}`)
                }}>View Nation</button>
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
