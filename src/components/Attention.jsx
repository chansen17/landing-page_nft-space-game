import React from 'react'
import Marquee from "react-fast-marquee";

let companies = [
  {
    name: 'Coinbase'
  },
  {
    name: 'Pancake Swap'
  },
  {
    name: 'Crypto.com'
  },
  {
    name: 'FTX'
  },
  {
    name: 'Kraken'
  },
]

export default function Attention() {
  return (
    <div data-aos="fade-in" data-aos-duration="500" data-aos-once="true" className="flex items-center">
        <Marquee loop={0} pauseOnHover={false} speed={150} gradient={false} className="mt-24">
            <p className="font-['Monoton'] text-6xl sm:text-7xl md:text-[10vw] bg-gradient-to-r from-orange-500 to-cyan-500 bg-clip-text text-transparent space-x-8 px-10 py-16">
                {companies?.map((word,i) => (
                    <span key={i}>{word.name}</span>
                ))}
            </p>
        </Marquee>
    </div>
  )
}
