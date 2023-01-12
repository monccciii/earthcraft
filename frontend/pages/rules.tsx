import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'


export default function Rules() {
  return (
    <>
      <Head>
        <title>Rules - EarthCraft</title>
        <meta name="description" content="Earthcraft" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-[#292929]'>
    <Navbar />
    <p className='mt-[5vh] text-center text-white text-7xl tracking-widest'>RULES</p>
    <div className='flex'>
    <p className='mt-[10vh] bg-mcbg2 bg-fixed bg-no-repeat bg-cover font-extralight rounded-xl p-10 mx-auto text-center text-white text-3xl w-[60vw]'>
        1. Be kind and civil! It&apos;s okay to have opinions and to express them, but be nice about it.<br/>

<br />2. The following is <span className='text-red-500'>100%</span> prohibited, no exceptions: harassment, abuse, offensive language, any form of discrimination, sexual content, links and/or discussion related to pirating or otherwise illegal content/activities, sharing personal/confidential information about another user, self promotion or advertising via DM/chat.<br/>

<br /> 3. We do not allow any cracked launchers. If you wish to play, do purchase a legitimate launcher on the Minecraft website.<br/>

<br /> 4. No starting pointless wars. Do not start wars with nations under 1 week old. All wars must have a logical reason.<br/>

<br /> 5. Use common sense. This page does not list everything that is not allowed. No rule lawyering.<br/></p>
</div>
<div className='pb-[150px]'></div>
    </div>
    </>
  )
}
