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
    <p className='mt-[5vh] bg-mcbg2 bg-fixed bg-no-repeat bg-cover py-1 text-center text-white text-7xl tracking-widest'>JOIN A NATION</p>
    <div className='flex'>
    <p className='mt-[20vh] mx-auto text-center w-full sm:w-[70vw] text-white text-3xl'>Joining an existing nation on the EarthCraft server can be a great way to connect with other players and work towards shared goals. When joining a nation, you become part of a community of players who share a common purpose and can support each other in achieving their goals. Whether you are looking for mutual protection, access to resources, or the opportunity to work towards a shared goal, joining a nation can provide many benefits.<br/><br/>



One of the key advantages of joining an existing nation is that you can tap into the knowledge and experience of other players who have already established themselves on the server. This can be especially useful for newer players who may not yet be familiar with all the features and mechanics of the game. By joining a nation, you can learn from more experienced players and gain valuable insights into how to succeed on the server. Additionally, being part of a nation can provide a sense of belonging and community that can make the game more enjoyable and rewarding.<br/><br/>



To join an existing nation, go to the Nations page</p>
</div>
    </div>
    </>
  )
}
