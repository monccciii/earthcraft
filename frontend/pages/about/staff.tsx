import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import Navbar from '../../components/navbar'


export default function Staff() {
  const staffMembers = [
    {
      name:'FrenchFries#8854 / FrenchFries8854',
      role:'Founder and CEO',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      profilepic:'/Steve.png'
    },
    {
      name:'SlithPot#5686 / SlithPot',
      role:'Chairman',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      profilepic:'/Steve.png'
    },
    {
      name:'Camron#6266 / Camron',
      role:'Vice Chairman',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      profilepic:'/Steve.png'
    },
    {
      name:'Xtram555mo#6333 / MO555_SA',
      role:'Geographical Advisor',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      profilepic:'/Steve.png'
    }
  ]
    useEffect(() => {
      console.log(staffMembers)
    })
  
  return (
    <>
      <Head>
        <title>Staff - EarthCraft</title>
        <meta name="description" content="Earthcraft" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-[#292929]'>
    <Navbar />
    <p className='text-7xl text-center mt-[5vh] text-white tracking-widest'>ABOUT&nbsp;&nbsp;US</p>
    <div className='mt-[20vh]'>
      {staffMembers.map((member, index) => {
        return (
          <div style={{fontFamily:"'Minecraftia', sans-serif"}} key={index} className='bg-[#292929] mb-[20vh]'>
            <p className='text-center text-white text-4xl mb-[2vh]'>{member.name}</p>
            <p className='text-center text-white text-3xl mb-[4vh]'>{member.role}</p>

            <div className='flex'>
              <div className='mx-auto'>
                <Image src={member.profilepic} alt='' width={250} height={250} />
              </div>
            </div>
            <div className='flex'>
            <p className='mt-[5vh] mx-auto text-center text-white w-full sm:w-[60vw]'>{member.description}</p>

            </div>

            </div>
        )
      })}
    </div>
    <div className='pb-[100px]'></div>

    </div>
    </>
  )
}
