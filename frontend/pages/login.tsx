import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'


export default function myEarthcraft() {
  return (
    <>
      <Head>
        <title>Login - EarthCraft</title>
        <meta name="description" content="Earthcraft" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-[#292929] h-screen'>
    <Navbar />
    <p className='mt-[5vh] text-center text-white text-7xl tracking-widest'>LOGIN WITH DISCORD</p>
    </div>
    </>
  )
}
