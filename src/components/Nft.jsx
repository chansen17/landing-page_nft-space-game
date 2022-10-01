import React from 'react'
import Card from '../assets/mars-nft.png'


export default function Nft() {
  return (
    <div className="rounded-xl shadow-xl w-full h-fit py">
        <div data-aos="fade-in" data-aos-duration="500">
            <img src={Card} alt="" />
        </div>
    </div>
  )
}
