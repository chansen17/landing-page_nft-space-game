import React from 'react'
import Marquee from "react-fast-marquee";

let companies = ['Coinbase', 'Crypto.com', 'FTX', 'Kraken']

export default function Attention() {
  return (
    <div data-aos="fade-in" data-aos-duration="500" data-aos-once="true" className="pb-12 pt-24 flex items-center">
        <Marquee loop={0} pauseOnHover={true} speed={100} gradient={false} className="py-4">
            <p className="text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r from-orange-500 to-cyan-500 bg-clip-text text-transparent space-x-10">
                {companies?.map(word => (
                    <span>{word}</span>
                ))}
            </p>
        </Marquee>
    </div>
  )
}
