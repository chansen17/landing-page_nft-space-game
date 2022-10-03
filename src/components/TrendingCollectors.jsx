import React from 'react'

let trendingCollectors = [
    {
        id: 0,
        name: 'Alex Snow',
        username: 'snowy_crypto',
        collection_total: 12,
        resources_generators: 7,
        place: 1,
        avatar: 'https://images.pexels.com/photos/5474028/pexels-photo-5474028.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
        id: 1,
        name: 'Christina Blitsky',
        username: 'crypt0_c4t',
        collection_total: 10,
        resources_generators: 5,
        place: 2,
        avatar: 'https://images.pexels.com/photos/8717366/pexels-photo-8717366.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
        id: 2,
        name: 'Tom Hitchens',
        username: 't_dog',
        collection_total: 8,
        resources_generators: 2,
        place: 3,
        avatar: 'https://images.pexels.com/photos/8107817/pexels-photo-8107817.jpeg?auto=compress&cs=tinysrgb&w=1600',
        orange: true
    },
    {
        id: 3,
        name: 'James Madison',
        username: 'bitcoin_james',
        collection_total: 8,
        resources_generators: 4,
        place: 4,
        avatar: 'https://images.pexels.com/photos/8107979/pexels-photo-8107979.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
        id: 4,
        name: 'Alex Pinket',
        username: 'pinket_encrypted',
        collection_total: 4,
        resources_generators: 3,
        place: 5,
        avatar: 'https://images.pexels.com/photos/8107833/pexels-photo-8107833.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
        id: 5,
        name: 'Kimbery Townsend',
        username: 'kyrptonaut',
        collection_total: 3,
        resources_generators: 1,
        place: 6,
        avatar: 'https://images.pexels.com/photos/6940314/pexels-photo-6940314.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
]

export default function TrendingCollectors() {
  return (
    <div className="w-full h-fit py-12 md:py-24">
        <div className="w-full h-fit py-6">
            <h2 className="text-4xl text-center">Trending Collectors</h2>
        </div>
        <div className="mxw grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 place-items-center">
            <section className="col-span-2 w-full">
            {trendingCollectors?.map(collector => (
                <div key={collector?.id} className="first:bg-cyan-500/20 max-w-3xl rounded-xl shadow-xl boder-2 border-cyan-500 my-4 flex items-center justify-between py-3 px-5">
                    <div className="flex items-center space-x-4">
                        <div className="shrink-0">
                            <img className="h-8 md:h-12 w-8 md:w-12 rounded-full object-cover outline-double border-cyan-500" src={collector?.avatar} alt="" />
                        </div>
                        <div className="max-w-[100px]">
                            <h3 className="text-sm lg:text-xl">{collector?.name}</h3>
                            <p className="text-xs md:text-md">@{collector?.username?.slice(0,8)}..</p>
                        </div>
                    </div>
                    <div className="px-5">
                        <h3 className="text-sm lg:text-xl">NFTs</h3>
                        <p className="text-xs md:text-lg">{collector?.collection_total}</p>
                    </div>
                    <div className="hidden md:inline-block px-5">
                        <h3 className="text-sm lg:text-xl">Resources</h3>
                        <p className="text-xs md:text-lg">{collector?.resources_generators}</p>
                    </div>
                    <div className="px-5">
                        <h3 className="text-sm lg:text-xl">Place</h3>
                        <p className="text-xs md:text-lg">{collector?.place}</p>
                    </div>
                </div>
            ))}
            </section>
            <section className="col-span-1 w-full relative">
                <div className="mx-auto w-full h-fit rounded-xl shadow-xl shadow-cyan-500/50 overflow-hidden outline-double max-w-[300px]">
                    <div className="h-64 relative">
                        <div className="h-full w-full absolute bg-gradient-to-br from-orange-400/40 to-cyan-500/40 grid place-items-center">
                            <h2 className="text-md md:text-lg lg:text-xl">Top Collector</h2>
                        </div>
                        <img className="w-full h-full object-cover" src={trendingCollectors[0]?.avatar} alt="" />
                    </div>
                    <div className="py-4 px-2 flex items-start justify-between">
                        <div>
                            <h3 className="text-md md:text-lg lg:text-xl">{trendingCollectors[0]?.name}</h3>
                            <p className="text-xs md:text-sm">{trendingCollectors[0]?.username}</p>
                        </div>
                        <div>
                            <h2 className="text-sm md:text-md lg:text-lg">{trendingCollectors[0]?.place}st place</h2>
                            <h3 className="text-sm">NFTS: {trendingCollectors[0]?.collection_total}</h3>
                            <h3 className="text-sm">Resources: {trendingCollectors[0]?.resources_generators}</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}
