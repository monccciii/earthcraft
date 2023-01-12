import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'


export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Earthcraft</title>
        <meta name="description" content="Earthcraft" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className='bg-[#292929]'>
    <Navbar />
    <div style={{ backgroundPositionY: '-200px'}} className='bg-mcbg1 bg-fixed bg-no-repeat bg-cover w-full flex p-20'>
      <div className='mx-auto mt-[25vh]'>
        <Image src='/EarthCraftLogo.png' width={300} height={300} alt=''/>
        </div>
    </div>
    <p className='mt-[5vh] tracking-widest font-bold text-center text-white text-4xl sm:text-7xl' style={{fontFamily:"'Minecraftia', sans-serif"}}>EARTHCRAFT</p>
   
    <div className='flex'>
    <p className='text-white mx-auto mt-[10vh] text-center text-2xl sm:text-5xl sm:w-[70vw] font-extralight'>Welcome to EarthCraft, a 1 to 200 scale Minecraft Earth map server where players can create or join nations. Our server is the perfect place for players who want to explore and create on a realistic, Earth-like map. You&apos;ll have the opportunity to work with other players to build and maintain your own nation, fight in wars and expand your territorial borders.</p>
    </div>
    <p className='text-white mt-[30vh] text-center text-3xl sm:text-5xl font-extralight'>Map Scale</p>
    <p className='text-white mt-[5vh] text-center text-7xl md:text-[10rem] leading-none mb-[5vh]' style={{fontFamily:"'Minecraftia', sans-serif"}}>1:200</p>
    <p className='text-white mb-[20vh] text-center text-2xl sm:text-4xl font-light'>The <span className='font-bold'>largest</span> map size currently in the geopolitical community.</p>

    <div className='flex bg-mcbg1 bg-fixed bg-no-repeat bg-cover h-[40vh]'>
      <div className='mx-auto'>
        <div className='mt-[10vh]  flex gap-5'>
          <button onClick={() => router.push('/getting-started/create')} className='bg-white rounded p-2 sm:p-10 tracking-widest text-2xl sm:text-5xl font-light'>GET STARTED</button>
          <button onClick={() => router.push('/about')}className='bg-white rounded p-2 sm:p-10 tracking-widest text-2xl sm:text-5xl font-light'>ABOUT</button>

        </div>
      </div>
    </div>
    <div className='pb-[100px]'></div>
    </div>
    </>
  )
}
