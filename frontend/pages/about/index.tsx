import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Navbar from '../../components/navbar'


export default function Staff() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Staff - EarthCraft</title>
        <meta name="description" content="Earthcraft" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-[#292929] h-screen'>
    <Navbar />
    <p className='text-7xl bg-mcbg1 bg-fixed bg-no-repeat bg-cover py-1 text-center mt-[5vh] text-white tracking-widest' style={{fontFamily:"'Minecraftia', sans-serif"}}>ABOUT</p>
    <div className='flex'>
          <p className='text-center mx-auto text-white text-4xl mt-[10vh] w-full sm:w-[70vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div className='flex'>
    <button onClick={() => router.push('/about/staff')} className='mt-[10vh] bg-white rounded mx-auto p-2 mb-5 sm:p-3 tracking-widest text-1xl sm:text-5xl font-light'>VIEW STAFF</button>

    </div>



    </div>
    </>
  )
}
