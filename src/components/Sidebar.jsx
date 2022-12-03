import React,{useState} from 'react';
import { links } from '../Data/links';
import logo from '../assets/Solidify Logo 2.png'

const Sidebar = () => {
    const [activeLink,setActiveLink] = useState("Home");

    return (
        <div className='flex flex-col bg-black h-screen items-start'>
            <div className='w-full flex justify-center h-14 '>
                <img src={logo} className='' />
            </div>
           <div>

            <div className='w-full p-4 flex flex-col gap-6 '>
                {links.map((link, index) => {
                    return (
                        <div key={index} className='flex shrink items-center gap-8 hover:bg-[gray] hover:backdrop-opacity-10 hover:rounded-[4px] hover:cursor-pointer px-4 group py-2' onClick={()=> setActiveLink(link.name)}>
                            <div className='text-white text-bold text-2xl group-hover:fill-white'>{activeLink == link.name?link.activeIcon:link.normalIcon}</div>
                            <div className='text-white font-medium text-xl'>{link.name}</div>
                        </div>
                    )
                })}
            </div>
           </div>
        </div>
    )
}

export default Sidebar