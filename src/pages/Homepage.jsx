import React from 'react'
import Attention from '../components/Attention'
import Banner from '../components/Banner'
import FAQ from '../components/FAQ'
import Features from '../components/Features'
import GridBanner from '../components/GridBanner'
import NFTS from '../components/NFTS'
import TrendingCollectors from '../components/TrendingCollectors'

export default function Homepage() {
  return (
    <div className="min-h-screen w-full">
        <Banner />
        <Attention />
        <GridBanner />
        <TrendingCollectors />
        <FAQ/>
        <NFTS />
        <FAQ/>
        <Features />
    </div>
  )
}
