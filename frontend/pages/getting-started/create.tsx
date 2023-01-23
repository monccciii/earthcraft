import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../../components/navbar'


export default function createANation() {
  return (
    <>
      <Head>
        <title>Create A Nation - EarthCraft</title>
        <meta name="description" content="Earthcraft" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-[#292929]'>
    <Navbar />
    <div className='text-center text-white'>
      <div className='sm:flex mt-[5vh]'>
        <div className='mx-auto'>
        <p className='text-4xl tracking-widest' style={{fontFamily:"'Minecraftia', sans-serif"}}>NEW NATIONS GET:</p>
        <p className='mt-[5vh] text-5xl sm:text-8xl lg:text-[10rem]' style={{fontFamily:"'Minecraftia', sans-serif"}}>1-3</p>
        <p className='text-2xl mt-[2vh]'>countries</p>
        </div>
        <div className='mx-auto'>
        <p className='text-4xl mt-[10vh] sm:mt-[0vh] tracking-widest' style={{fontFamily:"'Minecraftia', sans-serif"}}>NATIONS CAN OWN A MAXIMUM OF:</p>
        <div className='grid grid-cols-1 sm:grid-cols-2'>
          <div>
            <p className='mt-[5vh] text-5xl sm:text-9xl lg:text-[10rem]' style={{fontFamily:"'Minecraftia', sans-serif"}}>3</p>
            <p className='mt-[2vh] text-2xl'>countries (with one citizen)</p>
          </div>
          <div>
            <p className='mt-[5vh] text-5xl sm:text-9xl lg:text-[10rem]' style={{fontFamily:"'Minecraftia', sans-serif"}}>7</p>
            <p className='mt-[2vh] text-2xl'>countries (with three citizens)</p>
          </div>
        </div>
        </div>
      </div>
    </div>
    <p className='mt-[20vh] text-center text-white tracking-widest text-5xl sm:text-7xl' style={{fontFamily:"'Minecraftia', sans-serif"}}>STARTING A NATION</p>
    <div className='flex'>
    <p className='mx-auto text-center font-extralight text-white sm:w-[60vw] mt-[5vh] text-3xl'>
    On the Earthcraft server, nations are groups of players who come together for various purposes such as mutual protection, resource sharing, and goal achievement. Nations can be created by any group of players who wish to establish their own nation, or individual players can choose to join an existing nation.



Nations start out with 1-3 countries, which are designated areas on the server map that resemble real-life countries such as Canada or Sweden. As the nation grows and becomes more powerful, it can expand its territory by claiming additional countries, up to a maximum of 7 countries. Each Nation much select one country to be their Capital Country. This country will serve as the base of operations for the nation.
    </p>
      
      </div>
      <p className='mt-[20vh] text-center text-white tracking-widest text-5xl sm:text-7xl' style={{fontFamily:"'Minecraftia', sans-serif"}}>HOW TO START YOUR OWN NATION</p>
      <p className='mx-auto text-center font-extralight text-white sm:w-[60vw] mt-[5vh] text-3xl'>
      1.Decide on a name for your nation. (eg: People&apos;s Republic of China)<br/>

      <br/>
2.Decide on a short name for your nation. (eg: China)<br/><br/>



3. Decide on a 4 letter abbreviation for your nation.<br/><br/>



4. Find/Create a flag for your nation.<br/><br/>



5. Find/Create a youtube video for your nation&apos;s anthem.<br/><br/>



6. Decide on your nation&apos;s state religion. (None and Freedom of Religion are options)<br/><br/>



7. Decide what type of economy your nation will have. (Capitalism, Communism, etc)<br/><br/>



8. Decide what type of government your nation will have. (Democracy, Monarchy, etc)<br/><br/>



9. Decide if your nation will join the United Nations.<br/><br/>



10. Decide what your role will be within the nation. (President, Prime Minister, King, etc)<br/><br/>



11. Create a discord server for your nation.<br/><br/>



12. Go to the EarthCraft discord server and go to the #bots-spam channel.<br/><br/>


13. Run the /nations create command.<br/><br/>



14. <span className='text-green-500'>Congrats, you have just created a nation!</span>
      </p>
    <div className='pb-[150px]'></div>
    </div>
    </>
  )
}
