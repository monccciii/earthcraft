//@ts-nocheck
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import Navbar from '../components/navbar'
import { useEffect, useState} from 'react'
import { useCookies } from 'react-cookie';
import Link from 'next/link';
import axios from 'axios';

export default function MyNations() {
  const [cookie, setCookie, removeCookie] = useCookies(["id", "username", "discriminator", "avatar", "access_token", "refresh_token", "expires_in", "expires_at"]);
  const router = useRouter();
  const [myNationInfo, setMyNationInfo] = useState()
  const [isReady,setIsReady] = useState(false);
  const url = process.env.API_URL

  useEffect(() => { 
    if (!cookie.id) {
      router.push('/')
    }
  })
  
  function getAllNationInfo(uid) {
    axios
    .post(url + 'myNations', {
      userid: uid
    })
    .then(res => {
        console.log(res);
        setMyNationInfo(res.data);
    })
    .catch(err => console.log(err));
  }
  
  

  //function getAllNationInfo2(nid) {
   // axios.post(url + 'getAllNationInfo', {
     // nationid: nid
    //})
    //.then(res => {
        //console.log(res);
      //  setNationInfo(res.data);
    //})
  //  .catch(err => console.log(err));
  //}

  useEffect(()=> {
    getAllNationInfo(cookie.id)
  }, []);

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
    <p className='text-white text-center text-3xl font-extralight tracking-widest'>Nation 1</p>
   
    {myNationInfo?.[0] ? 
    <div className='sm:flex items-center'>
          
    <div>
    <p className='text-white text-center mx-auto text-2xl mb-2' style={{fontFamily:"'Minecraftia', sans-serif"}}>{myNationInfo?.[0].FULL_NAME}</p>
<Image src={myNationInfo?.[0].FLAG_URL} width={500} height={200} alt=''></Image>
    </div>
    <div >
    <p className='text-white w-[60vw] text-center mx-auto text-2xl mb-2' style={{fontFamily:"'Minecraftia', sans-serif"}}>
      {myNationInfo?.[0].ABBREVIATION}<br/><br/>
      Role: {myNationInfo?.[0].ROLE_VAR}<br/>
      Citizens: {myNationInfo?.[0].TOTAL_CITIZENS}
      </p>
    <div className='flex'>
   
    </div>
    </div>
    </div>
    : <div className='sm:flex items-center'>
    <div>
    <p className='text-white text-center mx-auto text-2xl mb-2' style={{fontFamily:"'Minecraftia', sans-serif"}}>Empty</p>
<Image src='/BlankFlag.jpg' width={500} height={200} alt=''></Image>
    </div>
    <div >
    <p className='text-white w-[60vw] text-center mx-auto text-2xl mb-2' style={{fontFamily:"'Minecraftia', sans-serif"}}>This slot is empty. To join a nation, go to the <Link href='/nations' className='underline'>Nations</Link> page</p>
    <div className='flex'>
   
    </div>
    </div>
    </div>}

    <p className='text-white text-center text-3xl font-extralight tracking-widest'>Nation 2</p>
   
    {myNationInfo?.[1] ? 
    <div className='sm:flex items-center'>
          
    <div>
    <p className='text-white text-center mx-auto text-2xl mb-2' style={{fontFamily:"'Minecraftia', sans-serif"}}>{myNationInfo?.[1].FULL_NAME}</p>
<Image src={myNationInfo?.[1].FLAG_URL} width={500} height={200} alt=''></Image>
    </div>
    <div >
    <p className='text-white w-[60vw] text-center mx-auto text-2xl mb-2' style={{fontFamily:"'Minecraftia', sans-serif"}}>
      {myNationInfo?.[1].ABBREVIATION}<br/><br/>
      Role: {myNationInfo?.[1].ROLE_VAR}<br/>
      Citizens: {myNationInfo?.[1].TOTAL_CITIZENS}
      </p>
    <div className='flex'>
   
    </div>
    </div>
    </div>
    : <div className='sm:flex items-center'>
    <div>
    <p className='text-white text-center mx-auto text-2xl mb-2' style={{fontFamily:"'Minecraftia', sans-serif"}}>Empty</p>
<Image src='/BlankFlag.jpg' width={500} height={200} alt=''></Image>
    </div>
    <div >
    <p className='text-white w-[60vw] text-center mx-auto text-2xl mb-2' style={{fontFamily:"'Minecraftia', sans-serif"}}>This slot is empty. To join a nation, go to the <Link href='/nations' className='underline'>Nations</Link> page</p>
    <div className='flex'>
   
    </div>
    </div>
    </div>}

    <p className='text-white text-center text-3xl font-extralight tracking-widest'>Nation 3</p>
    {myNationInfo?.[2] ? 
    <div className='sm:flex items-center'>
          
    <div>
    <p className='text-white text-center mx-auto text-2xl mb-2' style={{fontFamily:"'Minecraftia', sans-serif"}}>{myNationInfo?.[2].FULL_NAME}</p>
<Image src={myNationInfo?.[2].FLAG_URL} width={500} height={200} alt=''></Image>
    </div>
    <div >
    <p className='text-white w-[60vw] text-center mx-auto text-2xl mb-2' style={{fontFamily:"'Minecraftia', sans-serif"}}>
      {myNationInfo?.[2].ABBREVIATION}<br/><br/>
      Role: {myNationInfo?.[2].ROLE_VAR}<br/>
      Citizens: {myNationInfo?.[2].TOTAL_CITIZENS}
      </p>
    <div className='flex'>
   
    </div>
    </div>
    </div>
    : <div className='sm:flex items-center'>
    <div>
    <p className='text-white text-center mx-auto text-2xl mb-2' style={{fontFamily:"'Minecraftia', sans-serif"}}>Empty</p>
<Image src='/BlankFlag.jpg' width={500} height={200} alt=''></Image>
    </div>
    <div >
    <p className='text-white w-[60vw] text-center mx-auto text-2xl mb-2' style={{fontFamily:"'Minecraftia', sans-serif"}}>This slot is empty. To join a nation, go to the <Link href='/nations' className='underline'>Nations</Link> page</p>
    <div className='flex'>
   
    </div>
    </div>
    </div>}

    <div className='pb-[200px]'></div>
    </div>
    </>
  )
}
