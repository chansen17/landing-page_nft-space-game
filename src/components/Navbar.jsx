import React from 'react'
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="h-fit w-full bg-[#0e0e0e]/50 backdrop-blur-md py-6">
        <div className="w-full h-full max-w-[1440px] mx-auto flex items-center justify-between px-5">
            <div className="">
                <h2 className="text-xl md:text-2xl font-black text-white">NFT.</h2>
            </div>
            <div className="">
                <ul className="flex items-center space-x-4">
                    <li>
                        <Link to="/">Features</Link>
                    </li>
                    <li>
                        <Link to="/">Blog</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
