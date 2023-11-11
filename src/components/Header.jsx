import React, { useState } from 'react'
import {AiOutlineMenu ,AiOutlineClose} from "react-icons/ai"

export default function Header() {
    const[toggle ,setToggle ]=useState(false)
    return (
        <div className='bg-slate-800 p-4'>
            <div className=' max- w- [ 1240 px] items-center  flex justify-between  max- auto  '>

                <div className=' text - text-3xl font-bold  text-white'>
                    WB3
                </div>
                {
                    toggle?
                    <AiOutlineMenu  onClick={()=>setToggle(!toggle)}   className='text-white text-2xl md:hidden block'/>
                    :
                <AiOutlineClose onClick={()=>setToggle(!toggle)}   className='text-white text-2xl md:hidden block '/>
                }
                
                <ul className='hidden md:flex text-white gap-10'>
                    <li>
                        Home
                    </li>
                    <li>
                        Contect
                    </li>
                    <li>
                        Company
                    </li>
                    <li>
                        Service
                    </li>
                </ul>
                <ul className={ ` duration-500 md:hidden w-full h-screen text-white fixed bg-black  top-[92px]  
                  ${toggle ? 'left-[0]':' left-[-100%]' }  
                `}>
                    <li className=' p-5'>
                        Home
                    </li>
                    <li className=' p-5'>
                        Home
                    </li>
                    <li className=' p-5'>
                        Home
                    </li>
                    <li className=' p-5'>
                        Home
                    </li>
                </ul>
            </div>

        </div>
    )
}
