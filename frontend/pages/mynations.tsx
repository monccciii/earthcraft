//@ts-nocheck
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import Navbar from '../components/navbar'
import { useEffect} from 'react'
import { useCookies } from 'react-cookie';

export default function MyNations() {
  const [cookie, setCookie, removeCookie] = useCookies(["id", "username", "discriminator", "avatar", "access_token", "refresh_token", "expires_in", "expires_at"]);
  const router = useRouter();
  
  const url = 'http://localhost:3002/'

  useEffect(() => { 
    if (!cookie.id) {
      router.push('/')
    }
  })
  
  function getAllNationInfo(nid) {
    axios.post(url + 'myNations', {
      userid: cookie.id
    })
    .then(res => {
        console.log(res);
        setNationInfo(res.data);
    })
    .catch(err => console.log(err));
  }

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
    <p className='mt-[5vh] bg-mcbg1 bg-fixed bg-no-repeat bg-cover py-1 text-center text-white text-7xl tracking-widest' style={{fontFamily:"'Minecraftia', sans-serif"}}>MY NATIONS</p>


    <div className='pb-[100px]'></div>
    </div>
    </>
  )
}
