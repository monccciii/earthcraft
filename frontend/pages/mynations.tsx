import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'


export default function Nations() {
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

    </div>
    </>
  )
}
