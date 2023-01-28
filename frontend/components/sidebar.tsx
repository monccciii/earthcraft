//@ts-nocheck
import { motion } from 'framer-motion';
import {BsChatDotsFill, BsFillMapFill, BsMapFill} from 'react-icons/bs'
import {RiLogoutBoxFill} from 'react-icons/ri'
import { FaHome, FaShoppingBag, FaBars, FaUserAlt, FaUserCheck, FaUserPlus} from 'react-icons/fa'
import Link from 'next/link';
import { useRouter } from 'next/router';
import {useState, useEffect} from 'react'
import { useCookies } from 'react-cookie';


function Sidebar () {
    const router= useRouter()
    const [isOpen, setIsOpen] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState();
  const [cookie, setCookie, removeCookie] = useCookies(["id", "username", "discriminator", "avatar", "access_token", "refresh_token", "expires_in", "expires_at"]);

    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        if (cookie.id) {
          setIsLoggedIn(true);
        }
      }, [cookie.id]);

    return (
        <div className=' lg:hidden m-0 p-0 box-border fixed left-0 top-0'>
        <motion.div animate={{width: isOpen ? "200px" : "45px", backgroundColor: isOpen ? "rgb(0, 0, 0)" : "transparent" }} className='text-white h-[100vh] no-underline rounded-r-md '>

        <div className='flex items-center justify-between p-[15px]'>
            {isOpen && <h1 className='text-[18px] pr-[15px] leading-none'>
                <Link href="/">EarthCraft</Link>
                </h1>}
                <div className='mt-[2vh]'>
                    <FaBars onClick={toggle} />
                </div>
        </div>

            { isOpen && <section className="routes text-[15px] text-white space-y-8 mt-[5vh]">
                <Link href='/' key={'home'} className='flex gap-5 pl-[10px] items-center hover:border-r-4'>
                <div></div>
                    <div>Home</div>
                </Link>
                <Link href='/rules' key={'rules'} className='flex pl-[10px] gap-5 items-center hover:border-r-4'>
                    <div></div>
                    <div>Rules</div> 
                </Link>
                <Link href='/map' key={'map'} className='flex pl-[10px] gap-5 items-center hover:border-r-4'>
                    <div></div>
                    <div>FAQ</div> 
                </Link>
                <Link href='/getting-started' key={'gettingstartedcreate'} className='flex pl-[10px] gap-5 items-center hover:border-r-4'>
                    <div></div>
                    <div>Getting Started</div> 
                </Link>
                <Link href='/nations' key={'nations'} className='flex pl-[10px] gap-5 items-center hover:border-r-4'>
                    <div></div>
                    <div>Nations</div> 
                </Link>
                <Link href='/businesses' key={'businesses'} className='flex pl-[10px] gap-5 items-center hover:border-r-4'>
                    <div></div>
                    <div>Businesses</div> 
                </Link>
                <Link href='/discord' key={'linktodiscord'} className='flex pl-[10px] gap-5 items-center hover:border-r-4'>
                    <div></div>
                    <div>Link to Discord</div> 
                </Link>
                <Link href='/about' key={'about'} className='flex pl-[10px] gap-5 items-center hover:border-r-4'>
                    <div></div>
                    <div>About</div> 
                </Link>
                {isLoggedIn ?  <div className='space-y-8'>
                <Link href='/myearthcraft' key={'myearthcraft'} className='flex pl-[10px] gap-5 items-center hover:border-r-4'>
                    <div></div>
                    <div>My Earthcraft</div> 
                </Link>
                <Link href='/mybusinesses' key={'mybusinesses'} className='flex pl-[10px] gap-5 items-center hover:border-r-4'>
                    <div></div>
                    <div>My Businesses</div> 
                </Link>
                <Link href='/mynations' key={'mynations'} className='flex pl-[10px] gap-5 items-center hover:border-r-4'>
                    <div></div>
                    <div>My Nations</div> 
                </Link>
                 <Link href='/' key={'logout'}  onClick={()=>{
                    (document.cookie as any) = null;
                    console.log('removed')
                    if (cookie) for (const key of Object.keys(cookie)) removeCookie((key as any), { path: "/" })
                   }} className='flex pl-[10px] gap-5 items-center hover:border-r-4'>
                 <div></div>
                 <div>Logout</div> 
             </Link></div> 
                : 
                <Link href='/auth/login' key={'login'} className='flex pl-[10px] gap-5 items-center hover:border-r-4'>
                    <div></div>
                    <div>Login</div> 
                </Link>
                }
                
                
               
            </section> }
        </motion.div>
        </div>

    );
}

export default Sidebar;