import React from 'react'
import Image from 'next/image'
import HeaderIcon from './HeaderIcon'
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridicon
} from "@heroicons/react/solid";
import {
    FlagIcon,
    //HomeIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon
} from "@heroicons/react/outline"
function Header() {
  return (
    <div className='flex sticky top-0 z-50 bg-white items-center p-2 lg:px-5 shadow-md'>
        {/* Left */}
        <div className='flex items-center'>
            <Image src = "https://links.papareact.com/5me" width = {40} height = {40} layout = "fixed"></Image>
            <div className='flex ml-2 items-center bg-gray-100 p-2 rounded-full'>
                <SearchIcon className='h-6 text-gray-600'/> 
                <input type="text" placeholder='Search Facebook' className=' hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink'/>
            </div>
        </div>
        {/* center */}
        <div className='flex justify-center flex-grow'>
            <div className='flex space-x-6 md:space-x-2'>
                <HeaderIcon active Icon = {HomeIcon}></HeaderIcon>
                <HeaderIcon Icon = {FlagIcon}></HeaderIcon>
                <HeaderIcon Icon = {PlayIcon}></HeaderIcon>
                <HeaderIcon Icon = {ShoppingCartIcon}></HeaderIcon>
                <HeaderIcon Icon = {UserGroupIcon}></HeaderIcon>
            </div>
        </div>
        {/* Right */}
        <div>
            <p className="whitespace-nowrap font-semibold pr-3">Harrison curnutt</p>
        </div>
    </div>
    
  )
}

export default Header