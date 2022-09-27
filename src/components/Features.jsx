import React from 'react'
import Card from '../assets/mars-nft.png'
import CardTwo from '../assets/space-nft-2.png'
import CardThree from '../assets/nft-card-3.png'

export default function Features() {
  return (
    <div className="h-full w-full py-12 md:py-24">
        <div className="max-w-[1440px] mx-auto px-5">
        <div className="max-w-3xl py-12 flex items-center space-x-4 md:space-x-8 group">
            <div>
                <img className="max-w-[150px] md:max-w-[200px] lg:max-w-[300px] group-hover:scale-105 md:group-hover:scale-110 group-hover:-translate-y-2 duration-500" src={Card} alt="" />
            </div>
            <div>
                <h2 className="text-xl md:text-3xl lg:text-4xl">Explore humanities future.</h2>
                <p className="text-xs md:text-sm md:text-md lg:text-lg text-cyan-500">Collect them all. Distant worlds where humanitiy may one day, indeed end up.</p>
            </div>
        </div>
        <div className="max-w-3xl mx-auto py-12 flex items-center space-x-4 md:space-x-8 group">
            <div>
                <img className="max-w-[150px] md:max-w-[200px] lg:max-w-[300px] group-hover:scale-105 md:group-hover:scale-110 group-hover:-translate-y-2 duration-500" src={CardTwo} alt="" />
            </div>
            <div>
                <h2 className="text-xl md:text-3xl lg:text-4xl">Passive income</h2>
                <p className="text-xs md:text-sm md:text-md lg:text-lg text-cyan-500">Explore distant planets that generate resources.</p>
            </div>
        </div>
        <div className="max-w-3xl ml-auto py-12 flex items-center space-x-4 md:space-x-8 group">
            <div>
                <img className="max-w-[150px] md:max-w-[200px] lg:max-w-[300px] group-hover:scale-105 md:group-hover:scale-110 group-hover:-translate-y-2 duration-500" src={CardThree} alt="" />
            </div>
            <div>
                <h2 className="text-xl md:text-3xl lg:text-4xl">Earn the status of space merchant</h2>
                <p className="text-xs md:text-sm md:text-md lg:text-lg text-cyan-500">Collect all the colonies, and earn the unique title. Allowing you to <span className="underline">special</span> privalges.</p>
            </div>
        </div>
        </div>
    </div>
  )
}
