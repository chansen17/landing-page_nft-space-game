import React from 'react'
import Circle from '../assets/circle-maze.png'
import MarsNFT from '../assets/mars-nft.png';
import SpaceNFT from '../assets/nft-card-3.png';
import SpaceNFT_TWO from '../assets/space-nft-2.png'

export default function Banner() {
  return (
    <div className="min-h-[70vh] relative py-12 md:py-24">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-4 items-center md:gap-16 gap-24 px-5">
            <div className="col-span-2 space-y-4 max-w-3xl mx-auto text-center md:text-left">
                <h1 className="font-black text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-orange-500 to-cyan-500 bg-clip-text text-transparent">Prepare<br/> for your future.</h1>
                <p className="font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-slate-200">Discover the universe of <span className="font-bold underline">NFTs</span>. Find your potential.</p>
                <button className="relative before:w-[101%] before:h-full before:bg-orange-500 before:absolute before:-z-10 body-font text-xl md:text-2xl py-2 px-3 bg-gradient-to-r from-orange-500 to-cyan-500">Find your NFT Now</button>
            </div>
            <div className="col-span-2 relative grid place-items-center group">
                <img className=" -z-10 -translate-y-4 translate-x-10 duration-500 max-w-xs mx-auto" src={MarsNFT} alt="" />    
                <img className="md:group-hover:blur-none blur-sm -translate-x-24 absolute max-w-xs mx-auto duration-500" src={SpaceNFT_TWO} alt="" />    
                <img className="md:group-hover:blur-sm md:group-hover:-skew-x-3 md:group-hover:rotate-3 md:group-hover:translate-x-20 mt-40 scale-125 z-10 duration-500 absolute w-[250px]" src={SpaceNFT} alt="" />    
            </div>
        </div>
    </div>
  )
}
