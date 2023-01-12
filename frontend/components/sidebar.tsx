import { motion } from 'framer-motion';
import {BsChatDotsFill, BsFillMapFill, BsMapFill} from 'react-icons/bs'
import {RiLogoutBoxFill} from 'react-icons/ri'
import { FaHome, FaShoppingBag, FaBars, FaUserAlt, FaUserCheck, FaUserPlus} from 'react-icons/fa'
import Link from 'next/link';
import { useRouter } from 'next/router';
import {useState } from 'react'

{/*https://www.youtube.com/watch?v=eujA1RS9fDI*/}

function Sidebar () {
    const router= useRouter()
    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className=' lg:hidden m-0 p-0 box-border fixed left-0 top-0'>
        <motion.div animate={{width: isOpen ? "200px" : "45px", backgroundColor: isOpen ? "rgb(0, 0, 0)" : "transparent" }} className='text-slate-300 h-[100vh] no-underline rounded-r-md '>

        <div className='flex items-center justify-between p-[15px]'>
            {isOpen && <h1 className='text-[18px] pr-[15px] leading-none'>
                <Link href="/">EarthCraft</Link>
                </h1>}
                <div className='mt-[2vh]'>
                    <FaBars onClick={toggle} />
                </div>
        </div>

            { isOpen && <section className="routes text-[15px] text-slate-300 space-y-10 mt-[5vh]">
                <Link href='/' key={'home'} className='flex gap-5 pl-[10px] items-center hover:border-r-4'>
                <div><FaHome /></div>
                    <div>Home</div>
                </Link>
                <Link href='/rules' key={'rules'} className='flex pl-[10px] gap-5 items-center hover:border-r-4'>
                    <div><FaUserPlus /></div>
                    <div>Rules</div> 
                </Link>
                <Link href='/map' key={'map'} className='flex pl-[10px] gap-5 items-center hover:border-r-4'>
                    <div><BsChatDotsFill /></div>
                    <div>FAQ</div> 
                </Link>
                <Link href='/getting-started' key={'gettingstartedcreate'} className='flex pl-[10px] gap-5 items-center hover:border-r-4'>
                    <div><BsChatDotsFill /></div>
                    <div>Getting Started</div> 
                </Link>
                <Link href='/nations' key={'nations'} className='flex pl-[10px] gap-5 items-center hover:border-r-4'>
                    <div><BsChatDotsFill /></div>
                    <div>Nations</div> 
                </Link>
                <Link href='/discord' key={'linktodiscord'} className='flex pl-[10px] gap-5 items-center hover:border-r-4'>
                    <div><BsChatDotsFill /></div>
                    <div>Link to Discord</div> 
                </Link>
                <Link href='/about' key={'about'} className='flex pl-[10px] gap-5 items-center hover:border-r-4'>
                    <div><BsChatDotsFill /></div>
                    <div>About</div> 
                </Link>
                <Link href='/myearthcraft' key={'myearthcraft'} className='flex pl-[10px] gap-5 items-center hover:border-r-4'>
                    <div><BsChatDotsFill /></div>
                    <div>My Earthcraft</div> 
                </Link>
                
               
            </section> }
        </motion.div>
        </div>

    );
}

export default Sidebar;