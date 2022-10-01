import React from 'react'
import Nft from './Nft';

export default function GridBanner() {
  return (
    <div className="w-full h-fit py-12 md:py-24">
        <div className="mxw-sm grid gap-4 md:gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-2">
                <Nft />
              </div>
              <div className="col-span-2">
                <Nft />
              </div>
              <div className="col-span-2">
                <Nft />
              </div>
              <div className="col-span-2">
                <Nft />
              </div>
            </div>
            <Nft />
            <Nft />
            <Nft />
        </div>
    </div>
  )
}
