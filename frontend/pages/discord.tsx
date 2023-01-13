import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'


export default function Discord() {
  return (
    <>
      <Head>
        <title>Link to Discord - EarthCraft</title>
        <meta name="description" content="Earthcraft" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-mcbg2 bg-fixed bg-no-repeat bg-cover py-1 h-screen'>
    <Navbar />
    <p className='mt-[5vh] text-center text-white text-4xl sm:text-7xl tracking-widest' style={{fontFamily:"'Minecraftia', sans-serif"}}>JOIN EARTHCRAFT&apos;S DISCORD</p>
    <div className='flex'>
    <button className='bg-indigo-500 mt-[20vh] text-white font-extralight text-2xl sm:text-5xl mx-auto p-3 px-7 w-full sm:w-[25vw] rounded-2xl' style={{fontFamily:"'Minecraftia', sans-serif"}}>JOIN</button>
    </div>
    <p className='text-center text-white mt-[15vh] font-extralight text-4xl' style={{fontFamily:"'Minecraftia', sans-serif"}}>Gain access to info about Earthcraft and much more!</p>
    </div>
    </>
  )
}
