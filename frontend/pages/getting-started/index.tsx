import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../../components/navbar'


export default function joinAnexistingnation() {
  return (
    <>
      <Head>
        <title>Join an existing nation - EarthCraft</title>
        <meta name="description" content="Earthcraft" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-[#292929] h-screen'>
    <Navbar />
    <p className='mt-[5vh] bg-mcbg1 bg-fixed bg-no-repeat bg-cover py-1 text-center text-white text-7xl tracking-widest'>GETTING STARTED</p>
    <div className='flex'>
    <p className='mt-[20vh] mx-auto text-center text-white text-3xl w-full sm:w-[60vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    </div>
    </>
  )
}
