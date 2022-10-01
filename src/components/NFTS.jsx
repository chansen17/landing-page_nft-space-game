import React from 'react'
import Nft from './Nft'

export default function NFTS() {
  return (
    <div className="h-fit w-full py:12 md:py-24 relative">
        <div className="absolute top-32 right-16 bg-gradient-to-br from-orange-500/70 to-cyan-500/70 blur-3xl via-slate-900 rounded-tl-full rotate-45 h-44 w-96 -z-10" />
      <div className="mxw-sm pt-6 grid gap-4 md:gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        <div className="flex items-center justify-center">
          <h2 className="font-['Monoton'] flex justify-center text-3xl md:text-5xl lg:text-6xl xl:text-8xl -rotate-90 text-cyan-500">Our NFTs</h2>
        </div>
        <Nft />
        <Nft />
        <Nft />
        <Nft />
        <Nft />
        <Nft />
        <div className="flex items-center justify-center">
          <h2 className="font-['Monoton'] flex justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl rotate-90 text-orange-400">Collect<br/> em all</h2>
        </div>
      </div>
    </div>
  )
}
