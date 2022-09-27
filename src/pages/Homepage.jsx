import React from 'react'
import Attention from '../components/Attention'
import Banner from '../components/Banner'
import Features from '../components/Features'

export default function Homepage() {
  return (
    <div className="min-h-screen w-full">
        <Banner />
        <Attention />
        <Features />
    </div>
  )
}
