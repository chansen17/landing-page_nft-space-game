import React from 'react'

let trendingCollectors = [
    {
        id: 0,
        name: 'Olivia Snow',
        username: 'crypt0_c4t',
        collection_total: 12,
        resources_generators: 7,
        place: 1
    },
    {
        id: 1,
        name: 'Christina Blitsky',
        username: 'crypt0_c4t',
        collection_total: 19,
        resources_generators: 9,
        place: 2
    },
    {
        id: 2,
        name: 'Tom Hitchens',
        username: 't_dog',
        collection_total: 8,
        resources_generators: 2,
        place: 3
    },
    {
        id: 3,
        name: 'James Madison',
        username: 'bitcoin_james',
        collection_total: 8,
        resources_generators: 4,
        place: 4
    },
    {
        id: 4,
        name: 'Alex Pinket',
        username: 'pinket_encrypted',
        collection_total: 4,
        resources_generators: 3,
        place: 5
    },
    {
        id: 5,
        name: 'Kimbery Townsend',
        username: 'kyrptonaut',
        collection_total: 3,
        resources_generators: 1,
        place: 6
    },
]

export default function TrendingCollectors() {
  return (
    <div className="w-full h-fit py-12 md:py-24">
        <div className="w-full h-fit py-6">
            <h2 className="text-4xl text-center">Trending Collectors</h2>
        </div>
        <div className="mxw grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 place-items-center">
            <section>
            {trendingCollectors?.map(collector => (
                <div key={collector?.id} className="rounded-xl shadow-xl boder-2 border-cyan-500 my-4 flex items-center justify-between py-3 px-5">
                    <div className="flex items-center space-x-4">
                        <div>
                            <img className="h-10 w-10 rounded-full object-cover outline-double border-cyan-500" src="https://images.pexels.com/photos/8107817/pexels-photo-8107817.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        </div>
                        <div>
                            <h3>{collector?.name}</h3>
                            <p>@{collector?.username}</p>
                        </div>
                    </div>
                    <div>
                        <h3>NFTs</h3>
                        <p>{collector?.collection_total}</p>
                    </div>
                    <div>
                        <h3>Resources</h3>
                        <p>{collector?.resources_generators}</p>
                    </div>
                    <div>
                        <h3>Place</h3>
                        <p>{collector?.place}</p>
                    </div>
                </div>
            ))}
            </section>
            <div className="w-full relative">
                <div className="mx-auto w-full h-fit rounded-xl shadow-xl outline-double max-w-[300px]">
                    <div className="h-64">
                        <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/8107817/pexels-photo-8107817.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    </div>
                    <div className="py-4 px-2 flex items-center justify-between">
                        <div>
                            <h3>{trendingCollectors[0]?.name}</h3>
                            <p>{trendingCollectors[0]?.username}</p>
                        </div>
                        <div>
                            <h1 className="text-2xl underline">{trendingCollectors[0]?.place}st place</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
